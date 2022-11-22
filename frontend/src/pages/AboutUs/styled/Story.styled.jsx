import styled from 'styled-components';

export const StyledStory = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
	display: flex;
	justify-content: space-between;
	padding: 56px 64px;
	background-color: #eef1fc;
	width: 100%;
	@media (max-width: 1350px) {
		flex-direction: column;
		align-items: center;
		padding: 64px 20px;
		gap: 60px;
	}
	@media (max-width: 375px) {
		padding: 64px 0;
	}
`;

export const StoryHead = styled.h1`
	font-size: 28px;
	font-weight: bold;
	width: max-content;
	font-family: 'lato', sans-serif;
	text-align: center;
`;
export const StoryP = styled.p`
	font-size: 16px;
	font-weight: bold;
	max-width: 625px;
	font-family: 'lato', sans-serif;
	@media (max-width: 375px) {
		font-size: 14px;
		padding: 0 10px;
	}
`;
export const StyledStorytxt = styled.div`
	margin-right: 20px;
	display: flex;
    flex-direction: column;
    align-items: center;
	@media (max-width: 375px) {
		text-align: center;
		margin-right: 0;
	}
`;
export const ImgCon = styled.div`
	max-width: 604px;
`;
export const StoryImg = styled.img`
	width: 100%;
	@media (max-width: 375px) {
		display: none;
		visibility: none;
		width: 0;
	}
`;
