import styled from 'styled-components';

export const StyledCard = styled.div`
	background-color: #fff;
	padding: 24px 33px 24px 33px;
	border: 1px solid #e4e4e5;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* 
	gap: 20px;
	align-items: center;
	justify-content: center; */
	/* justify-content: 'flex-start'; */
	div {
		width: 100%;
		display: grid;
		grid-template-columns: 20% 1fr;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;

		p {
			max-width: 100%;
			line-height: 36px;
			font-weight: 600;
			font-size: 24px;
			color: #2b2c34;
			justify-self: center;
			@media (max-width: 1285px) {
				font-size: 20px;
			}
			@media (max-width: 500px) {
				font-size: 18px;
			}
		}
	}

	img {
		/* width: fit-content; */
		height: 56px;
		width: 56px;
		@media (max-width: 820px) {
			align-self: flex-start;
		}
	}

	.digit {
		font-weight: 700;
		font-size: 42px;
		line-height: 64px;
		color: #2b2c34;
		text-align: center;
	}
`;
