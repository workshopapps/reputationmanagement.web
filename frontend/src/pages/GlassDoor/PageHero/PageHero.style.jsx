import styled from 'styled-components';
export const Wrapper = styled.div`
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
