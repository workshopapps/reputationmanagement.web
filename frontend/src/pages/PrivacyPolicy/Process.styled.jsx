import styled from "styled-components";


export const StyledProcess = styled.div`
	color: #2b2c34;
	max-width: 75%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0px auto;

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

	ul {
		font-size: 16px;
		line-height: 25px;
		font-style: medium;
		list-style-type: disc;
		margin-left: 25px;
	}

	@media (max-width: 320px) {
		max-width: 95%;
		text-align: justify;

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

		ul {
			list-style: disc;
			font-size: 12px;
			flex-wrap: wrap;
			overflow-wrap: break;
			line-height: 21px;
			font-style: regular;
		}
	}

	@media (max-width: 1020px) {
		
		max-width: 85%;
		text-align: justify;

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

		ul {
			list-style: disc;
			font-size: 12px;
			display:flex;
			flex-wrap: wrap;
			overflow-wrap: break;
			line-height: 21px;
			font-style: regular;
		}
	}
`;