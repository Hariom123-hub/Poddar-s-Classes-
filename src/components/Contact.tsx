import { motion } from "motion/react";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-8">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">GET IN TOUCH</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">Contact Information</h2>
          <p className="text-gray-500 italic text-xs">We are here to guide you every step of the way</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid grid-cols-1 gap-3"
          >
            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center gap-4 transition-all hover:bg-blue-50">
               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                 <Phone size={18} />
               </div>
               <div>
                 <h4 className="font-bold text-navy text-xs mb-0.5">Call Us</h4>
                 <a href="tel:7908023125" className="text-gray-600 hover:text-primary transition-colors text-sm">7908023125</a>
               </div>
            </div>

            <div className="p-4 rounded-xl bg-green-50/50 border border-green-100 flex items-center gap-4 transition-all hover:bg-green-50">
               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-green-500 shadow-sm flex-shrink-0">
                 <MessageCircle size={18} />
               </div>
               <div>
                 <h4 className="font-bold text-navy text-xs mb-0.5">WhatsApp</h4>
                 <a href="https://wa.me/7908023125" className="text-gray-600 hover:text-primary transition-colors text-sm">7908023125</a>
               </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100 flex items-center gap-4 transition-all hover:bg-orange-50">
               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-orange-500 shadow-sm flex-shrink-0">
                 <Mail size={18} />
               </div>
               <div>
                 <h4 className="font-bold text-navy text-xs mb-0.5">Email</h4>
                 <a href="mailto:mpoddarsclasses@gmail.com" className="text-gray-600 hover:text-primary transition-colors text-xs font-medium truncate max-w-[180px]">mpoddarsclasses@gmail.com</a>
               </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100 flex items-center gap-4 transition-all hover:bg-purple-50">
               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-purple-500 shadow-sm flex-shrink-0">
                 <MapPin size={18} />
               </div>
               <div>
                 <h4 className="font-bold text-navy text-xs mb-0.5">Address</h4>
                 <p className="text-gray-600 text-[11px] leading-tight line-clamp-2">Siliguri More, Opposite Vidyachakra School, Raiganj, 733134</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 h-[300px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative group bg-slate-50"
          >
             {/* Decorative Background Elements */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors duration-700" />
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full -ml-24 -mb-24 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700" />
             
             <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl mb-4 border border-blue-50"
                >
                  <MapPin size={32} />
                </motion.div>
                
                <div className="backdrop-blur-sm bg-white/40 p-6 rounded-2xl border border-white/60 shadow-sm max-w-sm">
                  <h3 className="text-xl font-display font-bold text-navy mb-1">Our Location</h3>
                  <p className="text-gray-500 text-xs mb-5 leading-relaxed font-medium">
                    Siliguri More, Opposite Vidyachakra School, <br/>
                    Chanditala, Raiganj, 733134
                  </p>
                  
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.google.com/maps/search/Siliguri+More,+Opposite+Vidyachakra+School,+Chanditala,+Raiganj,+West+Bengal+733134" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-navy text-white rounded-full text-xs font-bold shadow-lg shadow-navy/20 hover:bg-primary hover:shadow-primary/30 transition-all"
                  >
                    Get Directions
                  </motion.a>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
