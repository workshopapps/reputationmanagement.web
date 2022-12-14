import styled from 'styled-components';

export const StyledCard = styled.div`
	background-color: #fff;
	padding: 24px 33px 24px 33px;
	border: 1px solid #e4e4e5;
	border-radius: 8px;

	img {
		/* width: fit-content; */
		height: 56px;
		width: 56px;
		@media (max-width: 820px) {
			align-self: flex-start;
		}
	}

	p:nth-of-type(1) {
		font-weight: 600;
		font-size: 24px;
		line-height: 36px;
		color: #2b2c34;
		margin-top: 18px;
		margin-bottom: 11px;
		align-self: flex-start;
		white-space: nowrap;
	}

	p:nth-of-type(2) {
		max-width: 100%;
		line-height: 64px;
		font-weight: 700;
		font-size: 42px;
		text-align: center;
		color: #2b2c34;
	}
`;
