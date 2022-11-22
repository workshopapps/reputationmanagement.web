import styled from 'styled-components';
import FooterLinks from './FooterLinks';
import FooterSocials from './FooterSocials';

function Footer() {
	return (
		<footer className="bg-[#233BA9] w-full">
			<StyledFooterWrapper>
				<FooterSocials />
				<FooterLinks />
			</StyledFooterWrapper>
			<hr className='border-3 border-[#A5A6A8] w-[90%] m-auto' />
			<div className="p-5 text-center">
				<p className="text-[16px] font-[100] text-[#A5A6A8] leading-[16px]">
					© 2022 Fixit. All rights reserved
				</p>
			</div>
		</footer>
	);
}
const StyledFooterWrapper = styled.div`
	display: flex;
	height: 100%;
	flex-direction: row;
	text-align: center;
	gap: 32px;
	align-items: center;
	padding: 3.5rem 2.5rem;
	justify-content: space-between;
	@media (max-width: 1200px){
		flex-direction: column;
		gap: 50px;
		text-align: left;
	}
`;
export default Footer;
