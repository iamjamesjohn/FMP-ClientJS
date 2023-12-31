import axios, { type AxiosRequestConfig } from 'axios'

export interface RequestParams {
  apiPath: string
  customPaths?: string[]
  params?: Record<string, string | number>
}

export const request = async <T>({
  customPaths = [],
  params = {},
  apiPath
}: RequestParams): Promise<T> => {
  const url = `${apiPath}${customPaths.join('/')}`

  const config: AxiosRequestConfig = {
    method: 'GET',
    params: {
      apikey: process.env.FMP_API_KEY,
      ...params
    },
    baseURL: process.env.FMP_BASE_URL,
    url
  }
  const { data, status } = await axios(config)

  if (status !== 200) {
    throw new Error(`Request to ${url} failed with status code: ${status}`)
  }

  return data as T
}
