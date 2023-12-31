export interface ListResult {
  exchangeShortName: string
  exchange: string
  symbol: string
  price: number
  name: string
}

export interface HoldingRequest {
  symbol: string
}

export interface HoldingResult {
  weightPercentage: number
  sharesNumber: number
  marketValue: number
  updated: string
  cusip: string
  asset: string
  name: string
  isin: string
}

export interface CountryWeightingRequest {
  symbol: string
}

export interface CountryWeightingResult {
  weightPercentage: string
  country: string
}

export interface SectorWeightingRequest {
  symbol: string
}

export interface SectorWeightingResult {
  weightPercentage: string
  sector: string
}

export interface InfoRequest {
  symbol: string
}

export interface InfoResult {
  inceptionDate: string
  holdingsCount: number
  expenseRatio: number
  description: string
  navCurrency: string
  assetClass: string
  etfCompany: string
  avgVolume: number
  domicile: string
  website: string
  symbol: string
  cusip: string
  isin: string
  name: string
  aum: number
  nav: number
  sectorsList: Array<{
    industry: string
    exposure: number
  }>
}
