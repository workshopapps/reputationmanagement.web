import React from 'react';
import PageLayout from '../layout/PageLayout';
import { StyledButton } from '../components/Styles/Body/Button.styled';
import workColleague from '../assets/images/glassdoor/work-colleague.png';
import { AiFillStar } from 'react-icons/ai';
import { FaStarHalf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';

import airbnb from '../assets/images/img/airbnb.svg';
import reddit from '../assets/images/img/reddit.svg';
import spotify from '../assets/images/img/spotify.svg';
import kellogs from '../assets/images/img/kellogs.svg';
import stripe from '../assets/images/img/stripe.svg';
import dominos from '../assets/images/img/dominos.svg';
import profile from '../assets/images/glassdoor/profile-add-icon.png';
import document from '../assets/images/glassdoor/document-text-icon.png';
import progress from '../assets/images/glassdoor/75Progress.png';
import status from '../assets/images/glassdoor/circle-icon.png';
import markImg from '../assets/images/glassdoor/markM.png';
import cathyImg from '../assets/images/glassdoor/cathy.png';
import cynthia from '../assets/images/glassdoor/cynthia.png';

const topUsers = [
	{
		id: 0,
		image: airbnb,
	},
	{
		id: 1,
		image: spotify,
	},
	{
		id: 2,
		image: reddit,
	},
	{
		id: 3,
		image: kellogs,
	},
	{
		id: 4,
		image: stripe,
	},
	{
		id: 5,
		image: dominos,
	},
	// {
	// 	id: 6,
	// 	image: bigM,
	// },
];
const howWeWorkDetails = [
	{
		id: 1,
		icon: profile,
		title: 'Create an account with us',
		text: 'Create an account with us today inorder to lodge your request, we are here to maintain your brand’s reputation.',
	},
	{
		id: 2,
		icon: document,
		title: 'Submit complaint details',
		text: 'When you login to your dashboard, you submit the details of your complaint which will then be picked and processed.',
	},
	{
		id: 3,
		icon: progress,
		title: 'Case gets assigned and progress monitored',
		text: 'Our lawyers pick up your complaint and takes the next step towards helping you maintain your brand’s reputation.',
	},
	{
		id: 4,
		icon: status,
		title: 'Confirm Status',
		text: 'Login to your profile and monitor the progress of your complaint. You will be notified when the bad review is taken down form your dashboard.',
	},
];

const reviews = [
	{
		id: 1,
		image: markImg,
		name: 'Mark Olalekan',
		role: 'Human resource Manager at Mobil',
		review:
			'	Probably the best out there, i had a super friendly experience, they offer an exclusive consultation on business stragegy that is really helping the growth of my busines. I must say, you guys are te best, thank you',
	},
	{
		id: 2,
		image: cathyImg,
		name: 'Catherine Ibe',
		role: 'Customer support at Pocket LTD',
		review:
			'	Probably the best out there, i had a super friendly experience, they offer an exclusive consultation on business stragegy that is really helping the growth of my busines. I must say, you guys are te best, thank you.',
	},
	{
		id: 3,
		image: cynthia,
		name: 'Cynthia Paul',
		role: 'Sales representative at Ibeto and sons',
		review:
			'	Probably the best out there, i had a super friendly experience, they offer an exclusive consultation on business stragegy that is really helping the growth of my busines. I must say, you guys are te best, thank you',
	},
];
const GlassDoor = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/signup');
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<PageLayout>
			<Wrapper>
				<PageHero>
					<PageHeroDetails>
						<h1>
							Clear Off Bad Reviews From Your Glassdoor And{' '}
							<span>Be Outstanding</span>
						</h1>
						<p>
							Remove bad reviews from your glassdoor platform and stand out
							against false and misleading reviews online.
						</p>
						<div className="btn">
							<StyledButton onClick={handleClick}>Get Started</StyledButton>
						</div>
					</PageHeroDetails>
					<PageHeroImage>
						<img src={workColleague} alt="work-colleague" />
					</PageHeroImage>
				</PageHero>
				<TopUsers>
					<h1>Used and loved by 1M users across 199 countries</h1>
					<TopUsersContainer>
						{topUsers.map((topUser) => {
							return (
								<div className="img__container" key={topUser.id}>
									<img src={topUser.image} alt="company logo" />
								</div>
							);
						})}
					</TopUsersContainer>
				</TopUsers>
				<HowWeWork>
					<h1>How We Remove Bad Reviews</h1>
					<p>Clear off bad reviews in a few steps.</p>
					<HowWeWorkCards>
						{howWeWorkDetails.map((details) => {
							return (
								<HowWeWorkCard key={details.id}>
									<div className="steps">{details.id}</div>
									<div className="img__container">
										<img src={details.icon} alt="profile-icon" />
									</div>
									<h2>{details.title}</h2>
									<p>{details.text}</p>
								</HowWeWorkCard>
							);
						})}
					</HowWeWorkCards>
					<StyledButton onClick={handleClick}>Get Started</StyledButton>
				</HowWeWork>
				<OurReviews>
					<h1>What our users have to say</h1>
					<OurReviewsContainer>
						{reviews.map((review) => {
							return (
								<OurReviewsCard key={review.id}>
									<OurReviewsCardHeader>
										<div className="img__container">
											<img src={review.image} alt="profileImg" />
										</div>
										<div className="review__user">
											<div className="user">
												<h3>{review.name}</h3>
												<span>
													<AiFillStar />
													<AiFillStar />
													<AiFillStar />
													<AiFillStar />
													<FaStarHalf />
												</span>
											</div>
											<p>{review.role}</p>
										</div>
									</OurReviewsCardHeader>
									<OurReviewsCardBody>{review.review}</OurReviewsCardBody>
								</OurReviewsCard>
							);
						})}
					</OurReviewsContainer>
					<div className="btn">
						<StyledButton>See more</StyledButton>
					</div>
					<ReviewNumbers>
						<ReviewNumbersCard>
							<ReviewDetails>
								<h2>
									Over <span>30,000+</span> reviews and still counting.
								</h2>
								<p>
									Our users are really satisfied with our quality of service and
									therefore have left really good reviews about our products
								</p>
							</ReviewDetails>
							<ReviewStats>
								<p className="overall__stats">
									<span>4.7</span> out of 5
								</p>
								<p>
									<span>8.5</span> Ease of use
								</p>
								<p>
									<span>8.5</span> Quality of service
								</p>
								<p>
									<span>8.5</span> Reliability
								</p>
							</ReviewStats>
							<div className="remove__review">
								<h2>
									Remove your negative <span> Glassdoor reviews</span>
								</h2>
								<p>Glassdoor</p>
								<div className="rating">
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
									<span>5.0</span>
								</div>
								<p className="dateofreview">42 reviews as of 18/10/2022</p>
							</div>
						</ReviewNumbersCard>
						<RemoveReview>
							<h2>
								Remove your negative <span> Glassdoor reviews</span>
							</h2>
							<p>Glassdoor</p>
							<div className="rating">
								<AiFillStar />
								<AiFillStar />
								<AiFillStar />
								<AiFillStar />
								<AiFillStar />
								<span>5.0</span>
							</div>
							<p className="dateofreview">42 reviews as of 18/10/2022</p>
						</RemoveReview>
					</ReviewNumbers>
				</OurReviews>
				<GettingStarted>
					<h1>
						We can help you make your brand stand out by taking down bad reviews
						from your page.
					</h1>
					<StyledButton onClick={handleClick}>Get Started</StyledButton>
				</GettingStarted>
			</Wrapper>
		</PageLayout>
	);
};

