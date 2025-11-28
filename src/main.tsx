
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import React from "react";
import "./index.css";
import { Toaster } from "sonner";  // correct import


ReactDOM.createRoot(document.getElementById("root")!).render(
 <React.StrictMode>
    <App />
    
    <Toaster richColors position="top-center" closeButton/>
    
  </React.StrictMode>);
