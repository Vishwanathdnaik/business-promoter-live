// HeroSection.jsx
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-brand"
      >
        Boost Your Business Online 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 max-w-xl text-lg text-gray-600"
      >
        Get modern websites that rank, engage, and convert.
      </motion.p>

      <motion.div
        className="mt-8 space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button className="bg-brand text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="bg-accent text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}
