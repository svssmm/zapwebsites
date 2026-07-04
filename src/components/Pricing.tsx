"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Pack {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
}

export default function Pricing({ packs }: { packs: Pack[] }) {
  return (
    <section id="packs" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Packs & <span className="text-purple-500">Prices</span></h2>
          <p className="text-gray-400">Choose the perfect plan for your business needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packs.map((pack, idx) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl flex flex-col border border-purple-500/20 hover:border-purple-500/50 transition-colors group"
            >
              <h3 className="text-2xl font-bold mb-2">{pack.name}</h3>
              <div className="text-4xl font-black text-purple-500 mb-4">{pack.price}</div>
              <p className="text-gray-400 mb-8 flex-grow">{pack.description}</p>
              
              <ul className="space-y-4 mb-8">
                {pack.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-purple-500" size={18} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="w-full py-4 text-center rounded-xl bg-purple-600/10 border border-purple-500/20 hover:bg-purple-600 hover:text-white transition-all font-bold"
              >
                Get Started
              </a>
            </motion.div>
          ))}
          {packs.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500 glass-panel rounded-3xl">
              No packs added yet. Admin can add them in the dashboard.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
