export interface MarketOpenResult {
  isTheEuronextMarketOpen: boolean
  isTheCryptoMarketOpen: boolean
  isTheStockMarketOpen: boolean
  isTheForexMarketOpen: boolean
  stockExchangeName: string
  stockMarketHours: {
    openingHour: string
    closingHour: string
  }
  stockMarketHolidays: Array<{
    year: number
    [key: string]: string | number
  }>
}
