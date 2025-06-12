import { motion } from "framer-motion";

export default function FeaturesGrid() {
  const services = [
    { icon: "🚀", title: "Startup Boost", desc: "Launch fast with SEO, ads & strategy." },
    { icon: "📈", title: "Digital Marketing", desc: "Targeted campaigns, guaranteed reach." },
    { icon: "🌐", title: "Website Dev", desc: "Lightning-fast, mobile-ready sites." },
    { icon: "🧠", title: "AI & Analytics", desc: "Insight-based decisions with smart tools." },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section className="bg-gray-100 py-12 px-6">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-8"
      >
        💼 Our Services
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="bg-white shadow-md p-6 rounded-lg hover:scale-105 transform transition-all duration-300"
          >
            <div className="text-4xl">{s.icon}</div>
            <h3 className="text-xl font-semibold mt-2 mb-1">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
