import styled from 'styled-components';
export const StyledFixHeader = styled.h1`
	@import url(
		'https://fonts.googleapis.com/css?family=Lato:400,700'
	);
	display: flex;
	justify-content: center;
	margin-top: 64px;
	font-size: 28px;
	font-weight: bold;
	font-family: 'lato', sans-serif;
`;
export const StyledFixCenter = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: space-between;
	align-items: flex-start;
	padding: 0px 0px 24px;
	gap: 16px;

	width: 304px;
	height: 450px;

	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	@media (max-width: 375px) {
		margin-bottom: 64px;
	}
`;
export const ImgsContainer = styled.div`

	max-width: 304px;
`;
export const StyledFixImg = styled.img`
	width: 100%;
	height: 253px;
	border-radius: 8px;
`;
export const StyledFixBox = styled.div`
	display: flex;
	max-width: 1020px;
	width: 100%;
	margin: 0 auto;
	margin-top: 32px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	@media(max-width: 1070px){
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
	//@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
	color: orange;
	margin-left: 16px;
	margin-top: 16px;
	font-size: 22px;
	font-weight: semi-bold;
	font-family: 'lato', sans-serif;
`;
export const StyledFixp = styled.div`
	padding: 16px;
`;
export const Plato = styled.p`
	@import url('https://fonts.googleapis.com/css?family=Lato:400,700  rel= stylesheet type= text/css');
	font-weight: semi-bold;
	font-size: 14px;
	font-family: 'lato', sans-serif;
`;
