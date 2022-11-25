import { render } from '@testing-library/react';
import App from './app';

test('should rener app successfully', () => {
	window.scrollTo = jest.fn();
	render(<App />);
});
