import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle, Facebook } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm h-[75px] md:h-[85px] flex items-center">
      <div className="w-full container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-[14px]">
          <div className="w-[52px] h-[52px] rounded-2xl border border-gray-100 overflow-hidden flex-shrink-0 bg-white shadow-sm flex items-center justify-center">
            <img 
              src="/logo.jpg" 
              alt="Poddar's Classes" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=100&auto=format&fit=crop";
              }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-display font-[800] text-[20px] md:text-[22px] leading-[1] text-[#0F52BA] tracking-[-0.5px]">PODDAR'S</span>
            <span className="font-sans font-[600] text-[11px] md:text-[12px] leading-none tracking-[4px] md:tracking-[5px] text-[#4B5563] mt-1">CLASSES</span>
            <span className="font-sans font-[400] text-[9px] md:text-[10px] leading-none tracking-[5px] md:tracking-[6px] text-[#9CA3AF] mt-1">RAIGANJ</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#subjects" className="hover:text-primary transition-colors">Subjects</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/share/1H1DUu3HFe/" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all hidden sm:flex">
            <Facebook size={20} />
          </a>
          <a href="tel:7908023125" className="p-2 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all">
            <Phone size={20} />
          </a>
          <a href="https://wa.me/7908023125" className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-bold flex items-center gap-2 hover:bg-green-600 transition-all shadow-lg shadow-green-200">
            <MessageCircle size={18} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
