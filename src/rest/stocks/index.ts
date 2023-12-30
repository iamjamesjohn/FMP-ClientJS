import { list, type StockListResult } from './list'

export * from './list'

export interface StocksClient {
  list: () => Promise<StockListResult[]>
}

export const stocksClient = (): StocksClient => ({
  list: (...args) => list(...args)
})
