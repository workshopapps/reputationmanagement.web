import styled from 'styled-components';
export const StyledHero = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 375px) {
		flex-direction: column-reverse;
	}
`;
export const StyledHeroMsg = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-right: 70px;
	@media (max-width: 375px) {
		padding: 0 20px;
		display: none;
	}
`;
export const MobImg = styled.img`
	display: none;
	@media (max-width: 375px) {
		display: flex;
	}
`;
//export const StyledHeroHead = styled.h1``
export const StyledHerotxt = styled.p`
  width: 550px;
  font-size: 14px;
  font weight: 700;
  @media (max-width: 375px){
    width: 100%
  }
`;
export const StyledHerotxtSpan = styled.p`
  width: 500px;
  margin: 10px 0;
  font-size: 14px;
  font weight: 700;
`;
export const StyledOrange = styled.span`
	color: #f16f04;
`;
export const StyledBlue = styled.h1`
	color: #233ba9;
`;
