module.exports = {
	stories: ['../src/components/**/stories.tsx'],
	addons: ['@storybook/addon-essentials'],
	babel: async (config) => ({
		...config,
		plugins: [...config.plugins, require.resolve('@babel/plugin-transform-react-jsx')],
	}),
	webpackFinal: (config) => {
		config.resolve.modules.push(`${process.cwd()}/src`);
		return config;
	},
};
