export interface SearchRequest {
  exchange?: string
  limit?: number
  query: string
}

export interface SearchResult {
  exchangeShortName: string
  stockExchange: string
  currency: string
  symbol: string
  name: string
}

export interface CusipSearchRequest {
  cusip: string
}

export interface CusipSearchResult {
  company: string
  ticker: string
  cusip: string
}

export interface CIKSearchRequest {
  cik: string
}

export interface CIKSearchResult {
  name: string
  cik: string
}

export interface CIKNameSearchRequest {
  companyName: string
}

export interface CIKNameSearchResult {
  name: string
  cik: string
}

export interface SearchClient {
  cikName: (args: CIKNameSearchRequest) => Promise<CIKNameSearchResult[]>
  cusip: (args: CusipSearchRequest) => Promise<CusipSearchResult[]>
  cik: (args: CIKSearchRequest) => Promise<CIKSearchResult[]>
  ticker: (args: SearchRequest) => Promise<SearchResult[]>
  query: (args: SearchRequest) => Promise<SearchResult[]>
  name: (args: SearchRequest) => Promise<SearchResult[]>
}
