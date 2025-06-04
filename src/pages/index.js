import Head from 'next/head'
import Hero from '@/components/Hero'
import Filters from '@/components/Filters'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Business Promoter Hub</title>
      </Head>
      <main className="bg-white min-h-screen text-gray-800">
        <Hero />
        <Filters />
        <Services />
      </main>
    </>
  )
}
