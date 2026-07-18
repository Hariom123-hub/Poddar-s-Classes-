import { motion } from "motion/react";
import { GraduationCap, BookOpen, Clock, Users, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-8 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <span className="text-primary font-bold tracking-widest text-[10px] uppercase">ABOUT US</span>
            <h2 className="text-[22px] md:text-4xl font-display font-bold leading-tight text-navy">
              Welcome to <br />
              <span className="text-primary">Poddar's Classes</span>
            </h2>
            <p className="text-gray-500 text-[14px] leading-[1.5] line-clamp-3 md:line-clamp-none max-w-sm">
              We provide high-quality education for science students in Raiganj. Our experienced faculty and personalized guidance help students achieve their full potential in academic excellence since a decade.
            </p>
            <button className="flex items-center gap-2 text-primary font-bold text-sm group pt-1">
              Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-md h-32 md:h-48">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop" 
                alt="Classroom" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Users, label: "Classes VI-XII", color: "bg-blue-50 text-blue-600" },
                { icon: BookOpen, label: "4 Major Subjects", color: "bg-purple-50 text-purple-600" },
                { icon: Clock, label: "Weekly Tests", color: "bg-orange-50 text-orange-600" },
                { icon: GraduationCap, label: "Expert Faculty", color: "bg-green-50 text-green-600" },
              ].map((stat, idx) => (
                <div key={idx} className="h-[75px] rounded-2xl bg-white border border-gray-100 shadow-sm p-3 flex flex-col items-center justify-center gap-1">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${stat.color.split(' ')[0]}`}>
                    <stat.icon size={16} className={stat.color.split(' ')[1]} />
                  </div>
                  <span className="text-[11px] font-bold text-navy text-center leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
