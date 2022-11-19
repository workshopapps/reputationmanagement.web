import Styled from 'styled-components';

export const StyledButton = Styled.button`
<<<<<<< HEAD
    background: ${props => props.outlined ? "transparent" : "#233BA9"};
    padding: 12px 24px;
    margin: ${props => props.margin ? "30px 10px" : "0"};
    border-radius: 4px;
    color: ${props => props.outlined ? "#233BA9" : "#fff"};
    border: ${props => props.outlined ? "1px #233BA9 solid" : "1px #233BA9 solid"};
=======
    background: ${(props) => (props.outlined ? '#fff' : '#233BA9')};
    padding: 10px 40px;
    border-radius: 6px;
    color: ${(props) => (props.outlined ? '#233BA9' : '#fff')};
    border: ${(props) =>
			props.outlined ? '1px #233BA9 solid' : '1px #233BA9 solid'};
>>>>>>> 578671924bb99b0bde59edeac8e228c74e7878ed
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    &:hover{
        background: ${(props) => (props.outlined ? '#E5E5E5' : '#1F3491')};
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
