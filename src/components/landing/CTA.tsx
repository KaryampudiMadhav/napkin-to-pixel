import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-primary text-white mb-8 shadow-glow">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Ready to Build?</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            From <span className="gradient-text">Napkin</span> to{" "}
            <span className="gradient-text">Product</span>
            <br />
            in Minutes
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Stop dreaming, start building. Transform your UI ideas into reality 
            with the power of AI. No coding skills required.
          </p>

          {/* CTA Button */}
          <Link to="/upload">
            <Button 
              size="lg" 
              className="gradient-button text-white font-semibold rounded-full px-10 py-7 text-xl shadow-glow hover:shadow-lg transition-all hover:scale-105 group"
            >
              Get Started Now
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          {/* Trust Badge */}
          <p className="mt-8 text-sm text-muted-foreground">
            ✨ Free to try • No signup required • Instant results
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
