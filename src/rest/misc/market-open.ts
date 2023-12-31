import { axios } from '../../utils/axios'
import endpoints from '../../json/endpoint-map.json' assert { type: 'json' }
import type { MarketOpenResult } from './types'

/**
 * @description The FMP Market Open endpoint provides information on whether the US market and EURONEXT, etc are open or closed.
 * @link https://site.financialmodelingprep.com/developer/docs#market-open-company-information
 */
export const marketOpen = async (): Promise<MarketOpenResult> => {
  const { data, status } = await axios().get<MarketOpenResult>(endpoints.misc.marketOpen)

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
