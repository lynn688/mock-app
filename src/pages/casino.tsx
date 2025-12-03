import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import BottomNavbar from "@/components/ui/BottomNavbar";

// Game type based on API response
interface Game {
  id: number;
  game_id: string;
  game_name: string;
  game_short_name: string;
  category: string;
  category_short_name: string;
  provider_id: number;
  provider_name: string;
  demo: number;
  image: string;
}

const CasinoPage = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch games from API
  const fetchGames = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://casino.crash254.com/games", {
        params: { page: 1, per_page: 50 },
      });

      // Handle multiple API formats
      const gameData = response.data.data || response.data.games || response.data;
      if (Array.isArray(gameData) && gameData.length > 0) {
        setGames(gameData);
      } else {
        setError("No games available.");
      }
    } catch (err: any) {
      console.error("Failed to fetch games:", err.response || err.message);
      setError("Failed to load casino games.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  // Launch game function
  const launchGame = async (game: Game, demoMode: number = 1) => {
    try {
      const device = /Mobi|Android/i.test(navigator.userAgent)
        ? "mobile"
        : "desktop";
        const token = localStorage.getItem("token");
        const demoMode = 0; // 1 = demo mode, 0 = real mode


      const response = await axios.post(
        "https://casino.crash254.com/games/launch/url/demo",
        {
          category: game.category_short_name,
          demo: demoMode, // 1 = demo, 0 = real
          device,
          game: game.game_name,
          game_id: game.game_id,
          provider_id: game.provider_id,
          return_url: `${window.location.origin}/casino?game=${game.game_short_name}`,
        },
        {
          headers:token ? {Authorization: `Bearer ${token}` } :undefined
        }
      );

      const launchUrl = response.data?.launch_url || response.data?.url;
      if (launchUrl) {
        window.location.href = launchUrl;
      } else {
        alert("Game launch URL missing");
      }
    } catch (err) {
      console.error("Launch error:", err);
      alert("Failed to launch game");
    }
  };

  // Get unique categories from games
  const categories = Array.from(
    new Set(games.map((g) => g.category_short_name))
  );

  // Filtered games by selected category
  const filteredGames =
    selectedCategory === "all"
      ? games
      : games.filter((g) => g.category_short_name === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow p-6">
        {/* Loading state */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin w-12 h-12 text-blue-600" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : games.length === 0 ? (
          <div className="text-center text-gray-500">No games available.</div>
        ) : (
          <>
            {/* Category Filter */}
            <div className="mb-4 flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
              >
                All
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredGames.map((game) => (
                <Card key={game.id} className="relative overflow-hidden group">
                  <img
                    src={game.image}
                    alt={game.game_name}
                    className="w-full h-48 object-cover"
                  />

                  {/* Hover overlay with Play buttons */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center gap-2">
                    <Button
                      className="px-4 py-2 text-sm"
                      onClick={() => launchGame(game, 1)}
                    >
                      Play Demo
                    </Button>
                    <Button
                      className="px-4 py-2 text-sm"
                      onClick={() => launchGame(game, 0)}
                    >
                      Play Real
                    </Button>
                  </div>

                  <div className="p-2 text-center font-semibold">
                    {game.game_name}
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default CasinoPage;
