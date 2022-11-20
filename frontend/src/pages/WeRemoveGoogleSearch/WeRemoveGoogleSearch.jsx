import PageLayout from '../../layout/PageLayout';
import { useState } from 'react';
import Styled from 'styled-components';
import {
	StyledButton,
	// StyledTextButton,
} from '../../components/Styles/Body/Button.styled';
import {
	StyledH1,
	StyledH2,
	StyledH3,
	StyledH2Center,
} from '../../components/Styles/Body/Text.styled';
import { StyledContainer } from '../../components/Styles/Body/Container.styled';
import Image1 from '../../assets/images/WeRemoveGoogleSearch/Image1.jpg';
import Image2 from '../../assets/images/WeRemoveGoogleSearch/Image2.jpg';
import Vector1 from '../../assets/images/WeRemoveGoogleSearch/Vector1.svg';
import Vector2 from '../../assets/images/WeRemoveGoogleSearch/Vector2.svg';
import Vector3 from '../../assets/images/WeRemoveGoogleSearch/Vector3.svg';
import Work1 from '../../assets/images/WeRemoveGoogleSearch/Work1.jpg';
import Work2 from '../../assets/images/WeRemoveGoogleSearch/Work2.jpg';
import Work3 from '../../assets/images/WeRemoveGoogleSearch/Work3.jpg';
import TestimonialTemplate from './TestimonialTemplate';
import Avater0 from '../../assets/images/WeRemoveGoogleSearch/Avatar0.svg';
import Avater1 from '../../assets/images/WeRemoveGoogleSearch/Avatar1.svg';
import Avater2 from '../../assets/images/WeRemoveGoogleSearch/Avatar2.svg';
import Avater3 from '../../assets/images/WeRemoveGoogleSearch/Avatar3.svg';
import Avater4 from '../../assets/images/WeRemoveGoogleSearch/Avatar4.svg';
import Avater5 from '../../assets/images/WeRemoveGoogleSearch/Avatar5.svg';

const WeRemoveGoogleSearch = () => {
	const [testimonialTemplate] = useState([
		{
			image: Avater0,
			name: 'Steve Harry',
			text: 'FIXIT’s priority on business reputation is top-notch and their services is even better!',
			id: 1,
		},
		{
			image: Avater1,
			name: 'Morgan Troy',
			text: 'In about a month FIXIT helped my business remove a google search that was a struggle to fix',
			id: 2,
		},
		{
			image: Avater2,
			name: 'Isaac Christopher',
			text: 'FIXIT remains the one best solution for business reputation management needs',
			id: 3,
		},
		{
			image: Avater3,
			name: 'Francis Adams',
			text: 'FIXIT resolved our google search issues in a couple of days. I’m everly grateful',
			id: 4,
		},
		{
			image: Avater4,
			name: 'Anthonia Francis',
			text: 'FIXIT resolved our google search issues in a couple of days. I’m everly grateful',
			id: 5,
		},
		{
			image: Avater5,
			name: 'Anthonia Francis',
			text: 'FIXIT resolved our google search issues in a couple of days. I’m everly grateful',
			id: 6,
		},
	]);
	

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
				<SpacerSmall />
				<ButtonFlex>
					<CenterObject>
						<StyledButton space bottom width>
							Get started
						</StyledButton>
					</CenterObject>
					<CenterObject>
						<StyledButton outlined space width>
							Contact our experts
						</StyledButton>
					</CenterObject>
				</ButtonFlex>
			</StyledContainer>

			<ImageSection>
				
				<img src={Image1} alt="Image1" />
			</ImageSection>
			
			<StyledContainer>
				<StyledGrid text>
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
					<div className="imgDisplay">
						<img src={Image2} alt="Image2" />
					</div>
					<div>
						<StyledH2>Take Adavantage of our Services today</StyledH2>
						<StyledText2>
							We do not give half-hearted solutions at FIXIT. Instead than
							covering over the issue, we get rid of it completely. The problems
							these pages create will persist until they are no longer
							accessible via Google search results; if we fail to do so, you
							incur no cost. That's how simple it is!
						</StyledText2>
						<StyledButton top>Contact our experts</StyledButton>
					</div>

					<div className="imgDisplay2">
						<img src={Image2} alt="Image2" />
					</div>
				</StyledGrid>
			</StyledContainer>

			<ColorBg>
				<StyledH2Center>What our Users say about us</StyledH2Center>
				<StyledSlider>
					<TestimonialTemplate testimonialTemplate={testimonialTemplate} />
				</StyledSlider>
			</ColorBg>

			<StyledContainer>
				<StyledH2Center> Join the team</StyledH2Center>
				<StyledText center>
					Over the years, we have provided thousands of businesses fast-paced
					solution to google search and google review problems.
				</StyledText>
				<Spacer />
				<StyledGrid>
					<StyledBox>
						<img src={Work1} alt="Work1" />
						<div className="padding">
							<h3>JOB COLLECTION</h3>
							<h2>Thera’s Holdings Ltd</h2>
							<p>
								Bad google search results were fixed, and we continue to rely on
								FIXIT for all reputation problems
							</p>
						</div>
					</StyledBox>
					<StyledBox>
						<img src={Work2} alt="Work2" />
						<div className="padding">
							<h3>JOB COLLECTION</h3>
							<h2>Sparklings foods <span>and store</span> </h2>
							<p>
								Bad google search results were fixed, and we continue to rely on
								FIXIT for all reputation problems
							</p>
						</div>
					</StyledBox>
					<StyledBox>
						<img src={Work3} alt="Work3" />
						<div className="padding">
							<h3>JOB COLLECTION</h3>
							<h2>Andrews consulting</h2>
							<p>
								Bad google search results were fixed, and we continue to rely on
								FIXIT for all reputation problems
							</p>
						</div>
					</StyledBox>
				</StyledGrid>
			</StyledContainer>

			<ColorBg noBottom>
				<StyledContainer>
					<StyledH2Center>
						We can help you make your brand stand out by taking down bad
						searches from the internet.
					</StyledH2Center>
					<SpacerSmall />
					<StyledButton>Get Started</StyledButton>
				</StyledContainer>
			</ColorBg>
		</PageLayout>
	);
};

