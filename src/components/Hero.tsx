import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { heroBackgrounds } from "../data";

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full md:aspect-video min-h-[400px] md:min-h-[600px] overflow-hidden bg-navy">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          {heroBackgrounds && heroBackgrounds.length > 0 && (
            <motion.div
              key={currentBg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="absolute inset-0 bg-navy/60 z-10" />
              <img 
                src={heroBackgrounds[currentBg]} 
                alt="Coaching Classes" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                onError={() => {
                  console.error("Failed to load hero background image:", heroBackgrounds[currentBg]);
                  setTimeout(() => {
                    setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
                  }, 1000);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/50 to-transparent z-10" />
      </div>

      <div className="absolute inset-0 z-20 flex items-center py-12 md:py-0">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-xs md:text-sm font-bold mb-4 md:mb-8 border border-primary/30 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                ⭐ Best Coaching Institute in Raiganj
              </div>
              
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-4 md:mb-8 text-white">
                Build Your Future <br className="hidden lg:block" />
                <span className="text-accent">with Poddar's Classes</span>
              </h1>
              
              <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-12 max-w-xl leading-relaxed">
                Quality education for Classes VI–XII in Mathematics, Physics, Chemistry and Biology with experienced faculty and regular tests.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-5">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 md:px-10 md:py-5 bg-primary text-white rounded-xl md:rounded-2xl font-bold text-sm md:text-xl shadow-xl shadow-primary/20 hover:bg-blue-700 transition-all"
                >
                  Enroll Now
                </motion.button>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/7908023125" 
                  className="px-6 py-3 md:px-10 md:py-5 bg-white/10 backdrop-blur-lg text-white border border-white/20 rounded-xl md:rounded-2xl font-bold text-sm md:text-xl flex items-center justify-center gap-2 md:gap-3 hover:bg-white/20 transition-all"
                >
                  <MessageCircle size={20} className="md:w-6 md:h-6" />
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>

            {/* Right: Teacher Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:flex justify-end"
            >
              <div className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-[4/5] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef1460375e?q=80&w=800&auto=format&fit=crop" 
                  alt="Teacher" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

