import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Reusables/FooterComponents/ReUsableFooter';

const PageLayout = ({ children }) => {
	
	return (
		<main style={{ paddingTop: '90px'}}>
			<Header />
			{children}
			<Footer />
		</main>
	);
};
export default PageLayout;
