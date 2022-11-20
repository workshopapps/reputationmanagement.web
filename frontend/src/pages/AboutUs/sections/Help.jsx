import React from 'react';
import {
	Blue,
	Btn,
	StyledBgImgDesktop,
	StyledCenter,
} from '../styled/Help.styled';

export default function Help() {
	return (
		<>
			<StyledBgImgDesktop>
				<StyledCenter>
					<Blue>Lets help you remove that negative review</Blue>
					<Btn>Register</Btn>
				</StyledCenter>
			</StyledBgImgDesktop>
		</>
	);
}
