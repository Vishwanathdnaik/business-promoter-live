// src/components/CTA.tsx
export default function CTA() {
  return (
    <section className="bg-indigo-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to boost your business?
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Contact us today and take the first step toward success.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
