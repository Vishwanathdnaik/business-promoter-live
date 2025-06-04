'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  })

  const inquiryOptions = [
    'General Inquiry',
    'Partnership',
    'Support',
    'Marketing',
    'Feedback'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    alert('Thank you! Your inquiry has been submitted.')
  }

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-2xl shadow-lg my-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} className="border p-2 rounded-md" required />
        <input name="business" type="text" placeholder="Business Name" value={formData.business} onChange={handleChange} className="border p-2 rounded-md" />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 rounded-md" required />
        <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border p-2 rounded-md" />
        <select name="inquiry" value={formData.inquiry} onChange={handleChange} className="border p-2 rounded-md" required>
          <option value="" disabled>Select Inquiry Type</option>
          {inquiryOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="border p-2 rounded-md" rows={4} required />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">Submit</button>
      </form>
    </div>
  )
}
