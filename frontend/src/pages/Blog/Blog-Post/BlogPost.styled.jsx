import React from 'react';
import styled from 'styled-components';

export const PostContainer = styled.section`
	max-width: 869px;
	width: 70%;
	margin: 64px auto 7rem;
	font-family: Lato;

	@media (max-width: 988px) {
		width: 80%;
		margin: 32px auto 4rem;
	}

	@media (max-width: 720px) {
		width: 85%;
		margin: 16px auto 64px;
	}
`;

export const PostHeader = styled.header`
	height: min-content;
	position: relative;

	img {
		width: 100%;
	}

	div {
		background-color: #fff;
		height: fit-content;
		transform: translateY(-97px);
		width: 84%;
		padding: 34px 0 28px 0;

		h3 {
			font-weight: 900;
			font-size: 40px;
			line-height: 50px;
			letter-spacing: 0.01em;
			color: #233ba9;
			max-width: 577px;

			span {
				display: block;
			}
		}
	}

	@media (max-width: 720px) {
		div {
			transform: translateY(0);
			width: 100%;
			padding: 1rem 0;

			h3 {
				width: 100%;
				max-width: 100%;

				span {
					display: inline;
				}
			}
		}
	}

	@media (max-width: 477px) {
		div {
			h3 {
				font-weight: 700;
				font-size: 18px;
				line-height: 27px;
			}
		}
	}
`;

export const MainPostSection = styled.main`
	margin-top: -65px;

	h4 {
		font-weight: 600;
		font-size: 32px;
		line-height: 38px;
		letter-spacing: 0.01em;
		color: #233ba9;
		margin-bottom: 64px;
	}

	section {
		border-top: 3px solid #233ba9;
		border-bottom: 3px solid #233ba9;
		& > div {
			&:first-of-type {
				div {
					display: none;
				}

				p:first-of-type {
					margin-top: 64px;
				}
			}

			&:nth-of-type(3),
			&:nth-of-type(6),
			&:nth-of-type(7) {
				img {
					display: none;
				}
			}
		}
	}

	@media (max-width: 720px) {
		margin-top: 32px;
	}

	@media (max-width: 477px) {
		h4 {
			font-size: 14px;
			line-height: 21px;
			margin-bottom: 32px;
		}

		section {
			& > div {
				&:first-of-type {
					p:first-of-type {
						margin-top: 32px;
					}
				}
			}
		}
	}
`;

export const ProfileCard = styled.section`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin: 32px 0 67px;
	padding: 0 20px;

	& > div:nth-of-type(1) {
		flex: 1;

		p:first-of-type {
			font-weight: 700;
			font-size: 14px;
			line-height: 21px;
			color: #646668;
		}

		p:last-of-type {
			font-weight: 400;
			font-size: 12px;
			line-height: 18px;
			color: #646668;
		}
	}

	& > div:nth-of-type(2) {
		display: flex;
		align-items: center;
		gap: 2rem;

		.mobile-likeBtn,
		.mobile-shareBtn {
			display: none;
		}
	}

	@media (max-width: 552px) {
		& > div:nth-of-type(1) {
			p:first-of-type {
				font-size: 12px;
				line-height: 18px;
			}

			p:last-of-type {
				font-weight: 300;
				font-size: 10px;
				line-height: 15px;
			}
		}

		& > div:nth-of-type(2) {
			gap: 1rem;

			button:nth-of-type(1),
			button:nth-of-type(2),
			a:nth-of-type(1),
			a:nth-of-type(2) {
				display: none;
			}

			.mobile-likeBtn,
			.mobile-shareBtn {
				display: block;

				height: 16px;
				width: 16px;
			}
		}
	}
`;

export const FormContainer = styled.form`
	background-color: #eef1fc;
	padding: 32px;

	p {
		font-weight: 600;
		font-size: 18px;
		line-height: 27px;
		color: #000000;
		margin-bottom: 16px;
	}

	textarea,
	input {
		display: block;
		margin-bottom: 16px;
		background: #ffffff;
		border: 1px solid #d2d3d4;
		box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
		border-radius: 16px;
		padding: 17px 20px;

		resize: none;

		outline: 0;
		width: 80%;
		font-family: inherit;
	}

	input {
		gap: 10px;
		border: 1px solid #e8e8e8;
		border-radius: 15px;
		width: 50%;

		&::placeholder {
			font-weight: 400;
			font-size: 16px;
			line-height: 24px;
			color: #d2d3d4;
		}
	}

	button {
		color: #ffffff;
		padding: 16px 24px;
		background: #233ba9;
		border-radius: 4px;
		font-family: inherit;
		font-weight: 600;
		font-size: 18px;
		line-height: 27px;
	}

	@media (max-width: 477px) {
		padding: 16px 8px;

		p {
			font-size: 12px;
			line-height: 18px;
		}

		input {
			width: 65%;
		}

		button {
			font-weight: 700;
			font-size: 12px;
			line-height: 18px;
		}
	}
`;
