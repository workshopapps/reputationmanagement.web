import Styled from 'styled-components';



export const StyledH1 = Styled.h1`
font-size: 2.5rem;
font-weight: 700;
color: ${props => props.blue ? '#233BA9' : '#2B2C34'};
line-height: 100px;
text-align: ${props => props.center ? "center" : "start"};

span{
    color: #F16F04;
}
`;


export const StyledH1Center = Styled(StyledH1)`
    text-align: center;
`;

export const StyledH2 = Styled.h2`
font-size: 2.25rem;
font-weight: 700;
color: ${props => props.blue ? '#233BA9' : '#2B2C34'};

span{
    color: #FDB172;
}
`;

export const StyledH2Center = Styled(StyledH2)`
    text-align: center;
`;


export const StyledH3 = Styled.h3`
font-size: 1.7rem;
font-weight: 700;
color: #2B2C34;

`;



export const StyledText = Styled.p`
color: ${props => props.subTitle ? '#233BA9' : '##787A7D'};
text-align: ${props => props.center ? 'center' : 'start'};
max-width: ${props => props.center ? '758px' : '100%'};
margin: ${props => props.center ? '0 auto' : '0'};;
span{
    color: #2A47CB;
    background: 
}
`;