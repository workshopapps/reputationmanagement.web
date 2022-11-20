import styled from 'styled-components';

export const Wrapper = styled.div`
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
