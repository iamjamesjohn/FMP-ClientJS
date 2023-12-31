import { axios } from '../../utils/axios'
import endpoints from '../../json/endpoint-map.json' assert { type: 'json' }
import type { CIKNameSearchRequest, CIKNameSearchResult } from './types'

/**
 * @description Discover CIK numbers for SEC-registered entities with our CIK Name Search.
 * @link https://site.financialmodelingprep.com/developer/docs#cik-name-search-company-search
 */
export const cikName = async (params: CIKNameSearchRequest): Promise<CIKNameSearchResult[]> => {
  const { data, status } = await axios().get<CIKNameSearchResult[]>(
    `${endpoints.search.cikName}/${params.companyName}`
  )

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
