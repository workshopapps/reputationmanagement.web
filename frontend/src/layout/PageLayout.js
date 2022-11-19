import Header from '../components/Layout/Header';
// import Footer from '../components/Layout/Footer';
import Footer from '../components/Reusables/FooterComponents/ReUsableFooter';
const PageLayout = ({ children }) => {
	return (
		<main>
			<Header />
			{children}
			<Footer />
		</main>
	);
};
export default PageLayout;
