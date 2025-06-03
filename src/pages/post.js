import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Head from 'next/head'

export default function PostForm() {
  const [form, setForm] = useState({ name: '', description: '', price: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await supabase.from('services').insert([form])
    setStatus(error ? '❌ Failed to save. Check console.' : '✅ Saved successfully!')
    if (error) console.error(error)
    else setForm({ name: '', description: '', price: '' })
  }

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <Head><title>Post New Service | Business Promoter</title></Head>
      <h1 className="text-2xl mb-4 font-bold">Post New Service 🧾</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          name="name"
          placeholder="Service Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          required
        />
        <input
          name="price"
          type="number"
          placeholder="₹ Price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          required
        />
        <button className="bg-green-600 hover:bg-green-700 p-2 w-full rounded">Submit</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  )
}
