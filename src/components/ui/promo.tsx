import promo_1 from "@/assets/promo_1.jpg";
import promo_2 from "@/assets/promo_2.jpg";
import promo_3 from "@/assets/promo_3.jpg";
import promo_4 from "@/assets/promo_4.jpg";

export const promotions = [
  {
    id: 1,
    title: "50% Welcome Bonus",
    description: "Sign up today and get 50% bonus on your first deposit!",
    image: promo_1, // replace with your actual image paths
    link: "/register",
  },
  {
    id: 2,
    title: "Weekly Cashback",
    description: "Get up to 10% cashback every week on your bets.",
    image: promo_2,
    link: "/login",
  },
  {
    id: 3,
    title: "Casino Spins",
    description: "Claim 20 free spins on selected slot games.",
    image: promo_3,
    link: "/casino",
  },
  {
    id: 4,
    title: "VIP Rewards",
    description: "Join our VIP club and enjoy exclusive benefits.",
    image: promo_4,
    link: "/",
  },
];
