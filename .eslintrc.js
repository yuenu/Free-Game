module.export = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true
},
  "parser": "@typescript-eslint/parser",
  "parserOptions":  {
    "ecmaFeatures": {
        "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
},
  "plugins": ["@typescript-eslint", "react"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "rules": {
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
}
