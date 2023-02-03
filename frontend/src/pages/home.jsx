import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';
import styled from 'styled-components';
import Left from '../assets/images/WeRemoveGoogleSearch/left.svg';
import Right from '../assets/images/WeRemoveGoogleSearch/right.svg';
import useAppContext from '../hooks/useAppContext';
import Api from '../api/axios';
import { StyledButton } from '../components/Styles/Body/Button.styled';
import steps from '../assets/images/img/Steps.svg';
import steps_mobile from '../assets/images/img/StepsMobile.svg';
import landing from '../assets/images/img/landingHero.svg';
import star_icon from '../assets/images/img/starIcon.svg';
import { StyledH2Center } from '../components/Styles/Body/Text.styled';
import createa from '../assets/images/img/createa.svg';
import removal from '../assets/images/img/removal.svg';
import progress from '../assets/images/img/progress.svg';
import arrow from '../assets/images/img/arrow.svg';
import airbnb from '../assets/images/img/airbnb.svg';
import reddit from '../assets/images/img/reddit.svg';
import spotify from '../assets/images/img/spotify.svg';
import kellogs from '../assets/images/img/kellogs.svg';
import stripe from '../assets/images/img/stripe.svg';
import dominos from '../assets/images/img/dominos.svg';
import Avater0 from '../assets/images/WeRemoveGoogleSearch/Avatar0.svg';
import Avater1 from '../assets/images/WeRemoveGoogleSearch/Avatar1.svg';
import Avater2 from '../assets/images/WeRemoveGoogleSearch/Avatar2.svg';
import Avater3 from '../assets/images/WeRemoveGoogleSearch/Avatar3.svg';
import Avater4 from '../assets/images/WeRemoveGoogleSearch/Avatar4.svg';
import Avater5 from '../assets/images/WeRemoveGoogleSearch/Avatar5.svg';
import { toast, ToastContainer } from 'react-toastify';
import cta_bg from '../assets/images/img/cta_bg.png';

