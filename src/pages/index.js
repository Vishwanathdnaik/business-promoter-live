import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Business Promoter India</title>
        <meta name="description" content="Free classifieds & promotions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{ textAlign: "center", padding: "4rem" }}>
        <h1>🚀 Welcome to BusinessPromoter.co.in</h1>
        <p>Your #1 platform for classified listings, leads & SEO promotions.</p>
        <a
          href="https://wa.me/917892611988"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#25D366",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "8px",
            display: "inline-block",
            marginTop: "2rem",
            textDecoration: "none"
          }}
        >
          Chat on WhatsApp 💬
        </a>
      </main>
    </>
  );
}
