import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../../components/Styles/Body/Button.styled';
import Arrow from '../../../assets/images/arrow-right.png';
import Map from '../../../assets/images/map.png'
const OpeningTemplate = ({ openings }) => {
	return (
		<>
			{openings.length > 0 ? (
				openings.map((open, key) => {
					return (
						<>
							<StyledDivContainer>
								<h2 className="text-lg font-bold ">{open.title}</h2>

								<div className=" flex flex-col ">
									<h4>{open.desc}</h4>
								</div>
								<div className="flex gap-1 ">
									<img src={Map} alt="Jobtype icon" className="w-full" />
									<h5 className="font-bold">Remote</h5>
								</div>

								<Link
									className=""
									to={open.to}
									onClick={() => {
										window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
									}}
								>
									<StyledButton
										outlined
										className=" flex items-center justify-center"
									>
										Apply now
										<img src={Arrow} alt="" className="mx-2" />
									</StyledButton>
								</Link>
							</StyledDivContainer>
						</>
					);
				})
			) : (
				<StyledErrorbox>
					<StyledErrorText>Position does not exist</StyledErrorText>
				</StyledErrorbox>
			)}
		</>
	);
};

const StyledErrorbox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 90vw;
`;
const StyledErrorText = styled.h2`
	text-align: center;
	font-weight: 700;
	font-size: 120%;
	border: 2px rgb(255, 0, 0) solid;
	padding: 15px;
`;

const StyledDivContainer = styled.div`
	width: 90%;;
	padding: 25px 20px;
	display: flex;
	flex-direction: column;
	gap: 1em;
	align-items: flex-start;
	justify-content: center;
	border: 1px solid #e4e4e5;
	border-radius: 5px ;
box-shadow: 0 0 5px 2px #00000014;
	@media screen and (max-width: 612px) {
		width: 100%;
		max-width: 350px;
	}
`;

export default OpeningTemplate;
