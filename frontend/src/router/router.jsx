import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import LandingPage from '../pages/LandingPage';
import WeRemoveGoogleSearch from '../pages/WeRemoveGoogleSearch/WeRemoveGoogleSearch';
import LawyerDashboard from '../pages/LawyerDashboard/LawyerDashboard';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="landing-page" element={<LandingPage />} />
				<Route path="we-remove-google-search" element={<WeRemoveGoogleSearch />} />
				<Route path="lawyer-dashboard" element={<LawyerDashboard />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
