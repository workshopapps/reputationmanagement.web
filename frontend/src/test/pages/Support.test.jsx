import { render, screen } from '@testing-library/react';
import React from 'react';
import SupportPage from '.';
import { BrowserRouter as Router } from 'react-router-dom';

test('render All supportPage component in the document properly', () => {
	window.scrollTo = jest.fn();
	render(
		<Router>
			<SupportPage />
		</Router>
	);

	const articleComponent = screen.getByTestId('article-element');
	const heroComponent = screen.getByTestId('heros-element');
	const questionComponent = screen.getByTestId('question-element');

	expect(heroComponent).toBeInTheDocument();
	expect(articleComponent).toBeInTheDocument();
	expect(questionComponent).toBeInTheDocument();
});
