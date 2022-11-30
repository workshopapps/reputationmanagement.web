import styled from 'styled-components';

export const StyledSidebar = styled.aside`
	grid-area: sidebar;
	padding: 32px 135px 32px 64px;
	background-color: white;
	max-width: 280px;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	/* bottom: 0; */
	box-shadow: 2px 2px 8px rgba(120, 122, 125, 0.15);

	display: grid;
	grid-template-rows: 5% 95%;
	gap: 64px;

	section{
		height: 80%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 37px;
	}
	li{
		margin-left: -2rem;
		.active,
		a:hover{
			color: #f16f04;

			svg {
				fill: #f16f04;
				stroke: #f16f04;
			}

			&::before {
				content: '';
				position: absolute;
				left: -3rem;
				width: 4px;
				height: 24px;
				background: #f16f04;
				border-radius: 4px;
			}
		}
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
		position: relative;

		svg {
			fill: #a5a6a8;
			stroke: #a5a6a8;
		}
	}

	& > div > img:first-child {
		display: none;
		position: absolute;
		top: 1rem;
		right: 1rem;
	}
	

	@media (max-width: 1140px) {
		transform: translateX(-100%);
		transition: transform 1s ease;

		& > div > img:first-child {
			display: block;
		}
	}

	&.open {
		transform: translateX(0);
		transition: transform 1s ease;
	}
`;
