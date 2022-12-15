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
	h2 {
		font-family: Lato;
		font-size: 28px;
		font-weight: 700;
		line-height: 42px;
		letter-spacing: 0em;
		text-align: left;
		margin-bottom: 36px;
	}
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
		font-weight: 600;
		font-size: 20px;
		line-height: 150%;
		color: #292d32;
		gap: 1rem;
	}

	a {
		display: none;
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
			display: flex;
		}
	}
	@media (max-width: 820px) {
		a {
			display: flex;
		}
		h1 {
			font-size: 23px;
		}
	}
	@media (max-width: 450px) {
		a {
			display: flex;
			gap: 7px;
			font-size: 14px;
		}
		h1 {
			font-size: 18px;
		}
	}
`;

export const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 50px;
	margin-bottom: 20px;

	& > div:first-child {
		width: 32%;
	}
	@media (max-width: 1200px) {
		gap: 25px;
	}

	@media (max-width: 820px) {
		flex-direction: column;
		& > div:first-child {
			width: 100%;
			/* display: flex;
			flex-direction: column;
			align-items: center; */
		}
	}
`;

export const CardSemiWrapper = styled.div`
	display: flex;
	gap: 50px;
	justify-content: space-between;
	width: 68%;
	@media(max-width: 574px){
		flex-direction: column;
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
			/* display: flex;
			flex-direction: column; */

			/* img {
				align-self: flex-end;
			} */
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
		font-size: 16px;
		line-height: 33px;
		color: #2b2c34;

		&:first-child {
			padding-left: 16px;
		}
		max-width: 1291px;

		@media (min-width: 1325px) {
			&:nth-of-type(1) {
				width: 10%;
			}
			&:nth-of-type(2) {
				width: 20%;
			}
			&:nth-of-type(3) {
				width: 20%;
			}
			&:nth-of-type(4) {
				width: 20%;
			}
			&:nth-of-type(5) {
				width: 20%;
			}
			&:nth-of-type(6) {
				width: 10%;
			}
		}
	}

	td {
		padding-top: 24px;
		padding-bottom: 19px;
		max-width: 1291px;

		@media (min-width: 1325px) {
			&:nth-of-type(1) {
				width: 10%;
			}
			&:nth-of-type(2) {
				width: 20%;
			}
			&:nth-of-type(3) {
				width: 20%;
			}
			&:nth-of-type(4) {
				width: 20%;
			}
			&:nth-of-type(5) {
				width: 20%;
			}
			&:nth-of-type(6) {
				width: 20%;
			}
		}
		&:nth-of-type(1) {
			width: 90px;
			font-weight: 400;
			font-size: 14px;
			line-height: 24px;
			color: #292d32;
			padding: 8px 16px;
		}
		&:nth-of-type(2) {
			width: 170px;
			font-weight: 400;
			font-size: 14px;
			line-height: 24px;
			color: #292d32;
		}

		&:nth-of-type(3) {
			width: 180px;
		}
		&:nth-of-type(3) p {
			font-weight: 400;
			font-size: 14px;
			line-height: 24px;
			color: #292d32;
			padding: 8px px;
		}
		&:nth-of-type(4) {
			width: 170px;
		}
		&:nth-of-type(4) p {
			border-radius: 4px;
			padding: 4px 16px;
			font-weight: 400;
			font-size: 14px;
			line-height: 24px;
			width: 60%;
			white-space: nowrap;
		}
		&:nth-of-type(5) {
			width: 160px;
		}
		&:nth-of-type(5) p {
			font-weight: 400;
			font-size: 14px;
			line-height: 24px;
			color: #292d32;
			padding: 8px 0px;
			padding-left: 0px;
		}
		&:nth-of-type(6) {
			text-align: center;
			width: 160px;
		}
	}

	.priority {
		border-radius: 4px;
		padding: 4px 16px;
		width: 65%;
		white-space: nowrap;
		max-width: 110px;
		text-align: center;
	}

	.mobile {
		display: none;
	}

	.priority-3 {
		background: #d1fadf !important;
		color: #027a48 !important;
		text-align: center;
	}
	.status-3 {
		background: #d1fadf !important;
		color: #027a48 !important;
		text-align: center;
		max-width: 110px;
	}
	.status-4 {
		background: #fecdca !important;
		color: #b42318 !important;
		text-align: center;
		max-width: 110px;
	}
	.status-5 {
		background: #d1fadf !important;
		color: #027a48 !important;
		text-align: center;
		max-width: 110px;
	}
	.priority-2 {
		background: #ffe5b2;
		color: #d6981b;
		text-align: center;
	}

	.priority-1,
	.priority-0 {
		background: #fecdca;
		color: #b42318;
		text-align: center
		max-width: 110px;
	}

	.status-1,
	.status-2 {
		background: rgba(1, 176, 216, 0.15);
		color: #01586c;
		text-align: center;
		max-width: 110px;
	}
	.status-0 {
		background: #ffe5b2;
		color: #d6981b;
		text-align: center;
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
		td:nth-of-type(3) p {
			padding-left: 0 !important;
		}
	}
`;
