import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";
import { Footer } from "@/components/ui/Footer";
import  BottomNavbar  from "@/components/ui/BottomNavbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default Index;
