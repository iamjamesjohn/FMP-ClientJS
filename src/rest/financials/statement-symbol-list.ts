import { axios } from '../../utils/axios'

/**
 * @description This endpoint allows you to get a list of all companies for which the API has financial statements.
 * @link https://site.financialmodelingprep.com/developer/docs#statement-symbols-list-stock-list
 */
export const statementSymbolList = async (): Promise<string[]> => {
  const API_PATH = `/financial-statement-symbol-lists`

  const { data, status } = await axios().get<string[]>(API_PATH)

  if (status !== 200) throw new Error(`FinancialModelingPrep responded with status code: ${status}`)

  return data
}
