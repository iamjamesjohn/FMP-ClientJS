import { financialClient, type FinancialClient } from '../financials'

import { list, type StockListResult } from './list'
import { profiles, type StockProfileResult, type StockProfileRequest } from './profiles'

export interface StocksClient {
  profiles: (args: StockProfileRequest) => Promise<StockProfileResult[]>
  list: () => Promise<StockListResult[]>
  financial: FinancialClient
}

export const stocksClient = (): StocksClient => ({
  financial: financialClient(),
  profiles: (args) => profiles(args),
  list: (...args) => list(...args)
})
