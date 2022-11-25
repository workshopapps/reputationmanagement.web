import styled from 'styled-components';

export const FaqMainWraper = styled.div`
	font-family: 'Lato', sans-serif;
`;

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 48px;

	h1 {
		font-size: 36px;
		text-align: center;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-transform: uppercase;
		line-height: 54px;
		font-weight: 700;
	}

	h2 {
		display: none;
	}

	p {
		font-size: 32px;
		font-weight: 500;
		line-height: 48px;
		letter-spacing: 0.01em;
		color: #2b2c34;
		margin: 12px auto 30px;
		max-width: 1172px;
	}

	@media screen and (max-width: 425px) {
		padding: 18px;

		h1 {
			display: none;
		}

		h2 {
			display: block;
			font-size: 28px;
			font-weight: 700;
		}

		p {
			font-weight: 500;
			font-size: 20px;
			line-height: 30px;
		}
	}
`;

export const FaqSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: 80%;
	margin: 0 auto;

	@media screen and (max-width: 425px) {
		width: 90%;
	}
`;
