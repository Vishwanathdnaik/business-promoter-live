import { useForm } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("https://formspree.io/f/xanjqjlp"); // Replace with real ID from Formspree

  return (
    <section id="contact" className="p-6 bg-white shadow rounded-lg max-w-lg mx-auto my-12">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" required placeholder="Your Name" className="w-full border p-2 rounded" />
        <input type="email" name="email" required placeholder="Your Email" className="w-full border p-2 rounded" />
        <textarea name="message" required placeholder="Message" className="w-full border p-2 rounded" rows="4" />
        <button type="submit" disabled={state.submitting} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {state.succeeded && <p className="text-green-600 mt-2">Thanks for reaching out!</p>}
    </section>
  );
}
