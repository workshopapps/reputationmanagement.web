import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { StyledButton } from '../../components/Styles/Body/Button.styled';
import { StyledBottom } from './Bottom.styled';

export default function Bottom() {
	return (
		<StyledBottom>
			
			<h2>We are here to help maintain your brand's <br /> reputation. If we don't succeed you don't pay</h2>
            <StyledButton> <Link to='/get-a-quote'> Get a free quote <span><FaArrowRight/></span> </Link> </StyledButton>
		</StyledBottom>
	);
}
