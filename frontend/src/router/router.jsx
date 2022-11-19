import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutUs/AboutPage';
import Home from '../pages/Home/Home';
import LandingPage from '../pages/LandingPage';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="landing-page" element={<LandingPage />} />
				<Route path="about-us" element={<AboutPage />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
