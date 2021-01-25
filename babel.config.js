module.exports = api => {
  api.cache(true);
  return {
    presets: [
      'module:metro-react-native-babel-preset',
      'module:react-native-dotenv',
      '@babel/preset-env',
      '@babel/preset-flow',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      'module-resolver',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-syntax-class-properties',
      '@babel/plugin-syntax-json-strings',
      '@babel/plugin-syntax-jsx',
      '@babel/plugin-syntax-typescript',
      '@babel/plugin-transform-modules-commonjs',
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-transform-runtime',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
        // alias: {
        //   api: './src/api',
        //   assets: './src/assets',
        //   services: './src/services',
        //   styles: './src/styles',
        //   components: './src/components',
        //   app: './src',
        // },
      },
    ],
  };
};
