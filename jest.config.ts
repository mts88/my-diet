/* eslint-disable @typescript-eslint/no-var-requires */

const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  rootDir: './',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '.*\\.(spec|test)\\.ts$',
  collectCoverageFrom: ['**/*.(t|j)s', '!**/index.ts'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
    '/src/main.ts',
    '/dist/',
    '/coverage',
    '.eslintrc.js',
    'jest.config.ts',
    'jest.config.js',
  ],
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: './',
        outputName: 'test-report.xml',
      },
    ],
  ],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};
