import React from 'react';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Fix from './sections/FixIt';
import Help from './sections/Help';

import GlobalStyles from './components/styled/Global';

function AboutPage() {
	return (
		<>
			<GlobalStyles />
			<Hero />
			<Story />
			<Fix />
			<Help />
		</>
	);
}

export default AboutPage;
