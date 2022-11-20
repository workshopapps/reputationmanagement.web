import styled from 'styled-components';
import cta_bg from './assets/cta_bg.png';

export const StyledLandingPage = styled.div`
	section {
		padding: 80px 24px;

		h2 {
			margin-bottom: 40px;
		}
	}
	.section_heading {
		text-align: center;
		max-width: 820px;
		margin: 0 auto 50px;

		h2 {
			margin-bottom: 12px;
		}
		p {
			color: #6f7174;
		}
	}
	.stepDiv {
		padding-bottom: 35px;
	}
	.stepText {
		.countBtn {
			color: #f2f2f2;
			padding: 6px 10px;
			border-radius: 12px;
			font-weight: 600;
			font-size: 20px;
			background: #f16f04;
		}

		h3 {
			/* font-weight: 800; */
			font-size: 28px;
		}

		.getQuoteBtn {
			display: flex;
			align-items: center;
			font-weight: 700;
			font-size: 18px;
			color: #233ba9;
			padding-top: 24px;
		}
	}
	.brands {
		padding: 24px;

		.content {
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
		}
		img {
			display: block;
			padding: 20px 12px;
			margin: auto;
		}
	}
	.testimonials {
		.content {
			flex-wrap: wrap;

			& > div {
				flex-shrink: 0;
				margin-bottom: 10px;
			}
		}
		.card {
			padding: 30px 20px;
			margin: 12px 0;
			border-radius: 8px;
			box-shadow: 4px 4px 10px rgba(120, 122, 125, 0.1);
		}

		.reviewText {
			margin-top: 24px;
		}
	}
	.cta {
		padding: 100px 24px;
		background: url(${cta_bg}), #eef1fc;
	}
	button {
		font-size: 18px;
		margin-top: 30px;
		font-weight: 900;
		padding: 12px 50px;
	}

	@media screen and (max-width: 680px) {
		section {
			padding-bottom: 20px;
		}
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
