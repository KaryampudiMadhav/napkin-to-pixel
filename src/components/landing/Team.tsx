import { Users, Star, Lightbulb, Rocket } from "lucide-react";

const Team = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Meet the Team</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Team <span className="gradient-text">Innovators</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Building the future of UI prototyping
          </p>
        </div>

        {/* Team Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-3xl p-8 border border-border shadow-card hover:shadow-lg transition-shadow text-center">
            {/* Avatar */}
            <div className="w-28 h-28 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center shadow-glow">
              <span className="text-4xl font-display font-bold text-white">GK</span>
            </div>

            {/* Info */}
            <h3 className="font-display text-2xl font-bold mb-2">Gayathri Karumuri</h3>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Team Leader</span>
            </div>

            {/* Team Values */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-muted rounded-xl p-4">
                <Lightbulb className="w-6 h-6 text-highlight-foreground mx-auto mb-2" />
                <p className="text-sm font-medium">Innovation</p>
              </div>
              <div className="bg-muted rounded-xl p-4">
                <Rocket className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Speed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border">
            <Users className="w-5 h-5 text-primary" />
            <span className="font-medium">Hackathon Team 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
