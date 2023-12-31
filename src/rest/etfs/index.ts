import { request } from '../../utils/request'

import type { CountryWeightings, SectorWeightings, Holdings, Info, List } from './types'

export const countryWeightings = async (params: CountryWeightings['request']) =>
  request<CountryWeightings['response']>({
    apiPath: '/v3/etf-country-weightings/',
    customPaths: [params.symbol]
  })

export const sectorWeightings = async (params: SectorWeightings['request']) =>
  request<SectorWeightings['response']>({
    apiPath: '/v3/etf-sector-weightings/',
    customPaths: [params.symbol]
  })

export const holdings = async (params: Holdings['request']) =>
  request<Holdings['response']>({
    apiPath: '/v3/etf-holder/',
    customPaths: [params.symbol]
  })

export const info = async (params: Info['request']) =>
  request<Info['response']>({
    apiPath: '/v4/etf-info/',
    params: {
      symbol: params.symbol
    }
  })

export const list = async () =>
  request<List['response']>({
    apiPath: '/v3/etf/list/'
  })

export interface ETFClient {
  weighting: {
    countries: (args: CountryWeightings['request']) => Promise<CountryWeightings['response']>
    sectors: (args: SectorWeightings['request']) => Promise<SectorWeightings['response']>
  }
  holdings: (args: Holdings['request']) => Promise<Holdings['response']>
  info: (args: Info['request']) => Promise<Info['response']>
  list: () => Promise<List['response']>
}

export const etfClient = (): ETFClient => ({
  weighting: {
    countries: (...args) => countryWeightings(...args),
    sectors: (...args) => sectorWeightings(...args)
  },
  holdings: (...args) => holdings(...args),
  info: (...args) => info(...args),
  list: () => list()
})
