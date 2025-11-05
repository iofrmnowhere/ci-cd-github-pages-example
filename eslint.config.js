// eslint.config.js
import globals from "globals";
import js from "@eslint/js";

export default [
  // 1. Place the configuration you want to extend (recommended rules) first in the array.
  js.configs.recommended,

  // 2. Then, place your custom configuration object.
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    // The "extends" keyword is GONE.
    rules: {
      // 🚨 This rule enforces the semicolon (your intentional failure condition)
      semi: ["error", "always"],
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
