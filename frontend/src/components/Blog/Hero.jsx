import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hero_bg from '../../assets/images/blog_images/images/hero_bg.png';

const StyledSection = styled.section`
	width: 100%;
	padding-left: 64px;
	padding-right: 64px;
	padding-top: 24px;

	@media (max-width: 850px) {
		padding-left: 34px;
	padding-right: 34px;
	}

	@media (max-width: 520px) {
		padding-left: 20px;
	padding-right: 20px;
	}
`;

const StyledSectionInner = styled.section`
	width: 100%;
	background: url(${hero_bg});
	background-size: cover;
	height: 450px;
	padding: 80px;
	border-radius: 8px;
	@media (max-width: 800px) {
		padding: 25px;
		background-repeat: round;
		height: 40vh;
	}
`;

const StyledBody = styled.div`
	width: 50%;

	a {
		background: #f16f04;
		border-radius: 4px;
		padding: 16px 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		margin-top: 35px;
		border: 3px solid #f16f04;
		text-decoration: none;
		width: 145px;

		@media (max-width: 800px) {
			margin-top: 8px;
		}
	}

	@media (max-width: 1300px) {
		width: 80%;
		height: 100%;
	}
	@media (max-width: 800px) {
		width: 90%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
`;

const StyledHeader = styled.h2`
	font-weight: 700;
	font-size: 2.5rem;
	color: #233ba9;
	margin-bottom: 24px;
	@media (max-width: 950px) {
		font-size: 2rem;
	}
	@media (max-width: 800px) {
		font-size: 1.1rem;
		margin-bottom: 12px;
	}
`;

const StyledParagraph = styled.p`
	width: 80%;
	font-weight: 400;
	font-size: 18px;
	color: #000000;
	@media (max-width: 800px) {
		width: 90%;
		font-size: 0.9rem;
	}
`;

export default function Hero() {
	return (
		<StyledSection>
			<StyledSectionInner>
			<StyledBody>
				<StyledHeader>
					6 Efficient Techniques to Protect Your Brand Reputation in 2023
				</StyledHeader>
				<StyledParagraph>
					Protect your brand reputation with the easy-to-implement techniques in
					our guide
				</StyledParagraph>
				<Link to="/blog-post">Read Article</Link>
			</StyledBody>
			</StyledSectionInner>
		</StyledSection>
	);
}
