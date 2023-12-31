import { statementSymbolList } from './statement-symbol-list'

export interface FinancialClient {
  statementSymbolList: () => Promise<string[]>
}

export const financialClient = (): FinancialClient => ({
  statementSymbolList: () => statementSymbolList()
})
