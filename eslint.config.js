import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@root", path.resolve(__dirname, "src")],
            ["@atoms", path.resolve(__dirname, "src/components/atoms")],
            ["@molecules", path.resolve(__dirname, "src/components/molecules")],
            ["@organisms", path.resolve(__dirname, "src/components/organisms")],
            ["@templates", path.resolve(__dirname, "src/components/templates")],
            ["@pages", path.resolve(__dirname, "src/components/pages")],
            ["@meta", path.resolve(__dirname, "src/components/meta")],
          ],
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        },
      },
    },
  },
];
