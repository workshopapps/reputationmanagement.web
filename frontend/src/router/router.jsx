import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutUs/AboutPage';
import Carrerpg1 from '../pages/Carrer/Carrerpg1';
import Carrerpg2 from '../pages/Carrer/Carrerpg2';
import Faqs from '../pages/FAQ/Faqs';
import Carrerpg3 from '../pages/Carrer/Carrerpg3';
import LandingPage from '../pages/LandingPage';
import RequestSuccessfulSm from '../pages/Request Successful/requestSuccessful';
import Termsofuse from '../pages/TermsOfUse/termsofuse';
import WeRemoveGoogleReview from '../pages/WeRemoveGoogleReview/WeRemoveGoogleReview';
import WeRemoveGoogleSearch from '../pages/WeRemoveGoogleSearch/WeRemoveGoogleSearch';
import LawyerDashboard from '../pages/LawyerDashboard/LawyerDashboard';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import Blog from '../pages/Blog/Blog';
import GlassDoor from '../pages/GlassDoor/GlassDoor';
import GetAQuote from '../pages/GetAQuote/index';
import RequestForm from '../pages/RequestForm/requestForm';
import Signup from '../Sign/Signup';

import DashboardPage from '../pages/Dashboard/DashboardPage';

import ErrorPage from '../pages/ErrorPage';
import Page1 from '../pages/contactUs/page1';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />

				<Route path="/signup" element={<Signup />} />

				<Route path="about-us" element={<AboutPage />} />

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

				<Route path="privacy" element={<PrivacyPolicy />} />

				<Route path="get-a-quote" element={<GetAQuote />} />

				<Route path="career" element={<Carrerpg1 />} />
				<Route path="carrer-pg-3" element={<Carrerpg3 />} />
				<Route path="carrer-pg-2" element={<Carrerpg2 />} />

				<Route path="FAQ" element={<Faqs />} />

				<Route path="glassdoor" element={<GlassDoor />} />

				<Route path="dashboard" element={<DashboardPage />} />

				<Route path="/requestForm" element={<RequestForm />} />

				<Route path="blog" element={<Blog />} />

				<Route path="/lawyer-dashboard" element={<LawyerDashboard />} />

				<Route path="/" element={<Page1 />} />

				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
