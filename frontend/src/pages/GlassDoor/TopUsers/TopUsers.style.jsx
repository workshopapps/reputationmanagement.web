import styled from 'styled-components';

export const Wrapper = styled.div`
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
