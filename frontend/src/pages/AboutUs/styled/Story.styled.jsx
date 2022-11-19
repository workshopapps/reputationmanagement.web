import styled from 'styled-components';
export const StyledStory = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 40px 50px;
	background-color: #eef1fc;
	@media (max-width: 375px) {
		display: flex;
		flex-direction: column;
	}
`;

export const StyledStorytxt = styled.div`
	margin-right: 20px;
	width: 556px;
	@media (max-width: 375px) {
		width: 100%;
	}
`;
export const StoryImg = styled.img`
	@media (max-width: 375px) {
		display: none;
	}
`;
