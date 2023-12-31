import { axios } from '../../utils/axios'
import endpoints from '../../json/endpoint-map.json' assert { type: 'json' }
import type { TradeableResult } from './types'

/**
 * @description Discover all actively traded stocks with our Tradable Search feature. This comprehensive list includes over 70,000 stocks, with symbol, name, price, and exchange information for each company.
 * @link https://site.financialmodelingprep.com/developer/docs#tradable-search-stock-list
 */
export const tradeable = async (): Promise<TradeableResult[]> => {
  const { data, status } = await axios().get<TradeableResult[]>(endpoints.stocks.list)

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
