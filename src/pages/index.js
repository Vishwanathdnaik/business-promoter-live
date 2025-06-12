import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-6 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold"
        >
          🚀 Business Promoter is Live!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-4 text-gray-700"
        >
          Welcome to the future of business growth. Customize this homepage in <code>src/pages/index.js</code>.
        </motion.p>
      </main>
    </>
  );
}
