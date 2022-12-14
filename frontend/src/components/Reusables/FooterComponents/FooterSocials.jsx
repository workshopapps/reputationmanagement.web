import React from 'react';
import styled from 'styled-components';
import fixlogo from '../../../assets/images/repute_logo_white.svg';

function FooterSocials() {
	return (
		<div className="flex flex-col self-start ml-[10%] md:ml-0 gap-5 items-center  md:w-2/5 md:gap-14">
			{/* Social Media icons start */}
			<div className="flex flex-col md:self-start w-full gap-5">
				<img src={fixlogo} alt="icon" className="w-1/2" style={{ marginTop: '-6px'}}/>
				<StyledP>Your brand’s image is our concern.</StyledP>
			</div>
			{/* Social Media icons ends */}
		</div>
	);
}
const StyledP = styled.p`
	margin-top: -20px;
	color: #f1f3f9;
	margin-left: 18px;
`;

export default FooterSocials;
