import styled from 'styled-components';
export const StyledHero = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Lato:400,700' );
	display: flex;
	justify-content: space-between;
	max-width: 1540px;
	margin: 0 auto;
	
	@media (max-width: 1200px) {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
	}
	@media(max-width: 677px){
		padding-left: 20px;
	}
`;
export const ImgContainer = styled.div`
	display: flex;
	align-items: flexend;
	//background-color: black;
	//align-self: flex-end;
		max-width: 539.68px;
	height: max-content;


	@media (max-width: 1200px) {
		align-self: flex-start;
		max-width: 60%;
	}
	@media (max-width: 500px) {
		max-width: 80%;
	}
`;
export const DeskImg = styled.img`
	width: 100%;
	
`;
/*
width: 539.68px;
	height: 597.83px
*/
export const MobImg = styled.img`
	display: none;
	@media (max-width: 375px) {
		display: Block;
	}
`;
export const ImgContainerMain = styled.div`
	display: flex;
	align-items: flex-end;
	@media (max-width: 1200px) {
		width: 100%;
		//background-color: red;
		display: flex;
		justify-content: center;
	}
`;
export const StyledHeroMsg = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-right: 70px;
	max-width: 603px;
	margin: 90px 0;
	@media (max-width: 500px) {
		padding: 0 ;
		align-items: center;
		margin-top: 55px;
	}
`;
export const StyledBtn = styled.button`
	padding: 12px 24px;
	border: none;
	width: 130px;
	height: 48px;
	color: white;
	margin-top: 64px;
	background: #233ba9;
	border-radius: 4px;
`;
export const StyledHerotxt = styled.div`
  max-width: 550px;
  font-size: 16px;
  margin-top: 24px;
  font-family: "lato", sans-serif;
  font-weight: 700;
  @media (max-width: 375px){
	text-align: center;
  }
`;
export const StyledHerotxtSpan = styled.p`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 700;
  font-family: "lato", sans-serif;
`;
export const StyledOrange = styled.span`
	color: #f16f04;
`;
export const StyledBlue = styled.h1`
	color: #233ba9;
	font-size: 57px;
	font-family: 'lato', sans-serif;
	@media (max-width: 375px) {
		font-size: 32px;
	}
`;
