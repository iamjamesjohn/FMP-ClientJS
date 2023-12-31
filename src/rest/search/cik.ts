import { axios } from '../../utils/axios'
import endpoints from '../../lib/endpoint-map.json'
import type { CIKSearchRequest, CIKSearchResult } from './types.d'

/**
 * @description Quickly find registered company names linked to SEC-registered entities using their CIK Number with our CIK Search..
 * @link https://site.financialmodelingprep.com/developer/docs#cik-search-company-search
 */
export const cik = async (params: CIKSearchRequest): Promise<CIKSearchResult[]> => {
  const { data, status } = await axios().get<CIKSearchResult[]>(
    `${endpoints.search.cik}/${params.cik}`
  )

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
