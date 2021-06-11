import { render, screen } from 'utils/test-utils';

import Main from '../Main';

describe('<Main />', () => {
	it('should render Main', () => {
		render(<Main />);

		expect(screen.getByRole('heading', { name: /next\.js playground/i })).toBeInTheDocument();
		expect(screen.getByAltText(/NextJS illustration/gi)).toHaveAttribute('src', '/img/nextjs-illustration.svg');
	});
});
