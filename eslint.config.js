import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import pluginImport from 'eslint-plugin-import';
import pluginNuxt from 'eslint-plugin-nuxt';

export default createConfigForNuxt([
	pluginNuxt,
	pluginImport,
	{
		ignores: [
			'node_modules/',
			'.nuxt/',
			'.gitignore',
		],
	},
]).override('nuxt/vue/rules', {
	files: ['**/*.{js,mjs,cjs,ts,vue}'],
	rules: {
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'eol-last': ['error', 'always'],
		'indent': ['error', 'tab'],
		'vue/html-indent': ['error', 'tab'],
		'vue/multi-word-component-names': 0,
		'vue/require-default-prop': 'off',
		'vue/max-attributes-per-line': ['error', {
			'singleline': {
				'max': 2,
			},
			'multiline': {
				'max': 1,
			},
		}],
		'comma-dangle': ['error', 'always-multiline'],
		'space-before-function-paren': ['error', 'never'],
		/*
			Rule to control import/export etc.
			Package: eslint-plugin-import
		*/
		'import/order': [
			'error',
			{
				'groups': [
					// Regular imports first
					['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
					// Type imports after them
					['type'],
				],
				'newlines-between': 'always', // Enforce an empty line between different groups
				'alphabetize': {
					'order': 'asc', // Alphabetize imports (optional)
					'caseInsensitive': true,
				},
			},
		],
		/*
			Rule to prevent multiple empty lines
		*/
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 1, // Allow only one empty line
				'maxEOF': 1, // Allow one empty line at the end of the file
			},
		],
		'padding-line-between-statements': [
			'error',
			{
				prev: '*',
				next: 'return',
				blankLine: 'always',
			},
		],
	},
}).overrideRules({
	'vue/no-multiple-template-root': 'off',
});
