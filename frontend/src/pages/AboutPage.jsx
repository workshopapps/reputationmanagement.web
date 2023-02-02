import React from 'react';
import PageLayout from '../layout/PageLayout';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TrustImg from '../assets/images/img/Trust.png';
import ProfessionalImg from '../assets/images/img/Professionalism.png';
import Convenience from '../assets/images/img/Convenience.png';
import WomanSmile from '../assets/images/woman__smile.png';
import SImg from '../assets/images/img/Our-Story.png';
import Banner from '../assets/images/img/Banner-Background-Desktop.png';

function AboutPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<PageLayout>
				<>
					<StyledHero data-testid="hero-element">
						<ImgContainerMain>
							<ImgContainer>
								<img src={WomanSmile} alt="smile" />
								<span></span>
							</ImgContainer>
						</ImgContainerMain>

						<StyledHeroMsg>
							<StyledBlue>
								Who Are <StyledOrange>We</StyledOrange>?
							</StyledBlue>
							<StyledHerotxt>
								<StyledHerotxtSpan>
									We are your external team with a diverse background in reputation management, 
									internet law, customer service, brand management, public relations, and digital marketing.
								</StyledHerotxtSpan>{' '}
								We cater to businesses and public figures that have a lot riding on
								their reputation.
							</StyledHerotxt>
							<Link to="/signup">
								<StyledBtn>Register</StyledBtn>
							</Link>
						</StyledHeroMsg>
					</StyledHero>
				</>
				<div className="bg-[#eef1fc]">
					<StyledStory data-testid="story-element">
						<StyledStorytxt>
							<StoryHead>What led to this?</StoryHead>
							<StoryP>
								There is a growing trend where businesses and high profile individuals are becoming 
								more susceptible to negative reviews, with just a few negative words having a 
								devastating impact on the reputation, sales, and recruitment efforts of the business. 
							</StoryP>
							<StoryP>
								At repute, we aim to provide a stellar reputation management service
								by utlising the lastest technology and the most effective user
								experience processes
							</StoryP>
						</StyledStorytxt>
						<ImgCon>
							<StoryImg src={SImg} />
						</ImgCon>
					</StyledStory>
				</div>
				<Container data-testid="fixit-element">
					<StyledFixHeader>
						Why Choose <StyledColorBlue> Repu</StyledColorBlue>
						<StyledColor>te</StyledColor> ?
					</StyledFixHeader>
					<StyledFixBox>
						<StyledFixCenter>
							<ImgsContainer>
								<StyledFixImg src={TrustImg} alt="trust" />
							</ImgsContainer>

							<StyledColorOrange>Trust</StyledColorOrange>
							<StyledFixp>
								<Plato>
									You get to have an idea of your fee before you commit; and yet, 
									you only make payment when the job is successfully completed
								</Plato>
							</StyledFixp>
						</StyledFixCenter>
						<StyledFixCenter>
							<ImgsContainer>
								<StyledFixImg src={Convenience} alt="convenience" />
							</ImgsContainer>

							<StyledColorOrange>Convience</StyledColorOrange>
							<StyledFixp>
								<Plato>
									Our site is quite easy to use through simple steps: you sign up, you lodge your complaint, 
									then you sit back and view the real-time status updates on your dashboard while we 
									repair your reputation
								</Plato>
							</StyledFixp>
						</StyledFixCenter>
						<StyledFixCenter>
							<ImgsContainer>
								<StyledFixImg src={ProfessionalImg} alt="professionals" />
							</ImgsContainer>

							<StyledColorOrange> Professionalism</StyledColorOrange>
							<StyledFixp>
								<Plato>
									With a team of experienced professionals, we approach each 
									request on a case-by-case basis, ensuring you get updated 
									every step of the way
								</Plato>
							</StyledFixp>
						</StyledFixCenter>
					</StyledFixBox>
				</Container>
				<StyledBgImgDesktop data-testid="help-element">
					<StyledCenter>
						<Blue>Let’s help you remove that negative review</Blue>
						<Link to="/signup">
							<Btn>Register</Btn>
						</Link>
					</StyledCenter>
				</StyledBgImgDesktop>
			</PageLayout>
		</>
	);
}

export default AboutPage;

const StyledStory = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
	display: flex;
	justify-content: space-between;
	padding: 56px 64px;
	max-width: 1320px;
	margin: 0 auto;
	@media (max-width: 1350px) {
		flex-direction: column;
		align-items: center;
		padding: 64px 20px;
		gap: 60px;
	}
	@media (max-width: 375px) {
		padding: 64px 0;
	}
`;

const StoryHead = styled.h1`
	font-size: 28px;
	font-weight: bold;
	width: 100%;
	font-family: 'lato', sans-serif;
	margin-bottom: 30px;
`;
const StoryP = styled.p`
	font-size: 16px;
	font-weight: bold;
	max-width: 625px;
	color: #4d5154;
	line-height: 150%;
	font-family: 'lato', sans-serif;
	margin-bottom: 10px;
	@media (max-width: 375px) {
		font-size: 14px;
		padding: 0 10px;
	}
`;
const StyledStorytxt = styled.div`
	margin-right: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 375px) {
		text-align: center;
		margin-right: 0;
	}
