import React from 'react';
import AppProvider from '../context/appContext';
import AuthProvider from '../context/AuthContext';
import Router from '../router/router';

function App() {
	return (
		<div className="app" style={{ maxWidth: '100vw', margin: '0 auto' }}>
			<AppProvider>
				<AuthProvider>
					<Router />
				</AuthProvider>
			</AppProvider>
		</div>
	);
}
export default App;
