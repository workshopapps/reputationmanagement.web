import styled from 'styled-components';

export const StyledDashboard = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 280px auto;

	grid-template-areas:
		'sidebar nav'
		'sidebar main';

	@media (max-width: 1140px) {
		grid-template-areas:
			'nav nav'
			'main main';
	}
`;

export const StyledContainer = styled.div`
	grid-area: main;
	padding-left: 3rem;
	padding-right: 3rem;
	.noRequest{
		text-align: center;
		width: 100%;
		font-weight: 600;
		font-size: 30px;
		line-height: 24px;
		color: #292d32;
		padding-top: 50px;
	}

	@media (max-width: 820px) {
		padding-left: 21px;
		padding-right: 21px;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 19px;
	align-items: center;

	h1 {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 700;
		font-size: 28px;
		line-height: 150%;
		color: #292D32;
		gap: 1rem;
	}

	a {
		background-color: #2a47cb;
		border-radius: 6px;
		padding: 8px 24px;
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		color: #ffffff;
		font-family: inherit;
		cursor: pointer;
		display: none;
	}

	@media (max-width: 1140px) {
		a {
			display: block;
		}
	}
	@media (max-width: 820px) {
		a {
			display: block;
		}
		h1{
			font-size: 23px;
		}
	}
`;

export const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 50px;

	& > div:first-child {
		width: 32%;
	}

	@media (max-width: 820px) {
		flex-direction: column;
		& > div:first-child {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
`;

export const CardSemiWrapper = styled.div`
	display: flex;
	gap: 50px;
	justify-content: space-between;
	width: 68%;

	div {
		width: 50%;
	}

	@media (max-width: 820px) {
		width: 100%;
		margin-bottom: 16px;

		div {
			display: flex;
			flex-direction: column;

			img {
				align-self: flex-end;
			}
		}
	}
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 12px;
	border: 1px solid #e4e4e5;
	border-radius: 8px;
	width: 65%;
	margin: 28px 0 19px 0;

	img {
		width: 24px;
		height: 24px;
	}

	input {
		border: none;
		outline: 0;
		font-family: inherit;
		flex: 1;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
		color: #a5a6a8;

		&::placeholder {
			font-size: 14px;
		}

		&:active,
		&:focus {
			color: #2b2c34;
		}
	}

	@media (max-width: 820px) {
		display: none;
	}
`;

export const TableContainer = styled.table`
	width: 100%;
	margin-bottom: 4rem;

	&,
	tr,
	td {
		border-collapse: collapse;
	}

	th {
		background: rgba(228, 228, 229, 0.3);
		text-align: left;
		padding: 19px 28px 12px 0;
		font-weight: 600;
		font-size: 22px;
		line-height: 33px;
		color: #2b2c34;

		&:first-child {
			padding-left: 16px;
		}
	}

	td {
		padding-top: 24px;
		padding-bottom: 19px;
		border-top: 1px solid #d2d3d4;

		&:first-child {
			padding-left: 16px;
		}

		&:nth-of-type(1) {
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			color: #292d32;
		}
		&:nth-of-type(2) {
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			color: #292d32;
		}

		&:nth-of-type(3) p {
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			color: #292d32;
		}
		&:nth-of-type(4) p {
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			color: #292d32;
			padding-left: 20px;

			&::before{ 
				content: ' ';
				position: absolute;
				/* left: 48rem; */
				margin-left: -22px;
				margin-top: 4px;
				width: 16px;
				height: 16px;
				background: #017590;
				border-radius: 50%;
			}
		}

		&:nth-of-type(5) p {
			font-weight: 700;
			font-size: 16px;
			line-height: 24px;
			color: #8f9093;
		}

		&:nth-of-type(6) p {
			background: rgba(1, 176, 216, 0.15);
			border-radius: 4px;
			padding: 8px 16px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			/* width: fit-content; */
			width: 70%;
			color: #01586c;
			white-space: nowrap;
		}
	}
	.High{
			background: #D1FADF;
			border-radius: 4px;
			padding: 4px 16px;
			width: 70%;
		}
	.Medium{
		background: #FFE5B2;
		border-radius: 4px;
		padding: 4px 16px;
		width: 70%;
	}
	.Low{
		background: #FECDCA;
		border-radius: 4px;
		padding: 4px 16px;
		width: 70%;
	}

	@media (max-width: 820px) {
		th {
			&:nth-child(5),
			&:nth-child(6) {
				display: none;
			}
			font-size: 16px;
			line-height: 20px;
		}

		td {
			&:nth-of-type(5),
			&:nth-of-type(6) {
				display: none;
			}
			&:nth-of-type(4) p {
			padding-left: 25px;
			}
		}
	}
`;
