/** @format */

import React from 'react';
import pink from '../../assets/images/pinkCircle.png';
import blue from '../../assets/images/blueCircle.png';
import styled from 'styled-components';
import orange from '../../assets/images/orangeCircle.png';
import {
	StyledH1,
	StyledH3,
	StyledText,
	StyledH2Center,
} from '../../components/Styles/Body/Text.styled';

import {
  StyledButton,
  StyledTextButton,
} from "../../components/Styles/Body/Button.styled";
import DescriptionProps from "./DescriptionProps";
import CarrerLandImg from "../../assets/images/CarrerLand.png";
import JobProps from "./JobProps";

const StyledHeader = styled.h1`
  color: #fdb172;

  font-size: 2.8rem;
  padding: 4px 0;
`;
const StyledBackGround = styled.section`
	background: linear-gradient(
			0deg,
			rgba(255, 246, 231, 0.91),
			rgba(255, 246, 231, 0.91)
		),
		url(.jpg);
`;
const StyledSpanText = styled.span`
  color: #fdb172;
`;
const StyledSpanTextBlue = styled.span`
  color: #233ba9;
`;
function Carrerpg1() {
	return (
		<div className="carrer-landing-pg py-12">
			<section className="flex justify-between items-center py-4 px-10 flex-col-reverse lg:flex-row">
				<div>
					<StyledHeader>Let's grow together</StyledHeader>
					<StyledText className="max-w-md mt-3">
						We are all about growth, and growing with our clients. If you’re
						looking to hitch your career to a company that’s going places, look
						no further than FIXIT.
					</StyledText>
					<div className="btns flex mt-8">
						<StyledButton>See all job openings</StyledButton>
						<StyledButton outlined className="mx-3">
							Speak with an expert
						</StyledButton>
					</div>
				</div>
				<div>
					<img src={CarrerLandImg} alt="" className="w-full h-2/5" />
				</div>
			</section>
			<StyledBackGround className=" place-items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
				<DescriptionProps
					src={pink}
					title="You with us"
					description="FIXIT employees recognize their responsibility to uphold the values that have been established over the years. These values outline what we stand for and influence the way we behave, both with our clients and with one another."
				/>
				<DescriptionProps
					src={blue}
					title="We are particular about growth"
					description="FIXIT is all about growth, and growing with our clients. If you’re looking to hitch your career to a company that’s going places, look no further than FIXIT. We aspire to do bigger and better things – and take our growth and performance to new heights."
				/>
				<DescriptionProps
					src={orange}
					title="Learning and Development"
					description="Development is vital to our people’s success and ours. The skills, knowledge and capabilities of our people are central to our success. That’s why we’re fully committed to developing a continuous learning culture.
"
				/>
			</StyledBackGround>
			<section className="mt-12">
				<h1 className="text-center font-bold text-3xl p-4">
					See our latest vacancies
				</h1>
				<h4 className="text-center my-4">
					We are actively recruiting for this positions, if you feel you’re a
					good fit for <br /> the position feel free to apply.{' '}
				</h4>
				<div className="jobs mt-12 place-items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
					<JobProps title={'Software Engineer'} />
					<JobProps title={'Junior UX Designer'} />
					<JobProps title={'Senior UX Designer'} />
				</div>
				<div className="flex items-center justify-center">
					<StyledButton className="mx-3  mt-6 ">
						See all job openings
					</StyledButton>
				</div>
			</section>
			<section className="img-carousel mt-11 py-5 flex flex-col justify-center items-center">
				<h1 className="text-3xl font-semibold">
					Picture yourself as <StyledSpanText>FIXIT</StyledSpanText>
				</h1>
				<h6>
					follow us on instagram:{' '}
					<StyledSpanTextBlue>@_fixit</StyledSpanTextBlue>
				</h6>
				{/* image gallery carousel */}
			</section>
			<StyledBackGround className="grow-together flex flex-col items-center justify-center py-10 mt-3">
				<StyledHeader>Let's grow together</StyledHeader>
				<h4 className="mt-3 text-center">
					Browse our open positions, find a job you love, tell imposter <br />{' '}
					syndrome to take the day off, and apply.
				</h4>
				<StyledButton className="mx-3 mt-5">See all job openings</StyledButton>
			</StyledBackGround>
		</div>
	);
}

export default Carrerpg1;
