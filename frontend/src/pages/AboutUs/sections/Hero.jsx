import React from 'react';
import { HERO_IMAGE_DESKTOP, HERO_IMAGE_MOBILE } from '../../../assets/image';

import {
	StyledHero,
	StyledHeroMsg,
	StyledHerotxt,
	StyledHerotxtSpan,
	StyledOrange,
	MobImg,
	ImgContainer,
	StyledBtn,
	DeskImg,
	StyledBlue,
} from '../styled/Hero.styled';

export default function Hero() {
	return (
		<>
			<StyledHero>
				<ImgContainer>
					<DeskImg src={HERO_IMAGE_DESKTOP} alt="hero" />
					<MobImg src={HERO_IMAGE_MOBILE} alt="hero" width="375px" />
				</ImgContainer>

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
					<StyledBtn>Register</StyledBtn>
				</StyledHeroMsg>
			</StyledHero>
		</>
	);
}
