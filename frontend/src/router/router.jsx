import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrerpg1 from '../pages/Carrer/Carrerpg1';
import GetAQuote from '../pages/GetAQuote';
import Home from '../pages/Home/Home';
import LandingPage from '../pages/LandingPage';
import WeRemoveGoogleSearch from '../pages/WeRemoveGoogleSearch/WeRemoveGoogleSearch';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="landing-page" element={<LandingPage />} />
				<Route path="we-remove-google-search" element={<WeRemoveGoogleSearch />} />

				<Route path="/" element={<LandingPage />} />
				<Route path="/" element={<Home />} />
				<Route path="landing-page" element={<LandingPage />} />
				<Route
					path="we-remove-google-search"
					element={<WeRemoveGoogleSearch />}
				/>
				<Route
					path="we-remove-google-review"
					element={<WeRemoveGoogleReview />}
				/>

				<Route path="carrer-pg-1" element={<Carrerpg1 />} />
				<Route path="get-a-quote" element={<GetAQuote />} />

			</Routes>
		</BrowserRouter>
	);
};
export default Router;
