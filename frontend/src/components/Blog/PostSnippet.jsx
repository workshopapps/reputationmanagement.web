import React from 'react';
// import Blog_see_all from '../pages/Blog--see-all'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPost = styled.section`
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	width: 445px;
	@media (max-width: 1080px) {
		&:last-child {
			display: none;
		}
	}
`;

const StyledImg = styled.img`
	width: 100%;
`;

const StyledHeader = styled.h2`
	font-weight: 600;
	font-size: 1.3rem;
	color: #233ba9;
	padding: 10px;
	padding-left: 15px;
	@media (max-width: 650px) {
		font-size: 0.6rem;
		font-weight: 400;
	}
`;

const StyledParagraph = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	color: #787a7d;
	padding: 0 10px 20px 10px;
	@media (max-width: 650px) {
		display: none;
	}
`;

function PostSnippettt({ img, title, subtitle }) {
	return (
		<StyledPost>
			<StyledImg src={img} alt="blogpost image" />
			<StyledHeader>{title}</StyledHeader>
			<StyledParagraph>{subtitle}</StyledParagraph>
		</StyledPost>
	);
}

PostSnippettt.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	display: PropTypes.bool,
};

export default PostSnippettt;
