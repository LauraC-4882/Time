module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "prettier",
    "plugin:react/recommended",
    // "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ["@babel/preset-env"],
      parserOpts: {
        plugins: ["jsx"],
      },
    },
  },
  plugins: ["react", "jsx"],
  rules: {
    "indent": ["error", 2],
    "linebreak-style": 0,
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-unused-vars": "off",
    // React-specific rules
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "error",
    "react/jsx-key": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/no-direct-mutation-state": "error",
    "react/react-in-jsx-scope": "off", // Turn this off for React 17+ which doesn't require React to be in scope
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
};
