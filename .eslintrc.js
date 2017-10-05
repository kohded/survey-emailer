module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'mongo': true,
    'node': true,
    'shared-node-browser': true,
  },
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'impliedStrict': true,
      'jsx': true,
      'modules': true,
    },
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'jsx-a11y',
    'import',
  ],
  'rules': {
    'react/jsx-filename-extension': [
      'error', {
        'extensions': ['.js', '.jsx'],
      },
    ],
  },
};
