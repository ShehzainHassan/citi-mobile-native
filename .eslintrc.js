// ESLint configuration for React Native with Expo
// Compatible with ESLint v8 and React 18
module.exports = {
  root: true,
  extends: [
    "expo",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-native/all",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "react-native",
    "prettier",
  ],
  env: {
    "react-native/react-native": true,
    es2022: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react-native/no-color-literals": "off",
    // Prettier integration
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],

    // TypeScript rules
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-namespace": "off",

    // React rules
    "react/react-in-jsx-scope": "off", // Not needed in React 18+
    "react/prop-types": "off", // Using TypeScript for type checking
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // React Native specific
    "react-native/no-inline-styles": "off",
    "react-native/no-unused-styles": "off",
    "react-native/split-platform-components": "warn",
    "react-native/no-raw-text": "off", // Can be too strict

    // General code quality
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "prefer-const": "warn",
    "no-var": "error",
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    ".expo/",
    "android/",
    "ios/",
    "babel.config.js",
    "metro.config.js",
    "*.config.js",
  ],
};
