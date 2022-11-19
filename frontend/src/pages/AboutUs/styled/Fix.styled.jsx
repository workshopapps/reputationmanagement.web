import styled from 'styled-components';
export const StyledFixHeader = styled.h1`
	display: flex;
	justify-content: center;
	margin-top: 64px;
`;
export const StyledFixCenter = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: space-between;
	align-items: flex-start;
	padding: 0px 0px 24px;
	gap: 16px;

	width: 300px;
	height: 426px;

	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 8px;
`;
export const StyledFixImg = styled.img`
	width: 300px;
	height: 150px;
	border-radius: 8px;
`;
export const StyledFixBox = styled.div`
	display: flex;
	justify-content: space-between;
	width: 1020px;
	margin: 0 auto;
	margin-top: 20px;
	@media (max-width: 375px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 375px;
	}
`;
export const StyledColor = styled.span`
	color: orange;
`;
export const StyledColorBlue = styled.span`
	color: blue;
`;
export const StyledColorOrange = styled.h2`
	color: orange;
	margin-left: 10px;
`;
export const StyledFixp = styled.div`
	width: 250px;
	height: 100%;
	padding-left: 10px;
`;
