import React from 'react'
import {
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
} from './Reviews.style';

import { AiFillStar } from 'react-icons/ai';
import { FaStarHalf } from 'react-icons/fa';
import { reviews } from '../data';

const Reviews = () => {
	return (
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
	);
};

export default Reviews;
