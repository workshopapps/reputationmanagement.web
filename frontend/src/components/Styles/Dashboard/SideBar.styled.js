import styled from 'styled-components';

export const StyledSidebar = styled.aside`
	grid-area: sidebar;
	padding: 3rem 7rem 8rem 1rem;
	background-color: white;
	max-width: 280px;
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	box-shadow: 2px 2px 8px rgba(120, 122, 125, 0.15);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 64px;

	ul {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 37px;
	}

	a {
		display: flex;
		align-items: center;
		gap: 16px;
		font-weight: 600;
		color: #a5a6ab;
		line-height: 24px;
		font-size: 16px;
		margin-left: 2rem;
	}

	& > img {
	}

	@media (max-width: 996px) {
		transform: translateX(-100%);
	}
`;
