import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";
import { FeaturedEvents } from "@/components/ui/FeaturedEvents";
import { Footer } from "@/components/ui/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedEvents />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
