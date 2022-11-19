import Styled from 'styled-components';

export const NavLinks = Styled.a`
color: ${props => props.login ? "#233BA9" : "#787A7D"};
font-weight: ${props => props.login ? '700' : '400'};
text-decoration: none;
`