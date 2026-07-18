import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { features } from "../data";

export default function Features() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-display font-bold mb-2 md:mb-4">Top Features</h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto italic">Providing the best environment for academic growth</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6 justify-items-center">
          {features.slice(0, 6).map((feature, idx) => {
            const IconComponent = (Icons as any)[feature.icon];
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="w-[105px] h-[115px] md:w-full md:h-auto p-3 md:p-6 rounded-2xl md:rounded-3xl bg-blue-50/50 border border-blue-100 flex flex-col items-center justify-center text-center gap-2 md:gap-4 hover:shadow-xl hover:shadow-blue-500/5 transition-all shadow-sm premium-shadow"
              >
                <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl shadow-sm flex items-center justify-center text-primary border border-blue-50">
                  <IconComponent size={24} className="md:w-8 md:h-8" />
                </div>
                <span className="font-bold text-[13px] md:text-lg text-navy leading-tight line-clamp-2">
                  {feature.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
