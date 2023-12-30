import { query, type QuerySearchResult, type QuerySearchRequest } from './query'
import { ticker, type TickerSearchResult, type TickerSearchRequest } from './ticker'

export * from './query'

export interface SearchClient {
  query: (args: QuerySearchRequest) => Promise<QuerySearchResult[]>
  ticker: (args: TickerSearchRequest) => Promise<TickerSearchResult[]>
}

export const searchClient = (): SearchClient => ({
  query: (...args) => query(...args),
  ticker: (...args) => ticker(...args)
})
