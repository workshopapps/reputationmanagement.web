import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './index';

describe('Test all sections in the documents renders properly', () => {

test('render Get started text in landing page', () => {
	render(
		<Router>
			<LandingPage />
		</Router>
	);
	const landingHeroSection = screen.getByTestId('Landing-hero');
	const landingHowItWorks = screen.getByTestId('Landing-howitworks');
	const landingFooter = screen.getByTestId('Landing-footer');
	

	expect(landingHeroSection).toBeInTheDocument();
	expect(landingHowItWorks).toBeInTheDocument();
	expect(landingFooter).toBeInTheDocument();
});

});

