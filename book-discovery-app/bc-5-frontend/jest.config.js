module.exports = {
    collectCoverageFrom: ["**/*.{js,jsx}"],
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
    transform: {
      "^.+\\.js?$": "./node_modules/babel-jest",
      "^.+\\.svg$": "<rootDir>/svgTransform.js",
      "^.+\\.jpg$": "<rootDir>/svgTransform.js",
      "^.+\\.png$": "<rootDir>/svgTransform.js"
    },
    moduleNameMapper: {
      ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
      "src(.*)$": "<rootDir>/src$1",
    },
    reporters: [
      "default",
      [
        "./node_modules/jest-html-reporter",
        {
          pageTitle: "Test Report",
        },
      ],
    ],
    // setupFiles: ["./config/setupTests.js"],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  };