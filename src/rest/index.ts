import { searchClient } from './search'
import { stocksClient } from './stocks'
import { etfClient } from './etfs'

import type { SearchClient } from './search'
import type { StocksClient } from './stocks'
import type { ETFClient } from './etfs'

export interface RestClient {
  search: SearchClient
  stocks: StocksClient
  etf: ETFClient
}

export const restClient: RestClient = {
  search: searchClient(),
  stocks: stocksClient(),
  etf: etfClient()
}
