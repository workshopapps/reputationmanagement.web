import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`



*, *::before, *::after {
margin: 0;
padding: 0 ;
box-sizing: border-box;
}

body {
    position: relative;
    font-family: 'Lato', sans-serif;
}

ul {
    list-style-type: none;
}

a {
    text-decoration: none;
    
}
`;

export default GlobalStyles;
