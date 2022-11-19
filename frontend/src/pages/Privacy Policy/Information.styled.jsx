import styled from "styled-components";


export const StyledInformation = styled.div`
padding-left: 25px;
color: #2B2C34;
padding-top: 20px;
width: 1000px;
margin: auto;

h3{
    font-size: 32px;
    line-height: 48px;
    font-weight: 700;
    font-style: bold;
}

ul {
    font-size: 16px;
    line-height: 25px;
    font-style: medium;
    list-style-type: disc;
    margin-left: 25px;
}


p{
    font-size: 16px;
    line-height: 25px;
    font-style: medium;
}

@media screen only screen and (max-width: 680px) {
		h3 {
			font-size: 18px;
			line-height: 27px;
			font-style: semibold;
		}

		p {
			font-size: 14px;
			line-height: 21px;
			font-style: regular;
		}

		ul {
			font-size: 14px;
			line-height: 21px;
			font-style: regular;
		}
`