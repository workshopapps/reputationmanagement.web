import React from 'react';
import AppProvider from '../context/appContext';
import Router from '../router/router';
import * as Sentry from "@sentry/react";

function App() {
	return (
		<div className="app" style={{ maxWidth: '100vw', margin: '0 auto' }}>
			<AppProvider>
				<Router />
			</AppProvider>
		</div>
	);
}
//export default App;
export default Sentry.withProfiler(App);
