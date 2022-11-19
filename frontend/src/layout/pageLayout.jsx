import Header from '../components/Header';
import Footer from '../components/Footer';

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
