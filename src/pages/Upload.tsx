import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Image, X, Loader2, Sparkles } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const UploadPage = () => {
  const [searchParams] = useSearchParams();
  const isDemo = searchParams.get("demo") === "true";
  
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);

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

  const handleGenerate = async () => {
    if (!file && !isDemo) {
      toast.error("Please upload a sketch first");
      return;
    }

    setIsProcessing(true);
    
    // Simulate AI processing for demo
    setTimeout(() => {
      setGeneratedCode(demoGeneratedCode);
      setIsProcessing(false);
      toast.success("Code generated successfully!");
    }, 3000);
  };

  const demoGeneratedCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Generated UI</title>
</head>
<body class="bg-gray-50">
  <nav class="bg-white shadow-sm px-6 py-4">
    <div class="flex items-center justify-between max-w-6xl mx-auto">
      <div class="font-bold text-xl text-purple-600">Logo</div>
      <div class="flex gap-6">
        <a href="#" class="text-gray-600 hover:text-purple-600">Home</a>
        <a href="#" class="text-gray-600 hover:text-purple-600">About</a>
        <a href="#" class="text-gray-600 hover:text-purple-600">Contact</a>
      </div>
    </div>
  </nav>
  
  <main class="max-w-6xl mx-auto px-6 py-12">
    <section class="text-center mb-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Welcome to Your Website
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        This is a beautiful landing page generated from your sketch.
      </p>
      <button class="mt-6 bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700">
        Get Started
      </button>
    </section>
    
    <section class="grid md:grid-cols-2 gap-8">
      <div class="bg-white p-6 rounded-xl shadow-sm">
        <h3 class="font-semibold text-lg mb-2">Feature One</h3>
        <p class="text-gray-600">Description of your first feature goes here.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm">
        <h3 class="font-semibold text-lg mb-2">Feature Two</h3>
        <p class="text-gray-600">Description of your second feature goes here.</p>
      </div>
    </section>
  </main>
</body>
</html>`;

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
                    onClick={() => {
                      navigator.clipboard.writeText(generatedCode);
                      toast.success("Code copied to clipboard!");
                    }}
                  >
                    Copy Code
                  </Button>
                )}
              </div>
              
              {/* Code Preview */}
              <div className="bg-foreground/5 rounded-2xl border border-border overflow-hidden">
                {generatedCode ? (
                  <div className="max-h-[500px] overflow-auto">
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
