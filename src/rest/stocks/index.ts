import chunk from 'lodash/chunk'
import { axios } from '../../utils/axios'
import { financialClient } from '../financial'
import endpoints from '../../lib/endpoint-map.json'
import type { StocksClient, ListResult, ProfileRequest, ProfileResult } from './types.d'

export * from './types.d'

/**
 * @description Find symbols for traded and non-traded stocks with our Symbol List. This comprehensive list includes over 25,000 stocks, making it the perfect resource for investors and traders of all levels.
 * @link https://site.financialmodelingprep.com/developer/docs#symbol-list-stock-list
 */
export const list = async (): Promise<ListResult[]> => {
  const { data, status } = await axios().get<ListResult[]>(endpoints.stocks.list)

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}

/**
 * @description Access data for a company such as 52 week high, 52 week low, market capitalization, and key stats to understand a company finance.
 * @link https://site.financialmodelingprep.com/developer/docs#company-profile-company-information
 */
export const profiles = async (params: ProfileRequest): Promise<ProfileResult[]> =>
  (
    await Promise.all(
      chunk(params.symbols, 1000).map(async (symbols) => {
        const { data, status } = await axios().get<ProfileResult[]>(
          `${endpoints.stocks.profiles}/${symbols.join().toUpperCase()}`
        )

        if (status !== 200) {
          throw new Error(`FinancialModelingPrep responded with status code: ${status}`)
        }

        return data
      })
    )
  ).flat()

export const stocksClient = (): StocksClient => ({
  financial: financialClient(),
  profiles: (args) => profiles(args),
  list: (...args) => list(...args)
})