`;
const ImgCon = styled.div`
	max-width: 604px;
`;
const StoryImg = styled.img`
	width: 100%;
	@media (max-width: 375px) {
		display: none;
		visibility: none;
		width: 0;
	}
`;

const StyledHero = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
	display: flex;
	align-items: center;
	gap: 100px;
	margin: 80px auto;
	max-width: 1200px;
	justify-content: space-between;
	width: 100%;

	@media (max-width: 1000px) {
		flex-direction: column-reverse;
		width: 80%;
		margin-top: 30px;
		gap: 40px;
		justify-content: center;
	}
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 500px) {
		margin-top: 0px;
	}
`;
const ImgContainer = styled.div`
	display: flex;

	width: 460px;
	> img {
		width: 86%;
		height: 100%;
	}
	> span {
		width: 60px;
		height: 60px;
		background-color: #f16f04;
		border-radius: 50%;
	}

	@media (max-width: 1000px) {
		align-self: flex-start;
		max-width: 60%;
		> img {
			width: 100%;
		}
		> span {
			display: none;
		}
	}
	@media (max-width: 500px) {
		max-width: 80%;
	}
`;

const ImgContainerMain = styled.div`
	display: flex;
	align-items: flex-end;
	@media (max-width: 1000px) {
		width: 100%;
		display: flex;
		justify-content: center;
	}
`;
const StyledHeroMsg = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 1000px) {
		align-items: center;
	}

	@media (max-width: 500px) {
		padding: 0;
		align-items: center;
		/* margin-top: 55px; */
	}
`;
const StyledBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	width: 130px;
	height: 48px;
	color: white;
	margin-top: 64px;
	background: #233ba9;
	border-radius: 4px;
	font-family: 'lato', sans-serif;
`;
const StyledHerotxt = styled.div`
	width: 90%;
	font-size: 16px;
	margin-top: 24px;
	font-family: 'lato', sans-serif;
	font-weight: 700;
	@media (max-width: 1000px) {
		text-align: center;
	}
`;
const StyledHerotxtSpan = styled.p`
	margin: 25px 0;
	font-size: 16px;
	font-weight: 700;
	font-family: 'lato', sans-serif;
	color: #4d5154;
	@media (max-width: 1000px) {
		text-align: center;
	}
`;
const StyledOrange = styled.span`
	color: #f16f04;
`;
const StyledBlue = styled.h1`
	color: #233ba9;
	font-size: 50px;
	font-weight: 700;
	font-family: 'lato', sans-serif;
	@media (max-width: 375px) {
		font-size: 32px;
	}
`;

const StyledBgImgDesktop = styled.div`
	background-image: url(${Banner});
	width: 100%;
	height: 332px;
	position: relative;
	margin-top: 29px;
	background-size: cover;
	background-repeat: no-repeat;
	@media (max-width: 375px) {
		height: 332px;
	}
`;

const StyledCenter = styled.div`
	//@import url('https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type= 'text/css');
	width: 100%;
	display: flex;
	justify-content: center;
	position: absolute;
	flex-direction: column;
	align-items: center;
	@media (min-width: 375px) {
		//padding-left: 3rem;
		//padding-top: 1rem;
	}
`;
const Btn = styled.button`
	border: none;

	margin-top: 20px;

	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 12px 24px;
	color: white;
	width: 130px;
	height: 48px;
	background: #233ba9;
	border-radius: 4px;
`;
const Blue = styled.p`
	color: #233ba9;
	font-size: 20px;
	margin-top: 100px;
	font-size: 28px;
	font-weight: bold;
	font-family: 'lato', sans-serif;
	max-width: 580px;
	text-align: center;
`;
const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

const StyledFixHeader = styled.h1`
	@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
	display: flex;
	justify-content: center;
	margin-top: 64px;
	font-size: 28px;
	font-weight: bold;
	font-family: 'lato', sans-serif;
	color: #6f7174;
`;
const StyledFixCenter = styled.div`
	padding: 0px 0px 24px;
	width: 304px;
	width: 32%;
	max-width: 33%;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	margin-bottom: 40px;
`;
const ImgsContainer = styled.div`
	max-width: 100%;
	height: auto;
`;
const StyledFixImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 8px;
`;
const StyledFixBox = styled.div`
	display: flex;
	max-width: 1020px;
	max-width: 1200px;

	width: 100%;
	margin: 0 auto;
	margin-top: 32px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 1070px) {
		padding: 0 20px;
		justify-content: center;
		gap: 40px;
	}
	@media (max-width: 375px) {
		padding: 0;
	}
`;
const StyledColor = styled.span`
	color: orange;
`;
const StyledColorBlue = styled.span`
	color: blue;
	margin-left: 4px;
`;
const StyledColorOrange = styled.h2`
	color: orange;
	margin: 20px 0;
	margin-left: 16px;
	font-size: 22px;
	font-family: 'lato', sans-serif;
	font-weight: bold;
`;
const StyledFixp = styled.div`
	padding: 4px 16px 0;
`;
const Plato = styled.p`
	@import url('https://fonts.googleapis.com/css?family=Lato:400,700  rel= stylesheet type= text/css');
	font-size: 14px;
	font-family: 'lato', sans-serif;
	margin-top: -10px;
`;