export const Wrapper = styled.div`
	width: 100%;
`;
export const PageHero = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	margin: 80px auto;
	max-width: 1200px;

	@media (max-width: 800px) {
		flex-direction: column;
	}
	@media (max-width: 400px) {
		margin-top: 20px !important;
	}
`;
export const PageHeroDetails = styled.div`
	width: 50%;

	h1 {
		font-style: normal;
		font-weight: 700;
		font-size: 3.5rem;
		color: #233ba9;

		span {
			color: #f16f04;
		}
	}
	p {
		margin: 30px 0;

		font-style: normal;
		font-weight: 600;
		font-size: 1.3rem;
		color: #4d5154;
	}
	@media (max-width: 1080px) {
		h1 {
			font-size: 3rem;
			line-height: 1.2;
		}
	}
	@media (max-width: 800px) {
		width: 100%;
		h1 {
			text-align: center;
			font-size: 2.8rem;
		}
		p {
			text-align: center;
			font-size: 1.1rem;
		}
		.btn {
			display: flex;
			justify-content: center;
		}
	}
	@media (max-width: 400px) {
		h1 {
			font-size: 2rem;
			text-align: center;
		}
		p {
			font-size: 0.9rem;
		}
	}
`;
export const PageHeroImage = styled.div`
	width: 50%;
	img {
		width: 100%;
		height: 100%;
	}
	@media (max-width: 800px) {
		width: 100%;
		margin-top: 30px;
	}
