import { Monitor, Brain, Code2, Eye, ArrowRight } from "lucide-react";

const Architecture = () => {
  const components = [
    {
      icon: Monitor,
      title: "Frontend",
      subtitle: "Upload Interface",
      description: "User uploads sketch image",
      color: "bg-primary",
    },
    {
      icon: Brain,
      title: "AI Engine",
      subtitle: "Gemini 1.5 Flash",
      description: "Understands layout & components",
      color: "bg-secondary",
    },
    {
      icon: Code2,
      title: "Code Generator",
      subtitle: "HTML + Tailwind",
      description: "Creates production-ready code",
      color: "bg-accent",
    },
    {
      icon: Eye,
      title: "Preview Engine",
      subtitle: "Live Output",
      description: "Renders website in real-time",
      color: "bg-highlight",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Brain className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">System Design</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple yet powerful pipeline from sketch to website
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="bg-card rounded-3xl p-8 border border-border shadow-card">
              <div className="flex items-center justify-between gap-4">
                {components.map((component, index) => (
                  <div key={index} className="flex items-center flex-1">
                    {/* Component Box */}
                    <div className="flex-1 text-center group">
                      <div className={`w-16 h-16 mx-auto rounded-xl ${component.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                        <component.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-display font-semibold mb-1">{component.title}</h4>
                      <p className="text-sm text-primary font-medium mb-1">{component.subtitle}</p>
                      <p className="text-xs text-muted-foreground">{component.description}</p>
                    </div>

                    {/* Arrow */}
                    {index < components.length - 1 && (
                      <div className="mx-4 flex-shrink-0">
                        <ArrowRight className="w-6 h-6 text-primary/40" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Flow Line */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span>User Input</span>
                  <ArrowRight className="w-4 h-4" />
                  <span>AI Processing</span>
                  <ArrowRight className="w-4 h-4" />
                  <span>Code Generation</span>
                  <ArrowRight className="w-4 h-4" />
                  <span>Live Preview</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {components.map((component, index) => (
              <div key={index}>
                <div className="bg-card rounded-xl p-4 border border-border flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${component.color} flex items-center justify-center flex-shrink-0`}>
                    <component.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold">{component.title}</h4>
                    <p className="text-sm text-primary">{component.subtitle}</p>
                    <p className="text-xs text-muted-foreground">{component.description}</p>
                  </div>
                </div>
                {index < components.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-5 h-5 text-primary/40 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
