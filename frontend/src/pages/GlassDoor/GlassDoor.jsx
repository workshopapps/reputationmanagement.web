import PageLayout from '../../layout/PageLayout';
import {
	PageHero,
	PageHeroDetails,
	PageHeroImage,
	TopUsers,
	Wrapper,
} from './GlassDoor.style';
import { StyledButton } from '../../components/Styles/Body/Button.styled';
import workColleague from '../../assets/images/work-colleague.png';
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
				</TopUsers>
			</Wrapper>
		</PageLayout>
	);
};

export default GlassDoor;
