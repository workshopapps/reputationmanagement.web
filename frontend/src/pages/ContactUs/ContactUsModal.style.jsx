import styled from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background: #f8fbff;
	display: flex;
	align-items: center;
	justify-content: center;

	.modal__content {
		width: 50%;
		background: #ffffff;
		box-shadow: 4px 4px 16px rgba(120, 122, 125, 0.15);
		padding: 60px 20px;
		border: none;
	}
	.modal__header {
		display: flex;
		justify-content: center;
		.img__container {
			width: 120px;
			height: 120px;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.modal__body {
		h1 {
			margin-top: 24px;

			font-style: normal;
			font-weight: 700;
			font-size: 1.6rem;
			text-align: center;
			color: #2b2c34;
		}
		p {
			font-style: normal;
			font-weight: 400;
			font-size: 1.1rem;
			color: var(--clr-black-5);
			text-align: center;
			width: 70%;
			margin: 8px auto;
			color: #000000;
		}
	}
	.modal__buttons {
		margin-top: 16px;
		display: flex;
		justify-content: center;
		button {
			margin-bottom: 20px;
			padding: 12px 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: transparent;
			outline: none;
			cursor: pointer;
			border: 1px solid #4560d9;
			transition: all 0.5s;
			&:hover {
				background: #f8f9fa;
			}
		}
	}
	@media (max-width: 850px) {
		.modal__content {
			width: 80%;
		}
		p {
			width: 80%;
		}
	}
	@media (max-width: 550px) {
		.modal__content {
			width: 90%;
		}
	}
`;
