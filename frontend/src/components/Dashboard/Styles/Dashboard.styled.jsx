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
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	.noRequest {
		text-align: center;
		width: 100%;
		font-weight: 600;
		font-size: 30px;
		line-height: 24px;
		color: #292d32;
		margin: 0 auto;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	@media (max-width: 520px) {
		width: 100vw;

		h1 {
			font-size: 15px !important;
		}
		a {
			font-weight: 500 !important;
			transform: scale(0.885);
		}
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
		color: #292d32;
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
		h1 {
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

	@media (max-width: 520px) {
		gap: 12px !important;

		& > div {
			padding: 24px 15px 10px;
			align-items: center;

			img {
				align-self: center !important;
			}
		}
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

	thead tr {
		border-bottom: 1px solid #e4e4e5;
	}

	tbody tr {
		border-bottom: 1px solid #d2d3d4;
	}
	thead {
		background: rgba(228, 228, 229, 0.3);
	}
	@media (max-width: 400px) {
		td:first-child {
			width: 20px;
		}
	}
	th {
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
			padding-left: 30px;
		}
		&:nth-of-type(4) p {
			background: rgba(1, 176, 216, 0.15);
			border-radius: 4px;
			padding: 8px 16px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			width: fit-content;
			// width: 70%;
			color: #01586c;
			white-space: nowrap;
		}

		&:nth-of-type(5) p {
			font-weight: 700;
			font-size: 16px;
			line-height: 24px;
			color: #8f9093;
		}
	}

	.priority {
		border-radius: 4px;
		padding: 4px 16px;
		width: fit-content;
	}

	.mobile {
		display: none;
	}

	.priority-3 {
		background: #d1fadf !important;
		color: #027a48 !important;
	}
	.status-3 {
		background: #d1fadf !important;
		color: #027a48 !important;
	}
	.status-4 {
		background: #fecdca !important;
		color: #b42318 !important;
	}
	.status-5 {
		background: #d1fadf !important;
		color: #027a48 !important;
	}
	.priority-2 {
		background: #ffe5b2;
		color: #d6981b;
	}

	.priority-1,
	.priority-0 {
		background: #fecdca;
		color: #b42318;
	}
	@media (max-width: 900px) {
		th,
		td {
			&:nth-child(5) {
				display: none;
			}
		}
	}
	@media (max-width: 820px) {
		th,
		td {
			&:nth-child(2) {
				display: none;
			}
			font-size: 16px;
			line-height: 20px;
		}

		.High.desktop,
		.Low.desktop,
		.Medium.desktop,
		.Urgent.desktop {
			display: none;
		}

		.High.mobile,
		.Low.mobile,
		.Medium.mobile,
		.Urgent.mobile {
			display: flex;
			height: 20px;
			width: 20px;
			border-radius: 50%;
			padding: 0;
		}

		.High {
			background: #027a48;
		}

		.Medium {
			background: #d6981b;
		}

		.Low,
		.Urgent {
			background: #b42318;
		}

		td {
			&:nth-of-type(5) {
				display: none;
			}
			&:nth-of-type(4) p {
				padding-left: 25px;
			}
		}
	}
	@media (max-width: 600px) {
		th,
		td {
			&:nth-child(4) {
				display: none;
			}
		}
	}
	@media (max-width: 438px) {
		td:first-child {
			padding-left: 0 !important;
		}
		td:nth-of-type(3) p {
			padding-left: 0 !important;
		}
	}
`;
