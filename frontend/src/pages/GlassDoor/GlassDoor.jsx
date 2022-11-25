import React from 'react';
import PageLayout from '../../layout/PageLayout';
import { StyledButton } from '../../components/Styles/Body/Button.styled';
import workColleague from '../../assets/images/glassdoor/work-colleague.png';
import {
	GettingStarted,
	PageHero,
	PageHeroDetails,
	PageHeroImage,
	TopUsers,
	TopUsersContainer,
	Wrapper,
	HowWeWorkCard,
	HowWeWorkCards,
	HowWeWork,
	OurReviews,
	OurReviewsCard,
	OurReviewsCardBody,
	OurReviewsCardHeader,
	OurReviewsContainer,
	RemoveReview,
	ReviewDetails,
	ReviewNumbers,
	ReviewNumbersCard,
	ReviewStats,
} from './GlassDoor.style';

import { AiFillStar } from 'react-icons/ai';
import { FaStarHalf } from 'react-icons/fa';
import { howWeWorkDetails, topUsers, reviews } from './data';
import { useNavigate } from 'react-router-dom';

const GlassDoor = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/signup');
	};
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

export default GlassDoor;
