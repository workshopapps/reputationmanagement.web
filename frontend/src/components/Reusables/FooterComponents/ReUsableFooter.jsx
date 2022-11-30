import React from 'react';
import styled from 'styled-components';
import FooterLinks from './FooterLinks';
import FooterSocials from './FooterSocials';

const Footer = () => {
	return (
		<StyledFooterParent className="bg-[#233BA9] w-full">
			<footer style={{ maxWidth: '1540px', margin: '0 auto' }}>
				<StyledFooterWrapper>
					<FooterSocials />
					<FooterLinks />
				</StyledFooterWrapper>

				<hr className="border-3 border-[#A5A6A8] w-[90%] m-auto" />

				<div className="p-5 text-center">
					<p className="text-[15px] font-[100] text-[#ddd] leading-[16px]">
						© 2022 Fixit. All rights reserved
					</p>
				</div>
			</footer>
		</StyledFooterParent>
	);
};

const StyledFooterParent = styled.div`
	font-family: 'lato', sans-serif;
`;

const StyledFooterWrapper = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	text-align: left;
	gap: 32px;
	padding-top: 40px;
	padding-bottom: 20px;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 600px) {
		padding: 40px 30px;
		gap: 40px;
		text-align: left;
	}
	@media (min-width: 768px) {
		padding: 60px 50px 50px;
	}
	@media (min-width: 990px) {
		flex-direction: row;
	}
`;

export default Footer;
