import React from 'react';
import {
	StyledButtonWrapper,
	StyledOverlay,
	StyledSuccessfulRequest,
} from './styles';
import REQUEST_SENT from './request-sent.svg';
import { useEffect } from 'react';
import useAppContext from '../../hooks/useAppContext';
import { useNavigate } from 'react-router-dom';

const RequestSuccessful = () => {
	const { requestSuccessfulModalActive, setRequestSuccessfulModalActive } =
		useAppContext();
	const router = useNavigate();

	useEffect(() => {
		const requestTimeout = () => {
			setTimeout(() => {
				setRequestSuccessfulModalActive(false);
				router('/dashboard');
			}, 4000);
		};
		return () => {
			clearTimeout(requestTimeout);
		};
	}, [requestSuccessfulModalActive, setRequestSuccessfulModalActive, router]);

	return (
		<StyledOverlay>
			<StyledSuccessfulRequest>
				<img src={REQUEST_SENT} alt="" />
				<h2>We have received your request!</h2>
				<p>
					Thank you for sending your request. We will get back to you within 3
					days
				</p>
				<StyledButtonWrapper>
					<button
						id="request"
						onClick={() => {
							setRequestSuccessfulModalActive(false);
							router('/dashboard');
						}}
					>
						Go To Dashboard
					</button>
				</StyledButtonWrapper>
			</StyledSuccessfulRequest>
		</StyledOverlay>
	);
};
export default RequestSuccessful;
