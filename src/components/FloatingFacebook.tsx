import { motion } from "motion/react";
import { Facebook } from "lucide-react";

export default function FloatingFacebook() {
  return (
    <motion.a
      href="https://www.facebook.com/share/1H1DUu3HFe/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#1877F2]/40 transition-all border-2 border-white"
      title="Visit our Facebook Page"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Facebook size={28} fill="white" />
      </motion.div>
    </motion.a>
  );
}
