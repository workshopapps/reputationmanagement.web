import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
				<Route path="we-remove-google-search" element={<WeRemoveGoogleSearch />} />
				<Route path="we-remove-google-review" element={<WeRemoveGoogleReview />} />
=======
				<Route path="/" element={<LandingPage />} />
				<Route
					path="we-remove-google-search"
					element={<WeRemoveGoogleSearch />}
				/>
>>>>>>> 6c61ba928bf05e493959aafbe00c135e0bf17574
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
