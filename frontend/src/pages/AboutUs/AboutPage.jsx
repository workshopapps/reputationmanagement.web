import React from 'react';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Fix from './sections/FixIt';
import Help from './sections/Help';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';

function AboutPage() {
	return (
		<>
			<Header />
			<Hero />
			<Story />
			<Fix />
			<Help />
			<Footer />
		</>
	);
}

export default AboutPage;
