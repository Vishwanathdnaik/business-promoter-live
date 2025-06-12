export default function Pricing() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center text-brand">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Starter', price: '₹999', features: ['1-page site', 'WhatsApp CTA', 'SEO Basic'] },
          { title: 'Business', price: '₹4,999', features: ['Multi-page', 'Form', 'Analytics'] },
          { title: 'Premium', price: '₹9,999', features: ['CMS Blog', 'Lead System', 'Speed Optimized'] },
        ].map(({ title, price, features }) => (
          <div key={title} className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-2xl text-brand font-bold">{price}</p>
            <ul className="mt-4 space-y-1 text-sm">
              {features.map(f => (
                <li key={f}>✔️ {f}</li>
              ))}
            </ul>
            <a
              href="https://wa.me/919999999999?text=I'm%20interested%20in%20the%20{title}%20plan"
              className="mt-6 inline-block bg-brand text-white px-4 py-2 rounded mt-6 hover:bg-blue-700"
            >
              Choose Plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
