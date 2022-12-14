import React from 'react';
import styled from 'styled-components';
import fixlogo from '../../../assets/images/repute_logo_white.svg';

function FooterSocials() {
	return (
		<div className="flex flex-col self-start items-center">
			{/* Social Media icons start */}
			<div className="flex flex-col md:self-start w-full">
				<img
					src={fixlogo}
					alt="icon"
				/>
				<StyledP>Your brand’s image is our concern.</StyledP>
			</div>
			{/* Social Media icons ends */}
		</div>
	);
}

const StyledP = styled.p`
	color: #f1f3f9;
	margin-top: 16px;
`;

export default FooterSocials;
