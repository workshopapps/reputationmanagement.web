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
		font-weight: 600;
		color: #2b2c34;
		gap: 1rem;
	}

	button {
		border: none;
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
		button {
			display: block;
		}
	}
`;

export const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 50px;

	& > div:first-child {
		width: 33%;
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
	width: 66%;

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
		padding-left: 10px;
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

		&:nth-of-type(3) p {
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			color: #292d32;
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
			width: fit-content;
			color: #01586c;
			white-space: nowrap;
		}
	}

	@media (max-width: 820px) {
		th {
			&:nth-child(5),
			&:nth-child(6) {
				display: none;
			}
		}

		td {
			&:nth-of-type(5),
			&:nth-of-type(6) {
				display: none;
			}
		}
	}
`;