const LandingPage = () => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		phone: '',
		businessName: '',
		reviewLocation: '',
		fullName: '',
	});
	const [testimonialTemplate] = useState([
		{
			image: Avater0,
			name: 'Steve Harry',
			text: 'REPUTE’s priority on business reputation is top-notch and their services is even better!',
			id: 1,
		},
		{
			image: Avater1,
			name: 'Morgan Troy',
			text: 'In about a month REPUTE helped my business remove a google search that was a struggle to fix',
			id: 2,
		},
		{
			image: Avater2,
			name: 'Isaac Christopher',
			text: 'REPUTE remains the one best solution for business reputation management needs',
			id: 3,
		},
		{
			image: Avater3,
			name: 'Francis Adams',
			text: 'REPUTE resolved our google search issues in a couple of days. I’m everly grateful',
			id: 4,
		},
		{
			image: Avater4,
			name: 'Anthonia Francis',
			text: 'REPUTE resolved our google search issues in a couple of days. I’m everly grateful',
			id: 5,
		},
		{
			image: Avater5,
			name: 'Anthonia Francis',
			text: 'REPUTE resolved our google search issues in a couple of days. I’m everly grateful',
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

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const {
		// setRequestSuccess,
		// setSuccessMessage,
		setRequestFailed,
		setErrMessage,
	} = useAppContext();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const response = await Api.post('/api/quote', formData);
			toast.success('Your response has been submitted', {
				position: 'top-right ',
			});
			// setSuccessMessage('Your response has been submitted');
			// setRequestSuccess(true);
			setFormData({
				email: '',
				phone: '',
				businessName: '',
				reviewLocation: '',
				fullName: '',
			});
			setLoading(false);
			console.log(response);
		} catch (error) {
			setLoading(false);
			setErrMessage('Request failed');
			setRequestFailed(true);
			toast.error('Request failed, try again later.');
			return error;
		}
	};
	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);
	return (
		<>
			<PageLayout>
				<StyledLandingPage>
					<HeroSection data-testid="Landing-hero">
						{/********************************HERO FIRST SECTION*************************************/}
						<StyledContainer>
							<HeroTextDiv>
								<div className="hero-text">
									<h1>
										Get rid of negative comments <span>today</span>
									</h1>
									<h5>
										We remove negative online reviews that attempt to tarnish the reputation of your business.
									</h5>

									<form onSubmit={handleSubmit}>
										<div>
											<input
												type="text"
												placeholder="Fullname*"
												name="fullName"
												onChange={handleChange}
												value={formData.fullName}
												required
											/>
											<input
												type="text"
												placeholder="Phone*"
												name="phone"
												onChange={handleChange}
												value={formData.phone}
												required
											/>
										</div>
										<div>
											<input
												type="email"
												placeholder="Email*"
												name="email"
												onChange={handleChange}
												value={formData.email}
												required
											/>
											<input
												type="text"
												placeholder="Business Name*"
												name="businessName"
												onChange={handleChange}
												value={formData.businessName}
												required
											/>
										</div>
										<div>
											<input
												name="reviewLocation"
												placeholder="Where is the review?"
												className="review-input"
												onChange={handleChange}
												value={formData.reviewLocation}
												required
											/>
										</div>

										<div className="form-footer-info">
											<p>
												Your details are safe & confidential, view our{' '}
												<Link to="/privacy" className="form-footer-link">
													Privacy Policy.
												</Link>
											</p>
										</div>

										<StyledButton
											extend
											className="hero-form-button"
											type="submit"
										>
											{!loading ? 'Submit' : <div className="loading"></div>}
										</StyledButton>
									</form>

									<div className="hero-text-btn-sec">
										<div className="hero-text-star">
											<img src={star_icon} alt="star-icon" />
										</div>
									</div>
								</div>

								<div className="hero-text-img">
									<img src={landing} alt="Landing-lady" />
								</div>
							</HeroTextDiv>
						</StyledContainer>
						{/*****************************************************HERO IMAGE SECTION*********************************************************/}

						<StyledHeroSectionWrapper className="pt-5" id="learn-more">
							<div className="HeroImage flex justify-center">
								<div className="hero-img-text">
									<h5>GETTING STARTED</h5>

									<StyledH2Center data-testid="Landing-howitworks" >How Repute Works</StyledH2Center>
								</div>
								<picture>
									<source media="(max-width: 640px)" srcSet={steps_mobile} />
									<img
										src={steps}
										alt="complaint screen"
										style={{ maxWidth: '1200px', margin: '0 auto' }}
									/>
								</picture>

								<Link to="/signup">
									<StyledButton className="flex items-center mx-auto">
										<span>Get Started</span>
									</StyledButton>
								</Link>
							</div>
						</StyledHeroSectionWrapper>
					</HeroSection>

					{/************************************NEW HOW DOES IT WORK SECTION****************************************/}
					<StyledContainer>
						<HowDoesItWork>
							<StyledH2Center>How to Get Started</StyledH2Center>
							<StyledContent>
								<StyledLeft>
									<img src={createa} alt="" />
								</StyledLeft>

								<StyledRight>
									<Number>
										<p>01</p>
									</Number>

									<div className="title">
										<h3>Create an account with us</h3>
										<p>
											Create an account with us today, in order to lodge your
											request. We are here to maintain your brand's reputation
										</p>
										<Link to="/we-remove-google-review">
											<button className="btn">
												Learn more <img src={arrow} alt="" />
											</button>
										</Link>
									</div>
								</StyledRight>
							</StyledContent>
							{/* second  */}
							<StyledContent2>
								<StyledRight2>
									<Number2>
										<p>02</p>
									</Number2>

									<div className="title position">
										<h3>Request removal form</h3>
										<p>
											You have a reviewer who left a bad review on your platform
											and you want it removed.
										</p>
										<Link to="/glassdoor">
											<button className="btn">
												Learn more <img src={arrow} alt="" />
											</button>
										</Link>
									</div>
								</StyledRight2>

								<StyledLeft>
									<img src={removal} alt="" />
								</StyledLeft>
							</StyledContent2>
							{/* Third  */}
							<StyledContent>
								<StyledLeft>
									<img src={progress} alt="" />
								</StyledLeft>

								<StyledRight>
									<Number>
										<p>03</p>
									</Number>

									<div className="title">
										<h3>Monitor the progress</h3>
										<p>
											Our team will take it up from there, and you will be notified via your dashboard 
											and/or email, every step of the way, up until the bad review is taken down.
										</p>
										<Link to="/we-remove-google-search">
											<button className="btn">
												Learn more <img src={arrow} alt="" />
											</button>
										</Link>
									</div>
								</StyledRight>
							</StyledContent>
						</HowDoesItWork>
					</StyledContainer>
					{/************************************NEW HOW DOES IT WORK SECTION****************************************/}

					{/************************************Review****************************************/}

					{/* Review */}

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
							<>
								{testimonialTemplate.map((testimonial, index) => (
									<TestimonialCard key={index}>
										<img
											src={testimonial.image}
											alt={testimonial.title}
											className="place-img"
										/>
										<h2>{testimonial.name}</h2>
										<p>{testimonial.text}</p>
									</TestimonialCard>
								))}
							</>
						</StyledSlider>
					</ColorBg>

					{/* ------------------FOOTER----------------  */}
					<section className="cta" data-testid="Landing-footer">
						<div className="max-w-4xl mx-auto cta-inner">
							<h2>Let’s help you remove that negative review</h2>

							<h4>
								Book one-on-one consultation sessions with our experts to learn
								more about <br />
								your business rights.
							</h4>

							<Link to="contact">
								<StyledButton className="flex items-center mx-auto">
									<span>Contact Us</span>
								</StyledButton>
							</Link>
						</div>
					</section>
				</StyledLandingPage>
				<ToastContainer />
			</PageLayout>
		</>
	);
};

