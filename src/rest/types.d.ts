import type { SearchClient } from './search'
import type { StocksClient } from './stocks'
import type { ETFClient } from './etfs'

export interface RestClient {
  search: SearchClient
  stocks: StocksClient
  etf: ETFClient
}
