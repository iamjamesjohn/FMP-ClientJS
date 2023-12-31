import _ from 'lodash'
import { axios } from '../../utils/axios'
import endpoints from '../../json/endpoint-map.json' assert { type: 'json' }
import type { ProfileRequest, ProfileResult } from './types'

const fetchProfiles = async (symbols: string[]): Promise<ProfileResult[]> => {
  const { data, status } = await axios().get<ProfileResult[]>(
    `${endpoints.stocks.profiles}/${symbols.join().toUpperCase()}`
  )

  if (status !== 200) {
    throw new Error(`FinancialModelingPrep responded with status code: ${status}`)
  }

  return data
}

/**
 * @description Access data for a company such as 52 week high, 52 week low, market capitalization, and key stats to understand a company finance.
 * @link https://site.financialmodelingprep.com/developer/docs#company-profile-company-information
 */
export const profiles = async (params: ProfileRequest): Promise<ProfileResult[]> => {
  const chunkedSymbols = _.chunk(params.symbols, 1000)

  const results = await Promise.all(chunkedSymbols.map(fetchProfiles))

  return results.flat()
}
