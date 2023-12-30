import { searchClient, type SearchClient } from './search'

export * from './search'

export interface RestClient {
  search: SearchClient
}

export const restClient = (): RestClient => ({
  search: searchClient()
})

export default restClient
