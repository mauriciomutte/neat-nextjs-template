module.exports = function (plop) {
	plop.setGenerator('component', {
		description: 'application component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is component name?',
			},
		],
		actions: [
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
				templateFile: 'templates/index.tsx.hbs',
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
				templateFile: 'templates/stories.tsx.hbs',
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/styles.ts',
				templateFile: 'templates/styles.ts.hbs',
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/__tests__/{{pascalCase name}}.spec.tsx',
				templateFile: 'templates/test.tsx.hbs',
			},
		],
	});
};
