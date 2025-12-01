import { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://identity.touchvas.online/docs/index.html#/password/forgot", { email });

      toast.custom((t) => (
        <div
          className="flex items-center justify-between p-4 bg-[#1db954] text-white rounded-lg shadow-lg"
          style={{ fontWeight: 600, boxShadow: "0 0 12px #1db954" }}
        >
          <div>
            <div>Reset Email Sent!</div>
            <div className="text-sm">
              If this email exists, a password reset link has been sent.
            </div>
          </div>

          <button
            onClick={() => toast.dismiss(t.id)}
            className="ml-4 text-white hover:text-gray-200"
          >
            ×
          </button>
        </div>
      ), {
        dismissible: false,
        duration: 1000,
      });

      setEmail(""); // optional: clear input
    } catch (err: any) {
      toast.custom((t) => (
        <div
          className="flex items-center justify-between p-4 bg-red-600 text-white rounded-lg shadow-lg"
          style={{ fontWeight: 600 }}
        >
          <div>{err.response?.data?.message || "Failed to send reset email."}</div>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="ml-4 text-white hover:text-gray-200"
          >
            ×
          </button>
        </div>
      ), { dismissible: false, duration: 5000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow relative">
      <Toaster /> {/* Required for Sonner toasts */}

      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      <p className="mb-4 text-gray-700">
        Enter your email to receive a password reset link.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded text-black"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 rounded font-semibold"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}
