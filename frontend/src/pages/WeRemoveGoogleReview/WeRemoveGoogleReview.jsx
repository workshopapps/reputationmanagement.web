import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import WRGRAbout from '../../components/WeRemoveGoogleReview/WRGRAbout';
import WRGRFooter from '../../components/WeRemoveGoogleReview/WRGRFooter';
import WRGRHero from '../../components/WeRemoveGoogleReview/WRGRHero';
import WRGRReview from '../../components/WeRemoveGoogleReview/WRGRReview';
import PageLayout from '../../layout/PageLayout';


const WeRemoveGoogleReview = () => {
	return (
		<>
		<PageLayout>
			<main>
			<WRGRHero/>
			<WRGRAbout/>
			<WRGRReview/>
			<WRGRFooter/>
			</main>
		</PageLayout>
		</>
	);
};

export default WeRemoveGoogleReview;
