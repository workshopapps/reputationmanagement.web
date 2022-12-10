import React from 'react';
import styled from 'styled-components';
//import PropTypes from 'prop-types';
//import { valid } from 'semver';

const StyledPost = styled.section`
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	//width: 445px;
	transform: scale 0.4s;

	@media (max-width: 1080px) {
		&:last-child {
			display: none;
		}
	}
`;

const StyledImg = styled.img`
	width: 100%;
	height: 240px;
`;

const StyledHeader = styled.h2`
	font-weight: 600;
	font-size: 1.3rem;
	color: #233ba9;
	padding: 10px;
	padding-left: 15px;
	cursor: default;

	@media (max-width: 650px) {
		font-size: 1rem;
		font-weight: 400;
		padding: 10px;
		padding-left: 15px;
	}
`;

const StyledParagraph = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	color: #787a7d;
	padding: 0 10px 20px 10px;
	cursor: default;
`;

const StyledTag = styled.div`
	padding: 8px 16px;
	background: #eef1fc;
	border-radius: 100px;
	width: fit-content;
	color: #233ba9;
	margin-top: 16px;
	margin-left: 16px;

	@media (max-width: 650px) {
	}
`;
const SnippetGrid = styled.div`
	width: 100%;
	display: grid;
	gap: 1.5rem;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 520px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

function PostSnippet({ item }) {
	return (
		<>
			<SnippetGrid>
				{item.map((Val) => {
					return (
						<StyledPost key={Val.id}>
							<StyledImg src={Val.img} alt="blogpost image" />
							<StyledTag>{Val.tag}</StyledTag>
							<StyledHeader>{Val.title}</StyledHeader>
							<StyledParagraph>{Val.description}</StyledParagraph>
						</StyledPost>
					);
				})}
			</SnippetGrid>
		</>
	);
}

export default PostSnippet;
