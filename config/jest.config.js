module.exports = {
  rootDir: '../',
  setupFiles: ['<rootDir>/config/jest.setup.js'],
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/out/'],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/reports/coverage',
  collectCoverageFrom: [
    '**lib/components/**/*.js',
    '**lib/core/**/*.js',
    '!**lib/components/**/*.mock.js',
    '!**lib/components/**/*.story.js',
    '!**lib/styles/**/*.js',
    '!**/node_modules/**',
  ],
  coverageReporters: ['lcov', 'json', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 55,
      lines: 60,
      statements: -100,
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  verbose: true,
  testMatch: ['<rootDir>/lib/**/*.test.js'],
};
