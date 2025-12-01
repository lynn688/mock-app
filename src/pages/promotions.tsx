import { promotions } from "@/components/ui/promo";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export const PromotionBanners = () => {
  return (
   
    <div className="grid gap-6 ">
         <Header />
      {promotions.map((promo) => (
        <div key={promo.id} className=" rounded-lg overflow-hidden shadow-lg">
          
          {/* Clickable image */}
          <a href={promo.link} className="block relative group">
            <img
              src={promo.image}
              alt={promo.title}
              className="  w-[80%] mx-auto h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Separate description section */}
          <div className="text-center">
            <h3 className="text-white font-bold text-lg">{promo.title}</h3>
            <p className="text-white text-sm">{promo.description}</p>
          </div>
         
          </div>
      ))}
       <Footer />
    </div>
  );
};