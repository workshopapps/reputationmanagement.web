import React from 'react';
import styled from 'styled-components';

export const PostSnippetContainer = styled.section`
	display: flex;
	max-width: 1500px;
	flex-flow: wrap;
	margin: 24px 2rem 6rem;
	align-items: center;
	justify-content: center;
	gap: 24px;

	@media (max-width: 745px) {
		gap: 16px;
	}

	section {
		max-width: 400px;
		margin-bottom: 72px;
		width: 33%;

		&:first-child {
			display: none;
		}

		@media (max-width: 1320px) {
			max-width: 360px;
		}

		@media (max-width: 1192px) {
			max-width: 30%;
		}

		@media (max-width: 1080px) {
			p,
			&:last-child {
				display: block;
			}
		}

		@media (max-width: 895px) {
			width: 45%;
			max-width: 60%;

			&:first-child {
				display: block;
			}
		}

		@media (max-width: 745px) {
			margin-bottom: 24px;

			p {
				display: none;
			}
		}
	}
`;
