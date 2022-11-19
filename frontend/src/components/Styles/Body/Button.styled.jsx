import Styled from 'styled-components';

export const StyledButton = Styled.button`
    background: ${props => props.outlined ? "transparent" : "#233BA9"};
    padding: 12px 24px;
    margin: ${props => props.margin ? "30px 10px" : "0"};
    border-radius: 4px;
    color: ${props => props.outlined ? "#233BA9" : "#fff"};
    border: ${props => props.outlined ? "1px #233BA9 solid" : "1px #233BA9 solid"};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    &:hover{
        background: ${props => props.outlined ? '#E5E5E5' : "#1F3491"};
    }
`;

export const StyledTextButton = Styled.button`
    color: #233BA9;
    font-weight: 700;
    font-size: 1.1rem;

    &:hover{
        color: #1F3491;
    }
`;