import React from 'react';
import Arrow from '../../assets/images/arrow-right.png';
import {
	StyledButton,
	// StyledTextButton,
} from '../../components/Styles/Body/Button.styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Map from '../../assets/images/map.png';
const StyledDivContainer = styled.div`
	width: 350px;
	padding: 25px 20px;
	margin: 10px 0;
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	border: 1px solid #e4e4e5;
`;
function JobProps({ title }) {
	return (
		<StyledDivContainer>
			<h2 className="text-2xl font-bold my-4">{title}</h2>
			<h4>We are currently looking for a {title} with vast experience</h4>
			<div className="flex justify-between my-4">
				<img src={Map} alt="" className="w-full" />
				<h5 className="mx-2 font-bold">Remote</h5>
			</div>

			<Link to="/carrer-pg-3" onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}>
				<StyledButton
					outlined
					className=" flex items-center my-5 justify-center"
				>
					Apply now
					<img src={Arrow} alt="" className="mx-2" />
				</StyledButton>
			</Link>
		</StyledDivContainer>
	);
}

export default JobProps;
