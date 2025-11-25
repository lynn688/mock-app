import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Live betting on 1000+ events</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            Win Big with{" "}
            <span className="text-gradient">Smart Bets</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience the thrill of live sports betting with competitive odds, instant payouts, and secure transactions. Your winning starts here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 glow-primary group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 font-semibold text-lg px-8"
            >
              View Live Events
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-display font-black text-primary mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-black text-accent mb-1">$2M+</div>
              <div className="text-sm text-muted-foreground">Paid Out</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-black text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
