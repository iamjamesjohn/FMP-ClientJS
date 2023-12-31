import chunk from 'lodash/chunk'
import { axios } from '../../utils/axios'
import endpoints from '../../lib/endpoint-map.json'
import type { ProfileRequest, ProfileResult } from './types.d'

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
