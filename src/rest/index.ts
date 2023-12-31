import { searchClient, type SearchClient } from './search'
import { stocksClient, type StocksClient } from './stocks'
import { miscClient, type MiscClient } from './misc'
import { etfClient, type ETFClient } from './etfs'

export interface RestClient {
  search: SearchClient
  stocks: StocksClient
  misc: MiscClient
  etf: ETFClient
}

export const restClient: RestClient = {
  search: searchClient(),
  stocks: stocksClient(),
  misc: miscClient(),
  etf: etfClient()
}
