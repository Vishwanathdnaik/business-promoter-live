import Hero from '@/components/Hero'
import ServicesList from '@/components/ServicesList'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Hero />
      <ServicesList />
      <Footer />
    </main>
  )
}
