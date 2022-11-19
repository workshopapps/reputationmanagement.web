import PageLayout from '../../layout/PageLayout';
import Styled from 'styled-components';
import {
	StyledButton,
	// StyledTextButton,
} from '../../components/Styles/Body/Button.styled';
import {
	StyledH1,
	StyledH3,
	StyledText,
	StyledH2Center,
} from '../../components/Styles/Body/Text.styled';
import { StyledContainer } from '../../components/Styles/Body/Container.styled';
import Image1 from '../../assets/images/WeRemoveGoogleSearch/Image1.jpg';

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
					<StyledButton outlined margin>Contact our experts</StyledButton>
					</CenterObject>
				
			</StyledContainer>

			<section>
				<img src={Image1} alt="Image1" />
			</section>

			<StyledContainer>
				<StyledGrid>
					<div>
						<StyledH3>What wrong google searches can do</StyledH3>
						<StyledText>
							Bad google search results can have a devastating effect on your
							brand's reputation
						</StyledText>
					</div>
					<div>
						<StyledH3>What wrong google searches can do</StyledH3>
						<StyledText>
							Bad google search results can have a devastating effect on your
							brand's reputation
						</StyledText>
					</div>
					<div>
						<StyledH3>What wrong google searches can do</StyledH3>
						<StyledText>
							Bad google search results can have a devastating effect on your
							brand's reputation
						</StyledText>
					</div>
				</StyledGrid>

				<StyledGrid grid>
					<div>
						<StyledH3>Take Adavantage of our Services today</StyledH3>
						<StyledText>
							We do not give half-hearted solutions at FIXIT. Instead than
							covering over the issue, we get rid of it completely. The problems
							these pages create will persist until they are no longer
							accessible via Google search results; if we fail to do so, you
							incur no cost. That's how simple it is!
						</StyledText>
						<StyledButton>Contact our experts</StyledButton>
					</div>
					<div>
						<StyledH3>Image space</StyledH3>
					</div>
				</StyledGrid>
			</StyledContainer>

			<ColorBg>
				<StyledH2Center>Take Adavantage of our Services today</StyledH2Center>
				<div></div>
			</ColorBg>

			<StyledContainer>
				<StyledH2Center> Join the team</StyledH2Center>
				<StyledText>
					Over the years, we have provided thousands of businesses fast-paced
					solution to google search and google review problems.
				</StyledText>
				<div></div>
			</StyledContainer>

			<ColorBg>
				<StyledH2Center>
					We can help you make your brand stand out by taking down bad searches
					from the internet.
				</StyledH2Center>
				<StyledButton>Contact our experts</StyledButton>
			</ColorBg>
		</PageLayout>
	);
};

export default WeRemoveGoogleSearch;

export const StyledGrid = Styled.div`
    display: grid;
    grid-template-columns: ${(props) =>
			props.grid ? '1fr 1fr' : '1fr 1fr 1fr'};
`;

export const ColorBg = Styled.div`
background: #EEF1FC;
padding: 48px 0;
text-align: center;
`;

export const Spacer = Styled.div`
	margin-top: 80px; 
`;

export const CenterObject = Styled.section`
	display: flex;
  	justify-content: center;
  	align-items: center;

`;
