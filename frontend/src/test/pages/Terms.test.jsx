import React from 'react';
import { render, screen } from '@testing-library/react';
import TermsOfUse from '../../pages/termsofuse';
import { BrowserRouter as Router } from 'react-router-dom';

test('should render Terms of Use Page', () => {
	window.scrollTo = jest.fn();
	render(
		<Router>
			<TermsOfUse />
		</Router>
	);
	const terms = screen.getByTestId('terms');
	expect(terms).toBeInTheDocument();
});
test('Heading text should be present', () => {
	window.scrollTo = jest.fn();
	render(
		<Router>
			<TermsOfUse />
		</Router>
	);
	const HeadText = screen.getByTestId('headingtext');
	expect(HeadText).toBeInTheDocument();
});
