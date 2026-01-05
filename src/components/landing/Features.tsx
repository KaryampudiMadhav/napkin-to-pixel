import { 
  Upload, 
  Sparkles, 
  Code2, 
  Eye, 
  MessageSquare, 
  Zap,
  Palette,
  Download,
  RefreshCw
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Upload,
      title: "Upload Hand-Drawn Sketches",
      description: "Take a photo of your napkin sketch or upload any hand-drawn UI design.",
      color: "bg-primary/10 text-primary",
      borderColor: "hover:border-primary/40",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Conversion",
      description: "Our AI understands your layout, components, and design intent automatically.",
      color: "bg-secondary/10 text-secondary",
      borderColor: "hover:border-secondary/40",
    },
    {
      icon: Code2,
      title: "HTML + Tailwind CSS",
      description: "Get clean, production-ready code that's easy to customize and extend.",
      color: "bg-accent/10 text-accent",
      borderColor: "hover:border-accent/40",
    },
    {
      icon: Eye,
      title: "Live Preview",
      description: "See your generated website come to life instantly in the browser.",
      color: "bg-highlight/10 text-highlight-foreground",
      borderColor: "hover:border-highlight/40",
    },
    {
      icon: MessageSquare,
      title: "Text Refinement",
      description: "Describe changes in plain English and watch AI update your design.",
      color: "bg-primary/10 text-primary",
      borderColor: "hover:border-primary/40",
    },
    {
      icon: Zap,
      title: "Fast Prototyping",
      description: "Go from idea to working prototype in minutes, not hours or days.",
      color: "bg-secondary/10 text-secondary",
      borderColor: "hover:border-secondary/40",
    },
  ];

  const additionalFeatures = [
    { icon: Palette, text: "Responsive designs" },
    { icon: Download, text: "Export code" },
    { icon: RefreshCw, text: "Iterate quickly" },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <br />
            <span className="gradient-text">Build Faster</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From sketch to code in seconds. No design experience required.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-card rounded-2xl p-6 border border-border ${feature.borderColor} transition-all duration-300 hover:shadow-card hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Features Strip */}
        <div className="flex flex-wrap justify-center gap-4">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <feature.icon className="w-5 h-5 text-primary" />
              <span className="font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
