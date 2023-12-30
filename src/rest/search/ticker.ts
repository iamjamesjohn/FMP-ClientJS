import { axios } from '../../axios'

// Request
export interface TickerSearchRequest {
  params: {
    limit?: number
    query: string
    exchange?: string
  }
}

// Response
export interface TickerSearchResult {
  exchangeShortName: string
  stockExchange: string
  currency: string
  symbol: string
  name: string
}

export const ticker = async ({ params }: TickerSearchRequest): Promise<TickerSearchResult[]> => {
  const API_PATH = '/search-ticker'

  const { data, status } = await axios().get<TickerSearchResult[]>(API_PATH, {
    params
  })

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
