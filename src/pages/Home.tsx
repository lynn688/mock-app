import { Header } from "@/components/ui/Header";
import { FeaturedEvents } from "@/components/ui/FeaturedEvents";
import { Footer } from "@/components/ui/Footer";
import  BottomNavbar  from "@/components/ui/BottomNavbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <FeaturedEvents />
      </main>
      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default Home;
