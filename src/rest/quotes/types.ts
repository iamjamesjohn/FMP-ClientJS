export interface FullQuoteRequest {
  symbols: string[]
}

export interface FullQuoteResult {
  earningsAnnouncement: string
  changesPercentage: number
  sharesOutstanding: number
  previousClose: number
  priceAvg200: number
  priceAvg50: number
  marketCap: number
  avgVolume: number
  timestamp: number
  yearHigh: number
  exchange: string
  dayHigh: number
  yearLow: number
  symbol: string
  change: number
  dayLow: number
  volume: number
  price: number
  name: string
  open: number
  eps: number
  pe: number
}
