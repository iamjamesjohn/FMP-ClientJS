import { axios } from '../../utils/axios'

// Response
export interface ETFListResult {
  exchangeShortName: string
  exchange: string
  symbol: string
  price: number
  name: string
}

/**
 * @description Find symbols for traded and non-traded ETFs with our ETF List..
 * @link https://site.financialmodelingprep.com/developer/docs#exchange-traded-fund-search-stock-list
 */
export const list = async (): Promise<ETFListResult[]> => {
  const API_PATH = `/etf/list`

  const { data, status } = await axios().get<ETFListResult[]>(API_PATH)

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
