import Styled from 'styled-components';



export const StyledH1 = Styled.h1`
font-size: 1.5em;
font-size: 3.5rem;
font-weight: 700;
color: #FDB172;
line-height: 150px;
`;


export const StyledH1Center = Styled(StyledH1)`
    text-align: center;
`;

export const StyledH2 = Styled.h2`
font-size: 1.5em;
font-size: 2.25rem;
font-weight: 700;
color: ${props => props.blue ? '#233BA9' : '#28292A'};

`;

export const StyledH2Center = Styled(StyledH2)`
    text-align: center;
`;



export const StyledText = Styled.p`
span{
    color: #2A47CB;
    background: 
}
`;