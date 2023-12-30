import { ticker, type TickerSearchResult, type TickerSearchRequest } from './ticker'
import { query, type QuerySearchResult, type QuerySearchRequest } from './query'
import { name, type NameSearchResult, type NameSearchRequest } from './name'
import { cik, type CIKSearchResult, type CIKSearchRequest } from './cik'

export * from './query'

export interface SearchClient {
  ticker: (args: TickerSearchRequest) => Promise<TickerSearchResult[]>
  query: (args: QuerySearchRequest) => Promise<QuerySearchResult[]>
  name: (args: NameSearchRequest) => Promise<NameSearchResult[]>
  cik: (args: CIKSearchRequest) => Promise<CIKSearchResult[]>
}

export const searchClient = (): SearchClient => ({
  ticker: (...args) => ticker(...args),
  query: (...args) => query(...args),
  name: (...args) => name(...args),
  cik: (...args) => cik(...args)
})
