import styled from 'styled-components';
import bg from '../../Assets/bg.png';

export const FaqFooterWraper = styled.section`
	text-align: center;
	// margin-top: 65px;
	background: url(${bg}), #eef1fc;
	background-repeat: no-repeat;
	padding: 40px 0;

	& > div {
		margin: auto;
		max-width: 1400px;
	}

	@media screen and (max-width: 425px) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;

export const FaqFooterHeading = styled.h3`
	font-size: 40px;
	font-weight: 700;
	line-height: 150%;
	margin-bottom: 20px;

	@media screen and (max-width: 425px) {
		text-align: left;
		font-size: 18px;
	}
`;

export const FaqFooterSubHeading = styled.h6`
width: 510px;
	color: #6f7174;
	font-weight: 600;
	font-size: 16px;
	line-height: 150%;

	@media screen and (max-width: 600px) {
		width: 350px;
		text-align: left;
		}

	@media screen and (max-width: 400px) {
		width: 300px;
		}
`;

export const FaqHeadingMain = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const FaqFooterLinksParent = styled.div`
	width: 400px;
	text-align: left;

	&:nth-child(2) {
		border-left: 1px solid #6f7174;
		border-right: 1px solid #6f7174;

		@media screen and (max-width: 800px) {
			border: none;
		}
	}

	@media screen and (max-width: 400px) {
		width: 320px;
		}
`;

export const FaqFooterLinks = styled.div`
	
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	margin-top: 48px;

	
`;

export const SendMailLink = styled.a`
	display: inline-block;
	padding: 16px 40px;
	text-decoration: none;
	font-size: 18px;
	font-weight: 600;

	div {
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			@media screen and (max-width: 400px) {
		width: 50px;
		}
		}

		span {
			margin-left: 20px;
			h1 {
				margin-bottom: 5px;
				color: #0e1844;
				font-weight: 700;
				font-size: 22px;
				line-height: 150%;
				@media screen and (max-width: 600px) {
					font-size: 16px;
		}
			}
			p {
				color: #6f7174;
				font-weight: 400;
				font-size: 16px;
				line-height: 150%;

				@media screen and (max-width: 600px) {
					font-size: 14px;
		}
			}
		}
	}

	@media screen and (max-width: 425px) {
		padding: 8px 24px;
		font-size: 14px;
	}
`;
