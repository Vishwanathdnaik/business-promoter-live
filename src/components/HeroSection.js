// src/components/HeroSection.js
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`transition-all duration-1000 ease-out transform ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
      } bg-gradient-to-b from-white to-blue-50 py-24 text-center`}
    >
      <h1 className="text-5xl font-bold text-gray-900">🚀 Business Promoter Hub</h1>
      <p className="mt-4 text-lg text-gray-600">
        Your one-stop platform for digital services. Launch fast. Grow faster.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow"
        >
          Get Started
        </a>
        <a
          href="#services"
          className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
