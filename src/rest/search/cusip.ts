import { axios } from '../../utils/axios'

// Request
export interface CusipSearchRequest {
  // Path variables
  cusip: string
}

// Response
export interface CusipSearchResult {
  company: string
  ticker: string
  cusip: string
}

/**
 * @description Access information about financial instruments and securities by simply entering their unique CUSIP (Committee on Uniform Securities Identification Procedures) numbers with our CUSIP Search.
 * @link https://site.financialmodelingprep.com/developer/docs#cusip-search-company-search
 */
export const cusip = async (params: CusipSearchRequest): Promise<CusipSearchResult[]> => {
  const API_PATH = `/cusip/${params.cusip}`

  const { data, status } = await axios().get<CusipSearchResult[]>(API_PATH)

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
