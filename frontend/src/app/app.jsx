import React from 'react';
import AppProvider from '../context/AppContext';
import Router from '../router/router';

function App() {
	return (
		<div className="app">
			<AppProvider>
				<Router />
			</AppProvider>
		</div>
	);
}
export default App;
