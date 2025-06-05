const services = [
  { id: 1, name: "Digital Marketing", price: "₹1499", description: "SEO & Google Ads setup" },
  { id: 2, name: "Website Audit", price: "₹999", description: "Technical & UX review" },
];

export default function ServicesList() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        📝 Services
      </h2>
      <div className="grid gap-6">
        {services.map((service) => (
          <div key={service.id} className="p-6 bg-white shadow rounded border border-gray-100">
            <h3 className="text-lg font-semibold mb-1">{service.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{service.description}</p>
            <span className="text-green-600 font-medium">{service.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
