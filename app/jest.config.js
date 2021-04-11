module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(t|j)sx?$': 'ts-jest',
    },
    collectCoverageFrom: ['<rootDir>/**/*.ts'],
    testRegex: '/__tests__/.*\\.(ts|tsx)$',
    coveragePathIgnorePatterns: ['/node_modules/', 'integration-test'],
    moduleNameMapper: {
        '^~(.*)$': '<rootDir>/$1',
    },
}
