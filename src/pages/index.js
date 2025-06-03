import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('services').select('*')
      if (error) {
        console.error('❌ Error fetching services:', error)
      } else {
        setServices(data)
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>🚀 Welcome to <span style={{ color: '#00df9a' }}>BusinessPromoter.co.in</span></h1>
      <p>Your #1 platform for classified listings, leads & SEO promotions.</p>

      {loading ? (
        <p>🔄 Loading services...</p>
      ) : services.length === 0 ? (
        <p>⚠️ No services found.</p>
      ) : (
        <ul style={{ marginTop: '20px' }}>
          {services.map(service => (
            <li key={service.id} style={{ marginBottom: '10px' }}>
              <strong>{service.name}</strong>: {service.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
