import { query, type QuerySearchResult, type QuerySearchRequest } from './query'

export * from './query'

export interface SearchClient {
  query: (args: QuerySearchRequest) => Promise<QuerySearchResult[]>
}

export const searchClient = (): SearchClient => ({
  query: (...args) => query(...args)
})
