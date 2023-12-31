import endpoints from '../../json/endpoint-map.json' assert { type: 'json' }
import { axios } from '../../utils/axios'
import type { InfoRequest, InfoResult } from './types'

/**
 * @description The FMP ETF Information endpoint provides basic information about an ETF, such as its ticker symbol, name, expense ratio, and asset under management.
 * @link https://site.financialmodelingprep.com/developer/docs#etf-information-etf-holdings
 */
export const info = async (params: InfoRequest): Promise<InfoResult[]> => {
  const { data, status } = await axios().get<InfoResult[]>(endpoints.etf.info as string, {
    params: {
      symbol: params.symbol
    }
  })

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