`;
export const TopUsers = styled.div`
	border-top: 1px solid #d2d3d4;

	h1 {
		margin-top: 20px;
		font-style: normal;
		font-weight: 600;
		font-size: 1.5rem;
		text-align: center;
	}
`;
export const TopUsersContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 90%;
	margin: 30px auto;
	.img__container {
		margin-right: 1rem;
		img {
			width: 100%;
			height: 100%;
		}
	}
	@media (max-width: 860px) {
		width: 96%;
	}
`;
export const HowWeWork = styled.div`
	background: #eef1fc;
	padding: 5rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		text-align: center;
		font-style: normal;
		font-weight: 700;
		font-size: 2rem;

		color: #2b2c34;
	}
	p {
		margin-top: 20px;
		text-align: center;
		font-style: normal;
		font-weight: 600;
		font-size: 1.3rem;
		color: #2b2c34;
	}
`;
export const HowWeWorkCards = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	flex-wrap: wrap;
	width: 90%;
	margin: 0 auto;
	margin-top: 80px;
	margin-bottom: 60px;
`;
export const HowWeWorkCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #ffffff;
	box-shadow: 2px 2px 8px rgba(120, 122, 125, 0.15);
	border-radius: 8px;
	width: 300px;
	.steps {
		border: 2px solid #0e1844;
		background-color: #ffffff;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-style: normal;
		font-weight: 700;
		font-size: 2rem;
		color: #0e1844;
		margin-top: -33px;
	}
	.img__container {
		margin-top: 60px;
		width: 120px;
		height: 120px;
		img {
			width: 100%;
			height: 100%;
		}
	}
	h2 {
		text-align: center;
		font-style: normal;
		font-weight: 600;
		font-size: 1.1rem;
		color: #2b2c34;
		width: 80%;
		margin: 0px auto;
		margin-top: 30px;
	}
	p {
		width: 80%;
		margin: 10px auto;
		text-align: center;
		font-style: normal;
		font-weight: 400;
		font-size: 0.9rem;
		text-align: justify;
		color: #2b2c34;
	}
	@media (max-width: 400px) {
		margin-bottom: 70px;
	}
`;
export const OurReviews = styled.div`
	background-color: #ffffff;
	padding-top: 30px;
	h1 {
		font-weight: 700;
		font-size: 1.85rem;
		text-align: center;
		color: #2b2c34;
	}
	.btn {
		display: none;
	}

	@media (max-width: 700px) {
		.btn {
			display: flex;
			justify-content: center;
			margin-bottom: 40px;
		}
	}
`;
export const OurReviewsContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	flex-wrap: wrap;
	width: 90%;
	margin: 0 auto;
	margin-top: 80px;
	margin-bottom: 60px;
`;
export const OurReviewsCard = styled.div`
	padding: 20px;
	background-color: #ffffff;
	width: 413px;
	box-shadow: 0px 1px 4px rgba(120, 122, 125, 0.25);
	border-radius: 16px;
`;
export const OurReviewsCardHeader = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	.review__user {
		margin-left: 15px;
		.user {
			display: flex;
			h3 {
				padding-right: 10px;
				font-style: normal;
				font-weight: 600;
				font-size: 1rem;
				color: #2b2c34;
				border-right: 1px solid #2b2c34;
			}
			span {
				margin-left: 10px;
				> svg {
					display: inline;
					margin-right: 4px;
					color: #e9a905;
				}
			}
		}
		p {
			font-style: normal;
			font-weight: 400;
			font-size: 0.9rem;
			color: #4d5154;
		}
	}
`;
export const OurReviewsCardBody = styled.p`
	font-weight: 400;
	font-size: 0.9rem;
	color: #4d5154;
	padding: 10px;
`;

export const ReviewNumbers = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	margin: 0 auto;
	margin-bottom: 50px;

	@media (max-width: 750px) {
		flex-direction: column;
	}
