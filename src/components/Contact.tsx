"use client";

import { motion } from "framer-motion";
import { Globe, Mail, Phone, Wallet } from "lucide-react";

interface ContactProps {
  instagram?: string;
  email?: string;
  phone?: string;
  whishMoney?: string;
}

export default function Contact({ instagram, email, phone, whishMoney }: ContactProps) {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-4xl mx-auto glass-panel p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-purple-500/30">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Contact <span className="text-purple-500">Us</span></h2>
          <p className="text-gray-400 text-sm md:text-base">Ready to start your project? Reach out through any of these channels.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Socials & Direct</h3>
            
            {instagram && (
              <a href={`https://instagram.com/${instagram}`} target="_blank" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-purple-600/20 transition-all border border-white/5">
                <Globe className="text-purple-500" />
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Instagram</div>
                  <div className="text-lg">@{instagram}</div>
                </div>
              </a>
            )}

            {email && (
              <a href={`mailto:${email}`} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-purple-600/20 transition-all border border-white/5">
                <Mail className="text-purple-500" />
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email</div>
                  <div className="text-lg">{email}</div>
                </div>
              </a>
            )}

            {phone && (
              <a href={`tel:${phone}`} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-purple-600/20 transition-all border border-white/5">
                <Phone className="text-purple-500" />
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Phone / WhatsApp</div>
                  <div className="text-lg">{phone}</div>
                </div>
              </a>
            )}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Payment Methods</h3>
            <div className="p-6 rounded-2xl bg-purple-600/10 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <Wallet size={20} />
                </div>
                <span className="text-xl font-bold">WHISH Money</span>
              </div>
              <p className="text-gray-400 mb-4">We accept payments through WHISH Money for your convenience.</p>
              <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                <div className="text-xs text-gray-500 uppercase mb-1">Payment Details</div>
                <div className="text-sm font-mono break-all">{whishMoney || "Contact us for details"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
