import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import AboutPage from '../pages/AboutUs/AboutPage';
=======

import Carrerpg1 from '../pages/Carrer/Carrerpg1';
>>>>>>> 578671924bb99b0bde59edeac8e228c74e7878ed
import Home from '../pages/Home/Home';

import LandingPage from '../pages/LandingPage';
import WeRemoveGoogleReview from '../pages/WeRemoveGoogleReview/WeRemoveGoogleReview';
import WeRemoveGoogleSearch from '../pages/WeRemoveGoogleSearch/WeRemoveGoogleSearch';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
<<<<<<< HEAD
				<Route path="/" element={<Home />} />
				<Route path="landing-page" element={<LandingPage />} />
				<Route path="about-us" element={<AboutPage />} />
=======
				<Route path="/" element={<LandingPage />} />

				<Route
					path="we-remove-google-search"
					element={<WeRemoveGoogleSearch />}
				/>

				<Route
					path="we-remove-google-review"
					element={<WeRemoveGoogleReview />}
				/>

				<Route path="carrer-pg-1" element={<Carrerpg1 />} />
>>>>>>> 578671924bb99b0bde59edeac8e228c74e7878ed
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
