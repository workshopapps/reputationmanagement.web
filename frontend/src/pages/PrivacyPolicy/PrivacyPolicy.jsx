import React from 'react';
import Header from './Header';
import Policy from './Policy';
import Information from './Information';
import Process from './Process';
import Retention from './Retention';
import Privacy from './Privacy';
import Contact from './Contact';
import Change from './Change';
import Bottom from './Bottom';
import PageLayout from '../../layout/PageLayout';

function PrivacyPolicy() {
	return (
		<>
			<PageLayout>
				<Header />
				<Policy />
				<Information />
				<Process />
				<Retention />
				<Privacy />
				<Change />
				<Contact />
				<Bottom />
			</PageLayout>
		</>
	);
}

export default PrivacyPolicy;
