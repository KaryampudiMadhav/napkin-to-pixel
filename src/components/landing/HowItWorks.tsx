import { Upload, Brain, Code2, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Your Sketch",
      description: "Take a photo of your hand-drawn UI sketch or upload an existing image. Even rough napkin drawings work!",
      color: "from-primary to-primary/70",
    },
    {
      number: "02",
      icon: Brain,
      title: "AI Analyzes Design",
      description: "Our AI powered by Gemini understands your layout, identifies components, and interprets your design intent.",
      color: "from-secondary to-secondary/70",
    },
    {
      number: "03",
      icon: Code2,
      title: "Generates Clean Code",
      description: "Get production-ready HTML and Tailwind CSS that's well-structured, responsive, and easy to customize.",
      color: "from-accent to-accent/70",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Preview & Iterate",
      description: "See your website live instantly. Use text prompts to refine and perfect your design.",
      color: "from-highlight to-highlight/70",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Simple Process</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps from napkin sketch to live website
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary via-accent to-highlight opacity-20" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-2">
                    {/* Number Badge */}
                    <div className={`absolute -top-4 -left-2 w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-display font-bold text-sm">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center mb-4 mt-4 group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow - Desktop Only */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 z-10">
                      <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-primary/40">
                        <path d="M0 12H28M28 12L18 2M28 12L18 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Demo Area */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 border border-border shadow-card">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Sketch Preview */}
              <div className="text-center">
                <div className="aspect-square bg-muted rounded-xl flex items-center justify-center mb-3 border-2 border-dashed border-primary/30">
                  <div className="text-muted-foreground">
                    <svg className="w-16 h-16 mx-auto mb-2" viewBox="0 0 64 64" fill="none">
                      <rect x="8" y="8" width="48" height="48" rx="4" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
                      <path d="M16 20H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <rect x="16" y="28" width="32" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <rect x="16" y="42" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <rect x="34" y="42" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <p className="text-sm font-medium">Your Sketch</p>
                  </div>
                </div>
              </div>

              {/* AI Processing */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center shadow-glow animate-pulse-slow mb-3">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm font-medium text-primary">AI Processing</p>
              </div>

              {/* Output Preview */}
              <div className="text-center">
                <div className="aspect-square bg-foreground/5 rounded-xl flex items-center justify-center mb-3 border border-accent/30">
                  <div className="text-center p-4">
                    <div className="w-full h-3 bg-primary/30 rounded mb-2" />
                    <div className="w-3/4 h-2 bg-muted-foreground/20 rounded mb-3 mx-auto" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-8 bg-secondary/20 rounded" />
                      <div className="h-8 bg-accent/20 rounded" />
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium text-accent">Live Website</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
