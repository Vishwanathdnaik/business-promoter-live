import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const [services, setServices] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('services').select('*')
      if (error) {
        console.error('❌ Error fetching services:', error)
      } else {
        setServices(data)
      }
    }

    fetchData()
  }, [])

  return (
    <div style={{ padding: 30 }}>
      <h1>🛒 Business Promoter Hub</h1>
      {services.length === 0 ? (
        <p>📭 No services found.</p>
      ) : (
        <ul>
          {services.map(service => (
            <li key={service.id}>
              <strong>{service.name}</strong> — ₹{service.price} <br />
              {service.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
