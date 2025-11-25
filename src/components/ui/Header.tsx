import { Button } from "@/components/ui/button";
import { Trophy, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Trophy className="h-8 w-8 text-primary" />
            <span className="text-2xl font-display font-black text-gradient">
              BetPulse
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Sports
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Live
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Casino
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Promotions
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-primary">
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
