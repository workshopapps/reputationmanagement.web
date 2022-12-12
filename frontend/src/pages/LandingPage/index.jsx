import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../layout/PageLayout';
import {
	HeroSection,
	HeroTextDiv,
	StyledLandingPage,
	HowDoesItWork,
} from './LandingPage.styled';
import { StyledH2Center } from '../../components/Styles/Body/Text.styled';
import { StyledContainer } from '../../components/Styles/Body/Container.styled';
import { StyledButton } from '../../components/Styles/Body/Button.styled';
import arrowRightIconBlue from '../../assets/images/arrowRightIconBlue.png';
import {
	google_review,
	google_search,
	glassdoor,
	steps,
	steps_mobile,
	landing,
	star_icon,
} from './assets';
import styled from 'styled-components';
import Api from '../../api/axios';
import useAppContext from '../../hooks/useAppContext';
import Avater0 from '../../assets/images/WeRemoveGoogleSearch/Avatar0.svg';
import Avater1 from '../../assets/images/WeRemoveGoogleSearch/Avatar1.svg';
import Avater2 from '../../assets/images/WeRemoveGoogleSearch/Avatar2.svg';
import Avater3 from '../../assets/images/WeRemoveGoogleSearch/Avatar3.svg';
import Avater4 from '../../assets/images/WeRemoveGoogleSearch/Avatar4.svg';
import Avater5 from '../../assets/images/WeRemoveGoogleSearch/Avatar5.svg';
import Left from '../../assets/images/WeRemoveGoogleSearch/left.svg';
import Right from '../../assets/images/WeRemoveGoogleSearch/right.svg';
import airbnb from './assets/airbnb.svg';
import shape from './assets/shape.svg';
import spotify from './assets/spotify.svg';
import canon from './assets/canon.svg';
import dot from './assets/dot.svg';
import ups from './assets/ups.svg';
import { useEffect } from 'react';
import TestimonialTemplate from './template/TestimonialTemplate';

const Index2 = () => {
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
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		phone: '',
		businessName: '',
		reviewLocation: '',
		fullName: '',
	});

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
		setRequestSuccess,
		setSuccessMessage,
		setRequestFailed,
		setErrMessage,
	} = useAppContext();

	const handleSubmit = async () => {
		setLoading(true);
		try {
			const response = await Api.post('/api/createquote', formData);
			setLoading(false);
			setSuccessMessage('Your response has been submitted');
			setRequestSuccess(true);
			setFormData({
				email: '',
				phone: '',
				businessName: '',
				reviewLocation: '',
				fullName: '',
			});
			console.log(response);
		} catch (error) {
			setLoading(false);
			setErrMessage('Request failed');
			setRequestFailed(true);
			return error;
		}
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
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
											Your details are safe & confidential <br />
											View our{' '}
											<a href="/privacy" className="form-footer-link">
												Privacy Policy.
											</a>
										</p>
									</div>

									<StyledButton className="hero-form-button" type="submit">
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

								<StyledH2Center>How We Fixit</StyledH2Center>
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

				{/************************************HOW DOES IT WORK SECTION****************************************/}

				<HowDoesItWork
					className="HowDoesItWork"
					data-testid="Landing-howitworks"
				>
					<h5>SERVICES</h5>
					<StyledH2Center>Special Offers</StyledH2Center>

					<div className="stepDiv ">
						<div className="stepImage flex-1">
							<img src={google_review} alt="CreateAccount" />
						</div>

						<div className="stepText pt-10 md:px-16 md:pt-0 flex-1 flex items-center justify-end">
							<div>
								<h3 className="font-bold my-3">
									Remove Negative Google Reviews
								</h3>
								<p>
									You can remove troll comments that defame your brand and
									business either on the play store or any other google review
									enabled platforms
								</p>

								<Link to="/we-remove-google-review" className="getQuoteBtn">
									<span>Learn More</span>
									<img
										src={arrowRightIconBlue}
										className="px-3"
										alt="ArrowRightIcon"
									/>
								</Link>
							</div>
						</div>
					</div>

					<div className="stepDiv ">
						<div className="stepImage flex-1">
							<img src={glassdoor} alt="CreateAccount" />
						</div>

						<div className="stepText pt-10 md:px-16 md:pt-0 flex-1 flex items-center justify-end">
							<div>
								<h3 className="font-bold my-3">Remove Bad Glassdoor Reviews</h3>
								<p>
									We can also help to remove bad reviews on the Glassdoor
									platform about your business.
								</p>

								<Link to="/glassdoor" className="getQuoteBtn">
									<span>Learn More</span>
									<img
										src={arrowRightIconBlue}
										className="px-3"
										alt="ArrowRightIcon"
									/>
								</Link>
							</div>
						</div>
					</div>
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

					<div className="stepDiv ">
						<div className="stepImage flex-1">
							<img src={google_search} alt="CreateAccount" />
						</div>

						<div className="stepText pt-10 md:px-16 md:pt-0 flex-1 flex items-center">
							<div>
								<h3 className="font-bold my-3">
									Reliable Google Search Removal
								</h3>
								<p>
									Remove bad google search results about your business from the
									internet, our expert service got you covered.
								</p>

								<Link to="/we-remove-google-search" className="getQuoteBtn">
									<span>Learn More</span>
									<img
										src={arrowRightIconBlue}
										className="px-3"
										alt="ArrowRightIcon"
									/>
								</Link>
							</div>
						</div>
					</div>
				</HowDoesItWork>

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

				{/****************************************************LANDING FOOTER************************************/}
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
		</PageLayout>
	);
};

// Styling

const ColorBg = styled.div`
	background: #fff;
	padding: 48px 0;
	text-align: center;
	margin-bottom: ${(props) => (props.noBottom ? '0' : '50px')};
	margin-top: -100px;

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

const StyledHeroSectionWrapper = styled.div`
	// width:100vw;
	background-color: #eef1fc; ;
`;

const StyledContainer2 = styled.div`
	text-align: center;
	border: 1px solid #d2d3d4;
	max-width: 1200px;
	margin: 0 auto;
	padding: 10px;
	margin-bottom: 30px;
	margin-top: -120px;

	p {
		margin-bottom: 15px;
	}

	@media screen and (max-width: 1238px) {
		margin: 0 20px;
	}
	@media screen and (max-width: 884px) {
		margin-bottom: 30px;
		margin-top: -120px;
	}
	@media screen and (max-width: 765px) {
		display: none;
	}
`;
const StyledCompanies = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0 10%;

	img {
		width: 8%;
		// margin-right: 20px;
	}
`;

export default Index2;
