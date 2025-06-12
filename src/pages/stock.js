import Head from 'next/head'

export default function StockDashboard() {
  return (
    <>
      <Head>
        <title>📈 Stock Dashboard | Business Promoter</title>
      </Head>
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          📊 Live Stock Market Dashboard
        </h1>

        {/* TradingView Embed */}
        <div className="max-w-6xl mx-auto">
          <iframe
            src="https://s.tradingview.com/embed-widget/advanced-chart/?symbol=NSE:NIFTY&interval=15&theme=light"
            width="100%"
            height="500"
            frameBorder="0"
            allowTransparency="true"
            scrolling="no"
            style={{ borderRadius: '8px', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}
          ></iframe>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/919999999999?text=I%20want%20lifetime%20stock%20signals"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            📲 Join WhatsApp Signal Group
          </a>
        </div>
      </div>
    </>
  )
}
