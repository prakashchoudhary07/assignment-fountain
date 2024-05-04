import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["*.ts"],
    parser: tseslint.configs.recommended.parser,
    parserOptions: tseslint.configs.recommended.parserOptions,
    extends: [
      "plugin:@typescript-eslint/recommended"
    ],
    rules: {}
  }
];