export interface CountryWeighting {
  weightPercentage: string
  country: string
}

export interface SectorWeighting {
  weightPercentage: string
  sector: string
}

export interface Holding {
  weightPercentage: number
  sharesNumber: number
  marketValue: number
  updated: string
  cusip: string
  asset: string
  name: string
  isin: string
}

export interface ListItem {
  exchangeShortName: string
  exchange: string
  symbol: string
  price: number
  name: string
}

export interface SymbolRequest {
  symbol: string
}

export interface CountryWeightings {
  request: SymbolRequest
  response: CountryWeighting[]
}

export interface SectorWeightings {
  request: SymbolRequest
  response: SectorWeighting[]
}

export interface Holdings {
  request: SymbolRequest
  response: Holding[]
}

export interface Info {
  request: SymbolRequest
  response: {
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
}

export interface List {
  response: ListItem[]
}
