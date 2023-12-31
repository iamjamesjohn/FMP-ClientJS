import { axios } from '../../utils/axios'
import endpoints from '../../json/endpoint-map.json' assert { type: 'json' }
import type { PeersRequest, PeersResult } from './types'
import _ from 'lodash'

const fetchPeers = async (symbols: string[]): Promise<PeersResult[]> => {
  const { data, status } = await axios().get<PeersResult[]>(endpoints.stocks.peers, {
    params: {
      symbol: symbols.join().toUpperCase()
    }
  })

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}

/**
 * @description The FMP Stock Peers endpoint provides a group of companies that trade on the same exchange, are in the same sector, and have a similar market capitalization.
 * @link https://site.financialmodelingprep.com/developer/docs#stock-peers-company-information
 */
export const peers = async (params: PeersRequest): Promise<PeersResult[]> => {
  const chunkedSymbols = _.chunk(params.symbols, 1000)

  const results = await Promise.all(chunkedSymbols.map(fetchPeers))

  return results.flat()
}
