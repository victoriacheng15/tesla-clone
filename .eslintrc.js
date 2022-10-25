module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "func-names": 0,
    "import/prefer-default-export": 0,
    "react/function-component-definition": 0,
    "react/prop-types": 0,
  },
};
