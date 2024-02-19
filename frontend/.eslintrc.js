module.exports = {
  parser: "@babel/eslint-parser",

  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "prettier",
    // "plugin:react/recommended",
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
      // your babel options
      presets: ["@babel/preset-env"],
      parserOpts: {
        plugins: ["jsx"],
      },
    },
  },
  plugins: ["react", "jsx"],
  rules: {
    "indent": ["error", 2],
    "linebreak-style": 0, //
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-unused-vars": "off",
  },
};
