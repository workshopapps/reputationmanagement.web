import styled from 'styled-components';
export const StyledHero = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
	display: flex;
	align-items: center;
	gap: 100px;
	margin: 80px auto;
	max-width: 1200px;
	justify-content: space-between;
	width: 100%;

	@media (max-width: 1000px) {
		flex-direction: column-reverse;
		width: 80%;
		margin-top: 30px;
		gap: 40px;
		justify-content: center;
	}
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 500px) {
		margin-top: 0px;
	}
`;
export const ImgContainer = styled.div`
	display: flex;

	width: 460px;
	> img {
		width: 86%;
		height: 100%;
	}
	> span {
		width: 60px;
		height: 60px;
		background-color: #f16f04;
		border-radius: 50%;
	}

	@media (max-width: 1000px) {
		align-self: flex-start;
		max-width: 60%;
		> img {
			width: 100%;
		}
		> span {
			display: none;
		}
	}
	@media (max-width: 500px) {
		max-width: 80%;
	}
`;

export const ImgContainerMain = styled.div`
	display: flex;
	align-items: flex-end;
	@media (max-width: 1000px) {
		width: 100%;
		display: flex;
		justify-content: center;
	}
`;
export const StyledHeroMsg = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 1000px) {
		align-items: center;
	}

	@media (max-width: 500px) {
		padding: 0;
		align-items: center;
		/* margin-top: 55px; */
	}
`;
export const StyledBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	width: 130px;
	height: 48px;
	color: white;
	margin-top: 64px;
	background: #233ba9;
	border-radius: 4px;
	font-family: 'lato', sans-serif;
`;
export const StyledHerotxt = styled.div`
	width: 90%;
	font-size: 16px;
	margin-top: 24px;
	font-family: 'lato', sans-serif;
	font-weight: 700;
	@media (max-width: 1000px) {
		text-align: center;
	}
`;
export const StyledHerotxtSpan = styled.p`
	margin: 25px 0;
	font-size: 16px;
	font-weight: 700;
	font-family: 'lato', sans-serif;
	color: #4d5154;
	@media (max-width: 1000px) {
		text-align: center;
	}
`;
export const StyledOrange = styled.span`
	color: #f16f04;
`;
export const StyledBlue = styled.h1`
	color: #233ba9;
	font-size: 50px;
	font-weight: 700;
	font-family: 'lato', sans-serif;
	@media (max-width: 375px) {
		font-size: 32px;
	}
`;
