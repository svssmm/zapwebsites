"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Example {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link?: string | null;
}

export default function Portfolio({ examples }: { examples: Example[] }) {
  return (
    <section id="examples" className="py-24 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-purple-500">Examples</span></h2>
          <p className="text-gray-400">A collection of websites we've built with passion.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-white/5"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-purple-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
          {examples.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500 glass-panel rounded-3xl">
              Our portfolio is growing. Check back soon!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
