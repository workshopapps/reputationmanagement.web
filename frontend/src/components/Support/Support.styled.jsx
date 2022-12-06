import styled from 'styled-components';
import cta_bg from '../../assets/images/support/cta_bg.png';

export const StyledSupport = styled.div`
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
	}
`;

export const HeroSection = styled.div`
	background-color: #eef1fc;
	padding: 24px;
	text-align: center;
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
			font-size: 2.75rem;
			line-height: 2.8rem;
		}
		p {
			font-size: 15px;
		}
	}
`;

export const StyledSupportForm = styled.form`
	border: 1px solid #e4e4e5;
	border-radius: 8px;
	width: 40%;
	height: 48px;
	margin: 30px auto;
	padding: 12px;
	display: flex;
	align-items: center;
	background-color: white;
	input {
		border: none;
		outline: none;
		width: 100%;
		height: 100%;
		padding: 12px;
		font-size: 13px;
		border-radius: 8px;
		&::placeholder {
			font-size: 15px;
		}

		&:active,
		&:focus {
			color: #2b2c34;
		}
	}
	input:hover {
		border: 1px solid transparent;
	}

	img {
		width: 24px;
		height: 24px;
	}
	button {
		width: 27%;
		padding: 8px 0px;
		margin: 5px 0px;

		background: #233ba9;
		border-radius: 4px;
		color: #ffffff;
	}
`;

export const StyledArticle = styled.section`
	padding: 80px 24px;
	max-width: 1240px;
	margin-left: auto;
	margin-right: auto;

	.article {
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
			width: 370px;
			border: 1px solid #d2d3d4;
			height: 100%;
			// box-shadow: 4px 4px 10px rgba(120, 122, 125, 0.1);
		}
		a {
			margin-top: 7px;
			font-size: 1.7rem;
			font-weight: 700;
			color: #2b2c34;
		}

		p {
			margin-top: 10px;
		}
	}
`;

export const StyledQuestion = styled.section`
	background: url(${cta_bg}) no-repeat, #eef1fc;
	text-center: center !important;

	h2 {
		margin-bottom: 20px !important;
	}
	p {
		margin-left: auto;
		margin-right: auto;
	}
	.cta {
		margin-top: 3rem;
	}
	a {
		font-size: 1.4rem !important;
		margin-bottom: 1rem;
	}

	@media screen and (max-width: 680px) {
		section {
			padding-bottom: 20px;
		}
		img {
			width: 20%;
			margin-bottom: 3rem;
		}
	}
`;
