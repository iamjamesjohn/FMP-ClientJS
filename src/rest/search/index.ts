import { cik } from './cik'
import { cikName } from './cik-name'
import { cusip } from './cusip'
import { name } from './name'
import { query } from './query'
import { ticker } from './ticker'
import type {
  CIKNameSearchRequest,
  CIKNameSearchResult,
  CIKSearchRequest,
  CIKSearchResult,
  CusipSearchRequest,
  CusipSearchResult,
  SearchRequest,
  SearchResult
} from './types.d'

export * from './types.d'

export interface SearchClient {
  cikName: (args: CIKNameSearchRequest) => Promise<CIKNameSearchResult[]>
  cusip: (args: CusipSearchRequest) => Promise<CusipSearchResult[]>
  cik: (args: CIKSearchRequest) => Promise<CIKSearchResult[]>
  ticker: (args: SearchRequest) => Promise<SearchResult[]>
  query: (args: SearchRequest) => Promise<SearchResult[]>
  name: (args: SearchRequest) => Promise<SearchResult[]>
}

export const searchClient = (): SearchClient => ({
  cikName: (...args) => cikName(...args),
  ticker: (...args) => ticker(...args),
  query: (...args) => query(...args),
  cusip: (...args) => cusip(...args),
  name: (...args) => name(...args),
  cik: (...args) => cik(...args)
})
