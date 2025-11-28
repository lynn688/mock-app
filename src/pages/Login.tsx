import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast,Toaster } from "sonner";
import { X } from "lucide-react";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

     try {
     
      const response = await axios.post("https://identity.touchvas.online/docs/index.html#/login",{email,password,});

      localStorage.setItem("token", response.data.token);

     toast.custom(
  (t) => (
    <div
      className="flex items-center justify-between p-4 bg-[#1db954] text-white rounded-lg shadow-lg"
      style={{
        fontWeight: 600,
        boxShadow: "0 0 12px #1db954",
      }}
    >
      <div>
        <div>Login Successful!</div>
        {/* <div className="text-sm">Welcome back 🎉</div> */}
      </div>

      <button
        onClick={() => toast.dismiss(t.id)}
        className="ml-4 text-white hover:text-gray-200"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  ),
  {
    dismissible: false, // hides the default top-right X
    duration: 1000,     // auto-dismiss after 5s
  }
);

      
     setTimeout(() => {
      navigate("/");
     },1000); 
      
  
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded text-black"
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded text-[#0D1B2A]"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-sm text-primary"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button className="w-full bg-primary text-white py-2 rounded font-semibold">
          Login
        </button>
      </form>
    </div>
  );
}


