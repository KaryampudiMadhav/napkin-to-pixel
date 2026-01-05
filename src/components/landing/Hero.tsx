import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Playful Shapes */}
        <div className="absolute top-32 right-20 w-8 h-8 bg-highlight rounded-lg rotate-12 animate-bounce-gentle opacity-60" />
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-secondary rounded-full animate-bounce-gentle opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary rounded-sm rotate-45 animate-bounce-gentle opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Sketch to Code</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
            Turn Your{" "}
            <span className="gradient-text">Hand-Drawn</span>
            <br />
            UI Sketches into{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Real Websites</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="url(#underline-gradient)" strokeWidth="4" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="hsl(270, 80%, 60%)" />
                    <stop offset="50%" stopColor="hsl(330, 85%, 65%)" />
                    <stop offset="100%" stopColor="hsl(45, 100%, 55%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {" "}Instantly
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            No coding required. Upload your napkin sketch, let AI understand your design, 
            and get clean HTML + Tailwind CSS in seconds.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/upload">
              <Button 
                size="lg" 
                className="gradient-button text-white font-semibold rounded-full px-8 py-6 text-lg shadow-glow hover:shadow-lg transition-all hover:scale-105 group"
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload Sketch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/upload?demo=true">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg border-2 hover:bg-primary/5 transition-all"
              >
                <Sparkles className="w-5 h-5 mr-2 text-primary" />
                Try Demo
              </Button>
            </Link>
          </div>

          {/* Visual Illustration */}
          <div className="mt-16 relative animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative max-w-3xl mx-auto">
              {/* Sketch to Code Flow */}
              <div className="flex items-center justify-center gap-4 md:gap-8">
                {/* Sketch Card */}
                <div className="flex-1 max-w-xs">
                  <div className="bg-card rounded-2xl p-4 shadow-card border-2 border-dashed border-primary/30 hover:border-primary transition-colors group">
                    <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 mx-auto mb-3 relative">
                          {/* Hand-drawn sketch icon */}
                          <svg viewBox="0 0 64 64" className="w-full h-full text-muted-foreground">
                            <rect x="8" y="8" width="48" height="48" rx="4" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
                            <rect x="12" y="14" width="20" height="4" rx="1" fill="currentColor" opacity="0.5"/>
                            <rect x="12" y="22" width="40" height="8" rx="2" fill="currentColor" opacity="0.3"/>
                            <rect x="12" y="34" width="18" height="16" rx="2" fill="currentColor" opacity="0.3"/>
                            <rect x="34" y="34" width="18" height="16" rx="2" fill="currentColor" opacity="0.3"/>
                          </svg>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">Your Sketch</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full gradient-primary flex items-center justify-center shadow-glow animate-pulse-slow">
                    <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>

                {/* Code Card */}
                <div className="flex-1 max-w-xs">
                  <div className="bg-card rounded-2xl p-4 shadow-card border border-border hover:shadow-lg transition-shadow">
                    <div className="aspect-[4/3] bg-foreground/5 dark:bg-foreground/10 rounded-xl overflow-hidden">
                      <div className="p-3 font-mono text-xs">
                        <div className="flex items-center gap-1.5 mb-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-highlight/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                        </div>
                        <code className="text-[10px] md:text-xs leading-relaxed block text-muted-foreground">
                          <span className="text-secondary">&lt;div</span> <span className="text-accent">class</span>=<span className="text-highlight">"flex"</span><span className="text-secondary">&gt;</span>
                          <br />
                          {"  "}<span className="text-secondary">&lt;nav</span><span className="text-secondary">&gt;</span>...<span className="text-secondary">&lt;/nav&gt;</span>
                          <br />
                          {"  "}<span className="text-secondary">&lt;main</span><span className="text-secondary">&gt;</span>
                          <br />
                          {"    "}<span className="text-secondary">&lt;Card</span> /<span className="text-secondary">&gt;</span>
                          <br />
                          {"  "}<span className="text-secondary">&lt;/main&gt;</span>
                          <br />
                          <span className="text-secondary">&lt;/div&gt;</span>
                        </code>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium text-center mt-3">Live Website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
