/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'jquery';
import 'react-toastify/dist/ReactToastify.css';
import App from './app/app';
import './index.css';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
    dsn: "https://acbed01f3af04154a1206f028d3d9b79@o4504259490873344.ingest.sentry.io/4504286581882880",
    integrations: [
        new BrowserTracing({
        tracingOrigins: ["localhost", "api.repute.hng.tech"]})],
    tracesSampleRate: 1.0
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
