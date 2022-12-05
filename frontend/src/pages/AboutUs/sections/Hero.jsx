import React from 'react';
import WomanSmile from '../../../assets/images/woman__smile.png';
import { Link } from 'react-router-dom';
import {
	StyledHero,
	StyledHeroMsg,
	StyledHerotxt,
	StyledHerotxtSpan,
	StyledOrange,
	ImgContainer,
	StyledBtn,
	StyledBlue,
	ImgContainerMain,
} from '../styled/Hero.styled';

export default function Hero() {
	return (
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
						We are the team offering you a trusted, convenient, and professional
						service.{' '}
						<StyledHerotxtSpan>
							We boast of a team of{' '}
							<StyledOrange>legal professionals</StyledOrange> and{' '}
							<StyledOrange>reputation management consultants</StyledOrange>,
							well equipped with in-depth knowledge in people and brand
							management.
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
	);
}
