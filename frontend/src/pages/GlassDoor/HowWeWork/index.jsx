import React from 'react';
import { StyledButton } from '../../../components/Styles/Body/Button.styled';
import { howWeWorkDetails } from '../data';
import { HowWeWorkCard, HowWeWorkCards, Wrapper } from './HowWeWork.style';

const HowWeWork = () => {
	return (
		<Wrapper>
			<h1>How We Remove Bad Reviews</h1>
			<p>Clear off bad reviews in a few steps.</p>
			<HowWeWorkCards>
				{howWeWorkDetails.map((details) => {
					return (
						<HowWeWorkCard key={details.id}>
							<div className="steps">{details.id}</div>
							<div className="img__container">
								<img src={details.icon} alt="profile-icon" />
							</div>
							<h2>{details.title}</h2>
							<p>{details.text}</p>
						</HowWeWorkCard>
					);
				})}
			</HowWeWorkCards>
			<StyledButton>Get Started</StyledButton>
		</Wrapper>
	);
};

export default HowWeWork;
