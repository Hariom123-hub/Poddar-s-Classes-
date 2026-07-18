import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-2 block">TESTIMONIALS</span>
          <h2 className="text-xl md:text-3xl font-display font-bold mb-2">What Our Students Say</h2>
          <p className="text-gray-400 italic text-[11px]">Success stories from Poddar's Classes</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl bg-blue-50/30 border border-blue-100/50 relative group"
            >
              <Quote className="absolute top-5 right-5 text-primary/5 group-hover:text-primary/10 transition-colors" size={32} />
              
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-gray-600 text-sm mb-5 relative z-10 italic">"{t.content}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-white shadow-sm">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-xs">{t.name}</h4>
                  <p className="text-[10px] text-primary font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
