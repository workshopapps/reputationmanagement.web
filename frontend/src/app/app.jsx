import React from 'react';
import AppProvider from '../context/appContext';
import Router from '../router/router';

function App() {
	return (
		<div className="app" style={{ maxWidth: '1440px' , margin: '0 auto'}}>
			<AppProvider>
				<Router />
			</AppProvider>
		</div>
	);
}
export default App;
