import { axios } from '../../axios'

// Request
export interface NameSearchRequest {
  params: {
    limit?: number
    query: string
    exchange?: string
  }
}

// Response
export interface NameSearchResult {
  exchangeShortName: string
  stockExchange: string
  currency: string
  symbol: string
  name: string
}

/**
 * @description Find ticker symbols and exchange information for equity securities and exchange-traded funds (ETFs) by searching with the company name.
 * @link https://site.financialmodelingprep.com/developer/docs#name-search-company-search
 */
export const name = async ({ params }: NameSearchRequest): Promise<NameSearchResult[]> => {
  const API_PATH = '/search-name'

  const { data, status } = await axios().get<NameSearchResult[]>(API_PATH, {
    params
  })

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
