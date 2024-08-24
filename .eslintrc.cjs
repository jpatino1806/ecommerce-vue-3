/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    // "@vue/eslint-config-typescript": "^13.0.0",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