// Styling

const TestimonialCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
border: 1px solid #CCD4DE;
box-shadow: 4px 4px 16px rgba(120, 122, 125, 0.15);
border-radius: 8px;
min-width: 256px;
height: 254px;
padding: 20px;
margin: 0 20px;

// img{
    
// }

h2{
    font-weight: 700;
    font-size: 1rem;
    line-height: 50px;
}

p{
    font-weight: 400;
    font-size: 0.8rem;
}

&:hover{
    box-shadow: 0 5px 16px rgb(0 0 0 / 0.2);
}
`;

const StyledLandingPage = styled.div`
	section {
		padding: 80px 24px;

		h2 {
			margin-bottom: 40px;
		}
	}
	.section_heading {
		text-align: center;
		max-width: 820px;
		margin: 0 auto 50px;

		h2 {
			margin-bottom: 12px;
		}
		p {
			color: #6f7174;
		}
	}
	.stepDiv {
		padding-bottom: 35px;
	}
	.stepText {
		div {
			width: 450px;

			@media screen and (max-width: 1000px) {
				width: 350px;
			}

			@media screen and (max-width: 600px) {
				width: 300px;
			}
		}

		h3 {
			/* font-weight: 800; */
			font-size: 28px;

			@media screen and (max-width: 600px) {
				font-size: 20px;
			}
		}

		.getQuoteBtn {
			display: flex;
			align-items: center;
			font-weight: 700;
			font-size: 18px;
			color: #233ba9;
			padding-top: 24px;

			@media screen and (max-width: 600px) {
				font-size: 16px;
			}
		}
	}
	.brands {
		padding: 24px;

		.content {
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
		}
		img {
			display: block;
			padding: 20px 12px;
			margin: auto;
		}
	}

	.cta {
		padding: 50px 24px;
		background: url(${cta_bg}), #eef1fc;

		.cta-inner {
			text-align: center;
			h2 {
				font-weight: 700;
				font-size: 45px;

				@media screen and (max-width: 600px) {
					font-size: 25px;
				}
			}

			h4 {
				font-size: 18px;
				font-weight: 400;

				@media screen and (max-width: 600px) {
					font-size: 16px;
				}
			}
		}
	}
	button {
		// font-size: 18px;
		margin-top: 30px;
		// font-weight: 900;
		// padding: 12px 50px;
	}

	@media screen and (max-width: 680px) {
		section {
			padding-bottom: 20px;
		}
	}
