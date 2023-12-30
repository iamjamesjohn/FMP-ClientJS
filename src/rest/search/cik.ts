import { axios } from '../../axios'

// Request
export interface CIKSearchRequest {
  path: {
    companyName: string
  }
}

// Response
export interface CIKSearchResult {
  name: string
  cik: string
}

/**
 * @description Discover CIK numbers for SEC-registered entities with our CIK Name Search.
 * @link https://site.financialmodelingprep.com/developer/docs#cik-name-search-company-search
 */
export const cik = async ({ path }: CIKSearchRequest): Promise<CIKSearchResult[]> => {
  const API_PATH = `/cik-search/${path.companyName}`

  const { data, status } = await axios().get<CIKSearchResult[]>(API_PATH)

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
