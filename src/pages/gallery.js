export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-brand">Our Work</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {['site1.jpg', 'site2.jpg', 'site3.jpg'].map((img, idx) => (
          <img key={idx} src={`/gallery/${img}`} className="rounded-lg shadow-md" alt="project" />
        ))}
      </div>
    </section>
  );
}
