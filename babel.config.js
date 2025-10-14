module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
      },
    ],

    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@': './src',
          '@/components': './src/components',
          '@/screens': './src/screens',
          '@/navigation': './src/navigation',
          '@/services': './src/services',
          '@/store': './src/store',
          '@/utils': './src/utils',
          '@/hooks': './src/hooks',
          '@/types': './src/types',
          '@/constants': './src/constants',
          '@/assets': './src/assets',
          '@/config': './src/config',
          '@/i18n': './src/i18n',
          '@/theme': './src/theme',
          '@/styles': './src/styles',
        },
      },
    ],

    'react-native-reanimated/plugin',
  ],
};
