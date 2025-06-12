// 📍 GET /api/stock-signal?symbol=AAPL
export default async function handler(req, res) {
  const { symbol = 'AAPL' } = req.query
  const apiKey = process.env.TWELVE_API_KEY // Add this to .env.local
  const url = `https://api.twelvedata.com/rsi?symbol=${symbol}&interval=15min&apikey=${apiKey}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data?.status === 'error') {
      return res.status(400).json({ error: data.message })
    }

    return res.status(200).json({ rsi: data.values?.[0]?.rsi })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch RSI data' })
  }
}
