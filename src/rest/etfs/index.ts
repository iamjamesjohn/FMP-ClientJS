import { countryWeightings } from './country-weightings'
import { holdings } from './holdings'
import { info } from './info'
import { list } from './list'
import { sectorWeightings } from './sector-weightings'

import type {
  CountryWeightingRequest,
  CountryWeightingResult,
  HoldingRequest,
  HoldingResult,
  InfoRequest,
  InfoResult,
  ListResult,
  SectorWeightingRequest,
  SectorWeightingResult
} from './types'

export interface ETFClient {
  countryWeightings: (args: CountryWeightingRequest) => Promise<CountryWeightingResult[]>
  sectorWeightings: (args: SectorWeightingRequest) => Promise<SectorWeightingResult[]>
  holdings: (args: HoldingRequest) => Promise<HoldingResult[]>
  info: (args: InfoRequest) => Promise<InfoResult[]>
  list: () => Promise<ListResult[]>
}

export const etfClient = (): ETFClient => ({
  countryWeightings: (...args) => countryWeightings(...args),
  sectorWeightings: (...args) => sectorWeightings(...args),
  holdings: (...args) => holdings(...args),
  info: (...args) => info(...args),
  list: () => list()
})
