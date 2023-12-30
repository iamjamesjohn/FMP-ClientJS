import { axios } from '../../utils/axios'

// Request
export interface QuerySearchRequest {
  // Query variables
  exchange?: string
  limit?: number
  query: string
}

// Response
export interface QuerySearchResult {
  exchangeShortName: string
  stockExchange: string
  currency: string
  symbol: string
  name: string
}

/**
 * @description Search over 70,000 symbols by symbol name or company name, including cryptocurrencies, forex, stocks, etf and other financial instruments.
 * @link https://site.financialmodelingprep.com/developer/docs#general-search-company-search
 */
export const query = async (params: QuerySearchRequest): Promise<QuerySearchResult[]> => {
  const API_PATH = '/search'

  const { data, status } = await axios().get<QuerySearchResult[]>(API_PATH, {
    params
  })

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
