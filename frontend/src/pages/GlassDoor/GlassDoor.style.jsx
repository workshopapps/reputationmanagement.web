import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
`;
export const PageHero = styled.div`
	display: flex;
	justify-content: space-between;
	width: 85%;
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
		margin: 40px 0;

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
export const TopUsers = styled.div``;
