import React from 'react';
import styled from 'styled-components';
import PageLayout from '../../layout/PageLayout';
import {
	HeroSection,
	HeroTextDiv,
	StyledLandingPage,
} from './LandingPage.styled';
import {
	StyledH1Center,
	StyledH2Center,
} from '../../components/Styles/Body/Text.styled';
import { StyledButton } from '../../components/Styles/Body/Button.styled';
import HeroImage from '../../assets/images/complaint-screen.png';
import HeroImageMobile from '../../assets/images/complaint-screen-mobile.png';
import ArrowRightIcon from '../../assets/images/arrowRightIcon.png';

const LandingPage = () => {
	return (
		<PageLayout>
			<StyledLandingPage>
				<HeroSection>
					<HeroTextDiv>
						<StyledH1Center className="fs-3">
							We help you maintain your <span>brand’s</span> reputation
						</StyledH1Center>
						<p>
							Get your business to the next level, by removing every bad review
							that is getting in the way, our lawyers are here to help you
							maintain your brand’s reputation.
						</p>

						<StyledButton className="flex items-center mx-auto">
							<span>Get a quote</span>
							<img src={ArrowRightIcon} className="px-3" alt="ArrowRightIcon" />
						</StyledButton>
					</HeroTextDiv>

					<div className="HeroImage flex justify-center">
						<picture>
							<source media="(max-width: 640px)" srcset={HeroImageMobile} />
							<img src={HeroImage} alt="complaint screen" />
						</picture>
					</div>
				</HeroSection>

				<section className="HowDoesItWork">
					<StyledH2Center>How does it work?</StyledH2Center>
				</section>

				<section className="testimonials">
					<StyledH2Center>
						Trusted by so many forward-thinking companies
					</StyledH2Center>
				</section>

				<div className="brands"></div>

				<section className="cta">
					<StyledH2Center>
						We are here to help maintain your brand’s reputation. If we don’t
						succeed, you don’t pay.
					</StyledH2Center>
				</section>
			</StyledLandingPage>
		</PageLayout>
	);
};

export default LandingPage;
