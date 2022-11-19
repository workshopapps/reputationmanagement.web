import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Carrerpg1 from '../pages/Carrer/Carrerpg1';
import Home from '../pages/Home/Home';

import LandingPage from '../pages/LandingPage';
import WeRemoveGoogleReview from '../pages/WeRemoveGoogleReview/WeRemoveGoogleReview';
import WeRemoveGoogleSearch from '../pages/WeRemoveGoogleSearch/WeRemoveGoogleSearch';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="landing-page" element={<LandingPage />} />

				<Route path="we-remove-google-search" element={<WeRemoveGoogleSearch />} />
				<Route path="we-remove-google-review" element={<WeRemoveGoogleReview />} />

				<Route
					path="we-remove-google-search"
					element={<WeRemoveGoogleSearch />}
				/>

				<Route path="carrer-pg-1" element={<Carrerpg1 />} />

				<Route path="FAQ" element={<Faqs />}/>

			</Routes>
		</BrowserRouter>
	);
};
export default Router;
