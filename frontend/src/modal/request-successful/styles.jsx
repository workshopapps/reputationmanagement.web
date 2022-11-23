import styled from "styled-components";

export const StyledOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #1111114D;
    display: flex;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: 9;
`;
export const StyledProgressBarCaption = styled.div`
    width: 603px;
    display:flex;
    justify-content: space-between;
    margin-top: 21px;
    p{
        font-family: Lato !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        line-height: 16px !important;
    }
    .finished{
        font-weight: 800 !important;
    }
`;
export const StyledButtonWrapper = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: center;
`;
export const StyledProgressBar = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    div{
        height: 26px;
        width: 26px;
        border-radius: 15px;
        p{
            font-family: Lato;
            font-size: 14px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 0.01em;
            text-align: left;
        }
        border: 1px solid #000000B2;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .active{
        border: none;
        background-color: #3CC13B;
        p{
            color: #FFFFFF;
        }
    }
    .finished{
        background-color: #3CC13B;
    }
    span{
        height: 6px;
        width: 159px;
        left: 26px;
        top: 10px;
        border-radius: 0px;
        background-color: #E0E5E0;
    }
`;
export const StyledSuccessfulRequest = styled.div`
    padding: 60px 75.5px 69px 75.5px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .none{
        display: none;
    }
    h2{
        font-family: Lato;
        font-size: 32px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: -0.015em;
        text-align: center;
        color: #2B2C34;  
        margin-bottom: 56px;      
    }
    p{
        color: #2B2C34;
        font-family: Lato;
        font-size: 24px;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: center;
        max-width: 499px;
    }
    button{
        height: 48px;
        width: 143px;
        border-radius: 4px;
        font-family: Lato;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
    }
    #request{
        background: #233BA9;
        color: #FFFFFF;
        margin-right: 70px;
    }
    #dashboard{
        border: 1px solid #4560D9;
        color: #233BA9;
    }
`;