# Sharable eslint & prettier configs
Consumer repository will need to explicitly install peer dependencies
```
npm i -D eslint-config-vytalyi --legacy-peer-deps

npm i -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser astro-eslint-parser eslint-config-prettier eslint-config-standard-with-typescript eslint-plugin-import eslint-plugin-n eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react prettier-plugin-astro
```

## .eslintrc.js

```js
module.exports = {
  extends: ['eslint-config-vytalyi/eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
}
```

## .prettierrc.js

```js
module.exports = {
  ...require('eslint-config-vytalyi/prettier'),
};
```