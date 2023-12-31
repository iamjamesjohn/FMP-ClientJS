import endpoints from '../../json/endpoint-map.json' assert { type: 'json' }
import { axios } from '../../utils/axios'
import type { SectorWeightingRequest, SectorWeightingResult } from './types'

/**
 * @description The FMP ETF Sector Weighting endpoint provides a breakdown of the percentage of an ETF's assets that are invested in each sector.
 * @link https://site.financialmodelingprep.com/developer/docs#etf-sector-weighting-etf-holdings
 */
export const sectorWeightings = async (
  params: SectorWeightingRequest
): Promise<SectorWeightingResult[]> => {
  const { data, status } = await axios().get<SectorWeightingResult[]>(
    `${endpoints.etf['sector-weightings']}/${params.symbol}`
  )

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
