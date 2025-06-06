// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-F3T4YX01F9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F3T4YX01F9');
            `,
          }}
        />
        {/* ✅ Additional Meta tags for SEO (optional boost) */}
        <meta name="description" content="Your business promoter website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Name or Brand" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
