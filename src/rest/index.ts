import { searchClient, type SearchClient } from './search'
import { stocksClient, type StocksClient } from './stocks'

export * from './search'
export * from './stocks'

export interface RestClient {
  search: SearchClient
  stocks: StocksClient
}

export const restClient = (): RestClient => ({
  search: searchClient(),
  stocks: stocksClient()
})

export default restClient
