import styled from 'styled-components';

export const StyledOverlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: #1111114d;
	display: flex;
	left: 0;
	justify-content: center;
	align-items: center;
	z-index: 9;
`;
export const StyledButtonWrapper = styled.div`
	display: flex;
	margin-top: 50px;
	justify-content: center;
`;
export const StyledSuccessfulRequest = styled.div`
    width: 704px;
    padding 56px 0;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 90%;
    @media(max-width: 650px){
        img{
            width: 100px;
        }
        h2{
            line-height: 35px !important;
            max-width: 95%;
            margin-bottom: 20px;
        }
    }
    .none{
        display: none;
    }
    h2{
        font-family: Lato;
        font-size: 28px;
        font-weight: 700;
        line-height: 42px;
        letter-spacing: 0em;
        text-align: center;       
        color: #2B2C34;
        margin-top: 24px; 
    }
    p{
        font-family: Lato;
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: center;
        color: #000000;
        max-width: 509px;
        margin-top: 8px;
        padding: 0 10px;
    }
    button{
        height: 59px;
        padding: 0 24px;
        border-radius: 4px;
        border: 1px solid #4560D9;
        font-family: Lato;
        font-size: 18px;
        font-weight: 600;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: center;
        color: #233BA9;
        background-color: transparent;
    }
`;
