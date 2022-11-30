import styled from 'styled-components';
import bg from '../../Assets/bg.png';

export const FaqFooterWraper = styled.section`
	text-align: center;
	margin-top: 65px;
	background: url(${bg}), #eef1fc;
	background-repeat: no-repeat;
	padding: 40px 0;

	& > div {
		margin: auto;
		max-width: 518px;
	}

	@media screen and (max-width: 425px) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;

export const FaqFooterHeading = styled.h3`
	font-size: 28px;
	font-weight: 700;
	line-height: 150%;

	@media screen and (max-width: 425px) {
		text-align: left;

		text-align: left;
		font-size: 18px;
	}
`;

export const FaqFooterLinks = styled.div`
	display: flex;
	justify-content: center;
	gap: 24px;
	margin-top: 48px;

	@media screen and (max-width: 425px) {
		gap: 8px;
	}
`;

export const SendMailLink = styled.a`
	border-radius: 8px;
	display: inline-block;
	border: 1px solid;
	padding: 16px 40px;
	text-decoration: none;
	font-size: 18px;
	font-weight: 600;
	color: ${(props) => props.color};
	background: ${(props) => props.background};
	

	@media screen and (max-width: 425px) {
		padding: 8px 24px;
		font-size: 14px;
	}
`;
