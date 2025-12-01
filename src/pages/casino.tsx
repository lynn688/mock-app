import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface CasinoGame {
  id: string | number;
  name: string;
  image: string;
  provider: string;
}

export default function Casino() {
  const [games, setGames] = useState<CasinoGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const CASINO_ENDPOINT = "https://casino.crash254.com/games";
  const PAGE = 1;
  const PER_PAGE = 50;

  const fetchGames = async () => {
    try {
      setLoading(true);
      const res = await axios.get(CASINO_ENDPOINT, {
        params: { page: PAGE, per_page: PER_PAGE },
      });

      console.log("FULL RESPONSE:", res.data);

      if (res.data.data) {
        setGames(res.data.data);
      } else {
        setGames([]);
        setError("No games found");
      }
    } catch (err: any) {
      console.error(err);
      setError("Failed to load casino games");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center">
        <Loader2 className="animate-spin mx-auto mb-4" />
        <p>Loading casino games...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-primary text-3xl font-bold mb-6"> Casino Games</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {games.map((game) => (
          <Card key={game.id} className="relative shadow-md hover:shadow-lg transition group overflow-hidden">
  <img
    src={game.image}
    alt={game.name}
    className="w-full h-40 object-cover "
  />

  {/* Overlay content */}
  <div className="absolute inset-0 flex items-center justify-center ">
     <Button className="opacity-0 hover:opacity-100 w-24 transition-opacity duration-300">Play</Button>
  </div>
  <div className="p-3">
    <h2 className="text-lg font-semibold ">{game.name}</h2>
    <p className="text-sm text-gray-500">{game.provider}</p></div>
</Card>

        ))}
      </div>
    </div>
  );
}
