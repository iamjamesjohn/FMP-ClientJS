import { axios } from '../../utils/axios'

// Request
export interface CIKSearchRequest {
  // Path variables
  cik: string
}

// Response
export interface CIKSearchResult {
  name: string
  cik: string
}

/**
 * @description Quickly find registered company names linked to SEC-registered entities using their CIK Number with our CIK Search..
 * @link https://site.financialmodelingprep.com/developer/docs#cik-search-company-search
 */
export const cik = async (params: CIKSearchRequest): Promise<CIKSearchResult[]> => {
  const API_PATH = `/cik/${params.cik}`

  const { data, status } = await axios().get<CIKSearchResult[]>(API_PATH)

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
