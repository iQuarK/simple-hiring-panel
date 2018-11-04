// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  // An array of directory names to be searched recursively up from the requiring module's location
  "moduleDirectories": ["node_modules", "src"],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
      '^.+\\.(css|scss)$': '<rootDir>/config/CSSStub.js'
  },

  // The path to a module that runs some code to configure or set up the testing framework before each test
  setupTestFrameworkScriptFile: "<rootDir>src/setupTests.js",

  // The test environment that will be used for testing
  testEnvironment: "node",

  // Indicates whether each individual test should be reported during the run
  "verbose": true
};