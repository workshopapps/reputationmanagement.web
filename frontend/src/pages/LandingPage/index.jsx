import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PageLayout from '../../layout/PageLayout';
import {
	HeroSection,
	HeroTextDiv,
	StyledLandingPage,
} from './LandingPage.styled';
import {
	StyledH1Center,
	StyledH2Center,
} from '../../components/Styles/Body/Text.styled';
import { StyledContainer } from '../../components/Styles/Body/Container.styled';
import { StyledButton } from '../../components/Styles/Body/Button.styled';

import HeroImage from '../../assets/images/complaint-screen.png';
import HeroImageMobile from '../../assets/images/complaint-screen-mobile.png';
import ArrowRightIcon from '../../assets/images/arrowRightIcon.png';
import arrowRightIconBlue from '../../assets/images/arrowRightIconBlue.png';
import CreateAccountImage from '../../assets/images/screen-create-account.png';
import RequestRemoval from '../../assets/images/screen-request-removal.png';
import MonitorProgressImage from '../../assets/images/screen-monitor-progress.png';

import {
	arla,
	buybetter,
	jumia,
	teeka4,
	konga,
	review_vivian,
	review_sherifah,
	review_darey,
	review_stars,
} from './assets';

const LandingPage = () => {
	return (
		<PageLayout>
			<StyledLandingPage>
				<HeroSection>
					<HeroTextDiv>
						<StyledH1Center>
							We help you maintain your <span>brand’s</span> reputation
						</StyledH1Center>
						<p>
							Get your business to the next level, by removing every bad review
							that is getting in the way, our lawyers are here to help you
							maintain your brand’s reputation.
						</p>

						<Link to="get-a-quote">
							<StyledButton className="flex items-center mx-auto">
								<span>Get a quote</span>
								<img
									src={ArrowRightIcon}
									className="px-3"
									alt="ArrowRightIcon"
								/>
							</StyledButton>
						</Link>
					</HeroTextDiv>

					<div className="HeroImage flex justify-center">
						<picture>
							<source media="(max-width: 640px)" srcset={HeroImageMobile} />
							<img src={HeroImage} alt="complaint screen" />
						</picture>
					</div>
				</HeroSection>

				<section className="HowDoesItWork">
					<StyledH2Center>How does it work?</StyledH2Center>

					<StyledContainer>
						<div className="stepDiv md:flex mb-10">
							<div className="stepImage flex-1">
								<img src={CreateAccountImage} alt="CreateAccount" />
							</div>

							<div className="stepText pt-10 md:px-16 md:pt-0 flex-1 flex items-center">
								<div>
									<span className="countBtn">01</span>
									<h3 className="font-bold my-3">Create an account with us</h3>
									<p>
										Creat an account with us today inorder to lodge your
										request, we are here to maintain your brand’s reputation.
									</p>

									<Link to="/get-a-quote" className="getQuoteBtn">
										<span>Get a quote</span>
										<img
											src={arrowRightIconBlue}
											className="px-3"
											alt="ArrowRightIcon"
										/>
									</Link>
								</div>
							</div>
						</div>

						<div className="stepDiv md:flex mb-10 flex-row-reverse">
							<div className="stepImage flex-1">
								<img src={RequestRemoval} alt="CreateAccount" />
							</div>

							<div className="stepText pt-10 md:px-16 md:pt-0 flex-1 flex items-center">
								<div>
									<span className="countBtn">02</span>
									<h3 className="font-bold my-3">Request removal form</h3>
									<p>
										You have a reviewer who left a bad review on your platform
										and you want it removed.
									</p>

									<Link to="/get-a-quote" className="getQuoteBtn">
										<span>Get a quote</span>
										<img
											src={arrowRightIconBlue}
											className="px-3"
											alt="ArrowRightIcon"
										/>
									</Link>
								</div>
							</div>
						</div>

						<div className="stepDiv md:flex">
							<div className="stepImage flex-1">
								<img src={MonitorProgressImage} alt="CreateAccount" />
							</div>

							<div className="stepText pt-10 md:px-16 md:pt-0 flex-1 flex items-center">
								<div>
									<span className="countBtn">03</span>
									<h3 className="font-bold my-3">Monitor the progress</h3>
									<p>
										Our lawyers will take it up from there, we are here to help
										maintaim your brand’s reputation. you will be notify when
										the bad review is taken down form your dashboard.
									</p>

									<Link to="/get-a-quote" className="getQuoteBtn">
										<span>Get a quote</span>
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
				</section>

				<section className="testimonials">
					<div className="section_heading">
						<StyledH2Center>
							Trusted by so many forward-thinking companies
						</StyledH2Center>
						<p>See testimonies from some of our clients</p>
					</div>

					<div className="content flex justify-between">
						<div className="testimonial md:px-3 w-full md:w-1/2 lg:w-1/3 ">
							<div className="card">
								<div className="testimonial_header flex items-center">
									<img src={review_sherifah} alt="review_vivian" />

									<div className="rhText px-3">
										<div className="flex items-center">
											<h6 className="font-bold mr-2">Sherifah Mohammed</h6>
											<img src={review_stars} alt="review_stars" />
										</div>
										<p>Sales representative at gimoh LTD</p>
									</div>
								</div>
								<p className="reviewText">
									“The company's legal representative, Emeka Ikenta, patiently
									listened to me and then completely understood why I was
									thinking about asking for help. Thank you! He gave me some
									good, encouraging suggestions.”
								</p>
							</div>
						</div>

						<div className="testimonial md:px-3 w-full md:w-1/2 lg:w-1/3 ">
							<div className="card">
								<div className="testimonial_header flex items-center">
									<img src={review_vivian} alt="review_vivian" />

									<div className="rhText px-3">
										<div className="flex items-center">
											<h6 className="font-bold mr-2">Vivian Mofe</h6>
											<img src={review_stars} alt="review_stars" />
										</div>
										<p>Sales representative at gimoh LTD</p>
									</div>
								</div>
								<p className="reviewText">
									“Probably the best reputation agency out there. I had a super
									friendly experience, and on top of fixing our brand image at
									Gilmoh, they offered an exclusive consultation on business
									strategy that is really helping our business. I must say, the
									FixIt team is the best, thank you.”
								</p>
							</div>
						</div>

						<div className="testimonial md:px-3 w-full md:w-1/2 lg:w-1/3 ">
							<div className="card">
								<div className="testimonial_header flex items-center">
									<img src={review_darey} alt="review_vivian" />

									<div className="rhText px-3">
										<div className="flex items-center">
											<h6 className="font-bold mr-2">Darey Opabisi</h6>
											<img src={review_stars} alt="review_stars" />
										</div>
										<p>Sales representative at gimoh LTD</p>
									</div>
								</div>
								<p className="reviewText">
									“My lawyer, Micheal, was very helpful. He is knowledgeable,
									amiable, and helpful, and he consistently follows up. Having a
									personal attorney assigned to you is a pleasure and in
									addition, all of our bad reviews have been removed from the
									internet.”
								</p>
							</div>
						</div>

						<div className="testimonial md:px-3 w-full md:w-1/2 lg:w-1/3 ">
							<div className="card">
								<div className="testimonial_header flex items-center">
									<img src={review_vivian} alt="review_vivian" />

									<div className="rhText px-3">
										<div className="flex items-center">
											<h6 className="font-bold mr-2">Bukola Chukwudi</h6>
											<img src={review_stars} alt="review_stars" />
										</div>
										<p>Sales representative at gimoh LTD</p>
									</div>
								</div>
								<p className="reviewText">
									“My lawyer, Micheal, was very helpful. He is knowledgeable,
									amiable, and helpful, and he consistently follows up. Having a
									personal attorney assigned to you is a pleasure and in
									addition, all of our bad reviews have been removed from the
									internet.”
								</p>
							</div>
						</div>

						<div className="testimonial md:px-3 w-full md:w-1/2 lg:w-1/3 ">
							<div className="card">
								<div className="testimonial_header flex items-center">
									<img src={review_darey} alt="review_vivian" />

									<div className="rhText px-3">
										<div className="flex items-center">
											<h6 className="font-bold mr-2">Bukola Chukwudi</h6>
											<img src={review_stars} alt="review_stars" />
										</div>
										<p>CEO Orekelewa Atelier</p>
									</div>
								</div>
								<p className="reviewText">
									“My lawyer, Micheal, was very helpful. He is knowledgeable,
									amiable, and helpful, and he consistently follows up. Having a
									personal attorney assigned to you is a pleasure and in
									addition, all of our bad reviews have been removed from the
									internet.”
								</p>
							</div>
						</div>

						<div className="testimonial md:px-3 w-full md:w-1/2 lg:w-1/3 ">
							<div className="card">
								<div className="testimonial_header flex items-center">
									<img src={review_darey} alt="review_vivian" />

									<div className="rhText px-3">
										<div className="flex items-center">
											<h6 className="font-bold mr-2">Hannah Jones</h6>
											<img src={review_stars} alt="review_stars" />
										</div>
										<p>Sales representative at gimoh LTD</p>
									</div>
								</div>
								<p className="reviewText">
									“My lawyer, Micheal, was very helpful. He is knowledgeable,
									amiable, and helpful, and he consistently follows up. Having a
									personal attorney assigned to you is a pleasure and in
									addition, all of our bad reviews have been removed from the
									internet.”
								</p>
							</div>
						</div>
					</div>
				</section>

				<div className="brands">
					<div className="content md:flex">
						<img src={jumia} alt="" />
						<img src={buybetter} alt="" />
						<img src={teeka4} alt="" />
						<img src={arla} alt="" />
						<img src={konga} alt="" />
					</div>
				</div>

				<section className="cta">
					<div className="max-w-4xl mx-auto">
						<StyledH2Center>
							We are here to help maintain your brand’s reputation. If we don’t
							succeed, you don’t pay.
						</StyledH2Center>

						<Link to="get-a-quote">
							<StyledButton className="flex items-center mx-auto">
								<span>Get a quote</span>
								<img
									src={ArrowRightIcon}
									className="px-3"
									alt="ArrowRightIcon"
								/>
							</StyledButton>
						</Link>
					</div>
				</section>
			</StyledLandingPage>
		</PageLayout>
	);
};

export default LandingPage;
