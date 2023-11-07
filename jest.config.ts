/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: [".ts"],
  "transform": {
    "^.+\\.[tj]s$": ["ts-jest", {
      "tsconfig": {
        "allowJs": true
      }
    }],
  },
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/(?!@grupopikul/uwho-usc)"
  ],
};
