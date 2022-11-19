import styled from 'styled-components';

export const StyledLandingPage = styled.div`
	section {
		padding: 80px 24px;
	}

	.cta {
		background: url(.png), #eef1fc;
	}
`;

export const HeroTextDiv = styled.div`
	max-width: 810px;
	padding: 60px 0;
	margin: auto;

	p {
		max-width: 720px;
		color: #6f7174;
		margin: 18px auto;
	}

	button {
		font-size: 18px;
		margin-top: 30px;
		font-weight: 900;
		padding: 12px 50px;
	}

	@media screen and (max-width: 680px) {
		h1 {
			font-size: 1.75rem;
			line-height: 2.8rem;
		}
		p {
			font-size: 15px;
		}
	}
`;

export const HeroSection = styled.div`
	padding: 24px;
	text-align: center;

	.HeroImage img {
		width: 100%;
	}
`;

export const HowDoesItWork = styled.div``;
