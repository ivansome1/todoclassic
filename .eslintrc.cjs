module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    // "eslint:recommended",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:react-hooks/recommended",
    "@feature-sliced/eslint-config/rules/public-api",
    "@feature-sliced/eslint-config/rules/layers-slices",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
};
