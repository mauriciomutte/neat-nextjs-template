import { Meta, Story } from '@storybook/react/types-6-0';

import Tech, { TechProps } from './Tech';

export default {
	title: 'Tech',
	component: Tech,
} as Meta;

export const Default: Story<TechProps> = (args) => <Tech {...args} />;

Default.args = {
	name: 'Testing-library',
	icon: 'https://github.com/testing-library.png',
};
