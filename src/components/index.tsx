// src/pages/index.tsx

import Head from 'next/head'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Business Promoter | Grow Your Business Online</title>
        <meta name="description" content="Discover powerful tools to promote and grow your business effectively with Business Promoter." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
