module.exports = {
  extends: 'airbnb',
  // so we can use latest ES6 features not yet supported by ESLint
  parser: "babel-eslint",
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  globals: {
    _: true,
    $: true,
  },
  rules: {
    // caused by incompatible eslint stuff, take out after version hell is over
    'jsx-a11y/href-no-hash': 'off',
    // so that we can export connected and unconnected components for testing
    'import/no-named-as-default': 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  env: {
    browser: true,
    jest: true,
  }
};
