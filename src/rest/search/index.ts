import endpoints from '../../lib/endpoint-map.json'
import { axios } from '../../utils/axios'
import type {
  CIKNameSearchRequest,
  CIKNameSearchResult,
  CusipSearchRequest,
  CusipSearchResult,
  CIKSearchRequest,
  CIKSearchResult,
  SearchRequest,
  SearchResult,
  SearchClient
} from './types.d'

export * from './types.d'

/**
 * @description Discover CIK numbers for SEC-registered entities with our CIK Name Search.
 * @link https://site.financialmodelingprep.com/developer/docs#cik-name-search-company-search
 */
export const cikName = async (params: CIKNameSearchRequest): Promise<CIKNameSearchResult[]> => {
  const { data, status } = await axios().get<CIKNameSearchResult[]>(
    `${endpoints.search.cikName}/${params.companyName}`
  )

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}

/**
 * @description Quickly find registered company names linked to SEC-registered entities using their CIK Number with our CIK Search..
 * @link https://site.financialmodelingprep.com/developer/docs#cik-search-company-search
 */
export const cik = async (params: CIKSearchRequest): Promise<CIKSearchResult[]> => {
  const { data, status } = await axios().get<CIKSearchResult[]>(
    `${endpoints.search.cik}/${params.cik}`
  )

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}

/**
 * @description Access information about financial instruments and securities by simply entering their unique CUSIP (Committee on Uniform Securities Identification Procedures) numbers with our CUSIP Search.
 * @link https://site.financialmodelingprep.com/developer/docs#cusip-search-company-search
 */
export const cusip = async (params: CusipSearchRequest): Promise<CusipSearchResult[]> => {
  const { data, status } = await axios().get<CusipSearchResult[]>(
    `${endpoints.search.cusip}/${params.cusip}`
  )

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}

/**
 * @description Find ticker symbols and exchange information for equity securities and exchange-traded funds (ETFs) by searching with the company name.
 * @link https://site.financialmodelingprep.com/developer/docs#name-search-company-search
 */
export const name = async (params: SearchRequest): Promise<SearchResult[]> => {
  const { data, status } = await axios().get<SearchResult[]>(endpoints.search.name, {
    params
  })

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}

/**
 * @description Search over 70,000 symbols by symbol name or company name, including cryptocurrencies, forex, stocks, etf and other financial instruments.
 * @link https://site.financialmodelingprep.com/developer/docs#general-search-company-search
 */
export const query = async (params: SearchRequest): Promise<SearchResult[]> => {
  const { data, status } = await axios().get<SearchResult[]>(endpoints.search.query, {
    params
  })

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}

/**
 * @description Find ticker symbols and exchanges for both equity securities and exchange-traded funds (ETFs) by searching with the company name or ticker symbol.
 * @link https://site.financialmodelingprep.com/developer/docs#ticker-search-company-search
 */
export const ticker = async (params: SearchRequest): Promise<SearchResult[]> => {
  const { data, status } = await axios().get<SearchResult[]>(endpoints.search.ticker, {
    params
  })

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}

export const searchClient = (): SearchClient => ({
  cikName: (...args) => cikName(...args),
  ticker: (...args) => ticker(...args),
  query: (...args) => query(...args),
  cusip: (...args) => cusip(...args),
  name: (...args) => name(...args),
  cik: (...args) => cik(...args)
})
