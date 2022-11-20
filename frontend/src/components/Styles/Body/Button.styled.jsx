import Styled from 'styled-components';

export const StyledButton = Styled.button`
    background: ${(props) => (props.outlined ? '#fff' : '#233BA9')};
    padding: 10px 40px;
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
