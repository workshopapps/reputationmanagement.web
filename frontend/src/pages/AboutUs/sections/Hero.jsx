import React from 'react';
import { HERO_IMAGE_DESKTOP, HERO_IMAGE_MOBILE } from '../../../assets/image';
import { Link } from 'react-router-dom';
import {
	StyledHero,
	StyledHeroMsg,
	StyledHerotxt,
	StyledHerotxtSpan,
	StyledOrange,
	ImgContainer,
	StyledBtn,
	DeskImg,
	StyledBlue,
	ImgContainerMain,
} from '../styled/Hero.styled';

export default function Hero() {
	return (
		<>
			<StyledHero data-testid="hero-element">
				<ImgContainerMain>
				<ImgContainer>
				<picture>
					<source media="(max-width: 640px)" srcSet={HERO_IMAGE_MOBILE} />
					<DeskImg src={HERO_IMAGE_DESKTOP} alt="hero" />
					</picture>
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
