import styled from 'styled-components';

export const StyledBgImgDesktop = styled.div`
	background-image: url('assets/images/Banner-Background-Desktop.png');
	width: 100%;
	height: 332px;
	position: relative;
	margin-top: 29px;
	background-size: cover;
	background-repeat: no-repeat;
	@media (max-width: 375px) {
		width: 375px;
		height: 332px;
	}
`;

export const StyledCenter = styled.div`
	display: flex;
	justify-content: center;
	postition: absolute;
	flex-direction: column;
	align-items: center;
	@media (min-width: 375px) {
		padding-left: 3rem;
		padding-top: 1rem;
	}
`;
export const Btn = styled.button`
	border: none;

	margin-top: 20px;

	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 12px 24px;

	width: 130px;
	height: 48px;
	background: #233ba9;
	border-radius: 4px;
`;
export const Blue = styled.p`
	color: #233ba9;
	font-size: 20px;
	margin-top: 100px;
`;
