import React from 'react';
import styled from 'styled-components';
// import {
// 	StyledH1,
// 	StyledH3,
// 	StyledText,
// 	StyledH2Center,
// } from '../../components/Styles/Body/Text.styled';

const StyledHeader = styled.h1`
	color: #233ba9;
	opacity: 0.7;
	font-size: 2rem;
	padding: 4px 0;
`;
const StyledImg = styled.img`
	width: 100px;
	height: 100px;
`;

function DescriptionProps({ src, title, description }) {
	return (
		<div className="descriptions flex flex-col px-6 py-4 max-w-md">
			<StyledImg src={src} alt="" />
			<StyledHeader className="font-bold">{title}</StyledHeader>
			<h4>{description}</h4>
		</div>
	);
}

export default DescriptionProps;
