module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/todoiman/todoimanTests/**/*.test.{ts,tsx}', '**/todoiman/todoimanTests/**/*.spec.{ts,tsx}'],
};
