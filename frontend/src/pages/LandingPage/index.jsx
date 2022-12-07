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

//import ArrowRightIcon from '../../assets/images/arrowRightIcon.png';
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
import { ApiPrivate } from '../../api/axios';


const LandingPage = () => {

	const [formData, setFormData] = useState({
		email: "",
		phone: "",
		businessName: "",
		reviewLocation: "",
		fullName: ""
	})

	const handleChange = (event) => {

		setFormData({
			...formData,
			[event.target.name]: event.target.value
		})
	}

	// const handleSubmit = async (event) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(formData)
		try {

			const res = ApiPrivate.post("/createquote", formData).then(
				(res) => {
					if (res.status === 201) {
						alert("Your response has been submitted");
						setFormData({
							email: "",
							phone: "",
							businessName: "",
							reviewLocation: "",
							fullName: ""
						})
					}
				}
			)
			// console.log(res.status)
			// 
		} catch (error) {
			// console.error(error)
			return error
		}
	}



	return (
		<PageLayout>
			<StyledLandingPage>
				<HeroSection data-testid="Landing-hero">
					{/********************************HERO FIRST SECTION*************************************/}
					<HeroTextDiv>
						<div className="hero-text">
							<h1>
								Get rid of negative comments <span>today</span>
							</h1>

							<h5>
								We offer services that improve your brand&apos;s image; they include
								reviewing and sorting negative comments about your business.
							</h5>

							<form onSubmit={handleSubmit}>
								<div>
									<input type="text" placeholder="Fullname*" name="fullName" onChange={handleChange} value={formData.fullName} required />
									<input type="text" placeholder="Phone*" name="phone" onChange={handleChange} value={formData.phone} required />
								</div>
								<div>
									<input type="email" placeholder="Email*" name="email" onChange={handleChange} value={formData.email} required />
									<input type="text" placeholder='Business Name*' name="businessName" onChange={handleChange} value={formData.businessName} required />
								</div>
								<div>
									<input name="reviewLocation" placeholder='Where is the review?' className='review-input' onChange={handleChange} value={formData.reviewLocation} required />
								</div>

								<div className='form-footer-info'>
									<p>Your details are safe & confidential <br />View our <a href='/privacy' className='form-footer-link'>Privacy Policy.</a></p>
								</div>

								<StyledButton className='hero-form-button' type='submit'>Submit</StyledButton>

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

					<StyledContainer>
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
								<img src={google_search} alt="CreateAccount" />
							</div>

							<div className="stepText pt-10 md:px-16 md:pt-0 flex-1 flex items-center">
								<div>
									<h3 className="font-bold my-3">
										Reliable Google Search Removal
									</h3>
									<p>
										Remove bad google search results about your business from
										the internet, our expert service got you covered.
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

						<div className="stepDiv ">
							<div className="stepImage flex-1">
								<img src={glassdoor} alt="CreateAccount" />
							</div>

							<div className="stepText pt-10 md:px-16 md:pt-0 flex-1 flex items-center justify-end">
								<div>
									<h3 className="font-bold my-3">
										Remove Bad Glassdoor Reviews
									</h3>
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
					</StyledContainer>
				</HowDoesItWork>

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

const StyledHeroSectionWrapper = styled.div`
	// width:100vw;
	background-color: #eef1fc; ;
`;

export default LandingPage;
