import React from 'react';
// import Blog from '../pages/Blog/Blog'
import arrow_right from '../../assets/images/blog_images/icons/gold-arrow-right.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleSection = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 40px 0;
`;
const StyleHeader = styled.h1`
	font-weight: 700;
	font-size: 1.8rem;
	color: #233ba9;

	/* @media screen and (max-width: 768px) {
		font-size: 20px;
	} */
`;

const StyleChildSection = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`;

const StyleParagraph = styled.p`
	font-style: normal;
	font-weight: 600;
	font-size: 1.4rem;
	color: #233ba9;
	@media (max-width: 650px) {
		font-size: 0.6rem;
		font-weight: 400;
	}
`;

function Headlines({ title }) {
	return (
		<StyleSection>
			<StyleHeader>{title}</StyleHeader>
			<StyleChildSection className="details">
				<StyleParagraph>See All</StyleParagraph>
				<img src={arrow_right} alt="" />
			</StyleChildSection>
		</StyleSection>
	);
}

Headlines.propTypes = {
	title: PropTypes.string,
};
export default Headlines;
