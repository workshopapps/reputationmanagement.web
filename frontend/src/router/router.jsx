import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LandingPage from '../pages/LandingPage';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="landing-page" element={<LandingPage />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