`;

const HeroTextDiv = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	// max-width: 1540px;
	margin-bottom: 70px;

	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
		.hero-text-btn-sec {
			display: none;
		}
	}

	@media (max-width: 640px) {
		flex-direction: column;
		align-items: center;
	}

	.hero-text {
		width: 520px;
		text-align: left;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;

		@media (max-width: 840px) {
			width: 100%;
		}

		@media (max-width: 640px) {
			align-items: center;
			text-align: center;
		}

		@media (max-width: 520px) {
			width: 100%;
		}

		h1 {
			font-size: 45px;
			font-weight: 700;

			@media (max-width: 840px) {
				font-size: 35px;
			}

			@media (max-width: 520px) {
				font-size: 25px;
			}

			span {
				color: #f16f04;
			}
		}

		h5 {
			font-size: 18px;
			font-weight: 400;

			@media (max-width: 520px) {
				font-size: 16px;
			}
		}

		// .hero-button {

		// 	@media (max-width:520px) {
		// 		width: 120px;
		// 		font-size: 14px;
		// 		font-weight: 400;
		// 		padding: 5px 10px;
		// 	}
		// }

		.hero-text-star {
			position: absolute;
			//top: 0;
			right: 0;
			margin-right: -6rem;
			// margin-top: .8rem;

			@media (max-width: 640px) {
				right: 0;
				padding-bottom: -8rem;
				margin-right: 4rem;
				z-index: -1;
			}

			@media (max-width: 520px) {
				right: 0;
				margin-top: -4rem;
			}
		}

		form {
			margin-top: 37px;

			div {
				display: flex;
				justify-content: space-between;
				margin-top: 12px;
			}

			div input {
				border: 1px solid #667085;
				border-radius: 8px;
				// height: 43px;
				width: 245px;
				gap: 13px;
				padding: 15px 12px;
				margin-bottom: 10px;
				&::placeholder {
					// font-size: 14px;
					color: #667085;
				}
				&:focus {
					outline: none;
				}
				@media (max-width: 840px) {
					width: 48%;
				}
			}

			div .review-input {
				width: 100%;
				border: 1px solid #787a7d;
				border-radius: 8px;
				// height: 43px;
				// font-size: 15px;
				color: #6f7174;
				padding: 15px 12px;
				// margin-top: 10px;

				&:focus {
					outline: none;
				}
			}

			.form-footer-info {
				margin-top: 9px;
			}

			.form-footer-info p {
				// font-size: 12px;
				color: #6f7174;
			}

			.form-footer-info p > a {
				color: #f16f04;
			}

			.hero-form-button {
				width: 100%;
			}

			@media (max-width: 640px) {
				width: 100%;
				padding: 0 20px;
				margin-bottom: 30px;

				div {
					flex-direction: column;
					gap: 12px;
				}

				div input {
					width: 100%;
				}

				.form-footer-info {
					text-align: left;
				}
			}
		}
	}

	.hero-text-img {
		width: 500px;
		display: flex;

		@media (max-width: 840px) {
			width: 100%;
			margin-top: 15px;
			justify-content: center;

			img {
				width: 70%;
			}
		}

		@media (max-width: 520px) {
			margin-top: 30px;
			width: 300px;
		}

		img {
			/* width: 100%; */
		}
	}
`;

const HeroSection = styled.div`
	padding: 24px 0;
	text-align: center;

	.HeroImage img {
		width: 100%;
	}
	.HeroImage {
		flex-direction: column;
		padding: 30px 100px;
		max-width: 1540px;
		margin: 0 auto;

		@media (max-width: 640px) {
			padding: 30px 10px;
		}

		.hero-img-text {
			width: 100%;

			h5 {
				text-align: center;
				color: #233ba9;
				font-size: 16px;
				font-weight: 600;
			}
		}
	}
`;

