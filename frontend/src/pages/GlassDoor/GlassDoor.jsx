import React from 'react';
import PageLayout from '../../layout/PageLayout';
import {
	HowWeWork,
	HowWeWorkCard,
	HowWeWorkCards,
	PageHero,
	PageHeroDetails,
	PageHeroImage,
	TopUsers,
	TopUsersContainer,
	Wrapper,
} from './GlassDoor.style';
import { StyledButton } from '../../components/Styles/Body/Button.styled';
import workColleague from '../../assets/images/glassdoor/work-colleague.png';
import airbnb from '../../assets/images/glassdoor/airbnb.png';
import diamond from '../../assets/images/glassdoor/diamond.png';
import spotify from '../../assets/images/glassdoor/spotify.png';
import canon from '../../assets/images/glassdoor/canon.png';
import bigD from '../../assets/images/glassdoor/bigD.png';
import ups from '../../assets/images/glassdoor/ups.png';
import bigM from '../../assets/images/glassdoor/bigM.png';
import profile from '../../assets/images/glassdoor/profile-add.png';
import document from '../../assets/images/glassdoor/document-text.png';
import progress from '../../assets/images/glassdoor/Progress.png';
import status from '../../assets/images/glassdoor/status.png';
const GlassDoor = () => {
	return (
		<PageLayout>
			<Wrapper>
				<PageHero>
					<PageHeroDetails>
						<h1>
							Clear Off Bad Reviews From Your Glassdoor And{' '}
							<span>Be Outstanding</span>
						</h1>
						<p>
							Remove bad reviews from your glassdoor platform and stand out
							against false and misleading reviews online.
						</p>
						<StyledButton>Get Started</StyledButton>
					</PageHeroDetails>
					<PageHeroImage>
						<img src={workColleague} alt="work-colleague" />
					</PageHeroImage>
				</PageHero>
				<TopUsers>
					<h1>Used and loved by 1M users across 199 countries</h1>
					<TopUsersContainer>
						<div className="img__container">
							<img src={airbnb} alt="airbnb" />
						</div>
						<div className="img__container">
							<img src={diamond} alt="diamond" />
						</div>
						<div className="img__container">
							<img src={spotify} alt="sportify" />
						</div>
						<div className="img__container">
							<img src={canon} alt="canon" />
						</div>
						<div className="img__container">
							<img src={bigD} alt="D logo" />
						</div>
						<div className="img__container">
							<img src={ups} alt="ups logo" />
						</div>
						<div className="img__container">
							<img src={bigM} alt="M logo" />
						</div>
					</TopUsersContainer>
				</TopUsers>
				<HowWeWork>
					<h1>How We Remove Bad Reviews</h1>
					<p>Clear off bad reviews in a few steps.</p>
					<HowWeWorkCards>
						<HowWeWorkCard>
							<div className="steps">1</div>
							<div className="img__container">
								<img src={profile} alt="profile-icon" />
							</div>
							<h2>Create an account with us</h2>
							<p>
								Create an account with us today inorder to lodge your request,
								we are here to maintain your brand’s reputation.
							</p>
						</HowWeWorkCard>
						<HowWeWorkCard>
							<div className="steps">2</div>
							<div className="img__container">
								<img src={document} alt="document-icon" />
							</div>
							<h2>Submit complaint details</h2>
							<p>
								When you login to your dashboard, you submit the details of your
								complaint which will then be picked and processed.
							</p>
						</HowWeWorkCard>
						<HowWeWorkCard>
							<div className="steps">3</div>
							<div className="img__container">
								<img src={progress} alt="progress-icon" />
							</div>
							<h2>Case gets assigned and progress monitored</h2>
							<p>
								Our lawyers pick up your complaint and takes the next step
								towards helping you maintain your brand’s reputation.
							</p>
						</HowWeWorkCard>
						<HowWeWorkCard>
							<div className="steps">4</div>
							<div className="img__container">
								<img src={status} alt="status-icon" />
							</div>
							<h2>Confirm Status</h2>
							<p>
								Login to your profile and monitor the progress of your
								complaint. You will be notified when the bad review is taken
								down form your dashboard.
							</p>
						</HowWeWorkCard>
					</HowWeWorkCards>
					<StyledButton>Get Started</StyledButton>
				</HowWeWork>
			</Wrapper>
		</PageLayout>
	);
};

export default GlassDoor;
