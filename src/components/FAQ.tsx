import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data";

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="py-12 bg-blue-50/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl font-display font-bold mb-2 text-navy">Common Questions</h2>
          <p className="text-gray-400 italic text-[11px]">Everything you need to know about us</p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 items-start">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-white border border-gray-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                className="w-full px-5 py-3.5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-sm text-navy">{faq.question}</span>
                <ChevronDown 
                  className={`text-primary w-4 h-4 transition-transform duration-300 ${activeIdx === idx ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {activeIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-3 text-gray-500 text-xs leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
