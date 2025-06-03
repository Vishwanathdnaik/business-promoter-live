import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Head from 'next/head'

export default function Home() {
  const [services, setServices] = useState([])

  useEffect(() => {
    async function fetchServices() {
      const { data, error } = await supabase.from('services').select('*')
      if (error) console.error(error)
      else setServices(data)
    }
    fetchServices()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Head><title>Business Promoter Hub</title></Head>
      <h1 className="text-3xl mb-6">🛒 Business Promoter Hub</h1>
      {services.length === 0 && <p>Loading or no services posted yet...</p>}
      <ul className="space-y-4">
        {services.map((s) => (
          <li key={s.id} className="bg-gray-900 p-4 rounded shadow">
            <h2 className="text-xl font-bold">🛠 {s.name} — ₹{s.price}</h2>
            <p className="text-gray-400">{s.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
