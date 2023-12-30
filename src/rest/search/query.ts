import { axios } from '../../axios'

// Request
export interface QuerySearchRequest {
  params: {
    limit?: number
    query: string
    exchange?: string
  }
}

// Response
export interface QuerySearchResult {
  exchangeShortName: string
  stockExchange: string
  currency: string
  symbol: string
  name: string
}

export const query = async ({ params }: QuerySearchRequest): Promise<QuerySearchResult[]> => {
  const API_PATH = '/search'

  const { data, status } = await axios().get<QuerySearchResult[]>(API_PATH, {
    params
  })

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
