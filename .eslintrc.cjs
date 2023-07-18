/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    // переменные только константы, not let or var
    "prefer-const": "warn",
    // нет консолям в коде
    "no-console": "warn",
    // одинарные кавычки в коде (кроме classnames), например в src импорта
    quotes: ["error", "single"],
    // двойные ковычки для classnames
    "jsx-quotes": ["warn", "prefer-double"],
    // отступы элементов
    indent: ["warn", 2],
    // максимальная длинна jsx кода в одной строчке
    "max-len": ["warn", { code: 120 }],
    "coma-dangle": ["warn", "always-multiline"],
    // точки с запятой ; после кода
    semi: ["warn", "always"],
    // правила порядка импортов сортировка последовательности в компоненте
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
    // пробелы между импортами
    "newlines-between": "always-and-inside-groups",
  },
};
