/** @format */

import React, { useState } from 'react';
import PageLayout from '../../layout/PageLayout';
// import PostSnippettt from '../../components/Blog/PostSnippet';
import styled from 'styled-components';

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
import ehmee from '../../assets/images/blog_images/images/ehmee.png';
import solomon from '../../assets/images/blog_images/images/solomon.png';
import patrick from '../../assets/images/blog_images/images/patrick.png';
import john from '../../assets/images/blog_images/images/john.png';
import teamfooter from '../../assets/images/blog_images/images/teamfooter.jpg';
import TeamTemplate from './TeamTemplate';


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
		height: 400px;
		min-width: 100%;
	}

	.footContent {
		width: 100%;
		position: absolute;
		top: 0;
		margin-bottom: 30px;
	}

    @media screen and (min-width:589px) {
        .footImg {
            height: 300px;
            min-width: 100%;
        }
    }
    @media screen and (max-width:584px) {
        .footImg {
            height: 350px;
            min-width: 100%;
        }
    }
    @media screen and (max-width:433px) {
        .footImg {
            height: 380px;
            min-width: 100%;
        }
    }
    @media screen and (max-width:355px) {
        .footImg {
            height: 400px;
            min-width: 100%;
        }
    }
    @media screen and (max-width:307px) {
        .footImg {
            height: 450px;
            min-width: 100%;
        }
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
			role: 'Frontend',
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
		{
			image: john,
			name: 'John Orisanwo',
			role: 'Frontend Lead',
			id: 10,
		},
		{
			image: solomon,
			name: 'Solomon Adewole',
			role: 'Frontend Asst. Lead',
			id: 11,
		},
		{
			image: patrick,
			name: 'Sinachi Patrick',
			role: 'Frontend PM',
			id: 12,
		},
	]);
	return (
        <>
		<PageLayout>
			<StyledBg>
            <StyledContainer>
				<HeadBg style={{ maxWidth: '1540px', margin: '0 auto'}}>
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
				<TeamTemplate teamTemplate={teamTemplate}/>
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
		</PageLayout></>
	);
}

export default Ourteam;
