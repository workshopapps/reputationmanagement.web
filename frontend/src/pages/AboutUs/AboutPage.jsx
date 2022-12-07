import React from 'react';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Fix from './sections/FixIt';
import Help from './sections/Help';
import PageLayout from '../../layout/PageLayout';
import { useEffect } from 'react';

function AboutPage() {
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	return (
		<>
			<PageLayout>
				<Hero  />
				<Story />
				<Fix />
				<Help />
			</PageLayout>
		</>
	);
}

export default AboutPage;
