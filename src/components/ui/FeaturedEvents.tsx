import { EventCard } from "./EventCard";
import { Flame } from "lucide-react";

export const FeaturedEvents = () => {
  const events = [
    {
      sport: "Football",
      league: "Premier League",
      homeTeam: "Manchester United",
      awayTeam: "Liverpool",
      homeOdds: "2.40",
      drawOdds: "3.20",
      awayOdds: "2.85",
      time: "Today 15:00",
      live: true,
    },
    {
      sport: "Basketball",
      league: "NBA",
      homeTeam: "Lakers",
      awayTeam: "Warriors",
      homeOdds: "1.85",
      awayOdds: "2.05",
      time: "Today 19:30",
    },
    {
      sport: "Tennis",
      league: "ATP Finals",
      homeTeam: "Djokovic",
      awayTeam: "Alcaraz",
      homeOdds: "1.95",
      awayOdds: "1.90",
      time: "Tomorrow 14:00",
    },
    {
      sport: "Football",
      league: "Champions League",
      homeTeam: "Real Madrid",
      awayTeam: "Bayern Munich",
      homeOdds: "2.10",
      drawOdds: "3.40",
      awayOdds: "3.10",
      time: "Today 21:00",
      live: true,
    },
    {
      sport: "Ice Hockey",
      league: "NHL",
      homeTeam: "Maple Leafs",
      awayTeam: "Canadiens",
      homeOdds: "1.75",
      awayOdds: "2.20",
      time: "Today 20:00",
    },
    {
      sport: "Football",
      league: "La Liga",
      homeTeam: "Barcelona",
      awayTeam: "Atletico Madrid",
      homeOdds: "1.65",
      drawOdds: "3.80",
      awayOdds: "4.50",
      time: "Tomorrow 18:00",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Flame className="h-8 w-8 text-accent animate-pulse-slow" />
          <h2 className="text-3xl md:text-4xl font-display font-black">
            Featured Events
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};
