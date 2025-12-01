import { Header } from "@/components/ui/Header";
import { FeaturedEvents } from "@/components/ui/FeaturedEvents";
import { Footer } from "@/components/ui/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <FeaturedEvents />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
