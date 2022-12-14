/** @format */

import React, { useState } from 'react';
import PageLayout from '../layout/PageLayout';
import { FaArrowRight } from 'react-icons/fa';
// import PostSnippettt from '../../components/Blog/PostSnippet';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { StyledButton } from '../components/Styles/Body/Button.styled';
import mark from '../assets/images/blog_images/images/mark.png';
import david from '../assets/images/blog_images/images/david.png';
import etim from '../assets/images/blog_images/images/etim.png';
import anidi from '../assets/images/blog_images/images/anidi.png';
import okeke from '../assets/images/blog_images/images/okeke.png';
import hammed from '../assets/images/blog_images/images/hammed.png';
import hyperion from '../assets/images/blog_images/images/hyperion.png';
import adaeze from '../assets/images/blog_images/images/adaeze.png';
import ehmee from '../assets/images/blog_images/images/ehmee.png';
import solomon from '../assets/images/blog_images/images/solomon.png';
import patrick from '../assets/images/blog_images/images/patrick.png';
import john from '../assets/images/blog_images/images/john.png';
import teamfooter from '../assets/images/blog_images/images/teamfooter.jpg';
import { useEffect } from 'react';

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
	/* max-width: 90%;
	margin: 0px auto; */
`;
const StyledContainer = styled.div`
	padding: 0 20px;
	text-align: center;
	max-width: 92%;
	max-width: 1240px;
	margin: 0px auto;
	@media screen and (max-width: 1300px) {
		max-width: 95%;
	}
`;
// const StyledH2 = styled.h2`

// `;
const StyledH2Center = styled.h2`
	text-align: center;
	margin-top: 40px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 36px;
	line-height: 150%;
	max-width: 850px;
	color: #2b2c34;
	padding-bottom: 30px;
	margin: ${(props) => (props.margin ? '20px auto' : '0 auto')};
	span {
		color: #fdb172;
	}

	@media screen and (max-width: 640px) {
		max-width: 100%;
		font-size: 24px;
	}
`;
const StyledText = styled.div`
	max-width: 700px;
	margin: 0 auto;
	margin-bottom: 30px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 150%;
	/* or 27px */
	text-align: center;
	color: #2b2c34;
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
		top: 50px;
		margin-bottom: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		a button {
			margin: 0px auto;
			font-family: 'Lato';
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 150%;
			text-align: center;
			.icon {
				margin-left: 8px;
			}
		}
	}

	@media screen and (min-width: 589px) {
		.footImg {
			height: 300px;
			min-width: 100%;
		}
	}
	@media screen and (max-width: 584px) {
		.footImg {
			height: 350px;
			min-width: 100%;
		}
	}
	@media screen and (max-width: 433px) {
		.footImg {
			height: 380px;
			min-width: 100%;
		}
	}
	@media screen and (max-width: 355px) {
		.footImg {
			height: 400px;
			min-width: 100%;
		}
	}
	@media screen and (max-width: 307px) {
		.footImg {
			height: 450px;
			min-width: 100%;
		}
	}

	@media screen and (min-width: 1024px) {
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
	p {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 150%;
		/* or 27px */

		text-align: center;
	}

	@media screen and (min-width: 1024px) {
		padding: 30px 150px;
	}
`;
const Team = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 20px;
row-gap: 20px;
text-align: center;
margin: 50px 0;

.border{
    background: #FFFFFF;
    border: none;
    border-radius: 8px;
    padding: 30px;
}

h2, p{
    margin: 0 10px;
}

h2{
    font-size: 1rem;
    font-weight: 500;
    margin-top: 20px;
    color: #2B2C34;
}
p{
    color: #6F7174;
}

@media screen and (max-width:420px) {
    grid-template-columns: 1fr;
}
@media screen and (min-width:1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}


`;

const StyledTeamContainer = styled.div`
	max-width: 1240px;

    margin: 0px auto;
    padding: 0px 20px;
    @media screen and (max-width:1300px) {
	    max-width: 95%;
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
			image: hyperion,
			name: 'Leo Hyperion',
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
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<PageLayout>
				<StyledBg>
					<StyledContainer>
						<HeadBg style={{ maxWidth: '1540px', margin: '0 auto' }}>
							<StyledHeader1>
								Meet our <StyledTeam> Team </StyledTeam>
							</StyledHeader1>
							<p>
								Businesses are at the mercy of negative reviews. Words can have
								devastating impact on brand reputation and can affect future
								sales and recruitment efforts. Here at Repute, we provide quick
								and reliable actions to erase negative reviews. Here are the key
								members that make up the team.
							</p>
						</HeadBg>
					</StyledContainer>
					<StyledTeamContainer>
						<Team>
							{teamTemplate.map((teamMembers) => (
								<div className="border">
									<img
										src={teamMembers.image}
										alt={teamMembers.name}
										className="place-img"
									/>
									<h2>{teamMembers.name}</h2>
									<p>{teamMembers.role}</p>
								</div>
							))}
						</Team>
					</StyledTeamContainer>
					<TeamFooter>
						<img src={teamfooter} alt="Team footer" className="footImg" />
						<div className="footContent">
							<StyledContainer>
								<StyledH2Center>
									Want to be part of something special?
								</StyledH2Center>
								<StyledText center>
									Brand reputation management is our core responsibility and
									this is made possible by a great team. There really is no
									company like REPUTE, and you can join us.
								</StyledText>
								<Link to="/career">
									<StyledButton>
										Join Our Team <FaArrowRight className="icon" />{' '}
									</StyledButton>
								</Link>
							</StyledContainer>
						</div>
					</TeamFooter>
				</StyledBg>
			</PageLayout>
		</>
	);
}

export default Ourteam;
