import React from 'react';

import { HeroSection, HeroTextDiv, StyledSupportForm } from './Support.styled';
import searchBtn from '../../assets/images/Dashboard/search.svg';

import { StyledH1Center } from '../../components/Styles/Body/Text.styled';

const Hero = () => {
	return (
		<HeroSection data-testid="heros-element">
			<HeroTextDiv>
				<StyledH1Center>Hi, how can we help you?</StyledH1Center>
				<p className="md:w-7/12">
					Ask a question or describe the problem you are having, and we will
					respond to you shortly and swiftly.
				</p>
			</HeroTextDiv>
			<StyledSupportForm>
				<img src={searchBtn} alt="search" />
				<input type="search" placeholder="Search for articles..." />

				{/*          <input
                    type="search"
                    placeholder='Search for articles'
                    required
                /> */}
				{/*
                 <button type="button">Search</button
                 >
                 */}
			</StyledSupportForm>
		</HeroSection>
	);
};

export default Hero;
