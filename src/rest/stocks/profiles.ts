import { axios } from '../../utils/axios'
import chunk from 'lodash/chunk'

// Request
export interface StockProfileRequest {
  // Path variables
  symbols: string[]
}

// Response
export interface StockProfileResult {
  defaultImage: string | boolean
  isActivelyTrading: boolean
  exchangeShortName: string
  fullTimeEmployees: string
  companyName: string
  description: string
  currency: string
  exchange: string
  industry: string
  lastDiv: number
  changes: number
  website: string
  country: string
  address: string
  dcfDiff: number
  ipoDate: string
  isFund: boolean
  symbol: string
  volAvg: number
  mktCap: number
  sector: string
  isEtf: boolean
  isAdr: boolean
  price: number
  range: string
  cusip: string
  phone: string
  state: string
  image: string
  beta: number
  isin: string
  city: string
  cik: string
  ceo: string
  zip: string
  dcf: number
}

const API_PATH = `/profile`

const fetchProfiles = async (symbols: string[]): Promise<StockProfileResult[]> => {
  const { data, status } = await axios().get<StockProfileResult[]>(
    `${API_PATH}/${symbols.join().toUpperCase()}`
  )

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}

/**
 * @description Access data for a company such as 52 week high, 52 week low, market capitalization, and key stats to understand a company finance.
 * @link https://site.financialmodelingprep.com/developer/docs#company-profile-company-information
 */
export const profiles = async (params: StockProfileRequest): Promise<StockProfileResult[]> => {
  const chunkedSymbols = chunk(params.symbols, 1000)

  const results = await Promise.all(chunkedSymbols.map(fetchProfiles))

  return results.flat()
}