export default WeRemoveGoogleSearch;

export const StyledBox = Styled.div`
border: 1px rgba(0, 0, 0, 0.1) solid;
border-radius: 8px;
padding-bottom: 20px;

.padding{
	margin: 0 10px;
}
h3{
	color: #787A7D;
	font-size: 14px;
	margin-top: 15px;
}
h2{
	color: #000812;
	font-weight: 700;
	font-size: 1.4rem;
	line-height: 30px;
	margin: 20px 0;
}

p{
	color: #787A7D;
	font-weight: 400;
	font-size: 14px;
}



`;

export const StyledText = Styled.div`
max-width: 700px;
margin: 0 auto;
color: #787A7D;
text-align: ${(props) => (props.center ? 'center' : 'start')};
`;

export const StyledGrid = Styled.div`
    display: grid;
    grid-template-columns: ${(props) =>
			props.grid ? '1fr 1fr' : '1fr 1fr 1fr'};
	column-gap: ${(props) => (props.text ? '15%' : '20px')};
	align-items: center;
	margin-top: ${(props) => (props.grid ? '100px' : '0')};

	.imgDisplay{
		display: none;
	}

	@media screen and (max-width: 1180px) {
		column-gap: ${(props) => (props.text ? '50px' : '20px')};
	}

	@media screen and (max-width: 742px) {
		column-gap: ${(props) => (props.text ? '20px' : '20px')};
	}

	@media screen and (max-width: 640px) {
		grid-template-columns: 1fr;
		row-gap: 40px;
		.imgDisplay{
			display: block;
		}
		.imgDisplay2{
			display: none;
		}

	}
`;

export const ColorBg = Styled.div`
background: #EEF1FC;
padding: 48px 0;
text-align: center;
margin-bottom: ${(props) => (props.noBottom ? '0' : '100px')};
margin-top: 100px;
`;

export const Spacer = Styled.div`
	margin-top: 60px; 
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

export const ImageSection = Styled.div`
	margin: 100px 0;
`;

export const StyledSlider = Styled.div`

`;

export const ButtonFlex = Styled.div`
		display: flex;
		justify-content: center;

		@media screen and (max-width: 460px) {
			display: block;
		}
`;
