module.exports = {
	collectCoverage: false,
	collectCoverageFrom: ['src/**/*.{js,jsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleFileExtensions: ['js', 'jsx', 'json'],
	transform: {
		'^.+\\.(js|jsx)?$': 'babel-jest',
	},
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/assetsTransformer.js',
		'\\.(css|less)$': '<rootDir>/assetsTransformer.js',
	},
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
		'<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
	],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
