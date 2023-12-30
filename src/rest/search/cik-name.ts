import { axios } from '../../utils/axios'

// Request
export interface CIKNameSearchRequest {
  // Path variables
  companyName: string
}

// Response
export interface CIKNameSearchResult {
  name: string
  cik: string
}

/**
 * @description Discover CIK numbers for SEC-registered entities with our CIK Name Search.
 * @link https://site.financialmodelingprep.com/developer/docs#cik-name-search-company-search
 */
export const cikName = async (params: CIKNameSearchRequest): Promise<CIKNameSearchResult[]> => {
  const API_PATH = `/cik-search/${params.companyName}`

  const { data, status } = await axios().get<CIKNameSearchResult[]>(API_PATH)

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
