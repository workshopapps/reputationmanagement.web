import React from 'react';
import { StyledCard } from '../Dashboard/Styles/Card.styled';

const Card = (props) => {
	return (
		<StyledCard>
			<div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'flex-start'}}>
				<img src={props.img} alt="" />
				<p>{props.title}</p>
			</div>
			<p style={{ alignSelf: 'center'}}>{props.digit}</p>
		</StyledCard>
	);
};

export default Card;
