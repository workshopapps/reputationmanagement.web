import React from 'react';
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
import AboutPage from '../pages/AboutPage';
import Carrerpg1 from '../pages/Carrer/Carrerpg1';
import Carrerpg2 from '../pages/Carrer/Carrerpg2';
import Faqs from '../pages/Faqs';
// import LandingPage from '../pages/LandingPage';
import Termsofuse from '../pages/termsofuse';
import WeRemoveGoogleReview from '../pages/WeRemoveGoogleReview';
import WeRemoveGoogleSearch from '../pages/WeRemoveGoogleSearch';
import LawyerDashboard from '../pages/lawyer/LawyerDashboard';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Blog from '../pages/Blog';
import GlassDoor from '../pages/GlassDoor';
import GetAQuote from '../pages/getAQuote';
import RequestForm from '../pages/requestForm';
import PasswordRecovery from '../pages/passwordRecovery';
import ChangePassword from '../pages/changePassword';

import DashboardPage from '../pages/Dashboard';

import ErrorPage from '../pages/ErrorPage';
import Ourteam from '../pages/Ourteam';

import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import RequireAuth, {
	RequireAdminAuth,
	RequireBusinessAuth,
	RequireLawyerAuth,
} from '../middleware/requireAuth';
import SupportPage from '../pages/support';
import Faq from '../pages/Faqs';
import ModalLayout from '../layout/modalLayout';
import BlogPost from '../pages/BlogPost';
import BlogSeeAll from '../pages/BlogSeeAll';
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
import RequestDetails from '../pages/requestDetails';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import LawyerRequestDetails from '../pages/lawyerRequestDetails';
import LawyerLogin from '../pages/lawyer/lawyerLogin';
import LawyerSignup from '../pages/lawyer/lawyerSignup';
import Requests from '../pages/lawyer/request';
import Index2 from '../pages/home';
import CheckEmail from '../pages/checkEmail';
import AdminChatModal from '../modal/chat modal/admin-chat';
import LawyerSettings from '../pages/LawyerSettings';
import Payment from '../pages/payment';
import DisputeDashboard from '../pages/dispute/Disputes';
import { DetailsDispute } from '../pages/dispute/DetailsDispute';
import UserDisputes from '../components/Dashboard/userDisputes';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminLogin from '../pages/admin/adminLogin';
import AdminSignup from '../pages/admin/adminSignUp';
import AdminRequestsPage from '../pages/admin/adminRequests';
import AdminRequestDetails from '../pages/admin/adminRequestDetails';
import ClientPage from '../pages/admin/client';
import LawyersPage from '../pages/admin/lawyers';

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
						<Route element={<RequireLawyerAuth />}>
							<Route path="/lawyer-dashboard" element={<LawyerDashboard />} />
							<Route path="/lawyer-settings" element={<LawyerSettings />} />
							<Route
								path="/lawyer-request-details"
								element={<LawyerRequestDetails />}
							/>
							<Route path="/requests" element={<Requests />} />
							<Route path="/lawyer-disputes" element={<DisputeDashboard />} />
							<Route
								path="/lawyer-dispute-details"
								element={<DetailsDispute />}
							/>
						</Route>
						<Route element={<RequireBusinessAuth />}>
							<Route path="/dashboard" element={<DashboardPage />} />
							<Route path="/request-form" element={<RequestForm />} />
							<Route path="/settings" element={<Settings />} />
							<Route path="/request" element={<RequestDetails />} />
							<Route path="/payment" element={<Payment />} />
						</Route>
						<Route element={<RequireAdminAuth/>}>
							<Route path="/admin/" element={<AdminDashboard />} />
							<Route path="/admin-chat" element={<AdminChatModal />} />
							<Route path="/admin/requests" element={<AdminRequestsPage />} />
							<Route path="/admin/request-details" element={<AdminRequestDetails/>}/>
							<Route path="/admin/clients" element={<ClientPage/>}/>
							<Route path="/admin/lawyers" element={<LawyersPage/>}/>
						</Route>
						<Route path="/profile" element={<Profile />} />
					</Route>
					<Route path="/" element={<Index2 />} />
					<Route path="/disputes" element={<UserDisputes />} />

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
					<Route path="/admin/login" element={<AdminLogin/>}/>
					<Route path="/admin/signup" element={<AdminSignup/>}/>
					<Route path="/check-mail" element={<CheckEmail />} />

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
