import endpoints from '../../json/endpoint-map.json' assert { type: 'json' }
import { axios } from '../../utils/axios'
import type { CountryWeightingRequest, CountryWeightingResult } from './types'

/**
 * @description The FMP ETF Country Weighting endpoint provides a breakdown of the percentage of an ETF's assets that are invested in each country.
 * @link https://site.financialmodelingprep.com/developer/docs#etf-country-weighting-etf-holdings
 */
export const countryWeightings = async (
  params: CountryWeightingRequest
): Promise<CountryWeightingResult[]> => {
  const { data, status } = await axios().get<CountryWeightingResult[]>(
    `${endpoints.etf['country-weightings']}/${params.symbol}`
  )

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
