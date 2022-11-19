import Header from '../components/Layout/Header';
import Footer from '../components/Reusables/FooterComponents/ReUsableFooter';
import useAppContext from '../hooks/useAppcontext';
import RequestSuccessful from '../modal/request-successful/requestSuccessful';


const PageLayout = ({ children }) => {
	const { requestSuccessfulModalActive } = useAppContext();
	return (
		<main>
			{ requestSuccessfulModalActive &&  <RequestSuccessful/>}
			<Header />
			{children}
			<Footer />
		</main>
	);
};
export default PageLayout;
