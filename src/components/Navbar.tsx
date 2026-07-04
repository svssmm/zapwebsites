"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-purple-500/20 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 20, scale: 1.2 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-purple-500"
          >
            <Zap fill="currentColor" size={28} className="md:w-8 md:h-8" />
          </motion.div>
          <span className="text-xl md:text-2xl font-bold tracking-tighter text-glow">
            ZAP<span className="text-purple-500">WEBSITES</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link href="/#examples" className="hover:text-purple-400 transition-colors">Examples</Link>
          <Link href="/#packs" className="hover:text-purple-400 transition-colors">Packs</Link>
          <Link href="/#contact" className="hover:text-purple-400 transition-colors">Contact</Link>
          <Link href="/admin" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition-all">
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full glass-panel border-b border-purple-500/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 font-bold text-center">
              <Link href="/#examples" onClick={() => setIsOpen(false)} className="hover:text-purple-500 transition-colors">Examples</Link>
              <Link href="/#packs" onClick={() => setIsOpen(false)} className="hover:text-purple-500 transition-colors">Packs</Link>
              <Link href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-purple-500 transition-colors">Contact</Link>
              <Link href="/admin" onClick={() => setIsOpen(false)} className="bg-purple-600 px-6 py-3 rounded-xl transition-all inline-block">
                Admin Panel
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
