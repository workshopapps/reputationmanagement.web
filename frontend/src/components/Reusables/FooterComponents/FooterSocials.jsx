import React from 'react';
import styled from 'styled-components';
import fixlogo from '../../../assets/images/repute_logo_white.svg';

function FooterSocials() {
	return (
		<DIV className="flex flex-col self-start items-center">
			{/* Social Media icons start */}
			<div className="flex flex-col md:self-start w-full">
				<img src={fixlogo} alt="icon" />
				<StyledP>Your brand’s image is our concern.</StyledP>
			</div>
			{/* Social Media icons ends */}
		</DIV>
	);
}

const StyledP = styled.p`
	color: #f1f3f9;
	margin-top: 16px;
`;
const DIV = styled.div`
	@media (min-width: 768px) and (max-width: 900px) {
		div {
			justify-self: center !important;
			margin-bottom: 15px;
		}
	}
	@media (max-width: 525px) {
		padding: 20px;
		div {
			justify-self: center !important;
			margin-bottom: 15px;
		}
	}
`;

export default FooterSocials;
