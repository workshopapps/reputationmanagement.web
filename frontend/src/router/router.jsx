import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import LandingPage from '../pages/LandingPage';
import WeRemoveGoogleSearch from '../pages/WeRemoveGoogleSearch/WeRemoveGoogleSearch';

import DashboardPage from '../pages/Dashboard/DashboardPage';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="landing-page" element={<LandingPage />} />
				<Route
					path="we-remove-google-search"
					element={<WeRemoveGoogleSearch />}
				/>

				<Route path="dashboard" element={<DashboardPage />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
