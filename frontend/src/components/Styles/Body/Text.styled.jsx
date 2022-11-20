import Styled from 'styled-components';

export const StyledH1 = Styled.h1`
font-size: 3.5rem;
font-weight: 700;
color: ${(props) => (props.blue ? '#233BA9' : '#2B2C34')};
line-height: 78px;

span{
    color: #FDB172;
}
`;

export const StyledH1Center = Styled(StyledH1)`
    text-align: center;
`;

export const StyledH2 = Styled.h2`
font-size: 2.25rem;
font-weight: 700;
color: ${(props) => (props.blue ? '#233BA9' : '#2B2C34')};

`;

export const StyledH2Center = Styled(StyledH2)`
    text-align: center;
    margin-bottom: 40px;

	@media screen and (max-width: 680px) {
        font-size: 24px;
    }
`;

export const StyledH3 = Styled.h3`
font-size: 1.7rem;
font-weight: 700;
color: #2B2C34;

`;

export const StyledText = Styled.p`
color: ${(props) => (props.subTitle ? '#233BA9' : '#2B2C34')};
text-align: ${(props) => (props.subTitle ? 'center' : 'start')};
span{
    color: #2A47CB;
    background: 
}
`;
