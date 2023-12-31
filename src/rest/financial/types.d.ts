export interface FinancialClient {
  statementSymbolList: () => Promise<string[]>
}
