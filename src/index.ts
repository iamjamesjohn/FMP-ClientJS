import restClient, { type RestClient } from './rest'

export * from './axios'

export const fmp = (): RestClient => restClient()

export default fmp
