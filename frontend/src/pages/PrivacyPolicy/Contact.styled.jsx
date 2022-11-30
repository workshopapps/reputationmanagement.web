import styled from "styled-components";


export const StyledContact = styled.div`
	color: #2b2c34;
	max-width: 75%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10px;
	margin: 0px auto;
	/* outline: 1px solid red; */

	h3 {
		font-size: 32px;
		line-height: 48px;
		font-weight: 700;
		font-style: bold;
	}

	p {
		font-size: 16px;
		line-height: 25px;
		font-style: medium;
	}

	@media (max-width: 320px) {
		/* div {
			over-flow: hidden;
		} */

		h3 {
			font-size: 18px;
			line-height: 27px;
		}

		p {
			font-size: 12px;
			flex-wrap: wrap;
			overflow-wrap: break;
			line-height: 21px;
			font-style: regular;
		}
	}

@media (max-width: 	1020px) {
		
			/* over-flow: hidden;
			width: 300px; */

		h3 {
			font-size: 18px;
			line-height: 27px;
		}

		p {
			font-size: 12px;
			flex-wrap: wrap;
			overflow-wrap: break;
			line-height: 21px;
			font-style: regular;
		}
	}
`;
