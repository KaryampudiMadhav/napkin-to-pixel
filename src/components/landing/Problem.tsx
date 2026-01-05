import { AlertCircle, Code2, Layers, Lightbulb, ArrowDown, CheckCircle2 } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Blank Page Syndrome",
      description: "Staring at an empty screen, unsure where to start with your UI design.",
      color: "text-destructive",
    },
    {
      icon: Layers,
      title: "Complex UI Tools",
      description: "Steep learning curve of design software like Figma or Adobe XD.",
      color: "text-secondary",
    },
    {
      icon: Code2,
      title: "Code Barrier",
      description: "Difficulty translating visual ideas into actual HTML and CSS code.",
      color: "text-primary",
    },
  ];

  const solutions = [
    { text: "Upload your hand-drawn sketch", delay: "0s" },
    { text: "AI analyzes and understands your design", delay: "0.1s" },
    { text: "Generates clean HTML + Tailwind CSS", delay: "0.2s" },
    { text: "Get a live preview instantly", delay: "0.3s" },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Problem Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The <span className="gradient-text">Problem</span> We're Solving
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every great product starts with an idea. But turning that idea into a real interface? 
            That's where most people get stuck.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${problem.color}`}>
                <problem.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Arrow Divider */}
        <div className="flex justify-center mb-20">
          <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-glow animate-bounce-subtle">
            <ArrowDown className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Solution Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Lightbulb className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Our Solution</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Simple.</span> Fast. <span className="gradient-text">Magical.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Napkin-to-Reality bridges the gap between your ideas and the web. 
              Just sketch, upload, and watch AI bring your vision to life.
            </p>
          </div>

          {/* Solution Flow */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 group"
                  style={{ animationDelay: solution.delay }}
                >
                  <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-card group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1 bg-card rounded-xl p-5 border border-border group-hover:border-primary/30 group-hover:shadow-card transition-all">
                    <p className="font-medium text-lg">{solution.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
