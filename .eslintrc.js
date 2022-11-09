module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	globals: {
		JSX: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'xo',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
	],
	rules: {
		'object-curly-spacing': ['error', 'always'],
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],
		'@typescript-eslint/no-unused-vars': 'error',
		'no-unused-vars': 'off',
	},
};
