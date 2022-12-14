import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

export const StyledFixHeader = styled.h1`
	@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
	display: flex;
	justify-content: center;
	margin-top: 64px;
	font-size: 28px;
	font-weight: bold;
	font-family: 'lato', sans-serif;
	color: #6f7174;
`;
export const StyledFixCenter = styled.div`
	padding: 0px 0px 24px;
	width: 304px;
	width: 32%;
	max-width: 33%;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	margin-bottom: 40px;
`;
export const ImgsContainer = styled.div`
	max-width: 100%;
	height: auto;
`;
export const StyledFixImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 8px;
`;
export const StyledFixBox = styled.div`
	display: flex;
	max-width: 1020px;
	max-width: 1200px;

	width: 100%;
	margin: 0 auto;
	margin-top: 32px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 1070px) {
		padding: 0 20px;
		justify-content: center;
		gap: 40px;
	}
	@media (max-width: 375px) {
		padding: 0;
	}
`;
export const StyledColor = styled.span`
	color: orange;
`;
export const StyledColorBlue = styled.span`
	color: blue;
	margin-left: 4px;
`;
export const StyledColorOrange = styled.h2`
	color: orange;
	margin: 20px 0;
	margin-left: 16px;
	font-size: 22px;
	font-family: 'lato', sans-serif;
	font-weight: bold;
`;
export const StyledFixp = styled.div`
	padding: 4px 16px 0;
`;
export const Plato = styled.p`
	@import url('https://fonts.googleapis.com/css?family=Lato:400,700  rel= stylesheet type= text/css');
	font-size: 14px;
	font-family: 'lato', sans-serif;
	margin-top: -10px;
`;
