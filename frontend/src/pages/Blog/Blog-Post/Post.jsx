import React from 'react';
import { StyledPost } from './Post.styled';

const Post = (props) => {
	return (
		<StyledPost>
			<div>
				<span></span>
				<h1>{props.title}</h1>
			</div>
			<p>{props.paragraph1}</p>
			<p>{props.paragraph2}</p>
			<img src={props.image} alt="" />
		</StyledPost>
	);
};

export default Post;
