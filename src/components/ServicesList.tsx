// src/components/ServicesList.tsx
import React from 'react'

const services = [
  { id: 1, name: "Digital Marketing", price: "₹1499", description: "SEO & Google Ads setup" },
  { id: 2, name: "Website Audit", price: "₹999", description: "Technical & UX review" },
];

export default function ServicesList() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">📋 Services</h2>
      <div className="grid gap-4">
        {services.map((service) => (
          <div key={service.id} className="p-4 bg-white shadow rounded">
            <h3 className="text-lg font-semibold">{service.name}</h3>
            <p>{service.description}</p>
            <span className="text-sm text-green-700">{service.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
