import React from 'react';
import { StyledCard } from '../Dashboard/Styles/Card.styled';

const Card = (props) => {
	return (
		<StyledCard>
			<div>
				<img src={props.img} alt="" />
				<p>{props.title}</p>
			</div>
			<p className="digit" >{props.digit}</p>
		</StyledCard>
	);
};

export default Card;
