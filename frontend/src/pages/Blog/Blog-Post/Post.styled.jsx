import styled from 'styled-components';

export const StyledPost = styled.div`
	div {
		display: flex;
		gap: 1rem;
		align-items: center;

		span {
			display: block;
			height: 12px;
			width: 12px;
			background-color: #233ba9;
			border-radius: 50%;
		}

		h1 {
			font-weight: 600;
			font-size: 32px;
			line-height: 38px;
			letter-spacing: 0.01em;
			color: #233ba9;
		}
	}

	p {
		font-style: normal;
		font-weight: 300;
		font-size: 18px;
		line-height: 36px;
		letter-spacing: 0.01em;
		color: #000000;

		&:first-of-type {
			margin-top: 24px;
		}

		&:last-of-type {
			margin-bottom: 64px;
		}
	}

	img {
		width: 100%;
		margin-bottom: 64px;
	}

	@media (max-width: 856px) {
		div {
			align-items: flex-start;
			/* border: 2px solid red; */

			span {
				margin-top: 13px;
			}
		}
	}

	@media (max-width: 477px) {
		div {
			align-items: center;
			margin-left: 10px;
			margin-right: 10px;

			span {
				margin-top: 0;
			}

			h1 {
				font-weight: 700;
				font-size: 18px;
				line-height: 27px;
			}
		}

		p {
			font-size: 12px;
			line-height: 18px;

			&:first-of-type {
				margin-top: 16px;
			}

			&:last-of-type {
				margin-bottom: 32px;
			}
		}

		img {
			margin-bottom: 32px;
		}
	}
`;
