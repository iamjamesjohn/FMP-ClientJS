import _, { type AxiosInstance } from 'axios'

export * from 'axios'

// Creates an axios instance with predefined config
export const axios = (): AxiosInstance => {
  return _.create({
    baseURL: process.env.FMP_BASE_URL,
    params: {
      apikey: process.env.FMP_API_KEY
    }
  })
}
