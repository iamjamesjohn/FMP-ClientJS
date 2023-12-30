import { list, type ETFListResult } from './list'

export * from './list'

export interface ETFClient {
  list: () => Promise<ETFListResult[]>
}

export const etfClient = (): ETFClient => ({
  list: (...args) => list(...args)
})
