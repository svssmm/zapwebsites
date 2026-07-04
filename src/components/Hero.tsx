"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
        >
          WE BUILD <br />
          <motion.span 
            animate={{ color: ["#a855f7", "#d8b4fe", "#a855f7"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-purple-500 text-glow"
          >
            FAST WEBSITES
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          ZapWebsites delivers high-performance, stunningly animated, and professional web solutions for your business.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#packs"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 bg-purple-glow"
          >
            View Pricing
          </a>
          <a
            href="#examples"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all border border-white/10 backdrop-blur-sm"
          >
            Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
