import { list } from './list'

import type { ListResult } from './types.d'

export * from './types.d'

export interface ETFClient {
  list: () => Promise<ListResult[]>
}

export const etfClient = (): ETFClient => ({
  list: () => list()
})
