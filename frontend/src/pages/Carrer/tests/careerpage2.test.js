import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import Carrerpg2 from '../Carrerpg2';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
test('Expect Search input to be empty onload', () => {
	render(
		<Router>
			<Carrerpg2 />
		</Router>
	);
	const SearchElem = screen.getByTestId('search').value;

	expect(SearchElem).toBe('');
});

test('Expect Filter input to be have value of /'/' onload', () => {
	render(
		<Router>
			<Carrerpg2 />
		</Router>
	);
	const FilterElem1 = screen.getByTestId('filter1').value;
	const FilterElem2 = screen.getByTestId('filter2').value;
	expect(FilterElem1).toBe('');
	expect(FilterElem2).toBe('');
});
