import styled from 'styled-components';
export const Wrapper = styled.div`
	width: 100%;
`;
export const PageHero = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	margin: 80px auto;
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
