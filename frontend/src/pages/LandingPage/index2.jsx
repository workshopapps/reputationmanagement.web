import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../layout/PageLayout';
import styled from 'styled-components';
import Left from '../../assets/images/WeRemoveGoogleSearch/left.svg';
import Right from '../../assets/images/WeRemoveGoogleSearch/right.svg';
import {
	HeroSection,
	HeroTextDiv,
	StyledLandingPage,
	// HowDoesItWork,
} from './LandingPage.styled';
import useAppContext from '../../hooks/useAppContext';
import Api from '../../api/axios';
import { StyledButton } from '../../components/Styles/Body/Button.styled';
import {
	// google_review,
	// google_search,
	// glassdoor,
	steps,
	steps_mobile,
	landing,
	star_icon,
} from './assets';
import { StyledH2Center } from '../../components/Styles/Body/Text.styled';
import createa from './assets/createa.svg';
import removal from './assets/removal.svg';
import progress from './assets/progress.svg';
import arrow from './assets/arrow.svg';
import airbnb from './assets/airbnb.svg';
import shape from './assets/shape.svg';
import spotify from './assets/spotify.svg';
import canon from './assets/canon.svg';
import dot from './assets/dot.svg';
import ups from './assets/ups.svg';
import Avater0 from '../../assets/images/WeRemoveGoogleSearch/Avatar0.svg';
import Avater1 from '../../assets/images/WeRemoveGoogleSearch/Avatar1.svg';
import Avater2 from '../../assets/images/WeRemoveGoogleSearch/Avatar2.svg';
import Avater3 from '../../assets/images/WeRemoveGoogleSearch/Avatar3.svg';
import Avater4 from '../../assets/images/WeRemoveGoogleSearch/Avatar4.svg';
import Avater5 from '../../assets/images/WeRemoveGoogleSearch/Avatar5.svg';
import TestimonialTemplate from './template/TestimonialTemplate';
import { toast, ToastContainer } from 'react-toastify';

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
			const response = await Api.post('/createquote', formData);
			toast.success('Your response has been submitted', {
				position: 'top-left',
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
										We offer services that improve your brand&apos;s image; they
										include reviewing and sorting negative comments about your
										business.
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

									<StyledH2Center>How Repute Works</StyledH2Center>
								</div>
								<picture>
									<source media="(max-width: 640px)" srcSet={steps_mobile} />
									<img src={steps} alt="complaint screen" />
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
											Our lawyers will take it up from there, we are here to
											help maintain your brand’s reputation. you will be notify
											when the bad review is taken down form your dashboard.
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
							<TestimonialTemplate testimonialTemplate={testimonialTemplate} />
						</StyledSlider>
					</ColorBg>

					{/* -------------------------------------  */}
					<StyledContainer>
						<StyledContainer2>
							<p>Used and loved by 1M users across 199 countries</p>
							<StyledCompanies>
								<>
									<img src={airbnb} alt="" />
									<img src={shape} alt="" />
									<img src={spotify} alt="" />
									<img src={canon} alt="" />
									<img src={dot} alt="" />
									<img src={ups} alt="" />
								</>
							</StyledCompanies>
						</StyledContainer2>
					</StyledContainer>

					{/* ------------------FOOTER----------------  */}
					<section className="cta" data-testid="Landing-footer">
						<div className="max-w-4xl mx-auto cta-inner">
							<h2>Do you need a consultation?</h2>

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
	justify-content: space-between;
	width: 100%;
	padding: 0 10%;
	margin-bottom: 5px;
	@media screen and (max-width: 884px) {
		padding: 0 20px;
	}

	img {
		width: 8%;
		// margin-right: 20px;
		@media screen and (max-width: 884px) {
			width: 15%;
		}
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
