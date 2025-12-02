// BottomNavbar.tsx
import { Home, ClipboardList, FileText, User } from "lucide-react";
import { useState } from "react";

export default function BottomNavbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={24} /> },
    { id: "betslip", label: "Bet Slip", icon: <ClipboardList size={24} /> },
    { id: "mybets", label: "My Bets", icon: <FileText size={24} /> },
    { id: "account", label: "Account", icon: <User size={24} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md">
      <ul className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex flex-col items-center text-gray-500 cursor-pointer ${
              active === item.id ? "text-blue-500" : "hover:text-blue-400"
            }`}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
