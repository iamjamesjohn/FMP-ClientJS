import { type FinancialClient, financialClient } from '../financial'
import { list } from './list'
import { profiles } from './profiles'
import { tradeable } from './tradeable'
import { peers } from './peers'
import type {
  ListResult,
  ProfileRequest,
  ProfileResult,
  TradeableResult,
  PeersRequest,
  PeersResult
} from './types'

export * from './types'

export interface StocksClient {
  profiles: (args: ProfileRequest) => Promise<ProfileResult[]>
  peers: (args: PeersRequest) => Promise<PeersResult[]>
  tradeable: () => Promise<TradeableResult[]>
  list: () => Promise<ListResult[]>
  financial: FinancialClient
}

export const stocksClient = (): StocksClient => ({
  financial: financialClient(),
  profiles: (...args) => profiles(...args),
  peers: (...args) => peers(...args),
  tradeable: () => tradeable(),
  list: () => list()
})
