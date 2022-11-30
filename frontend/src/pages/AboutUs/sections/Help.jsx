import React from 'react';
import { Link } from 'react-router-dom';
import {
	Blue,
	Btn,
	StyledBgImgDesktop,
	StyledCenter,
} from '../styled/Help.styled';

export default function Help() {
	return (
		<>
			<StyledBgImgDesktop data-testid="help-element">
				<StyledCenter>
					<Blue>Let’s help you remove that negative review</Blue>
					<Link to="/signup">
					<Btn>Register</Btn>
					</Link>
				</StyledCenter>
			</StyledBgImgDesktop>
		</>
	);
}
