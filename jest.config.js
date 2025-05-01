module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // Mock CSS/SASS files
    "\\.(css|scss)$": "identity-obj-proxy",
    // Mock image imports
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    // Mock next/image
    "^next/image$": "<rootDir>/__mocks__/next/image.js",
    // Path aliases for components/services
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/services/(.*)$": "<rootDir>/services/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.test.json",
    },
  },
};
