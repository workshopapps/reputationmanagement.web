import styled from 'styled-components';
import img from '../../assets/images/bannerImage.png';
import img2 from '../../assets/images/Default.png';

export const Container = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300&display=swap');
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Lato', sans-serif;
	}

	display: flex;
	flex-direction: column;
	margin: 68px auto;
	width: 100%;
	max-width: 91%;
	min-height: 100vh;

	@media (min-width: 700px) and (max-width: 900px) {
		max-width: 95%;
	}
`;

export const StyledBtnContainer = styled.div`
	max-width: 30%;
	margin: 0 auto;

	@media (min-width: 200px) and (max-width: 699px) {
		max-width: 50%;
	}
`;

export const Popup = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.6);
`;

export const StyledPopup = styled.div`
	width: 401px;
	height: 219px;
	background: #ffffff;
	position: fixed;
	top: 30%;
	left: 35%;
	padding: 30px;
	box-shadow: 2px 2px 8px rgba(120, 122, 125, 0.15);

	h3 {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 600;
		font-size: 22px;
		line-height: 150%;
		width: 100%;
		color: #2b2c34;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 28px;

		img {
			margin-right: 15px;
		}
	}
	p {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 150%;
		padding-bottom: 20px;
		text-align: center;
		span {
			color: #233ba9;
		}
	}

	@media (min-width: 200px) and (max-width: 699px) {
		top: 0;
		left: 0;
		width: 350px;
		height: 300px;
	}
`;
export const Icon = styled.div`
	display: flex;
	padding-bottom: 5px;
	justify-content: flex-end;
	align-items: center;
`;
export const Banner = styled.div`
	width: 100%;
	height: 347px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
	background-image: url(${img});

	h1 {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 900;
		font-size: 40px;
		line-height: 50px;
		letter-spacing: 0.01em;

		color: #ffffff;
	}
	p {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 600;
		font-size: 22px;
		line-height: 150%;
		color: #ffffff;
	}

	@media (min-width: 200px) and (max-width: 699px) {
		height: 200px;
		width: 100%;
		justify-content: flex-start;
		margin-bottom: 0px;
		padding-top: 20px;
		background: url(${img2});
		background-repeat: no-repeat;
		background-size: contain;

		h1 {
			font-size: 15px;
			line-height: 30px;
		}
		p {
			font-size: 8px;
			text-align: center;
		}
	}
`;
export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	padding: 0;
	gap: 20px;
`;
export const NameGroup = styled.div`
	width: 100%;
	max-width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 192px;

	div {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	@media (min-width: 700px) and (max-width: 900px) {
		gap: 50px;
	}
	@media (min-width: 200px) and (max-width: 699px) {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`;

export const ErrorText = styled.p`
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 150%;
	color: #f03738;
`;
export const StyledLabel = styled.label`
	padding-bottom: 8px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 600;
	font-size: 22px;
	line-height: 150%;
	color: #2b2c34;
`;
export const StyledTextGroup = styled.div`
	width: 100%;
	max-width: 100%;
	display: flex;
	flex-direction: column;
`;

export const StyledInput = styled.input`
	border: 1px solid #d2d3d4;
	border-radius: 8px;
	outline: none;
	max-width: 100%;
	padding: 17px;

	font-family: 'Lato';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 150%;
	color: #4d5154;

	&::placeholder {
		opacity: 0.8;
		font-weight: 400;
	}
	&:focus{
		border: 0.596671px solid #FF725E;
		border-radius: 4.77337px;
	}
`;

export const StyledText = styled.textarea`
	border: 1px solid #d2d3d4;
	border-radius: 8px;
	outline: none;
	max-width: 100%;
	height: 221px;
	padding: 17px;

	font-family: 'Lato';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 150%;
	color: #4d5154;

	&::placeholder {
		opacity: 0.8;
		font-weight: 400;
	}
	&:focus{
		border: 0.596671px solid #FF725E;
		border-radius: 4.77337px;
	}
`;
