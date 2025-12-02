import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trophy, User } from "lucide-react";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login state on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/landing"; // redirect to home
  };

  return (
     <section id="head">
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
     
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Trophy className="h-8 w-8 text-primary" />
            <a href="/landing"className="text-2xl font-display font-black text-gradient">
              BetPulse
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-primary">
              Sports
            </a>
            <a href="/" className="text-sm font-medium hover:text-primary">
              Live
            </a>
            <a href="/casino" className="text-sm font-medium hover:text-primary">
              Casino
            </a>
            <a href="/promotions" className="text-sm font-medium hover:text-primary">
              Promotions
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <Button
                  className="flex"
                  variant="ghost"
                  size="sm"
                  onClick={() => (window.location.href = "/login")}
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>

                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground font-semibold"
                  onClick={() => (window.location.href = "/register")}
                >
                  Register
                </Button>
              </>
            ) : (
              <Button
                className="bg-red-600 text-white"
                size="sm"
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
     </section>
  );
};