`;
export const ReviewNumbersCard = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 35px;
	background: #233ba9;
	border-radius: 8px;
	width: 60%;
	.remove__review {
		padding-top: 20px;
		background: #233ba9;
		border-radius: 8px;
		width: 60%;
		margin: 0 auto;
		display: none;

		h2 {
			font-style: normal;
			font-weight: 600;
			font-size: 1.5rem;
			color: #ffffff;
			> span {
				color: #fc9a4a;
			}
			margin-bottom: 20px;
		}
		p {
			font-style: normal;
			font-weight: 600;
			font-size: 0.8rem;
			color: #ffffff;
			margin-bottom: 10px;
		}
		.rating {
			display: flex;
			align-items: center;
			> svg {
				margin-right: 4px;
				font-size: 1.2rem;
				color: #fc9a4a;
			}
			> span {
				font-style: normal;
				font-weight: 400;
				font-size: 0.9rem;
				color: #ffffff;
			}
		}
		.dateofreview {
			font-style: normal;
			font-weight: 400;
			font-size: 0.65rem;
			color: #f9f8fd;
		}
	}
	@media (max-width: 750px) {
		width: 100%;
		flex-direction: column;
		.remove__review {
			display: block;
		}
	}
	@media (max-width: 500px) {
		.remove__review {
			width: 80%;
		}
	}
`;

export const ReviewDetails = styled.div`
	border-right: 1px solid rgba(255, 255, 255, 0.3);
	width: 60%;
	h2 {
		font-style: normal;
		font-weight: 600;
		font-size: 1.5rem;
		color: #ffffff;
		margin-bottom: 30px;
		width: 80%;
		> span {
			color: #fc9a4a;
		}
	}
	p {
		font-style: normal;
		font-weight: 400;
		font-size: 0.75rem;
		color: #ffffff;
		width: 80%;
	}
	@media (max-width: 750px) {
		margin: 0 auto;
		border-right: none;
		border-bottom: 1px solid rgba(255, 255, 255, 0.3);
		padding-bottom: 30px;
	}
	@media (max-width: 500px) {
		width: 90%;
	}
`;

export const ReviewStats = styled.div`
	padding-right: 40px;
	.overall__stats {
		margin-bottom: 15px;
		> span {
			font-weight: 700;
			font-size: 2rem;
			color: #ffffff;
		}
	}
	p {
		font-style: normal;
		font-weight: 400;
		font-size: 0.8rem;
		color: #f9f8fd;
		margin: 8px;
		span {
			color: #ffffff;
			font-weight: 700;
		}
	}
	@media (max-width: 750px) {
		width: 60%;
		margin: 0 auto;
		padding-right: 0 !important;
		border-right: none;
		border-bottom: 1px solid rgba(255, 255, 255, 0.3);
		padding-bottom: 30px;
	}
	@media (max-width: 500px) {
		width: 90%;
	}
`;

export const RemoveReview = styled.div`
	padding: 30px;
	background: #233ba9;
	border-radius: 8px;
	width: 35%;

	h2 {
		font-style: normal;
		font-weight: 600;
		font-size: 1.5rem;
		color: #ffffff;
		> span {
			color: #fc9a4a;
		}
		margin-bottom: 20px;
	}
	p {
		font-style: normal;
		font-weight: 600;
		font-size: 0.8rem;
		color: #ffffff;
		margin-bottom: 10px;
	}
	.rating {
		display: flex;
		align-items: center;
		> svg {
			margin-right: 4px;
			font-size: 1.2rem;
			color: #fc9a4a;
		}
		> span {
			font-style: normal;
			font-weight: 400;
			font-size: 0.9rem;
			color: #ffffff;
		}
	}
	.dateofreview {
		font-style: normal;
		font-weight: 400;
		font-size: 0.65rem;
		color: #f9f8fd;
	}
	@media (max-width: 750px) {
		display: none;
	}
`;

export const GettingStarted = styled.div`
	background: #eef1fc;
	padding: 7rem 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	h1 {
		text-align: center;
		font-style: normal;
		font-weight: 700;
		font-size: 2.18rem;
		width: 70%;
		margin: 0 auto;
		color: #2b2c34;
		margin-bottom: 40px;
	}
	@media (max-width: 700px) {
		h1 {
			font-size: 1.5rem;
			width: 90%;
		}
	}
`;

export default GlassDoor;
