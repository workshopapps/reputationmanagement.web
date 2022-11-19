import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Carrerpg1 from '../pages/Carrer/Carrerpg1';

import LandingPage from '../pages/LandingPage';
import RequestSuccessfulSm from '../pages/Request Successful/requestSuccessful';
import WeRemoveGoogleReview from '../pages/WeRemoveGoogleReview/WeRemoveGoogleReview';
import WeRemoveGoogleSearch from '../pages/WeRemoveGoogleSearch/WeRemoveGoogleSearch';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />

				<Route
					path="we-remove-google-search"
					element={<WeRemoveGoogleSearch />}
				/>

				<Route
					path="we-remove-google-review"
					element={<WeRemoveGoogleReview />}
				/>
				<Route path='/request-successful' element={<RequestSuccessfulSm/>}/>
				<Route path="carrer-pg-1" element={<Carrerpg1 />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
