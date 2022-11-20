import PageLayout from '../../layout/PageLayout';
import PageHero from './PageHero';
import TopUsers from './TopUsers';
import HowWeWork from './HowWeWork';
import { GettingStarted, Wrapper } from './GlassDoor.style';
import { StyledButton } from '../../components/Styles/Body/Button.styled';
import Reviews from './Reviews';

const GlassDoor = () => {
	return (
		<PageLayout>
			<Wrapper>
				<PageHero />
				<TopUsers />
				<HowWeWork />
				<Reviews />
				<GettingStarted>
					<h1>
						We can help you make your brand stand out by taking down bad reviews
						from your page.
					</h1>
					<StyledButton>Get Started</StyledButton>
				</GettingStarted>
			</Wrapper>
		</PageLayout>
	);
};

export default GlassDoor;
