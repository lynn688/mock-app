import { Shield, Lock, Award, ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-20">
      <a href="#up"className="flex items-center justify-center text-primary by-primary font-bold text-lg">
        <ArrowUp/>
        Back To Top</a>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Secure Platform</h3>
              <p className="text-sm text-muted-foreground">
                Licensed and regulated with SSL encryption
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-accent/10 p-3 rounded-lg">
              <Lock className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Fast Payouts</h3>
              <p className="text-sm text-muted-foreground">
                Instant withdrawals to your account
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold mb-1">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Expert help available anytime
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2024 BetPulse. All rights reserved.</p>
          <p className="text-xs">
            Gambling can be addictive. Please play responsibly. 18+
          </p>
        </div>
      </div>
    </footer>
  );
};
