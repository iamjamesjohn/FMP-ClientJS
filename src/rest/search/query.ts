import { axios } from '../../utils/axios'
import endpoints from '../../lib/endpoint-map.json'
import type { SearchRequest, SearchResult } from './types.d'

/**
 * @description Search over 70,000 symbols by symbol name or company name, including cryptocurrencies, forex, stocks, etf and other financial instruments.
 * @link https://site.financialmodelingprep.com/developer/docs#general-search-company-search
 */
export const query = async (params: SearchRequest): Promise<SearchResult[]> => {
  const { data, status } = await axios().get<SearchResult[]>(endpoints.search.query, {
    params
  })

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
