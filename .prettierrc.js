module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        semi: true,
        tabWidth: 2,
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
      },
    },
    {
      files: ['*.js', '*.cjs', '*.mjs', '*.ts', '*.tsx'],
      options: {
        semi: true,
        tabWidth: 2,
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
        jsxSingleQuote: true,
        bracketSpacing: true,
      },
    },
  ],
};
