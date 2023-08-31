module.exports = {
  arrowParens: 'avoid',
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  semi: false,
  printWidth: 90,
  tabWidth: 2,
  jsxBracketSameLine: false,
  endOfLine: 'auto',
  importOrder: [
    '^@core',
    '^pages/(.*)$',
    '^widgets/(.*)$',
    '^features/(.*)$',
    '^entities/(.*)$',
    '^shared/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}

