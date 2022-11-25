import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { REQUEST_SUCCESSFUL } from '../../assets/image';
// import Header from '../../components/Layout/Header';
import PageLayout from '../../layout/PageLayout'
import useAppContext from '../../hooks/useAppContext';
import { StyledRequestSuccessfulSm } from './styles';

const RequestSuccessfulSm = () => {
	const { setRequestSuccessfulModalActive } = useAppContext();

	useEffect(() => {
		setRequestSuccessfulModalActive(false)
	},[ setRequestSuccessfulModalActive ])

	const router = useNavigate();
	return (
		<PageLayout>
			<StyledRequestSuccessfulSm>
					<h2>Request Successful</h2>
					<p>
						Your request has been recieved and our agents are working on it already
					</p>
					<img src={REQUEST_SUCCESSFUL} alt="" />
					<button onClick={() => router('/request-form')}>New Request</button>

			</StyledRequestSuccessfulSm>
		</PageLayout>
	);
};
export default RequestSuccessfulSm;
