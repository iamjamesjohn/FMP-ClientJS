import { axios } from '../../utils/axios'
import endpoints from '../../lib/endpoint-map.json'
import type { CusipSearchRequest, CusipSearchResult } from './types.d'

/**
 * @description Access information about financial instruments and securities by simply entering their unique CUSIP (Committee on Uniform Securities Identification Procedures) numbers with our CUSIP Search.
 * @link https://site.financialmodelingprep.com/developer/docs#cusip-search-company-search
 */
export const cusip = async (params: CusipSearchRequest): Promise<CusipSearchResult[]> => {
  const { data, status } = await axios().get<CusipSearchResult[]>(
    `${endpoints.search.cusip}/${params.cusip}`
  )

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
