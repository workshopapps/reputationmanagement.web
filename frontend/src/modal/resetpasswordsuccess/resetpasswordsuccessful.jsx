import React from 'react';
import successIcon from './success-icons.svg';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function ResetSuccess() {
	return (
		<StyledDiv>
			<StyledImg src={successIcon} alt="success" />
			<h2>Password Reset Successful</h2>
			<p>You will be redirected to the login page in 5 seconds...</p>
		</StyledDiv>
	);
}

const StyledImg = styled.img`
	height: 150px;
	width: 150px;
	margin: 0 auto;
`;

const StyledDiv = styled.div`
	text-align: center;
	padding: 20px 0;

	h2 {
		padding: 18px 0 12px;
		font-size: 24px;
		font-weight: 600;
	}
`;
