import PageLayout from '../../layout/PageLayout';
import Styled from 'styled-components';
import {
	StyledButton,
	// StyledTextButton,
} from '../../components/Styles/Body/Button.styled';
import {
	StyledH1,
	StyledH2,
	StyledH3,
	StyledText,
	StyledH2Center,
} from '../../components/Styles/Body/Text.styled';
import { StyledContainer } from '../../components/Styles/Body/Container.styled';
import Image1 from '../../assets/images/WeRemoveGoogleSearch/Image1.jpg';
import Image2 from '../../assets/images/WeRemoveGoogleSearch/Image2.jpg';
import Vector1 from '../../assets/images/WeRemoveGoogleSearch/Vector1.svg';
import Vector2 from '../../assets/images/WeRemoveGoogleSearch/Vector2.svg';
import Vector3 from '../../assets/images/WeRemoveGoogleSearch/Vector3.svg';

const WeRemoveGoogleSearch = () => {
	return (
		<PageLayout>
			<StyledContainer>
				<Spacer />
				<StyledH1 center>
					Swift and reliable <span>Google search</span> removal
				</StyledH1>
				<StyledText center>
					Remove bad google search results about your business from the
					internet, our expert service got you covered. We provide quick and
					reliable solutions. Your business reputation matters to us
				</StyledText>
				<CenterObject>
					<StyledButton margin>Get started</StyledButton>
					<StyledButton outlined margin>
						Contact our experts
					</StyledButton>
				</CenterObject>
			</StyledContainer>

			<section>
				<Spacer />
				<img src={Image1} alt="Image1" />
			</section>
			<Spacer />
			<StyledContainer>
				<StyledGrid>
					<div>
						<img src={Vector1} alt="Vector1" />
						<StyledH3>What wrong google searches can do</StyledH3>
						<StyledText>
							It may sound daunting to have anything removed from Google, but
							FIXIT got you covered
						</StyledText>
					</div>
					<div>
						<img src={Vector2} alt="Vector2" />
						<StyledH3>Protect your business Reputation</StyledH3>
						<StyledText>
							Our team of experts provide speedy results, and we profer the best
							solutions.
						</StyledText>
					</div>
					<div>
						<img src={Vector3} alt="Vector3" />
						<StyledH3>We remove bad google searches</StyledH3>
						<StyledText>
							Bad google search results can have a devastating effect on your
							brand's reputation
						</StyledText>
					</div>
				</StyledGrid>
				<Spacer />
				<StyledGrid grid>
					<div>
						<StyledH2>Take Adavantage of our Services today</StyledH2>
						<StyledText2>
							We do not give half-hearted solutions at FIXIT. Instead than
							covering over the issue, we get rid of it completely. The problems
							these pages create will persist until they are no longer
							accessible via Google search results; if we fail to do so, you
							incur no cost. That's how simple it is!
						</StyledText2>
						<StyledButton>Contact our experts</StyledButton>
					</div>

					<img src={Image2} alt="Image2" />
				</StyledGrid>
			</StyledContainer>

			<ColorBg>
				<StyledH2Center>What our Users say about us</StyledH2Center>
				<div></div>
			</ColorBg>

			<StyledContainer>
				<StyledH2Center> Join the team</StyledH2Center>
				<StyledText center>
					Over the years, we have provided thousands of businesses fast-paced
					solution to google search and google review problems.
				</StyledText>
				<StyledGrid>
					<StyledBox>

					</StyledBox>
					<div></div>
					<div></div>
				</StyledGrid>
			</StyledContainer>

			<ColorBg noBottom>
				<StyledH2Center>
					We can help you make your brand stand out by taking down bad searches
					from the internet.
				</StyledH2Center>
				<SpacerSmall />
				<StyledButton>Get Started</StyledButton>
			</ColorBg>
		</PageLayout>
	);
};

export default WeRemoveGoogleSearch;

export const StyledBox = Styled.div`

`

export const StyledGrid = Styled.div`
    display: grid;
    grid-template-columns: ${(props) =>
			props.grid ? '1fr 1fr' : '1fr 1fr 1fr'};
	column-gap: 15%;
	align-items: center;
`;

export const ColorBg = Styled.div`
background: #EEF1FC;
padding: 48px 0;
text-align: center;
margin-bottom: ${(props) =>
	props.noBottom ? '0' : '150px'};
margin-top: 150px;
`;

export const Spacer = Styled.div`
	margin-top: 80px; 
`;

export const SpacerSmall = Styled.div`
	margin-top: 25px; 
`;

export const CenterObject = Styled.section`
	display: flex;
  	justify-content: center;
  	align-items: center;

`;

export const StyledText2 = Styled(StyledText)`
		margin: 20px 0;
`;
