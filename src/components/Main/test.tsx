import { render, screen } from 'utils/test-utils';
import Main from '.';

describe('<Main />', () => {
	it('should render the heading', () => {
		const { container } = render(<Main />);

		expect(screen.getByRole('heading', { name: /nextjs-playground/i })).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});
});
