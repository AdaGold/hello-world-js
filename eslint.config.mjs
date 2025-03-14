import globals from "globals";
import js from "@eslint/js";


export default [
  js.configs.recommended,
  { ignores: ["*.config.*"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",   
    },

    rules: {
      "max-len": [1, 120, 2, { "ignoreComments": true }],
      "no-unused-vars": "warn",
      "no-console": "off",
      "comma-dangle": ["warn", "only-multiline"],
      "semi": ["warn", "always"],
      quotes: [2, "single",
        {
          allowTemplateLiterals: true,
          avoidEscape: true,
        },
      ],
      "camelcase": ["error", {"properties": "always"}],
      "dot-notation": "warn",
      "space-before-function-paren": "off",
      "indent": ["warn", 2],
      "padded-blocks": "off",
      "no-trailing-spaces": "warn",
      "array-bracket-spacing": "warn",
      "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
      "no-var": "error",
    },
  },
];
