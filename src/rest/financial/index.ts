import { request } from '../../utils/request'

export const statementSymbolList = async () =>
  await request<string[]>({
    apiPath: '/v3/financial-statement-symbol-lists/'
  })

export interface FinancialClient {
  statementSymbolList: () => Promise<string[]>
}

export const financialClient = (): FinancialClient => ({
  statementSymbolList: () => statementSymbolList()
})
