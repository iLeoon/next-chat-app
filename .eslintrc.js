module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "linebreak-style": 0,
    "import/extensions": ["error", "never"],
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": false, "optionalDependencies": false, "peerDependencies": false }],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase", "PascalCase"]
      }
    ]
  },
};
