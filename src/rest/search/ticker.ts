import { axios } from '../../utils/axios'
import endpoints from '../../json/endpoint-map.json' assert { type: 'json' }
import type { SearchRequest, SearchResult } from './types'

/**
 * @description Find ticker symbols and exchanges for both equity securities and exchange-traded funds (ETFs) by searching with the company name or ticker symbol.
 * @link https://site.financialmodelingprep.com/developer/docs#ticker-search-company-search
 */
export const ticker = async (params: SearchRequest): Promise<SearchResult[]> => {
  const { data, status } = await axios().get<SearchResult[]>(endpoints.search.ticker, {
    params
  })

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
