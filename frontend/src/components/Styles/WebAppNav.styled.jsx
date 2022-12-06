import styled from 'styled-components';

export const StyledWebAppNav = styled.nav`
	grid-area: nav;
	display: flex;
	justify-content: space-between;
	background-color: white;
	align-items: center;
	padding: 46px 4rem 5px 0;

	@media (max-width: 1140px) {
		border-bottom: 1px solid #d2d3d4;
		padding: 16px 19px;
		margin-bottom: 16px;
		h3,p{
			display: none;
		}
	}

	@media (max-width: 820px) {
		padding-left: 12px;
		padding-right: 12px;
	}
	h3{
		font-family: Lato;
		font-size: 22px;
		font-weight: 600;
		line-height: 33px;
		letter-spacing: 0em;
		text-align: left;
		color: #2B2C34;
		margin-left: 3rem;
	}
	p{
		font-family: Lato;
		font-size: 14px;
		font-weight: 400;
		line-height: 21px;
		letter-spacing: 0em;
		text-align: left;
		color: #2B2C34;
	}
`;

export const LogoContainer = styled.div`
	visibility: hidden;
	flex: 1;
	align-items: center;
	justify-content: space-between;

	div {
		width: 50%;

		&:nth-of-type(1) {
			img {
				width: 44px;
				height: 44px;
			}
		}
	}

	@media (max-width: 1140px) {
		display: flex;
		visibility: visible;
	}
`;

export const NavItems = styled.div`
	display: flex;
	align-items: center;
	gap: 39px;

	a {
		display: flex;
		align-items: center;
		align-self: flex-end;

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

	@media (max-width: 1140px) {
		a {
			display: none;
		}
	}
`;

export const ProfilePictureContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	& > div {
		display: flex;
		gap: 16px;

		img {
			width: 24px;
			height: 24px;
		}

		& > img {
			display: none;
		}
	}

	@media (max-width: 1140px) {
		& > img {
			display: none;
		}

		& > div {
			& > img {
				display: block;
			}
		}
	}
`;
