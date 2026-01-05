import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Name */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">N</span>
            </div>
            <span className="font-display font-semibold">Napkin-to-Reality</span>
          </div>

          {/* Google Tech */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-secondary fill-secondary" />
            <span>using Google Technologies</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Team Innovators. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