const StyledHeroSectionWrapper = styled.div`
	// width:100vw;
	background-color: #eef1fc;
`;
const HowDoesItWork = styled.div`
	margin-top: 50px;
	// width:100vw;
	// background-color: #eef1fc;
	h2 {
	}
`;
const Number = styled.div`
	background: #f16f04;
	width: 40px;
	height: 40px;
	border-radius: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;

	p {
		font-weight: 800;
		// font-size: 14px;
		color: #fff;
	}
`;
const Number2 = styled.div`
	background: #f16f04;
	width: 40px;
	height: 40px;
	border-radius: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;

	p {
		font-weight: 800;
		// font-size: 14px;
		color: #fff;
	}
`;
const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	width: 90%;
	margin: 0 auto;
	// height: 100vh;
	margin-bottom: 50px;

	@media screen and (min-width: 768px) {
		width: 96%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 20px;
		align-items: center;
	}
	@media screen and (min-width: 1000px) {
		column-gap: 10%;
	}
`;
const StyledContent2 = styled.div`
	display: flex;
	flex-direction: column;
	flex-direction: column-reverse;
	width: 90%;
	margin: 0 auto;
	margin-bottom: 50px;

	@media screen and (min-width: 768px) {
		width: 96%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 20px;
		align-items: center;
	}
`;

const StyledContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;

	@media screen and (max-width: 1238px) {
		margin: 0 20px;
	}
`;
const StyledLeft = styled.div`
	img {
		width: 100%;
	}
`;

const StyledRight = styled.div`
	width: 100%;

	@media screen and (min-width: 768px) {
		width: 70%;
	}

	.title {
		h3 {
			font-weight: 600;
			font-size: 130%;
			margin: 10px 0;
		}
		.btn {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			color: #233ba9;
			font-weight: 700;
			font-size: 110%;
			img {
				margin-left: 5px;
			}
		}
	}
`;
const StyledRight2 = styled.div`
	width: 70%;
	@media screen and (min-width: 768px) {
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: end;
		// text-align: end;
	}

	.title {
		h3 {
			font-weight: 600;
			font-size: 130%;
			margin: 10px 0;
		}
		.btn {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			color: #233ba9;
			font-weight: 700;
			font-size: 110%;

			img {
				margin-left: 5px;
			}
		}
	}
`;

const StyledContainer2 = styled.div`
	text-align: center;
	border: 1px solid #d2d3d4;
	// max-width: 1200px;
	// margin: 0 auto;
	padding: 10px;
	margin-bottom: 30px;

	p {
		margin-bottom: 20px;
	}

	@media screen and (max-width: 884px) {
	}
`;
const StyledCompanies = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	gap: 30px;
	padding: 0 10%;
	margin-bottom: 5px;
	@media (max-width: 1041px) {
		justify-content: center;
	}
	@media screen and (max-width: 884px) {
		padding: 0 20px;
	}
`;
const ColorBg = styled.div`
	background: #fff;
	padding: 48px 0;
	text-align: center;
	margin-bottom: ${(props) => (props.noBottom ? '0' : '50px')};
	margin-top: -30px;

	.absolute {
		position: absolute;
		width: 100%;
		margin-top: 7%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 5;
	}
	.scroll-arrow {
		cursor: pointer;
		margin: 0 10px;
		box-shadow: 0 0 10px #4646472d;
		border-radius: 50%;
		opacity: 0.5;
	}
	.scroll-arrow:hover {
		opacity: 1;
	}

	@media screen and (max-width: 884px) {
		.absolute {
			margin-top: 10%;
		}
	}
	@media screen and (max-width: 428px) {
		.absolute {
			margin-top: 20%;
		}
	}
	@media screen and (max-width: 320px) {
		.absolute {
			margin-top: 25%;
		}
	}
`;
const StyledSlider = styled.div`
	display: flex;
	overflow-x: scroll;
	width: 100%;
	position: relative;

	&::-webkit-scrollbar {
		width: 0;
		display: none;
	}
`;
export default LandingPage;
