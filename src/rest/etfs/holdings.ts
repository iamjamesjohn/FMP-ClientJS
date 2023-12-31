import endpoints from '../../json/endpoint-map.json' assert { type: 'json' }
import { axios } from '../../utils/axios'
import type { HoldingResult, HoldingRequest } from './types'

/**
 * @description This endpoint returns all stocks held by a specific ETF. Assets, share number, and weight are among the fields returned
 * @link https://site.financialmodelingprep.com/developer/docs#etf-holder-etf-holdings
 */
export const holdings = async (params: HoldingRequest): Promise<HoldingResult[]> => {
  const { data, status } = await axios().get<HoldingResult[]>(
    `${endpoints.etf.holdings}/${params.symbol}`
  )

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
