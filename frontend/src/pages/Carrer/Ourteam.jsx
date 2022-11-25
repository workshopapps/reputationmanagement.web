/** @format */

import React, { useState } from 'react';
import PageLayout from '../../layout/PageLayout';
// import PostSnippettt from '../../components/Blog/PostSnippet';
import styled from 'styled-components';
import Background1 from '../../assets/images/BG1.jpg';

import { Link } from 'react-router-dom';
import { StyledButton } from '../../components/Styles/Body/Button.styled';
import mark from '../../assets/images/blog_images/images/mark.png';
import david from '../../assets/images/blog_images/images/david.png';
import etim from '../../assets/images/blog_images/images/etim.png';
import anidi from '../../assets/images/blog_images/images/anidi.png';
import okeke from '../../assets/images/blog_images/images/okeke.png';
import hammed from '../../assets/images/blog_images/images/hammed.png';
import vivian from '../../assets/images/blog_images/images/vivian.png';
import adaeze from '../../assets/images/blog_images/images/adaeze.png';
import ehmee from '../../assets/images/blog_images/images/Ehmee.jpg';
import teamfooter from '../../assets/images/blog_images/images/teamfooter.jpg';
import TeamTemplate from './TeamTemplate';

const StyledHeader = styled.h1`
	color: #000;

	font-size: 2rem;
	padding: 4px 0;
`;
const StyledBackGround = styled.section`
	background: linear-gradient(
		0deg,
		rgba(255, 246, 231, 0.91),
		rgba(255, 246, 231, 0.91)
	);
	background-image: url(${Background1});
`;
const StyledBanner = styled.div`
	width: 90%;
	background-color: #3844a3;
	height: 200px;
	border-radius: 8px;
	margin: 50px 0 50px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex-direction: column;
	// padding: 0px 35px 10px 35px;
	padding: 30px 150px;
	color: #fff;
`;
const StyledHeader1 = styled.h1`
	font-size: 30px;
	font-weight: bold;
	text-align: center;
`;

const StyledTeam = styled.span`
	font-size: 30px;
	font-weight: bold;
	color: #fc9a4a;
`;

const StyledMainDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center:
`;

const StyledPostSnippet = styled.div`
	display: flex;
	width: 90%;
	gap: 10px;
	margin: 0 auto;
	flex-wrap: wrap;
	line-height: 50px;
`;

// -------SolomonWole work -------
const StyledBg = styled.div`
	background: #f5f5f5;
	padding-top: 50px;
`;
const StyledContainer = styled.div`
	padding: 0 20px;
	text-align: center;

	// @media screen and (max-width:1280px) {
	//     max-width: 1240px;
	//     margin: 0 auto;
	// }
`;
const StyledH2 = styled.h2`
	font-size: 190%;
	font-weight: 700;
	max-width: 850px;
	color: ${(props) => (props.blue ? '#233BA9' : '#2B2C34')};
	margin: ${(props) => (props.margin ? '20px auto' : '0 auto')};
	span {
		color: #fdb172;
	}

	@media screen and (max-width: 640px) {
		max-width: 100%;
	}
`;
const StyledH2Center = styled(StyledH2)`
	text-align: center;
	margin-bottom: 30px;
	margin-top: 40px;

	// @media screen and (max-width: 680px) {
	// 	font-size: 24px;
	// }
`;
const StyledText = styled.div`
	max-width: 700px;
	margin: 0 auto;
	margin-bottom: 30px;
	color: #787a7d;
	text-align: ${(props) => (props.center ? 'center' : 'start')};
`;

const TeamFooter = styled.div`
	position: relative;
	text-align: center;

	.footImg {
		height: 55vh;
		min-width: 100%;
	}

	.footContent {
		width: 100%;
		position: absolute;
		top: 0;
		margin-bottom: 30px;
	}

    @media screen and (min-width:428px) {
        
    }

	@media screen and (min-width:1024px) {
        // .footImg {
        //     height: 300px;
        //     min-width: 100%;
        // }
    }
`;

const HeadBg = styled.div`
	background: #233ba9;
	width: 100%;
	padding: 30px 40px;
	color: #fff;
	text-align: center;
    border: none;
    border-radius: 8px;

    @media screen and (min-width:1024px) {
        padding: 30px 150px;
    }
    
`;

const TeamContainer = styled.div`

