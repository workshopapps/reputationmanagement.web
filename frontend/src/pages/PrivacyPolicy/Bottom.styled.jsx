import styled from 'styled-components';

export const StyledBottom = styled.div`
	background-color: #eef1fc;
	height: 400px;
	margin-botoom: 20px;
	text-align: center;

	h2 {
		padding-top: 30px;
		color: #2b2c34;
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
		text-align: center;
		margin-top: 50px;
	}



	@media (max-width: 1020px) {
			display: none;
	
		{
`;
