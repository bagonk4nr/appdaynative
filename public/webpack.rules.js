module.exports = [
  {
    test: /\.m?(tsx|ts|jsx|js)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-flow',
          '@babel/preset-react',
          '@babel/preset-env',
          '@babel/preset-typescript',
        ],
        plugins: [
          '@babel/plugin-transform-react-jsx',
          '@babel/plugin-transform-modules-commonjs',
          '@babel/plugin-syntax-class-properties',
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-syntax-jsx',
          '@babel/plugin-syntax-typescript',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-syntax-json-strings',
          '@babel/plugin-transform-runtime',
        ]
      }
    }
  }
]
