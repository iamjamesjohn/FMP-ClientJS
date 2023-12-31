import { searchClient } from './search'
import { stocksClient } from './stocks'
import { etfClient } from './etfs'

import type { RestClient } from './types.d'

export * from './types.d'

export const restClient: RestClient = {
  search: searchClient(),
  stocks: stocksClient(),
  etf: etfClient()
}

export default restClient
