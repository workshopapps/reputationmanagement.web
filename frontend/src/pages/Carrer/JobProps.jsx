import React from 'react';
import Arrow from '../../assets/images/arrow-right.png';
import {
	StyledButton,
	StyledTextButton,
} from '../../components/Styles/Body/Button.styled';
function JobProps({ title }) {
	return (
		<div>
			<h2>{title}</h2>
			<h4>We are currently looking for a {title} with vast experience</h4>
			<h5>Remote</h5>

			<StyledButton outlined className=" flex items-center justify-center">
				Apply now
				<img src={Arrow} alt="" className="mx-2" />
			</StyledButton>
		</div>
	);
}

export default JobProps;
