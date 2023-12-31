export interface ListResult {
  exchangeShortName: string
  exchange: string
  symbol: string
  price: number
  name: string
}

export interface ETFClient {
  list: () => Promise<ListResult[]>
}
