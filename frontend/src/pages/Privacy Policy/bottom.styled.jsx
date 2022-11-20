import styled from "styled-components";



export const StyledButtom = styled.div`
	background-color: #eef1fc;
	height: 500px;

	h2 {
		padding-top: 30px;
		color: white;
		text-align: center;
		font-size: 45px;
		font-style: bold;
		line-height: 66px;
	}

	button {
		background: ${(props) => (props.outlined ? '#fff' : '#233BA9')};
		padding: 10px 40px;
		border-radius: 6px;
		color: ${(props) => (props.outlined ? '#233BA9' : '#fff')};
		border: ${(props) =>
			props.outlined ? '1px #233BA9 solid' : '1px #233BA9 solid'};
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
	}
`;