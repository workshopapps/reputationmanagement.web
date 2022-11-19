import React from 'react';
import { StyledCard } from '../Styles/Dashboard/Card.styled';

const Card = (props) => {
	return (
		<StyledCard>
			<img src={props.img} alt="" />
			<p>{props.title}</p>
			<p>{props.digit}</p>
		</StyledCard>
	);
};

export default Card;
