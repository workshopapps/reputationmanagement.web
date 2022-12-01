import styled from 'styled-components';
import backgroundImg from '../../assets/images/wrgr/Banner-Background-Desktop.png'


export const StyledBottom = styled.div`
	background-image: url(${backgroundImg});
	background-repeat: no-repeat;
	background-size: cover;
	height: 468px;
	margin-top: 91px;
	display: flex ;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2 {
		font-style: normal;
		font-weight: 700;
		font-size: 45px;
		line-height: 66px;
		text-align: center;
		color: #2B2C34;
		max-width: 80%;
		padding-bottom: 40px;
	}

	
	a{
		font-style: normal;
		font-weight: 900;
		font-size: 18px;
		line-height: 24px;
		text-align: center;
		color: #FFFFFF;
		display: flex;
		width: 100%;
		/* padding: 10px; */
		justify-content: space-between;
		align-items: center;
		span{
			padding-left: 5px;
		}
	}



	@media (max-width: 1020px) { 
			/* padding: 10px; */
			height: 350px;
			h2{
				font-size: 30px;
				line-height: 36px;
				max-width: 85%;
			}
	
	}
	@media (max-width: 350px) { 
			/* padding: 10px; */
			height: 350px;
			h2{
				font-size: 25px;
				line-height: 30px;
				max-width: 90%;
			}
	
	}
`;
