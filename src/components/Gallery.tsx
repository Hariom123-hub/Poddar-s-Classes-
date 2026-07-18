import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { galleryImages } from "../data";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 8;
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, INITIAL_COUNT);

  return (
    <section id="gallery" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-display font-bold text-navy mb-3"
          >
            Our Gallery
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {displayedImages.map((image, idx) => (
              <motion.div
                key={`${image.url}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (idx % 8) * 0.05 }}
                className="group relative aspect-video rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                  <h3 className="text-white font-bold text-sm md:text-base">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {galleryImages.length > INITIAL_COUNT && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3 rounded-full font-bold hover:bg-primary transition-all shadow-lg hover:shadow-primary/30"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  View All Photos <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
