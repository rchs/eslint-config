module.exports = {
  plugins: [
    "flowtype",
    "react-hooks"
  ],
  extends: [
    "eslint-config-airbnb",
    "eslint-plugin-flowtype/dist/configs/recommended"
  ].map(require.resolve),
  rules: {
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "never"
      }
    ],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "minProperties": 10,
          "multiline": true,
          "consistent": true
        },
        "ObjectPattern": {
          "minProperties": 10,
          "multiline": true,
          "consistent": true
        }
      }
    ],
    "lines-between-class-members": [
      "error",
      "always",
      { "exceptAfterSingleLine": true }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/sort-comp": "off",
    "react/destructuring-assignment": "off",
    "arrow-body-style": ["off"],

    // Checks rules of Hooks
    "react-hooks/rules-of-hooks": "error",

    // Checks effect dependencies
    "react-hooks/exhaustive-deps": "warn",
  }
}