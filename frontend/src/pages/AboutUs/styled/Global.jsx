import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url ('https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css');
*{
    box-sizing:border-box;
}
body{
    font-family: 'Lato', sans-serif;
    font-size: 1.15em;
    margin: 0;
}
p{
    line-height: 1.5;
    font-size: 14px
}
img{
    max-width: 100%;
}
`;
export default GlobalStyles;
