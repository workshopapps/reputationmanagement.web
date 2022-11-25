import React from 'react';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Fix from './sections/FixIt';
import Help from './sections/Help';
import PageLayout from '../../layout/PageLayout';

function AboutPage() {
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
