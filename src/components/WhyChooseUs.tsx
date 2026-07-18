import { motion } from "motion/react";
import { GraduationCap, Users, Clock, MessageCircle, Target, TrendingUp } from "lucide-react";

const chooseUsFeatures = [
  { icon: GraduationCap, title: "Expert Faculty", color: "bg-blue-50 text-blue-600" },
  { icon: Users, title: "Small Batch Size", color: "bg-purple-50 text-purple-600" },
  { icon: Clock, title: "Weekly Tests", color: "bg-orange-50 text-orange-600" },
  { icon: MessageCircle, title: "Doubt Solving", color: "bg-green-50 text-green-600" },
  { icon: Target, title: "Personal Attention", color: "bg-red-50 text-red-600" },
  { icon: TrendingUp, title: "Proven Results", color: "bg-emerald-50 text-emerald-600" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-5">
          <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-bold mb-3 border border-accent/20">
            ⭐ WHY CHOOSE US
          </div>
          <h2 className="text-[22px] md:text-4xl font-display font-bold leading-tight text-navy mb-2">
            Why Students Choose <br className="md:hidden" />
            Poddar's Classes
          </h2>
          <p className="text-gray-500 text-[14px] leading-tight max-w-xs mx-auto line-clamp-2">
            We provide a competitive edge with personalized learning and proven methodologies.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6 justify-items-center">
          {chooseUsFeatures.map((f, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="w-[105px] h-[105px] md:w-32 md:h-32 p-3 rounded-2xl bg-white border border-gray-100 flex flex-col items-center justify-center text-center gap-2 shadow-sm premium-shadow"
            >
              <div className={`w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${f.color.split(' ')[0]}`}>
                <f.icon size={20} className={f.color.split(' ')[1]} />
              </div>
              <span className="font-bold text-[11px] md:text-sm text-navy leading-tight">
                {f.title}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="h-[55px] md:h-16 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center px-4 text-center"
        >
          <span className="text-[12px] md:text-sm font-bold text-primary">
            ⭐ Trusted by Hundreds of Students in Raiganj
          </span>
        </motion.div>
      </div>
    </section>
  );
}
