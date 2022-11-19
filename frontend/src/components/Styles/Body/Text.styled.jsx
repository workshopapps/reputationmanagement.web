import Styled from 'styled-components';

export const StyledH1 = Styled.h1`
font-size: 2.5rem;
font-weight: 700;
<<<<<<< HEAD
color: ${props => props.blue ? '#233BA9' : '#2B2C34'};
line-height: 100px;
text-align: ${props => props.center ? "center" : "start"};
=======
color: ${(props) => (props.blue ? '#233BA9' : '#2B2C34')};
line-height: 78px;
>>>>>>> 578671924bb99b0bde59edeac8e228c74e7878ed

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
<<<<<<< HEAD
max-width: 850px;
color: ${props => props.blue ? '#233BA9' : '#2B2C34'};
margin: ${props => props.margin ? '20px auto' : '0 auto'};
span{
    color: #FDB172;
}
=======
color: ${(props) => (props.blue ? '#233BA9' : '#2B2C34')};

>>>>>>> 578671924bb99b0bde59edeac8e228c74e7878ed
`;

export const StyledH2Center = Styled(StyledH2)`
    text-align: center;
    margin-bottom: 40px;

	@media screen and (max-width: 680px) {
        font-size: 24px;
    }
`;

export const StyledH3 = Styled.h3`
font-size: 1.23rem;
font-weight: 700;
color: #2B2C34;
margin: 20px 0;

`;

export const StyledText = Styled.p`
<<<<<<< HEAD
color: ${props => props.subTitle ? '#233BA9' : '##787A7D'};
text-align: ${props => props.center ? 'center' : 'start'};
max-width: ${props => props.center ? '758px' : '100%'};
margin: ${props => props.center ? '0 auto' : '0'};;
=======
color: ${(props) => (props.subTitle ? '#233BA9' : '#2B2C34')};
text-align: ${(props) => (props.subTitle ? 'center' : 'start')};
>>>>>>> 578671924bb99b0bde59edeac8e228c74e7878ed
span{
    color: #2A47CB;
    background: 
}
`;
