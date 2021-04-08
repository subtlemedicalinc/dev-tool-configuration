<!-- @format -->

# `@subtlemedicalinc/eslint-config`

The ESLint configuration, which includes support for TypeScript.

## Usage

Include the following as a top-level field in your `package.json`:

```
  "eslintConfig": {
    "extends": "@subtlemedicalinc",
    "parserOptions": {
      "tsconfigRootDir": ".",
      "project": [
        "./tsconfig.json"
      ]
    }
  }
```

Then install it:

```
npm install --save-dev eslint @subtlemedicalinc/eslint-config
```

or

```
yarn add --dev eslint @subtlemedicalinc/eslint-config
```

If you get an error saying "The file must be included in at least one of the
projects provided", then
[see the explanation and fixes here](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#i-get-errors-telling-me-the-file-must-be-included-in-at-least-one-of-the-projects-provided).

### Typescript Version Note

This package has a `peerDependency` of `typescript@3.3.1 - 4.2.x`, because of
[the supported TypeScript version as of this writing](https://github.com/typescript-eslint/typescript-eslint#supported-typescript-version).
