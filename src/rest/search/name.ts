import { axios } from '../../utils/axios'
import endpoints from '../../json/endpoint-map.json' assert { type: 'json' }
import type { SearchRequest, SearchResult } from './types'

export * from './types'

/**
 * @description Find ticker symbols and exchange information for equity securities and exchange-traded funds (ETFs) by searching with the company name.
 * @link https://site.financialmodelingprep.com/developer/docs#name-search-company-search
 */
export const name = async (params: SearchRequest): Promise<SearchResult[]> => {
  const { data, status } = await axios().get<SearchResult[]>(endpoints.search.name, {
    params
  })

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
