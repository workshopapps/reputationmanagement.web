import React from 'react'
import Header from "./components/Header"
import Policy from './components/Policy';
import Information from './components/information'
import Process from './components/Process'
import Retention from './components/Retention'
import Privacy from './components/Privacy'
import Contact from './components/Contact';
import Change from './components/Change';
import Buttom from './components/Buttom';
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
				<Buttom />
			</PageLayout>
		</>
	);
}

export default App;
