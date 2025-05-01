module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // mock CSS/SASS
    "\\.(css|scss)$": "identity-obj-proxy",
    // mock image imports to fileMock.js (you should already have this)
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    // mock next/image
    "^next/image$": "<rootDir>/__mocks__/next/image.js",
    // your path aliases
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/services/(.*)$": "<rootDir>/services/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
};
