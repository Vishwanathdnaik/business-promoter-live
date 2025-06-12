export default function FeaturesGrid() {
  const services = [
    { icon: "🚀", title: "Startup Boost", desc: "Launch fast with SEO, ads & strategy." },
    { icon: "📈", title: "Digital Marketing", desc: "Targeted campaigns, guaranteed reach." },
    { icon: "🌐", title: "Website Dev", desc: "Lightning-fast, mobile-ready sites." },
    { icon: "🧠", title: "AI & Analytics", desc: "Insight-based decisions with smart tools." },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">💼 Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((s, idx) => (
          <div key={idx} className="bg-white shadow-md p-6 rounded-lg hover:scale-105 transform transition">
            <div className="text-4xl">{s.icon}</div>
            <h3 className="text-xl font-semibold mt-2 mb-1">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
