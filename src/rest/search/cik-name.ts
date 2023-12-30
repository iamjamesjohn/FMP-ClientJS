import { axios } from '../../axios'

// Request
export interface CIKNameSearchRequest {
  path: {
    companyName: string
  }
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
export const cikName = async ({ path }: CIKNameSearchRequest): Promise<CIKNameSearchResult[]> => {
  const API_PATH = `/cik-search/${path.companyName}`

  const { data, status } = await axios().get<CIKNameSearchResult[]>(API_PATH)

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
