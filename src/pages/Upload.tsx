import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Image, X, Loader2, Sparkles, Copy, Check, RefreshCw } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const UploadPage = () => {
  const [searchParams] = useSearchParams();
  const isDemo = searchParams.get("demo") === "true";
  
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [refinementPrompt, setRefinementPrompt] = useState("");

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      setFile(droppedFile);
      setPreview(URL.createObjectURL(droppedFile));
      setGeneratedCode(null);
    } else {
      toast.error("Please upload an image file");
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setGeneratedCode(null);
    }
  };

  const clearFile = () => {
    setFile(null);
    setPreview(null);
    setGeneratedCode(null);
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // Remove the data URL prefix to get just the base64
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
    });
  };

  const handleGenerate = async () => {
    if (!file && !isDemo) {
      toast.error("Please upload a sketch first");
      return;
    }

    setIsProcessing(true);

    try {
      let imageBase64: string;
      let mimeType: string;

      if (isDemo && !file) {
        // For demo mode, use a simple placeholder sketch
        // Generate a simple base64 encoded demo image
        const canvas = document.createElement('canvas');
        canvas.width = 400;
        canvas.height = 300;
        const ctx = canvas.getContext('2d')!;
        
        // Draw a simple wireframe sketch
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 400, 300);
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 2;
        
        // Header
        ctx.strokeRect(10, 10, 380, 40);
        ctx.fillStyle = '#333333';
        ctx.fillRect(20, 20, 60, 20);
        
        // Navigation
        ctx.fillRect(280, 20, 30, 15);
        ctx.fillRect(320, 20, 30, 15);
        ctx.fillRect(360, 20, 20, 15);
        
        // Hero section
        ctx.strokeRect(10, 60, 380, 100);
        ctx.fillRect(30, 80, 150, 20);
        ctx.fillRect(30, 110, 200, 10);
        ctx.fillRect(30, 130, 80, 20);
        
        // Cards
        ctx.strokeRect(10, 170, 120, 120);
        ctx.strokeRect(140, 170, 120, 120);
        ctx.strokeRect(270, 170, 120, 120);
        
        const dataUrl = canvas.toDataURL('image/png');
        imageBase64 = dataUrl.split(',')[1];
        mimeType = 'image/png';
      } else if (file) {
        imageBase64 = await fileToBase64(file);
        mimeType = file.type;
      } else {
        throw new Error("No image to process");
      }

      const { data, error } = await supabase.functions.invoke('sketch-to-code', {
        body: { 
          imageBase64, 
          mimeType,
          refinementPrompt: refinementPrompt || undefined
        }
      });

      if (error) {
        console.error('Edge function error:', error);
        throw new Error(error.message || 'Failed to generate code');
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      if (data?.code) {
        setGeneratedCode(data.code);
        toast.success("Code generated successfully!");
      } else {
        throw new Error("No code returned from AI");
      }
    } catch (error) {
      console.error('Generation error:', error);
      toast.error(error instanceof Error ? error.message : "Failed to generate code");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-glow transition-transform group-hover:scale-110">
              <span className="text-white font-display font-bold">N</span>
            </div>
            <span className="font-display font-bold text-lg hidden sm:block">
              Napkin<span className="gradient-text">2</span>Reality
            </span>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">Back to Home</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              {isDemo ? "Demo Mode" : "Upload Your Sketch"}
            </h1>
            <p className="text-muted-foreground">
              {isDemo 
                ? "See how AI transforms a sketch into code" 
                : "Upload a hand-drawn UI sketch to generate code"}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Area */}
            <div className="space-y-6">
              <div
                onDrop={handleDrop}
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                onDragLeave={() => setIsDragOver(false)}
                className={`relative border-2 border-dashed rounded-2xl p-8 transition-all ${
                  isDragOver 
                    ? "border-primary bg-primary/5" 
                    : "border-border hover:border-primary/50"
                } ${preview ? "aspect-auto" : "aspect-[4/3]"}`}
              >
                {preview ? (
                  <div className="relative">
                    <img 
                      src={preview} 
                      alt="Sketch preview" 
                      className="w-full rounded-lg"
                    />
                    <button
                      onClick={clearFile}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-destructive hover:text-white transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <Image className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {isDemo ? "Using Demo Sketch" : "Drop your sketch here"}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {isDemo ? "Click generate to see the magic" : "or click to browse files"}
                    </p>
                    {!isDemo && (
                      <label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <Button variant="outline" className="cursor-pointer" asChild>
                          <span>
                            <Upload className="w-4 h-4 mr-2" />
                            Browse Files
                          </span>
                        </Button>
                      </label>
                    )}
                  </div>
                )}
              </div>

              {/* Refinement Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Refinement Instructions (optional)
                </label>
                <textarea
                  value={refinementPrompt}
                  onChange={(e) => setRefinementPrompt(e.target.value)}
                  placeholder="E.g., 'Use a dark theme', 'Make it look more professional', 'Add more padding'"
                  className="w-full h-20 px-4 py-3 rounded-xl border border-border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Generate Button */}
              <Button
                onClick={handleGenerate}
                disabled={isProcessing || (!file && !isDemo)}
                className="w-full gradient-button text-white font-semibold rounded-xl py-6 text-lg shadow-glow hover:shadow-lg transition-all disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    AI is analyzing your sketch...
                  </>
                ) : generatedCode ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Regenerate Code
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Code
                  </>
                )}
              </Button>
            </div>

            {/* Output Area */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-display font-semibold text-lg">Generated Code</h2>
                {generatedCode && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Code
                      </>
                    )}
                  </Button>
                )}
              </div>
              
              {/* Code Preview */}
              <div className="bg-foreground/5 rounded-2xl border border-border overflow-hidden">
                {generatedCode ? (
                  <div className="max-h-[300px] overflow-auto">
                    <pre className="p-4 text-xs font-mono overflow-x-auto">
                      <code className="text-muted-foreground">{generatedCode}</code>
                    </pre>
                  </div>
                ) : (
                  <div className="aspect-[4/3] flex items-center justify-center text-muted-foreground">
                    <div className="text-center p-8">
                      <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-30" />
                      <p>Generated code will appear here</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Live Preview */}
              {generatedCode && (
                <div className="space-y-2">
                  <h3 className="font-display font-semibold">Live Preview</h3>
                  <div className="bg-white rounded-2xl border border-border overflow-hidden">
                    <iframe
                      srcDoc={generatedCode}
                      title="Preview"
                      className="w-full h-[400px]"
                      sandbox="allow-scripts"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UploadPage;
