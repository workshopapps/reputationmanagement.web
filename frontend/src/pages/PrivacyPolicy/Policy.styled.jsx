import styled from 'styled-components';

export const StyledPolicy = styled.div`
	padding-left: 25px;
	color: #2b2c34;
	padding-top: 20px;
	width: 1000px;
	margin: auto;
	overflow: hidden;

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
		div {
			over-flow: hidden;
		}

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

	@media (max-width: 768px) {
		div {
			over-flow: hidden;
			width: 90px;
		}

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
			display:flex
			flex-wrap: wrap;
			overflow-wrap: break;
			line-height: 21px;
			font-style: regular;
		}
	}
`;
