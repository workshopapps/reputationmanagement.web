import styled from 'styled-components';

export const StyledWebAppNav = styled.nav`
	grid-area: nav;
	display: flex;
	justify-content: space-between;
	background-color: white;
	align-items: center;

	padding: 46px 4rem 5px 0;

	@media (max-width: 996px) {
		img:nth-of-type(1),
		img:nth-of-type(2) {
			/* display: block; */
		}

		img:nth-of-type(2) {
			height: 18px;
			align-self: center;
		}
	}
`;

export const NavItems = styled.div`
	display: flex;
	align-items: center;
	gap: 39px;

	button {
		display: flex;
		border: none;
		outline: 0;
		align-items: center;

		background-color: #2a47cb;
		border-radius: 8px;
		padding: 10px 16px;
		gap: 20px;

		font-weight: 600;
		font-size: 18px;
		line-height: 27px;
		color: #ffffff;
		font-family: inherit;
	}

	/* @media (max-width: 996px) {
		button {
			display: none;
		}
	} */
`;

export const ProfilePictureContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	div img:first-of-type(1) {
		display: none;
	}

	/* @media (max-width: 996px) {
		div img:first-of-type(1) {
			display: block;
		}
	} */
`;
