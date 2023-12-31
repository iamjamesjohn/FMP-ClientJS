import { type FinancialClient, financialClient } from '../financial'
import { list } from './list'
import { profiles } from './profiles'
import { tradeable } from './tradeable'
import type { ListResult, ProfileRequest, ProfileResult, TradeableResult } from './types.d'

export * from './types.d'

export interface StocksClient {
  profiles: (args: ProfileRequest) => Promise<ProfileResult[]>
  tradeable: () => Promise<TradeableResult[]>
  list: () => Promise<ListResult[]>
  financial: FinancialClient
}

export const stocksClient = (): StocksClient => ({
  financial: financialClient(),
  profiles: (args) => profiles(args),
  list: (...args) => list(...args),
  tradeable: () => tradeable()
})
