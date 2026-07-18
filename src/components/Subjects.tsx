import { motion } from "motion/react";
import { subjects } from "../data";

export default function Subjects() {
  return (
    <section id="subjects" className="py-12 md:py-24 bg-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-display font-bold mb-2 md:mb-4">Core Subjects</h2>
          <p className="text-gray-500 text-sm md:text-base italic">Specialized guidance for science stream excellence</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {subjects.map((subject, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="group relative h-48 md:h-80 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-lg premium-shadow cursor-pointer"
            >
              <img 
                src={subject.image} 
                alt={subject.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop";
                }}
              />
              <div className={`absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300 ${subject.color}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                <h3 className="text-white text-lg md:text-3xl font-display font-bold mb-1 md:mb-2">{subject.name}</h3>
                <div className="w-8 md:w-12 h-1 md:h-1.5 bg-accent rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
