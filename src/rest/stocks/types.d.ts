import type { FinancialClient } from '../financial'

export interface ListResult {
  exchangeShortName: string
  exchange: string
  symbol: string
  price: string
  name: string
}

export interface ProfileRequest {
  symbols: string[]
}

export interface ProfileResult {
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

export interface StocksClient {
  profiles: (args: ProfileRequest) => Promise<ProfileResult[]>
  list: () => Promise<ListResult[]>
  financial: FinancialClient
}
