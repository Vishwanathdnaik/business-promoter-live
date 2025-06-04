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
        <title>Business Promoter | Grow Your Business Today</title>
        <meta name="description" content="Boost your online presence and generate more leads with Business Promoter solutions." />
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