@media screen and (min-width:1440px) {
    max-width: 1024px;
}
`
    
// function Ourteam() {
// 	const [teamTemplate] = useState([
// 		{
// 			image: mark,
// 			name: 'Mark Essien',
// 			role: 'Founder',
// 			id: 1,
// 		},
// 		{
// 			image: david,
// 			name: 'David Abraham',
// 			role: 'Director',
// 			id: 2,
// 		},
// 		{
// 			image: etim,
// 			name: 'Idaresit Etim',
// 			role: 'Manager',
// 			id: 3,
// 		},
// 		{
// 			image: anidi,
// 			name: 'Anidi Izuchukwu',
// 			role: 'Design Lead',
// 			id: 4,
// 		},
// 		{
// 			image: okeke,
// 			name: 'David Okeke',
// 			role: 'Backend Lead',
// 			id: 5,
// 		},

// 		{
// 			image: hammed,
// 			name: 'Hammed Akinyemi',
// 			role: 'Frontend Lead',
// 			id: 6,
// 		},
// 		{
// 			image: vivian,
// 			name: 'Vivianne Thomas',
// 			role: 'Sales & Marketing Lead',
// 			id: 7,
// 		},

// 		{
// 			image: adaeze,
// 			name: 'Adaeze Ifeanyi',
// 			role: 'Product Manager',
// 			id: 8,
// 		},
// 		{
// 			image: ehmee,
// 			name: 'Iniemem Udosen',
// 			role: 'DevOps',
// 			id: 9,
// 		},
// 	]);

// 	let display;
// 	if (window.innerWidth < 768) {
// 		display = false;
// 	} else {
// 		display = true;
// 	}
// 	return (
// 		<div className="carrer-landing-pg py-12">
// 			<PageLayout>
// 				<StyledMainDiv>
// 					<StyledBanner>
// 						<StyledHeader1>
// 							{' '}
// 							Meet our <StyledTeam> Team </StyledTeam>
// 						</StyledHeader1>
// 						Businesses are at the mercy of negative reviews. Words can have
// 						devastating impact on brand reputation and can affect future sales
// 						and recruitment efforts. Here at Fixit, we provide quick and
// 						reliable actions to erase negative reviews. Here are the key members
// 						that make up the team.
// 					</StyledBanner>

// 					<TeamTemplate teamTemplate={teamTemplate} />

// 					<StyledPostSnippet>
// 						<PostSnippettt
// 							img={mark}
// 							title="Mark Essien"
// 							subtitle="Founder jhgioyo"
// 							display={display}
// 						/>
// 						<PostSnippettt
// 							img={david}
// 							title="David Abraham"
// 							subtitle="Director"
// 							display={display}
// 						/>
// 						{window.innerWidth > 768 && (
// 							<PostSnippettt
// 								img={etim}
// 								title="Idaresit Etim"
// 								subtitle="Managerr"
// 								display={display}
// 							/>
// 						)}

// 						<PostSnippettt
// 							img={anidi}
// 							title="Anidi Izuchukwu"
// 							subtitle="Design Lead"
// 							display={display}
// 						/>
// 						<PostSnippettt
// 							img={okeke}
// 							title="David Okeke"
// 							subtitle="Backend Lead,"
// 							display={display}
// 						/>
// 						{window.innerWidth > 768 && (
// 							<PostSnippettt
// 								img={hammed}
// 								title="Hammed Akinyemi"
// 								subtitle="Frontend Lead"
// 								display={display}
// 							/>
// 						)}

// 						<PostSnippettt
// 							img={vivian}
// 							title="Vivianne Thomas"
// 							subtitle="Sales & Marketing Lead"
// 							display={display}
// 						/>
// 						<PostSnippettt
// 							img={adaeze}
// 							title="Adaeze Ifeanyi"
// 							subtitle="product Manager"
// 							display={display}
// 						/>
// 					</StyledPostSnippet>
// 					<StyledBackGround className="grow-together flex flex-col items-center justify-center py-12 w-full mt-20">
// 						<StyledHeader className="text-center">
// 							Want to be a part of something special?
// 						</StyledHeader>
// 						<h4 className="mt-3 text-center">
// 							Brand reputation management is our core responsibility and this is
// 							made possible with a great team. <br /> There really is no company
// 							like Fixit, and you can join us
// 						</h4>
// 						<Link
// 							to="/carrer-pg-2"
// 							onClick={() => {
// 								window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
// 							}}
// 						>
// 							<StyledButton className="mt-4">Join our team</StyledButton>
// 						</Link>
// 					</StyledBackGround>
// 				</StyledMainDiv>
// 			</PageLayout>
// 		</div>
// 	);
// }

// export default Ourteam;

function Ourteam() {
	const [teamTemplate] = useState([
		{
			image: mark,
			name: 'Mark Essien',
			role: 'Founder',
			id: 1,
		},
		{
			image: david,
			name: 'David Abraham',
			role: 'Director',
			id: 2,
		},
		{
			image: etim,
			name: 'Idaresit Etim',
			role: 'Manager',
			id: 3,
		},
		{
			image: anidi,
			name: 'Anidi Izuchukwu',
			role: 'Design Lead',
			id: 4,
		},
		{
			image: okeke,
			name: 'David Okeke',
			role: 'Backend Lead',
			id: 5,
		},

		{
			image: hammed,
			name: 'Hammed Akinyemi',
			role: 'Frontend Lead',
			id: 6,
		},
		{
			image: vivian,
			name: 'Vivianne Thomas',
			role: 'Sales & Marketing Lead',
			id: 7,
		},

		{
			image: adaeze,
			name: 'Adaeze Ifeanyi',
			role: 'Product Manager',
			id: 8,
		},
		{
			image: ehmee,
			name: 'Iniemem Udosen',
			role: 'DevOps',
			id: 9,
		},
	]);
	return (
        <TeamContainer>
		<PageLayout>
			<StyledBg>
            <StyledContainer>
				<HeadBg>
					<StyledHeader1>
						Meet our <StyledTeam> Team </StyledTeam>
					</StyledHeader1>
					<p>
						Businesses are at the mercy of negative reviews. Words can have
						devastating impact on brand reputation and can affect future sales
						and recruitment efforts. Here at Fixit, we provide quick and
						reliable actions to erase negative reviews. Here are the key members
						that make up the team.
					</p>
				</HeadBg>
                </StyledContainer>
				<TeamTemplate teamTemplate={teamTemplate} />
				<TeamFooter>
					<img src={teamfooter} alt="Team footer" className="footImg" />
					<div className="footContent">
						<StyledContainer>
							<StyledH2Center>
								Want to be part of something special?
							</StyledH2Center>
							<StyledText center>
								Brand reputation management is our core responsibility and this
								is made possible by a great team. There really is no company
								like Fixit, and you can join us.
							</StyledText>
							<Link to="/signup">
								<StyledButton>Get Started</StyledButton>
							</Link>
						</StyledContainer>
					</div>
				</TeamFooter>
			</StyledBg>
		</PageLayout></TeamContainer>
	);
}

export default Ourteam;
