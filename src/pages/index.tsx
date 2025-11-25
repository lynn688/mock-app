import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedEvents } from "@/components/FeaturedEvents";
import { Footer } from "@/components/Footer";

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
