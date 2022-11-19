import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

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
