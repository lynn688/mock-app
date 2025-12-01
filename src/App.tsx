import Login from "./pages/Login";
import Casino from "./pages/casino";
import Home from "./pages/Home";
import {PromotionBanners} from "./pages/promotions";
import Register from "./pages/Register";
import ForgotPassword from "./pages/forgot-password";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/login" element={<Login />} />
          <Route path="/promotions" element={<PromotionBanners />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Index />} />
           <Route path="/casino" element={<Casino />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
