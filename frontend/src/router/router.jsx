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
import PasswordRecovery from '../pages/PasswordRecovery/passwordRecovery';
import ChangePassword from '../pages/PasswordRecovery/changePassword';

import DashboardPage from '../pages/Dashboard/DashboardPage';

import ErrorPage from '../pages/ErrorPage';
import Ourteam from '../pages/Carrer/Ourteam';

import Profile from '../pages/profile/Profile';
import Settings from '../pages/Settings/Settings';
import Login from '../pages/Login/Login';
import Signup from '../pages/Sign-up/Signup';
import RequireAuth from '../middleware/requireAuth';
import SupportPage from '../pages/Support';
import Contact from '../pages/ContactUs/Contact';
import ModalLayout from '../layout/modalLayout';
import BlogPost from '../pages/Blog/Blog-Post/BlogPost';
import BlogSeeAll from '../pages/Blog/Blog-See All/BlogSeeAll';


const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ModalLayout />}>
					<Route element={<RequireAuth />}>
						<Route path="/dashboard" element={<DashboardPage />} />
						<Route path='/lawyer-dashboard' element={<LawyerDashboard />} />
						<Route path="/settings" element={<Settings />} />
						<Route path='/profile' element={<Profile />}/>
						<Route path="/request-form" element={<RequestForm />} />
						<Route path="/request-successful" element={<RequestSuccessfulSm />} />
					</Route>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/about-us" element={<AboutPage />} />
					<Route
						path="/we-remove-google-search"
						element={<WeRemoveGoogleSearch />}
					/>
					<Route
						path="/we-remove-google-review"
						element={<WeRemoveGoogleReview />}
					/>
					<Route path="/terms-of-use" element={<Termsofuse />} />
					<Route path="/privacy" element={<PrivacyPolicy />} />
					<Route path="/get-a-quote" element={<GetAQuote />} />
					<Route path="/career" element={<Carrerpg1 />} />
					<Route path="/carrer-pg-2" element={<Carrerpg2 />} />
					<Route path="/carrer-pg-2/:id" element={<Carrerpg3 />} />
					<Route path="/FAQ" element={<Faqs />} />
					<Route path="/glassdoor" element={<GlassDoor />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/request-form" element={<RequestForm />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog-post" element={<BlogPost />} />
					<Route path="/blog-see-all" element={<BlogSeeAll />} />

					<Route path="/our-team" element={<Ourteam />} />
					<Route path="/support" element={<SupportPage />} />
					<Route path="/our-team" element={<Ourteam />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/password-recovery" element={<PasswordRecovery />} />
					<Route
						path="/password-recovery/change"
						element={<ChangePassword />}
					/>
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
