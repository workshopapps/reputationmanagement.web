import React from 'react';

import {
	StyledHero,
	StyledHeroMsg,
	StyledHerotxt,
	StyledHerotxtSpan,
	StyledOrange,
	MobImg,
	StyledBtn,
	DeskImg,
	StyledBlue,
} from '../styled/Hero.styled';

export default function Hero() {
	return (
		<>
			<StyledHero>
				<DeskImg src="assets/images/Hero-image-Desktop.png" alt="hero" />
				<MobImg
					src="assets/images/Hero-image-Mobile.png"
					alt="hero"
					width="375px"
				/>
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
