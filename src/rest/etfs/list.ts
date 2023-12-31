import endpoints from '../../json/endpoint-map.json' assert { type: 'json' }
import { axios } from '../../utils/axios'
import type { ListResult } from './types'

/**
 * @description Find symbols for traded and non-traded ETFs with our ETF List..
 * @link https://site.financialmodelingprep.com/developer/docs#exchange-traded-fund-search-stock-list
 */
export const list = async (): Promise<ListResult[]> => {
  const { data, status } = await axios().get<ListResult[]>(endpoints.etf.list)

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
