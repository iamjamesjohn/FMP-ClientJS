import { axios } from '../../utils/axios'
import endpoints from '../../json/endpoint-map.json' assert { type: 'json' }
import type { FullQuoteRequest, FullQuoteResult } from './types'
import _ from 'lodash'

const fetchQuotes = async (symbols: string[]): Promise<FullQuoteResult[]> => {
  const { data, status } = await axios().get(
    `${endpoints.quotes.full}/${symbols.join().toUpperCase()}`
  )

  if (status !== 200) {
    throw new Error(`FinancialModelingPrep responded with status code: ${status}`)
  }

  return data
}

/**
 * @description This endpoint gives you the latest bid and ask prices for a stock, as well as the volume and last trade price in real time.
 * @link https://site.financialmodelingprep.com/developer/docs#full-quote-quote
 */
export const full = async (params: FullQuoteRequest): Promise<FullQuoteResult[]> => {
  const chunkedSymbols = _.chunk(params.symbols, 1000)

  const quotes = await Promise.all(chunkedSymbols.map(fetchQuotes))

  return quotes.flat()
}
