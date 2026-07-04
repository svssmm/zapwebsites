"use client";

import { useState } from "react";
import { login } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import { Zap } from "lucide-react";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await login(formData);
    
    if (result.success) {
      router.push("/admin");
    } else {
      setError(result.error || "Login failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full glass-panel p-8 rounded-3xl border border-purple-500/30">
        <div className="text-center mb-8">
          <Zap className="mx-auto text-purple-500 mb-4" size={48} />
          <h1 className="text-3xl font-bold">Admin Login</h1>
          <p className="text-gray-400">Enter your credentials to access the dashboard</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
              name="username"
              type="text"
              required
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              name="password"
              type="password"
              required
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 outline-none transition-all"
            />
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-bold transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
