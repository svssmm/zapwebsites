import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Zap className="text-purple-500" fill="currentColor" size={24} />
          <span className="text-xl font-bold tracking-tighter">
            ZAP<span className="text-purple-500">WEBSITES</span>
          </span>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-500">
          <Link href="/terms" className="hover:text-purple-500 transition-colors">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:text-purple-500 transition-colors">Privacy Policy</Link>
        </div>
        
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} ZapWebsites. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
