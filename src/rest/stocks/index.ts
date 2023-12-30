import { list, type StockListResult } from './list'
import { profiles, type StockProfileResult, type StockProfileRequest } from './profiles'

export interface StocksClient {
  profiles: (args: StockProfileRequest) => Promise<StockProfileResult[]>
  list: () => Promise<StockListResult[]>
}

export const stocksClient = (): StocksClient => ({
  profiles: (...args) => profiles(...args),
  list: (...args) => list(...args)
})
