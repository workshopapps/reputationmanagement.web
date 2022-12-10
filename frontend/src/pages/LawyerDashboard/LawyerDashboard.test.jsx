import React from 'react';
import { render, screen } from '@testing-library/react';
import LawyerDashboard from './LawyerDashboard';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from '../../context/appContext';

test('should render non-dynamic contents to be displayed correctly', () => {
	window.scrollTo = jest.fn();
	render(
		<Router>
			<AppProvider>
				<LawyerDashboard />
			</AppProvider>
		</Router>
	);
	const totalRequest = screen.getByText(/Total requests/i);
	const successfulRemovals = screen.getByText(/Successful removals/i);
	const failedRemovals = screen.getByText(/Failed removals/i);
	// const currentTickets = screen.getByText(/Current Tickets/i);
	expect(totalRequest).toBeInTheDocument();
	expect(successfulRemovals).toBeInTheDocument();
	expect(failedRemovals).toBeInTheDocument();
	// expect(currentTickets).toBeInTheDocument();
});

// test('should render the table correctly', () => {
// 	render(
// 		<Router>
// 			<AppProvider>
// 				<LawyerDashboard />
// 			</AppProvider>
// 		</Router>
// 	);
// 	const table = screen.getByRole('table');
// 	expect(table).toBeInTheDocument();
// });
