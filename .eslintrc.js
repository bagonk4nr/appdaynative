module.exports = {
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      arrowFunctions: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'spellcheck'],
  settings: {
    'react': {
        'createClass': 'createReactClass', // Regex for Component Factory to use,
                                           // default to 'createReactClass'
        'pragma': 'React',  // Pragma to use, default to 'React'
        'fragment': 'Fragment',  // Fragment to use (may be a property of <pragma>), default to 'Fragment'
        'version': 'detect', // React version. 'detect' automatically picks the version you have installed.
                             // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                             // default to latest and warns if missing
                             // It will default to 'detect' in the future
        'flowVersion': '0.53' // Flow version
      },
      'propWrapperFunctions': [
          // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
          'forbidExtraProps',
          {'property': 'freeze', 'object': 'Object'},
          {'property': 'myFavoriteWrapper'}
      ],
      'linkComponents': [
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        'Hyperlink',
        {'name': 'Link', 'linkAttribute': 'to'}
      ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./src'],
      },
    },
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'prettier/prettier':[
      0,
      // {
      //   endOfLine: 'auto',
      //   semi: false,
      //   singleQuote: true,
      //   tabWidth: 2,
      //   trailingComma: 'es5'
      // }
    ],
    'spellcheck/spell-checker': [
        1,
        {
          comments: false,
          strings: true,
          identifiers: false,
          lang: 'en_US',
          skipWords: ['dict', 'aff', 'hunspellchecker', 'hunspell', 'utils', 'aws'],
          skipIfMatch: [
            'http://[^s]*',
            '^[-\\w]+/[-\\w\\.]+$', // For MIME Types
          ],
          skipWordIfMatch: [
            '^foobar.*$', // words that begin with foobar will not be checked
          ],
          minLength: 4,
        },
      ],
    'no-constant-condition': ['error', { 'checkLoops': false }],
    // Existing rules
    'comma-dangle': 'off', // https://eslint.org/docs/rules/comma-dangle
    'function-paren-newline': 'off', // https://eslint.org/docs/rules/function-paren-newline
    'global-require': 'off', // https://eslint.org/docs/rules/global-require
    'import/no-dynamic-require': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'no-inner-declarations': 'off', // https://eslint.org/docs/rules/no-inner-declarations
    // New rules
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'eslint-disable-next-line': 'off',
  },
};
