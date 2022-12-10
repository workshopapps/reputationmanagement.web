import React from 'react';
import { render } from '@testing-library/react';
import App from '../app/app.jsx';

test('should rener app successfully', () => {
	window.scrollTo = jest.fn();
	render(<App />);
});
