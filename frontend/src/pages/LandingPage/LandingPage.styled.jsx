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
	justify-content: space-around;
	margin: 0 auto;
	max-width: 1540px;
	margin-bottom: 70px;

	@media (max-width:640px) {
    				flex-direction:column;
					align-items:center;
            }

			.hero-text {
				width: 520px;
				text-align: left;
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: center;

				@media (max-width:840px) {
    				width: 400px;
            		}

					@media (max-width:640px) {
							align-items:center;
							text-align: center;
            			}

					@media (max-width:520px) {
								width: 100%;
            			}

				h1 {
					font-size: 45px;
					font-weight: 700;

					@media (max-width:840px) {
						font-size: 35px;
            		}

					@media (max-width:520px) {
						font-size: 25px;
            		}

					span {
						color: #F16F04;
					}
				}

				h5 {
					font-size: 18px;
					font-weight: 400;

					@media (max-width:520px) {
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
				position:absolute;
				//top: 0;
				right: 12rem;

				@media (max-width:640px) {
					right: 0;
					margin-top: -4rem;
            			}

				@media (max-width:520px) {
					right: 0;
					margin-top: -4rem;
            			}
				}
			}



			.hero-text-img {
				width: 500px;

				@media (max-width:840px) {
					width: 400px;
            		}

					@media (max-width:520px) {
						margin-top: 30px;
								width: 300px;
            			}

				img {
				width: 100%;
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

		@media (max-width:640px) {
			padding: 30px 10px;
		}
		

		.hero-img-text {
		width: 100%;

		h5 {
			text-align: center;
			color: #233BA9;
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
			color: #233BA9;
			font-size: 16px;
			font-weight: 600;
		}

		.stepDiv {
			display: flex;
			padding-left: 20px;
			margin-bottom: 140px;
			

			@media (max-width:680px) {
			flex-direction: column;
			align-items: center;
			justify-content: center;

		}

			&:nth-child(2) {
				flex-direction: row-reverse;

				
			@media (max-width:680px) {
			flex-direction: column;
					}
			}

			.stepImage  {
				img {
					

					@media (max-width:1000px) {
						width: 350px;
					}
					@media (max-width:600px) {
						width: 300px;
					}
				}
			}
		}
`;