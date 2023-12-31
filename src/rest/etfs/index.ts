import { list } from './list'

import type { ListResult } from './types'

export interface ETFClient {
  list: () => Promise<ListResult[]>
}

export const etfClient = (): ETFClient => ({
  list: () => list()
})
