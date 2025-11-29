import { motion } from "framer-motion";
const MainBtn = ({ text }: { text: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="bg-[#3A5A40] text-white px-6 py-2 rounded-full hover:opacity-90 transition"
    >
      {text}
    </motion.button>
  );
};

export default MainBtn;
