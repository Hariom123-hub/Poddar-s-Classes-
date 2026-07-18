import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-[14px] mb-6">
              <div className="w-[52px] h-[52px] rounded-2xl border border-white/10 overflow-hidden flex-shrink-0 bg-white shadow-sm">
                <img 
                  src="/logo.jpg" 
                  alt="Poddar's Classes Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-[800] text-[20px] md:text-[22px] leading-[1] text-white tracking-[-0.5px]">PODDAR'S</span>
                <span className="font-sans font-[600] text-[11px] md:text-[12px] leading-none tracking-[4px] md:tracking-[5px] text-blue-200/60 mt-1">CLASSES</span>
                <span className="font-sans font-[400] text-[9px] md:text-[10px] leading-none tracking-[5px] md:tracking-[6px] text-blue-100/40 mt-1">RAIGANJ</span>
              </div>
            </div>
            <p className="text-blue-100/60 leading-relaxed mb-8">
              Building futures with confidence since a decade. The premier coaching institute in Raiganj for Classes VI-XII.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1H1DUu3HFe/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-blue-100/60">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#subjects" className="hover:text-accent transition-colors">Subjects</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Subjects</h4>
            <ul className="space-y-4 text-blue-100/60">
              <li><a href="#subjects" className="hover:text-accent transition-colors">Mathematics</a></li>
              <li><a href="#subjects" className="hover:text-accent transition-colors">Physics</a></li>
              <li><a href="#subjects" className="hover:text-accent transition-colors">Chemistry</a></li>
              <li><a href="#subjects" className="hover:text-accent transition-colors">Biology</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-blue-100/60">
              <li className="flex gap-3">
                <span className="text-accent">Phone:</span>
                <a href="tel:7908023125" className="hover:text-white transition-colors">7908023125</a>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">Email:</span>
                <a href="mailto:mpoddarsclasses@gmail.com" className="hover:text-white transition-colors">mpoddarsclasses@gmail.com</a>
              </li>
              <li className="flex gap-3">
                <span className="text-accent shrink-0">Address:</span>
                <span>Siliguri More, Opposite Vidyachakra School, Raiganj, 733134</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center text-blue-100/30 text-sm">
          <p>© {new Date().getFullYear()} Poddar's Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
