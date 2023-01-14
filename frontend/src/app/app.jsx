import React from 'react';
import AppProvider from '../context/appContext';
import Router from '../router/router';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
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
