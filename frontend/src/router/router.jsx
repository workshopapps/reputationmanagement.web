import React, { useEffect } from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	useLocation,
	useNavigationType,
	createRoutesFromChildren,
	matchRoutes,
} from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import AboutPage from '../pages/AboutUs/AboutPage';
import Carrerpg1 from '../pages/Carrer/Carrerpg1';
import Carrerpg2 from '../pages/Carrer/Carrerpg2';
import Faqs from '../pages/FAQ/Faqs';
import LandingPage from '../pages/LandingPage';
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
import Login from '../pages/Login/LoginCopy';
import Signup from '../pages/Sign-up/SignupCopy';
import RequireAuth from '../middleware/requireAuth';
import SupportPage from '../pages/Support';
import Faq from '../pages/FAQ/Faqs';
import ModalLayout from '../layout/modalLayout';
import BlogPost from '../pages/Blog/Blog-Post/BlogPost';
import BlogSeeAll from '../pages/Blog/Blog-See All/BlogSeeAll';
import Job1 from '../pages/Carrer/Job1';
import Job2 from '../pages/Carrer/Job2';
import Job3 from '../pages/Carrer/Job3';
import Job4 from '../pages/Carrer/Job4';
import Job5 from '../pages/Carrer/Job5';
import Job6 from '../pages/Carrer/Job6';
import Job7 from '../pages/Carrer/Job7';
import Job8 from '../pages/Carrer/Job8';
import Job9 from '../pages/Carrer/Job9';
import Job10 from '../pages/Carrer/Job10';
import Job11 from '../pages/Carrer/Job11';
import Job12 from '../pages/Carrer/Job12';
import RequestDetails from '../pages/Request Details/requestDetails';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import LawyerRequestDetails from '../pages/Request Details/lawyerRequestDetails';
import LawyerLogin from '../pages/Login/lawyerLogin';
import LawyerSignup from '../pages/Sign-up/lawyerSignup';
import Requests from '../pages/LawyerDashboard/request';
import Index2 from '../pages/LandingPage/index2';

Sentry.init({
	integrations: [
		new BrowserTracing({
			routingInstrumentation: Sentry.reactRouterV6Instrumentation(
				React.useEffect,
				useLocation,
				useNavigationType,
				createRoutesFromChildren,
				matchRoutes
			),
		}),
	],
	tracesSampleRate: 1.0,
});

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

const Router = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<SentryRoutes>
				<Route element={<ModalLayout />}>
					<Route element={<RequireAuth />}>
						<Route path="/dashboard" element={<DashboardPage />} />
						{/* <Route path="/lawyer-dashboard" element={<LawyerDashboard />} /> */}
						<Route path="/settings" element={<Settings />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/request-form" element={<RequestForm />} />
						<Route path="/request" element={<RequestDetails />} />
						<Route
							path="/lawyer-request-details"
							element={<LawyerRequestDetails />}
						/>
						<Route path="/requests" element={<Requests />} />
					</Route>
					<Route path="/" element={<Index2 />} />
					{/* <Route path="/" element={<LandingPage />} /> */}
					<Route path="/lawyer-login" element={<LawyerLogin />} />
					<Route path="/lawyer-signup" element={<LawyerSignup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/about-us" element={<AboutPage />} />
					<Route
						path="/we-remove-google-search"
						element={<WeRemoveGoogleSearch />}
					/>
					<Route path="/lawyer-dashboard" element={<LawyerDashboard />} />

					<Route
						path="/we-remove-google-review"
						element={<WeRemoveGoogleReview />}
					/>
					<Route path="/terms-of-use" element={<Termsofuse />} />
					<Route path="/privacy" element={<PrivacyPolicy />} />
					<Route path="/get-a-quote" element={<GetAQuote />} />
					<Route path="/career" element={<Carrerpg1 />} />
					<Route path="/job1" element={<Job1 />} />
					<Route path="/job2" element={<Job2 />} />
					<Route path="/job3" element={<Job3 />} />
					<Route path="/job4" element={<Job4 />} />
					<Route path="/job5" element={<Job5 />} />
					<Route path="/job6" element={<Job6 />} />
					<Route path="/job7" element={<Job7 />} />
					<Route path="/job8" element={<Job8 />} />
					<Route path="/job9" element={<Job9 />} />
					<Route path="/job10" element={<Job10 />} />
					<Route path="/job11" element={<Job11 />} />
					<Route path="/job12" element={<Job12 />} />

					<Route path="/carrer-pg-2" element={<Carrerpg2 />} />
					{/* <Route path="/carrer-pg-2/:id" element={<job1 />} /> */}
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
					<Route path="/contact" element={<Faq />} />
					<Route path="/password-recovery" element={<PasswordRecovery />} />
					<Route
						path="/password-recovery/change"
						element={<ChangePassword />}
					/>
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</SentryRoutes>
		</BrowserRouter>
	);
};
export default Router;
