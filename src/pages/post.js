import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function PostService() {
  const [formData, setFormData] = useState({ name: '', description: '', price: '' })
  const [status, setStatus] = useState('')

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { data, error } = await supabase.from('services').insert([formData])
    if (error) {
      setStatus('❌ Failed to post')
      console.error(error)
    } else {
      setStatus('✅ Service posted successfully')
      setFormData({ name: '', description: '', price: '' })
    }
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>📝 Post a New Service</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Service name" value={formData.name} onChange={handleChange} /><br />
        <input name="price" placeholder="Price ₹" value={formData.price} onChange={handleChange} /><br />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} /><br />
        <button type="submit">Submit</button>
      </form>
      <p>{status}</p>
    </div>
  )
}
