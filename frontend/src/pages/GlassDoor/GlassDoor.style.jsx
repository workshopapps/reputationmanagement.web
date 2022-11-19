import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
`;
export const PageHero = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	margin: 80px auto;
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
`;
export const PageHeroImage = styled.div`
	width: 50%;
	img {
		width: 100%;
		height: 100%;
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
		width: 100px;
		height: 100px;
		img {
			width: 100%;
			height: 100%;
		}
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
	justify-content: space-between;
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
`;
