import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import WeRemoveGoogleSearch from '../pages/WeRemoveGoogleSearch/WeRemoveGoogleSearch';
import Blog from '../pages/Blog/Blog'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="landing-page" element={<LandingPage />} />
				<Route path="we-remove-google-search" element={<WeRemoveGoogleSearch />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
