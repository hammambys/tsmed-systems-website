import React, { useState } from "react";
import { GoogleGenAI, Type } from "@google/genai";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      // TODO: Add email to google sheet
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyX1ITBTLasweq53SbGtAfnl09E8KWCk5ohro7Fg3B_AZocpEdvL70yltX9f-ZVUu861Q/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ email }),
        },
      );
      if (!response.ok) {
        throw new Error("Failed to add email to Google Sheet");
      }
      setStatus("success");
      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Stay ahead of compliance shifts
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Get monthly insights on medical device regulations, maintenance best
          practices, and hospital inventory optimization.
        </p>

        {status === "success" ? (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl animate-in zoom-in duration-300">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Welcome Aboard!
            </h3>
            <p className="text-blue-100">{message}</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-secondary hover:underline font-bold uppercase tracking-wider"
            >
              Add another email
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-secondary hover:bg-opacity-90 disabled:bg-slate-400 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center min-w-[160px]"
            >
              {status === "loading" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Subscribe <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-4 text-red-400 text-sm font-medium">{message}</p>
        )}

        <p className="mt-8 text-blue-200/60 text-xs">
          By subscribing, you agree to our Privacy Policy. No spam, just
          compliance.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
