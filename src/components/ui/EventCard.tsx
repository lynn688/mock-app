 import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 
import { Clock, TrendingUp } from "lucide-react";

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
  return (
    <Card className="p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card border-border">
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

      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold">{homeTeam}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold">{awayTeam}</span>
        </div>
      </div>

      <div className={`grid ${drawOdds ? 'grid-cols-3' : 'grid-cols-2'} gap-2`}>
        <Button 
          variant="secondary" 
          className="flex flex-col items-center py-3 hover:bg-primary/20 hover:border-primary transition-all group"
        >
          <span className="text-xs text-muted-foreground mb-1">Home</span>
          <span className="text-lg font-bold text-primary group-hover:scale-110 transition-transform">{homeOdds}</span>
        </Button>
        {drawOdds && (
          <Button 
            variant="secondary" 
            className="flex flex-col items-center py-3 hover:bg-primary/20 hover:border-primary transition-all group"
          >
            <span className="text-xs text-muted-foreground mb-1">Draw</span>
            <span className="text-lg font-bold text-primary group-hover:scale-110 transition-transform">{drawOdds}</span>
          </Button>
        )}
        <Button 
          variant="secondary" 
          className="flex flex-col items-center py-3 hover:bg-primary/20 hover:border-primary transition-all group"
        >
          <span className="text-xs text-muted-foreground mb-1">Away</span>
          <span className="text-lg font-bold text-primary group-hover:scale-110 transition-transform">{awayOdds}</span>
        </Button>
      </div>

      {live && (
        <div className="mt-3 flex items-center justify-center gap-1 text-xs text-primary">
          <TrendingUp className="h-3 w-3" />
          <span className="font-medium">Odds updating live</span>
        </div>
      )}
    </Card>
  );
};
