import { axios } from '../../utils/axios'

// Response
export interface StockListResult {
  exchangeShortName: string
  exchange: string
  symbol: string
  price: string
  name: string
}

/**
 * @description Find symbols for traded and non-traded stocks with our Symbol List. This comprehensive list includes over 25,000 stocks, making it the perfect resource for investors and traders of all levels.
 * @link https://site.financialmodelingprep.com/developer/docs#symbol-list-stock-list
 */
export const list = async (): Promise<StockListResult[]> => {
  const API_PATH = `/stock/list`

  const { data, status } = await axios().get<StockListResult[]>(API_PATH)

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
