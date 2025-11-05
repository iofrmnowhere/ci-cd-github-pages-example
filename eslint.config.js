// eslint.config.js
import globals from "globals";
import js from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      // Combines browser, jest, and ES module settings
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    // Extends the standard recommended rules
    extends: [js.configs.recommended],
    rules: {
      // 🚨 This enforces the semicolon rule (the original failure condition)
      semi: ["error", "always"],
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
