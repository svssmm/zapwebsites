"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-purple-500/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 20, scale: 1.2 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-purple-500"
          >
            <Zap fill="currentColor" size={32} />
          </motion.div>
          <span className="text-2xl font-bold tracking-tighter text-glow">
            ZAP<span className="text-purple-500">WEBSITES</span>
          </span>
        </Link>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link href="/#examples" className="hover:text-purple-400 transition-colors">Examples</Link>
          <Link href="/#packs" className="hover:text-purple-400 transition-colors">Packs</Link>
          <Link href="/#contact" className="hover:text-purple-400 transition-colors">Contact</Link>
          <Link href="/admin" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition-all">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}
