import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 
import { Clock, TrendingUp } from "lucide-react";
import { useState } from "react";

interface EventCardProps {
  sport: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeOdds: string;
  drawOdds?: string;
  awayOdds: string;
  time: string;
  live?: boolean;
}

export const EventCard = ({
  sport,
  league,
  homeTeam,
  awayTeam,
  homeOdds,
  drawOdds,
  awayOdds,
  time,
  live = false,
}: EventCardProps) => {

  // ACTIVE BUTTON STATE
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="events" className="py-16">
      <Card className="p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card border-border">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">{sport}</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs font-medium text-muted-foreground">{league}</span>
          </div>

          {live ? (
            <div className="flex items-center gap-1 bg-destructive/20 text-destructive px-2 py-1 rounded-full">
              <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
              <span className="text-xs font-bold">LIVE</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span className="text-xs">{time}</span>
            </div>
          )}
        </div>

        {/* Teams */}
        <div className="space-y-2 mb-4">
          <div className="text-black font-semibold">
            {homeTeam} vs {awayTeam}
          </div>
        </div>

        {/* ODDS BUTTONS */}
        <div className={`grid ${drawOdds ? "grid-cols-3" : "grid-cols-2"} gap-2`}>

          {/* HOME BUTTON */}
          <Button
            onClick={() => setActive(active === "home" ? null :"home")}
            variant="secondary"
            className={`flex flex-col items-center py-3 transition-all group 
              ${active === "home" ? "bg-primary/20 border-primary" : "hover:bg-primary/20 hover:border-primary"}
            `}
          >
            <span className="text-xs text-muted-foreground mb-1">Home</span>
            <span className="text-lg font-bold text-primary group-hover:scale-110 transition-transform">
              {homeOdds}
            </span>
          </Button>

          {/* DRAW BUTTON */}
          {drawOdds && (
            <Button
              onClick={() => setActive(active ==="draw" ? null:"draw")}
              variant="secondary"
              className={`flex flex-col items-center py-3 transition-all group 
                ${active === "draw" ? "bg-primary/20 border-primary" : "hover:bg-primary/20 hover:border-primary"}
              `}
            >
              <span className="text-xs text-muted-foreground mb-1">Draw</span>
              <span className="text-lg font-bold text-primary group-hover:scale-110 transition-transform">
                {drawOdds}
              </span>
            </Button>
          )}

          {/* AWAY BUTTON */}
          <Button
            onClick={() => setActive(active === "away" ? null:"away")}
            variant="secondary"
            className={`flex flex-col items-center py-3 transition-all group 
              ${active === "away" ? "bg-primary/20 border-primary" : "hover:bg-primary/20 hover:border-primary"}
            `}
          >
            <span className="text-xs text-muted-foreground mb-1">Away</span>
            <span className="text-lg font-bold text-primary group-hover:scale-110 transition-transform">
              {awayOdds}
            </span>
          </Button>

        </div>

        {/* Live label */}
        {live && (
          <div className="mt-3 flex items-center justify-center gap-1 text-xs text-primary">
            <TrendingUp className="h-3 w-3" />
            <span className="font-medium">Odds updating live</span>
          </div>
        )}

      </Card>
    </section>
  );
};

