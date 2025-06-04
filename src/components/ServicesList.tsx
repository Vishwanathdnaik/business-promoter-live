// src/components/ServicesList.tsx
'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function ServicesList() {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase.from('services').select('*')
      if (error) console.error(error)
      else setServices(data)
    }

    fetchServices()
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Services</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {services.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
