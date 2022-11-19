import React from 'react';
import styled from 'styled-components';
import {
	StyledH1,
	StyledH3,
	StyledText,
	StyledH2Center,
} from '../../components/Styles/Body/Text.styled';

const StyledHeader = styled.h1`
	color: #233ba9;
	opacity: 0.8;
	font-size: 2rem;
	padding: 4px 0;
`;
const StyledImg = styled.img`
	width: 100px;
	height: 100px;
`;
const StyledBackGround = styled.section`
	margin: 0;
	background: linear-gradient(
			0deg,
			rgba(255, 246, 231, 0.91),
			rgba(255, 246, 231, 0.91)
		),
		url(.jpg);
`;
function DescriptionProps({ src, title, description }) {
	return (
		<StyledBackGround className="descriptions flex flex-col p-2 max-w-md">
			<StyledImg src={src} alt="" />
			<StyledHeader>{title}</StyledHeader>
			<h4>{description}</h4>
		</StyledBackGround>
	);
}

export default DescriptionProps;
