import Styled from 'styled-components';

export const StyledButton = Styled.button`
    background: ${(props) => (props.outlined ? '#fff' : '#233BA9')};
    padding: ${(props) => props.extend ? '15px 12px' : '10px 40px'};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    color: ${(props) => (props.outlined ? '#233BA9' : '#fff')};
    border: ${(props) =>
			props.outlined ? '1px #233BA9 solid' : '1px #233BA9 solid'};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;

    &:hover{
        background: ${(props) => (props.outlined ? '#E5E5E5' : '#1F3491')};
    }
    .loading{
        width: 20px;
        height: 20px;
        border: 2px solid #FFF;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        margin: 0 !important;
        padding: 10px;
        @keyframes rotation {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;

export const StyledTextButton = Styled.button`
    color: #233BA9;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 12px 30px;

    &:hover{
        color: #1F3491;
    }
`;
