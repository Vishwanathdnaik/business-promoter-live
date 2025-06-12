export default function Testimonials() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-brand">What Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <blockquote className="bg-white shadow p-6 rounded-lg">
          <p className="text-lg">"Jake transformed our sales—500% ROI in 2 weeks."</p>
          <footer className="mt-4 font-semibold">— Ashwin R., Entrepreneur</footer>
        </blockquote>
        <blockquote className="bg-white shadow p-6 rounded-lg">
          <p className="text-lg">"Best dev + UI expert I’ve worked with."</p>
          <footer className="mt-4 font-semibold">— Meena P., Coach</footer>
        </blockquote>
      </div>
    </section>
  );
}
