import PageLayout from '../../layout/PageLayout';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Styled from 'styled-components';
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
import Left from '../../assets/images/WeRemoveGoogleSearch/left.svg';
import Right from '../../assets/images/WeRemoveGoogleSearch/right.svg';

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

	const slideLeft = () => {
		let slider = document.getElementById('slide-item');
		slider.scrollLeft = -1000;
	};

	const slideRight = () => {
		let i = 1000;
		let slider = document.getElementById('slide-item');
		slider.scrollLeft = ++i;
	};

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
						<Link to="/signup">
							<StyledButton space bottom width>
								Get started
							</StyledButton>
						</Link>
					</CenterObject>
					<CenterObject>
						<Link to="/contact">
							<StyledButton outlined space width>
								Contact our experts
							</StyledButton>
						</Link>
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
						<Link to="/contact">
							<StyledButton top>Contact our experts</StyledButton>
						</Link>
					</div>

					<div className="imgDisplay2">
						<img src={Image2} alt="Image2" />
					</div>
				</StyledGrid>
			</StyledContainer>

			<ColorBg>
				<StyledH2Center>What our Users say about us</StyledH2Center>
				<div className="absolute">
					<img
						src={Left}
						alt="left-arrow"
						id="left"
						className="scroll-arrow"
						onClick={slideLeft}
					/>
					<img
						src={Right}
						alt="right-arrow"
						id="right"
						className="scroll-arrow scroll-right"
						onClick={slideRight}
					/>
				</div>
				<StyledSlider id="slide-item">
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
							<h2>
								Sparklings foods <span>and store</span>{' '}
							</h2>
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
					<Link to="/signup">
						<StyledButton>Get Started</StyledButton>
					</Link>
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
		row-gap: 20px;
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

.absolute{
	position: absolute;
	width: 100%;
	margin-top: 7%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 5;
}
.scroll-arrow{
	cursor: pointer;
	margin: 0 10px;
	box-shadow: 0 0 10px #4646472D;
	border-radius: 50%;
	opacity: 0.5;
}
.scroll-arrow:hover{
	opacity: 1;
}

@media screen and (max-width: 884px) {
	.absolute{
		margin-top: 10%;
	}
}
@media screen and (max-width: 428px) {
	.absolute{
		margin-top: 20%;
	}
}
@media screen and (max-width: 320px) {
	.absolute{
		margin-top: 25%;
	}
}
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

	a{
		min-width: 100%;
	}
`;

export const StyledText2 = Styled(StyledText)`
		margin: 20px 0;
`;

export const ImageSection = Styled.div`
	margin: 100px 0;
`;

export const StyledSlider = Styled.div`
display: flex;
overflow-x: scroll;
width: 100%;
position: relative;

&::-webkit-scrollbar{
	width: 0;
}
`;

export const ButtonFlex = Styled.div`
		display: flex;
		justify-content: center;

		@media screen and (max-width: 460px) {
			display: block;
		}
`;

// Button styling

export const StyledButton = Styled.button`
    background: ${(props) => (props.outlined ? '#fff' : '#233BA9')};
    padding: 10px 40px;
    margin: ${(props) => (props.space ? '0 10px' : '0')};
    border-radius: 6px;
    color: ${(props) => (props.outlined ? '#233BA9' : '#fff')};
    border: ${(props) =>
			props.outlined ? '1px #233BA9 solid' : '1px #233BA9 solid'};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    &:hover{
        background: ${(props) => (props.outlined ? '#E5E5E5' : '#1F3491')};
    }

    @media screen and (max-width: 460px) {
        margin-bottom: ${(props) => (props.bottom ? '20px' : 0)};
        margin-top: ${(props) => (props.top ? '20px' : 0)};
        min-width: ${(props) => (props.width ? '94%' : '')};
        padding: 20px 40px;
    }
    
    @media screen and (max-width: 320px) {
        font-size: 0.82rem;
    }
   
    
    
`;

export const StyledTextButton = Styled.button`
    color: #233BA9;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 12px 30px;

    &:hover{
        color: #1F3491;
    }
`;

// Text Styling

export const StyledH1 = Styled.h1`
font-size: 2.5rem;
font-weight: 700;
color: ${(props) => (props.blue ? '#233BA9' : '#2B2C34')};
line-height: 100px;
text-align: ${(props) => (props.center ? 'center' : 'start')};

span{
    color: #F16F04;
}

@media screen and (max-width: 809px) {
    line-height: 50px;
    margin: 20px 0;
}

@media screen and (max-width: 320px) {
    font-size: 1.8rem;
    line-height: 35px;
}

`;

export const StyledH1Center = Styled(StyledH1)`
    text-align: center;
    line-height: 50px
`;

export const StyledH2 = Styled.h2`
font-size: 190%;
font-weight: 700;
max-width: 850px;
color: ${(props) => (props.blue ? '#233BA9' : '#2B2C34')};
margin: ${(props) => (props.margin ? '20px auto' : '0 auto')};
span{
    color: #FDB172;
}

@media screen and (max-width: 640px) {
    max-width: 100%;
}
`;

export const StyledH2Center = Styled(StyledH2)`
    text-align: center;
    margin-bottom: 40px;

	@media screen and (max-width: 680px) {
        font-size: 24px;
    }
`;

export const StyledH3 = Styled.h3`
font-size: 1.23rem;
font-weight: 700;
color: #2B2C34;
margin: 20px 0;

`;

// Container styling

export const StyledContainer = Styled.div`
    max-width: 1240px;
    margin: 0 auto;

    @media screen and (max-width:1280px) {
        padding: 0 20px;
    }

`;
