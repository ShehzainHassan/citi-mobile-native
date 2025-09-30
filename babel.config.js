module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src', './'],
          alias: {
            '@': './src',
            '@/components': './components',
            '@/screens': './src/screens',
            '@/navigation': './src/navigation',
            '@/services': './src/services',
            '@/store': './src/store',
            '@/utils': './src/utils',
            '@/hooks': './hooks',
            '@/types': './src/types',
            '@/constants': './constants',
            '@/assets': './assets',
            '@/config': './src/config',
            '@/i18n': './src/i18n',
            '@/theme': './src/theme',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
