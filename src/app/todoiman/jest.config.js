// jest.config.js

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // This is the most crucial part, as it ensures all relevant files are transformed
  transform: {
    '^.+\\.(t|j)sx?$': ['ts-jest', {
      // Explicitly pointing to your tsconfig.json file
      tsconfig: 'C:/todopraksa/tsconfig.json',
      // This is a common fix for module resolution issues
      isolatedModules: true,
    }],
  },
  // This helps Jest resolve module imports correctly, especially in Next.js projects
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  // This ensures that some node_modules are not ignored, which can cause issues with testing libraries
  transformIgnorePatterns: [
    '/node_modules/(?!@testing-library/react|@testing-library/jest-dom).*/',
  ],
};