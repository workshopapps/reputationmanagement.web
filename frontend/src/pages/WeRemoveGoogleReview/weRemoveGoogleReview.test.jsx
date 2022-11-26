import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import WeRemoveGoogleReview from './WeRemoveGoogleReview';

describe('Testing Google Review Components', () => {

test('render The Components of Google Review Properly In the Document', () => {
	render(
		<Router>
			<WeRemoveGoogleReview />
		</Router>
	);

	const WrdrRatingComponent = screen.getByTestId("W-rating");
	const WrdrAboutComponent = screen.getByTestId("W-about");
	const WrdrFooterComponent = screen.getByTestId("W-footer");
	const WrdrHeroComponent = screen.getByTestId("W-hero");
	const WrdrReviewComponent = screen.getByTestId("W-review");

	expect(WrdrRatingComponent).toBeInTheDocument();
	expect(WrdrAboutComponent).toBeInTheDocument();
	expect(WrdrFooterComponent).toBeInTheDocument();
	expect(WrdrHeroComponent).toBeInTheDocument();
	expect(WrdrReviewComponent).toBeInTheDocument();
});

});