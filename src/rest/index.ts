import { searchClient, type SearchClient } from './search'
import { stocksClient, type StocksClient } from './stocks'
import { etfClient, type ETFClient } from './etfs'

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

export default restClient
