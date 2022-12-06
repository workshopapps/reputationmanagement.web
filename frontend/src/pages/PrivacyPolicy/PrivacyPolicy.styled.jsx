import styled from 'styled-components';

export const Container = styled.div`
	scroll-behavior: smooth;
	max-width: 90%;
	min-height: 100vh;
	margin: 0px auto;
`;

export const Header = styled.header`
	width: 100%;
	background-color: #233ba9;
	border-radius: 8px;
	padding: 34px 0px;
	max-height: 136px;
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
			font-size: 24px;
			font-style: bold;
		}
	}
`;

export const Main = styled.main`
	display: grid;
	grid-template-columns: 30% 70%;
	padding-top: 88px;
    padding-bottom: 100px;

	@media (max-width: 1020px) {
		display: flex;
		flex-direction: column;
	}
`;
export const ContentLinks = styled.div`
	position: sticky;
	top: 100px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	font-family: 'Lato';
	height: fit-content;
    padding-bottom: 40px;
	h3 {
		font-style: normal;
		font-weight: 700;
		font-size: 28px;
		line-height: 150%;
		color: #2b2c34;
	}
	ul li {
		padding-bottom: 16px;
	}
	a {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 150%;
		color: #2b2c34;
		&:active {
			color: #233ba9;
		}
	}

	@media (max-width: 1020px) {
		display: none;
	}
`;
export const MainContent = styled.div`
	display: flex;
	flex-direction: column;
    max-width: 100%;
	section {
		padding-bottom: 40px;
		h3 {
			font-family: 'Lato';
			font-style: normal;
			font-weight: 700;
			font-size: 32px;
			line-height: 150%;
			padding-bottom: 16px;
			color: #0e1844;
			&::before {
				display: block;
				content: ' ';
				margin-top: -285px;
				height: 285px;
				visibility: hidden;
				pointer-events: none;
			}
		}
		p {
			font-family: 'Lato';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 150%;
			color: #2b2c34;
		}
		ul {
			list-style-type: disc;
			margin-left: 25px;
			font-size: 16px;
			line-height: 25px;
			font-family: 'Lato';
			font-style: normal;
		}
	}
`;