import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {Header } from "@/components/ui/Header";
import {Footer } from "@/components/ui/Footer";
import BottomNavbar from "@/components/ui/BottomNavbar";

interface Game {
  id: string;
  name: string;
  image: string;
  category: string;
}

const CasinoPage = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("https://casino.crash254.com/games", {
          params: { page: 1, per_page: 50 },
        });

        // Handle different API response formats
        if (Array.isArray(response.data)) {
          setGames(response.data);
        } else if (Array.isArray(response.data.games)) {
          setGames(response.data.games);
        } else if (Array.isArray(response.data.data)) {
          setGames(response.data.data);
        } else {
          setError("No games available.");
          console.error("API returned invalid format:", response.data);
        }
      } catch (err: any) {
        console.error("Failed to fetch games:", err.response || err.message);
        setError("Failed to load casino games.");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow p-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin w-12 h-12 text-blue-600" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : games.length === 0 ? (
          <div className="text-center text-gray-500">No games available.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <Card key={game.id} className="relative overflow-hidden group">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">
                  <Button className="px-4 py-2 text-sm">Play</Button>
                </div>
                <div className="p-2 text-center font-semibold">{game.name}</div>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default CasinoPage;
