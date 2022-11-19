import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import AboutPage from '../pages/AboutUs/AboutPage';
=======

<<<<<<< HEAD
import Carrerpg1 from '../pages/Carrer/Carrerpg1';
>>>>>>> 578671924bb99b0bde59edeac8e228c74e7878ed
import Home from '../pages/Home/Home';

=======
>>>>>>> d007e59c15189be590c571c9ab01b68d77c69707
import LandingPage from '../pages/LandingPage';
import Termsofuse from '../pages/TermsOfUse/termsofuse';
import WeRemoveGoogleReview from '../pages/WeRemoveGoogleReview/WeRemoveGoogleReview';
import WeRemoveGoogleSearch from '../pages/WeRemoveGoogleSearch/WeRemoveGoogleSearch';
import Carrerpg1 from '../pages/Carrer/Carrerpg1';
import Privacy from '../pages/Privacy Policy/Privacy';
import Blog from '../pages/Blog/Blog';

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


				<Route path="terms-of-use" element={<Termsofuse />} />

				<Route path="privacy" element={<Privacy />} />

				<Route path="career" element={<Carrerpg1 />} />

				<Route path="FAQ" element={<Faqs />}/>

				<Route path="carrer-pg-1" element={<Carrerpg1 />} />
<<<<<<< HEAD
>>>>>>> 578671924bb99b0bde59edeac8e228c74e7878ed
=======
				<Route path="blog" element={<Blog />} />

>>>>>>> d007e59c15189be590c571c9ab01b68d77c69707
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
