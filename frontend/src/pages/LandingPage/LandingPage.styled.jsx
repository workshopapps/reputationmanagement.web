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
		div {
			width: 450px;

			@media screen and (max-width: 1000px) {
				width: 350px;
			}

			@media screen and (max-width: 600px) {
				width: 300px;
			}
		}

		h3 {
			/* font-weight: 800; */
			font-size: 28px;

			@media screen and (max-width: 600px) {
				font-size: 20px;
			}
		}

		.getQuoteBtn {
			display: flex;
			align-items: center;
			font-weight: 700;
			font-size: 18px;
			color: #233ba9;
			padding-top: 24px;

			@media screen and (max-width: 600px) {
				font-size: 16px;
			}
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

	.cta {
		padding: 50px 24px;
		background: url(${cta_bg}), #eef1fc;

		.cta-inner {
			text-align: center;
			h2 {
				font-weight: 700;
				font-size: 45px;

				@media screen and (max-width: 600px) {
					font-size: 25px;
				}
			}

			h4 {
				font-size: 18px;
				font-weight: 400;

				@media screen and (max-width: 600px) {
					font-size: 16px;
				}
			}
		}
	}
	button {
		// font-size: 18px;
		margin-top: 30px;
		// font-weight: 900;
		// padding: 12px 50px;
	}

	@media screen and (max-width: 680px) {
		section {
			padding-bottom: 20px;
		}
	}
`;

export const HeroTextDiv = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	// max-width: 1540px;
	margin-bottom: 70px;

	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
		.hero-text-btn-sec {
			display: none;
		}
	}

	@media (max-width: 640px) {
		flex-direction: column;
		align-items: center;
	}

	.hero-text {
		width: 520px;
		text-align: left;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;

		@media (max-width: 840px) {
			width: 100%;
		}

		@media (max-width: 640px) {
			align-items: center;
			text-align: center;
		}

		@media (max-width: 520px) {
			width: 100%;
		}

		h1 {
			font-size: 45px;
			font-weight: 700;

			@media (max-width: 840px) {
				font-size: 35px;
			}

			@media (max-width: 520px) {
				font-size: 25px;
			}

			span {
				color: #f16f04;
			}
		}

		h5 {
			font-size: 18px;
			font-weight: 400;

			@media (max-width: 520px) {
				font-size: 16px;
			}
		}

		// .hero-button {

		// 	@media (max-width:520px) {
		// 		width: 120px;
		// 		font-size: 14px;
		// 		font-weight: 400;
		// 		padding: 5px 10px;
		// 	}
		// }

		.hero-text-star {
			position: absolute;
			//top: 0;
			right: 0;
			margin-right: -6rem;
			// margin-top: .8rem;

			@media (max-width: 640px) {
				right: 0;
				padding-bottom: -8rem;
				margin-right: 4rem;
				z-index: -1;
			}

			@media (max-width: 520px) {
				right: 0;
				margin-top: -4rem;
			}
		}

		form {
			margin-top: 37px;

			div {
				display: flex;
				justify-content: space-between;
				margin-top: 12px;
			}

			div input {
				border: 1px solid #667085;
				border-radius: 8px;
				// height: 43px;
				width: 245px;
				gap: 13px;
				padding: 15px 12px;
				margin-bottom: 10px;
				&::placeholder {
					// font-size: 14px;
					color: #667085;
				}
				&:focus {
					outline: none;
				}
				@media (max-width: 840px) {
					width: 48%;
				}
			}

			div .review-input {
				width: 100%;
				border: 1px solid #787a7d;
				border-radius: 8px;
				// height: 43px;
				// font-size: 15px;
				color: #6f7174;
				padding: 15px 12px;
				// margin-top: 10px;

				&:focus {
					outline: none;
				}
			}

			.form-footer-info {
				margin-top: 9px;
			}

			.form-footer-info p {
				// font-size: 12px;
				color: #6f7174;
			}

			.form-footer-info p > a {
				color: #f16f04;
			}

			.hero-form-button {
				width: 100%;
			}

			@media (max-width: 640px) {
				width: 100%;
				padding: 0 20px;
				margin-bottom: 30px;

				div {
					flex-direction: column;
					gap: 12px;
				}

				div input {
					width: 100%;
				}

				.form-footer-info {
					text-align: left;
				}
			}
		}
	}

	.hero-text-img {
		width: 500px;
		display: flex;

		@media (max-width: 840px) {
			width: 100%;
			margin-top: 15px;
			justify-content: center;

			img {
				width: 70%;
			}
		}

		@media (max-width: 520px) {
			margin-top: 30px;
			width: 300px;
		}

		img {
			/* width: 100%; */
		}
	}
`;

export const HeroSection = styled.div`
	padding: 24px 0;
	text-align: center;

	.HeroImage img {
		width: 100%;
	}
	.HeroImage {
		flex-direction: column;
		padding: 30px 100px;
		max-width: 1540px;
		margin: 0 auto;

		@media (max-width: 640px) {
			padding: 30px 10px;
		}

		.hero-img-text {
			width: 100%;

			h5 {
				text-align: center;
				color: #233ba9;
				font-size: 16px;
				font-weight: 600;
			}
		}
	}
`;

export const HowDoesItWork = styled.div`
	margin-top: 50px;
	h5 {
		text-align: center;
		color: #233ba9;
		font-size: 16px;
		font-weight: 600;
	}

	.stepDiv {
		display: flex;
		padding-left: 20px;
		margin-bottom: 140px;

		@media (max-width: 680px) {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		&:nth-child(2) {
			flex-direction: row-reverse;

			@media (max-width: 680px) {
				flex-direction: column;
			}
		}

		.stepImage {
			img {
				@media (max-width: 1000px) {
					width: 350px;
				}
				@media (max-width: 600px) {
					width: 300px;
				}
			}
		}
	}
`;
