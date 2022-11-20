import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutPage from '../pages/AboutUs/AboutPage';

import Carrerpg1 from '../pages/Carrer/Carrerpg1';

import Carrerpg2 from '../pages/Carrer/Carrerpg2';
import Carrerpg3 from '../pages/Carrer/Carrerpg3';

// import Home from '../pages/Home/Home';

import Faqs from '../pages/FAQ/Faqs';

import LandingPage from '../pages/LandingPage';
import RequestSuccessfulSm from '../pages/Request Successful/requestSuccessful';
import Termsofuse from '../pages/TermsOfUse/termsofuse';
import WeRemoveGoogleReview from '../pages/WeRemoveGoogleReview/WeRemoveGoogleReview';
import WeRemoveGoogleSearch from '../pages/WeRemoveGoogleSearch/WeRemoveGoogleSearch';

import Privacy from '../pages/Privacy Policy/Privacy';
import Blog from '../pages/Blog/Blog';
import GlassDoor from '../pages/GlassDoor/GlassDoor';

import Signup from '../Sign/Signup';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/SignUp" element={<Signup />} />

				<Route path="/SignUp" element={<Signup />} />

				<Route path="landing-page" element={<LandingPage />} />

				<Route path="about-us" element={<AboutPage />} />

				<Route path="/" element={<LandingPage />} />

				<Route
					path="we-remove-google-search"
					element={<WeRemoveGoogleSearch />}
				/>

				<Route
					path="we-remove-google-review"
					element={<WeRemoveGoogleReview />}
				/>
				<Route path="/request-successful" element={<RequestSuccessfulSm />} />

				<Route path="terms-of-use" element={<Termsofuse />} />

				<Route path="privacy" element={<Privacy />} />

				<Route path="career-pg-1" element={<Carrerpg1 />} />
				<Route path="carrer-pg-3" element={<Carrerpg3 />} />
				<Route path="carrer-pg-2" element={<Carrerpg2 />} />

				<Route path="FAQ" element={<Faqs />} />

				<Route path="glassdoor" element={<GlassDoor />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
