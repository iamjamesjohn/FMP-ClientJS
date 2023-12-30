import { query, type QuerySearchResult, type QuerySearchRequest } from './query'
import { ticker, type TickerSearchResult, type TickerSearchRequest } from './ticker'
import { name, type NameSearchResult, type NameSearchRequest } from './name'

export * from './query'

export interface SearchClient {
  ticker: (args: TickerSearchRequest) => Promise<TickerSearchResult[]>
  query: (args: QuerySearchRequest) => Promise<QuerySearchResult[]>
  name: (args: NameSearchRequest) => Promise<NameSearchResult[]>
}

export const searchClient = (): SearchClient => ({
  ticker: (...args) => ticker(...args),
  query: (...args) => query(...args),
  name: (...args) => name(...args)
})
