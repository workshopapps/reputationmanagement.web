/** @format */

import React from 'react';
import pink from '../../assets/images/pinkCircle.png';
import blue from '../../assets/images/blueCircle.png';
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
} from '../../components/Styles/Body/Button.styled';
import DescriptionProps from './DescriptionProps';
import CarrerLandImg from '../../assets/images/CarrerLand.png';
import JobProps from './JobProps';

function Carrerpg1() {
	return (
		<div className="carrer-landing-pg">
			<section className="flex justify-between p-3 flex-col-reverse lg:flex-row">
				<div>
					<StyledH1 className="text-xl">Let's grow together</StyledH1>
					<StyledText>
						We are all about growth, and growing with our clients. If you’re
						looking to hitch your career to a company that’s going places, look
						no further than FIXIT.
					</StyledText>
					<div className="btns flex ">
						<StyledButton className="mx-3">See all job openings</StyledButton>
						<StyledButton outlined className="mx-3">
							Speak with an expert
						</StyledButton>
					</div>
				</div>
				<div>
					<img src={CarrerLandImg} alt="" />
				</div>
			</section>
			<section className="flex flex-col p-3 md:flex-row ">
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
			</section>
			<section>
				<h1 className="text-center font-bold text-3xl p-4">
					See our latest vacancies
				</h1>
				<h4 className="text-center">
					We are actively recruiting for this positions, if you feel you’re a
					good fit for the position feel free to apply.{' '}
				</h4>
				<div className="jobs  place-items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
					<JobProps title={'Software Engineer'} />
					<JobProps title={'Junior UX Designer'} />
					<JobProps title={'Senior UX Designer'} />
				</div>
				<StyledButton className="mx-3">See all job openings</StyledButton>
			</section>
			<section className="img-carousel">
				<h1>Picture yourself as FIXIT</h1>
				<h6>follow us on instagram: @_fixit</h6>
				{/* image gallery carousel */}
			</section>
			<section className="grow-together">
				<h1>Let's grow together</h1>
				<h5>
					Browse our open positions, find a job you love, tell imposter syndrome
					to take the day off, and apply.
				</h5>
				<StyledButton className="mx-3">See all job openings</StyledButton>
			</section>
		</div>
	);
}

export default Carrerpg1;
