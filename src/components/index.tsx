// src/pages/index.tsx
import Head from "next/head";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Business Promoter</title>
        <meta name="description" content="Boost your business online with our promotion services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main>
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
