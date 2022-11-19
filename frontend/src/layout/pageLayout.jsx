import Footer from '../components/Footer';
import Header from '../components/Header';

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
