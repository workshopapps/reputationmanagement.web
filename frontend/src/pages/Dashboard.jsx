import React from 'react';
import { useEffect } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';

const DashboardPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return <Dashboard />;
};

export default DashboardPage;
