import styled from "styled-components";


export const StyledHeader = styled.header`
background-color: #233BA9;
width: 100%;
margin-bottom: 89px;
padding: 24px 0px;
/* height: 80px; */

h1 {
    color: white;
    text-align: center;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 150%;
}

@media (max-width: 1020px) {
	h1 {
     color: white;
     /* padding-top: 6px; */
    font-size: 24px;
    font-style: bold;
    }
}
`;