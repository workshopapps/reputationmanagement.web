import React,{useEffect} from 'react';
import AppProvider from '../context/appContext';
import Router from '../router/router';
import { GoogleOAuthProvider } from '@react-oauth/google';

import ReactGA from 'react-ga'
function App() {
	console.log('hotr', process.env.REACT_APP_GOOGLE_ANALYTICS_KEY ); 
	console.log(
		'UA-000000-01'
	);
	ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY);
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
		
		}, [])
	
console.log('myga',ReactGA);
	return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}>
			<div className="app" style={{ maxWidth: '100vw', margin: '0 auto' }}>
				<AppProvider>
					<Router />
				</AppProvider>
			</div>
		</GoogleOAuthProvider>
	);
}
export default App;
