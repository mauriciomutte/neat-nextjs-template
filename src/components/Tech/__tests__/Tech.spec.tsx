import { render, screen } from 'utils/test-utils';

import Tech from '../Tech';

const props = {
	name: 'Testing-library',
	icon: 'https://github.com/testing-library.png',
};

describe('<Tech />', () => {
	it('should render Tech correctly', () => {
		render(<Tech {...props} />);

		expect(screen.getByRole('heading', { name: props.name })).toBeInTheDocument();
		expect(screen.getByAltText(/testing-library icon/i)).toHaveAttribute('src', props.icon);
	});
});
