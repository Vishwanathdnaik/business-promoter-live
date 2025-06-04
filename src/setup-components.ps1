# Set your base path
$base = "C:\Users\Admin\Downloads\business-promoter-site\src"

# Create components folder
New-Item -ItemType Directory -Force -Path "$base\components" | Out-Null

# Define component content as here-strings
$hero = @"
export default function Hero() {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empower Your Business Online
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Promote your business with a powerful, modern website.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
"@

$features = @"
const features = [
  { title: "SEO Optimized", description: "Rank better on Google." },
  { title: "Responsive Design", description: "Mobile-friendly experience." },
  { title: "Fast Performance", description: "Blazing-fast load times." },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"@

$cta = @"
export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Ready to Grow?</h2>
      <p className="mb-6">Launch your website with us today.</p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
        Contact Us
      </button>
    </section>
  );
}
"@

$contact = @"
export default function ContactForm() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <form className="grid gap-4">
          <input type="text" placeholder="Your Name" className="border p-3 rounded" required />
          <input type="text" placeholder="Business Name" className="border p-3 rounded" />
          <input type="email" placeholder="Email Address" className="border p-3 rounded" required />
          <input type="tel" placeholder="Phone Number" className="border p-3 rounded" />
          <select className="border p-3 rounded" required>
            <option value="">Select Inquiry Type</option>
            <option value="partnership">Partnership</option>
            <option value="services">Services</option>
            <option value="support">Support</option>
          </select>
          <textarea placeholder="Your Message" rows="4" className="border p-3 rounded" required></textarea>
          <button type="submit" className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">Submit</button>
        </form>
      </div>
    </section>
  );
}
"@

$footer = @"
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <p className="text-sm">
        &copy; $(Get-Date -Format yyyy) Business Promoter. All rights reserved.
      </p>
    </footer>
  );
}
"@

$index = @"
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
"@

# Write files
Set-Content "$base\components\Hero.tsx" $hero
Set-Content "$base\components\Features.tsx" $features
Set-Content "$base\components\CTA.tsx" $cta
Set-Content "$base\components\ContactForm.tsx" $contact
Set-Content "$base\components\Footer.tsx" $footer
Set-Content "$base\pages\index.tsx" $index

Write-Host "🎉 Components and homepage updated successfully!"
