import { axios } from '../../utils/axios'
import endpoints from '../../json/endpoint-map.json' assert { type: 'json' }
import type { ListResult } from './types'

/**
 * @description Find symbols for traded and non-traded stocks with our Symbol List. This comprehensive list includes over 25,000 stocks, making it the perfect resource for investors and traders of all levels.
 * @link https://site.financialmodelingprep.com/developer/docs#symbol-list-stock-list
 */
export const list = async (): Promise<ListResult[]> => {
  const { data, status } = await axios().get<ListResult[]>(endpoints.stocks.list)

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
