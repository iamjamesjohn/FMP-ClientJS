import { marketOpen } from './market-open'
import type { MarketOpenResult } from './types'

export interface MiscClient {
  marketOpen: () => Promise<MarketOpenResult>
}

export const miscClient = (): MiscClient => ({
  marketOpen: () => marketOpen()
})
