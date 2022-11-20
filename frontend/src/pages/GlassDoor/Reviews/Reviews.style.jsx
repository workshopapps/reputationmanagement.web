import styled from 'styled-components';

export const OurReviews = styled.div`
	background-color: #ffffff;
	padding-top: 30px;
	h1 {
		font-weight: 700;
		font-size: 1.85rem;
		text-align: center;
		color: #2b2c34;
	}
`;
export const OurReviewsContainer = styled.div`
	display: flex;
	justify-content: space-between;
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
`;
export const ReviewNumbersCard = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 35px;
	background: #233ba9;
	border-radius: 8px;
	width: 60%;
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
`;
