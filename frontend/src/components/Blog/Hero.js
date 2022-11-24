import React from 'react';
import styled from 'styled-components';
import hero_bg from '../../assets/images/blog_images/images/hero_bg.png';
import mobile_hero from '../../assets/images/blog_images/images/mobile_hero.png';

const StyledSection = styled.section`
	width: 100%;
	background: url(${hero_bg});
	background-size: cover;
	height: 450px;
	padding: 80px;
	@media (max-width: 800px) {
		padding: 25px;
		/* padding-top: 60px; */
		background-repeat: round;
		height: 40vh;
	}
`;

const StyledBody = styled.div`
	width: 50%;
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

const StyledButton = styled.button`
	background: #f16f04;
	border-radius: 4px;
	width: 150px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	margin-top: 35px;
	border: 3px solid #f16f04;
	cursor: pointer;
	@media (max-width: 800px) {
		margin-top: 8px;
	}
`;

export default function Hero() {
	return (
		<StyledSection>
			<StyledBody>
				<StyledHeader>
					6 Efficient Techniques to Protect Your Brand Reputation in 2023
				</StyledHeader>
				<StyledParagraph>
					Protect your brand reputation with the easy-to-implement techniques in
					our guide
				</StyledParagraph>
				<StyledButton>Read Article</StyledButton>
			</StyledBody>
		</StyledSection>
	);
}
