module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.ios.tsx', '.android.js', '.android.tsx', '.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '~': './src',
        },
      },
    ],
  ],
};
