# Financial Modeling Prep

This module is a node wrapper for the [Financial Modeling Prep API](https://site.financialmodelingprep.com/developer).

## About FinancialModelingPrep

Financial Modeling Prep API provides real time stock price, company financial statements, major index prices, stock historical data, forex real time rate and cryptocurrencies. Financial Modeling Prep stock price API is in real time, the company reports can be found in quarter or annual format, and goes up to 30 years back in history.. The complete API documentation is available [here](https://site.financialmodelingprep.com/developer/docs)..

I have no affiliation with FinancialModelingPrep and its web API development.

## Usage

To use this module first create an account with [FinancialModelingPrep](https://financialmodelingprep.com/developer/docs/pricing/) and retrieve your API key.

```js
import fmp from 'fmp-clientjs'

// Simple Examples

// API route: /search?query=AAPL
const results = await fmp.search.query({ query: 'AAPL', limit: 10 })
```

## API Documentation

### Stocks

Accessed through `fmp.stocks.{method_name}`

```js
profiles() // /profile
list() // /stock/list
```

### Financials

Accessed through `fmp.stocks.financial.{method_name}`

```js
statementSymbolList() // /financial-statement-symbol-lists
```

### ETF

Accessed through `fmp.etf.{method_name}`

```js
list() // /etf/list
```

### Search

Accessed through `fmp.search.{method_name}`

```js
cikName() // /cik-search
cik() // /cik
cusip() // /cusip
name() // /search-name
query() // /search
ticker() // /search-ticker
```

# Contributing

Contributions are welcome! The purpose of this package is to create a node wrapper that closely aligns to the financial API provided by Financial Modeling Prep. If there are any features that are vital and I may have forgotten, feel free to open an issue or complete it by opening a pull request.
