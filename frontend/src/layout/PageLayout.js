import Header from '../components/Layout/Header';
import Footer from '../components/Reusables/FooterComponents/ReUsableFooter';
import RequestSuccessful from '../modal/request-successful/requestSuccessful';

const PageLayout = ({ children }) => {
	return (
		<main>
			{/* <RequestSuccessful/> */}
			<Header />
			{children}
			<Footer />
		</main>
	);
};
export default PageLayout;
