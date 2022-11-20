import styled from 'styled-components';

export const StyledStory = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
	display: flex;
	justify-content: space-between;
	padding: 56px 64px;
	background-color: #eef1fc;
	width: 100%;
	@media (max-width: 375px) {
		display: flex;
		flex-direction: column;
		width: 375px;
		padding: 64px 20px;
	}
`;

export const StoryHead = styled.h1`
	font-size: 28px;
	font-weight: bold;
	font-family: 'lato', sans-serif;
`;
export const StoryP = styled.p`
	margin-top: 40px;
	font-size: 16px;
	font-weight: bold;
	font-family: 'lato', sans-serif;
	@media (max-width: 375px) {
		width: 340px;
	}
`;
export const StyledStorytxt = styled.div`
	margin-right: 20px;
	width: 556px;
	@media (max-width: 375px) {
		width: 350px;
		text-align: center;
		margin-right: 0;
	}
`;
export const StoryImg = styled.img`
	width: 600px;
	@media (max-width: 375px) {
		display: none;
		visibility: none;
		width: 0;
	}
`;
