import PageLayout from '../../layout/PageLayout';
import {
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
				{/* <HowWeWork>
					<h1>How We Remove Bad Reviews</h1>
					<p>Clear off bad reviews in a few steps.</p>
				</HowWeWork> */}
			</Wrapper>
		</PageLayout>
	);
};

export default GlassDoor;
