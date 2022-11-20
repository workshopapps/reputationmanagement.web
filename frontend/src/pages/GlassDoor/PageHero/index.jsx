import React from 'react';
import { StyledButton } from '../../../components/Styles/Body/Button.styled';
import { PageHeroDetails, PageHeroImage, Wrapper } from './PageHero.style';
import workColleague from '../../../assets/images/glassdoor/work-colleague.png';

const PageHero = () => {
	return (
		<Wrapper>
			<PageHeroDetails>
				<h1>
					Clear Off Bad Reviews From Your Glassdoor And{' '}
					<span>Be Outstanding</span>
				</h1>
				<p>
					Remove bad reviews from your glassdoor platform and stand out against
					false and misleading reviews online.
				</p>
				<StyledButton>Get Started</StyledButton>
			</PageHeroDetails>
			<PageHeroImage>
				<img src={workColleague} alt="work-colleague" />
			</PageHeroImage>
		</Wrapper>
	);
};

export default PageHero;
