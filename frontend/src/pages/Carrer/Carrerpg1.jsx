/** @format */

import React from 'react';
import pink from '../../assets/images/pinkCircle.png';
import blue from '../../assets/images/blueCircle.png';
import styled from 'styled-components';
import Background2 from '../../assets/images/BG2.jpg';
import Background1 from '../../assets/images/BG1.jpg';
import Slider3 from '../../assets/images/ImageSlider3.jpg';

import Slider2 from '../../assets/images/ImageSlider2.jpg';
import Slider1 from '../../assets/images/ImageSlider1.jpg';
import orange from '../../assets/images/orangeCircle.png';
import { StyledText } from '../../components/Styles/Body/Text.styled';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../components/Styles/Body/Button.styled';
import DescriptionProps from './DescriptionProps';
import CarrerLandImg from '../../assets/images/CarrerLand.png';
import JobProps from './JobProps';
import Star from '../../assets/images/Vectorstar.png';
import Star2 from '../../assets/images/Vectorstar2.png';


import PageLayout from '../../layout/PageLayout';

const StyledHeader = styled.h1`
	color: #fdb172;

	font-size: 3.5rem;
	padding: 4px 0;
`;
const StyledBackGround = styled.section`
	background: linear-gradient(
		0deg,
		rgba(255, 246, 231, 0.91),
		rgba(255, 246, 231, 0.91)
	);
	background-image: url(${Background1});
`;
const StyledBackGround2 = styled.section`
	background: linear-gradient(
		0deg,
		rgba(255, 246, 231, 0.91),
		rgba(255, 246, 231, 0.91)
	);
	background-image: url(${Background2});
`;
const StyledSpanText = styled.span`
	color: #fdb172;
`;
const StyledSpanTextBlue = styled.span`
	color: #233ba9;
`;
// const StyledArrowImg = styled.img`
// 	position: absolute;
// 	width: 40px;
// 	height: 40px;
// 	cursor: pointer;

// 	top: 340%;
// `;
const mystyle = {
	width: '30%',
	height: '40%',
};
const style = {
	width: '40%',
	height: '80%',
};

function Carrerpg1() {
	return (
		<PageLayout>
			<div className="carrer-landing-pg py-12">
				<section
					className="flex justify-between items-center py-4 px-10 flex-col-reverse lg:flex-row"
					style={{ maxWidth: '1540px', margin: '0 auto' }}
				>
					<div>
						<StyledHeader>Let's grow together</StyledHeader>
						<StyledText className="max-w-md mt-3">
							We are all about growth, and growing with our clients. If you’re
							looking to hitch your career to a company that’s going places,
							look no further than FIXIT.
						</StyledText>
						<div className="btns flex mt-8 flex-col md:flex-row">
							<Link
								className="my-5"
								to="/carrer-pg-2"
								onClick={() => {
									window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
								}}
							>
								<StyledButton className="w-full">
									See all job openings
								</StyledButton>
							</Link>
							<Link
								className="my-5"
								to="/contact"
								onClick={() => {
									window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
								}}
							>
								<StyledButton
									outlined
									className="mx-0 h-12 md:mx-3 mt-2 md:mt-0 lg:mt-0 w-full"
								>
									Speak with an expert
								</StyledButton>
							</Link>
						</div>
						<div className="flex justify-evenly">
							<img src={Star} alt="" className="w-5 h-5 mt-5" />
							<img src={Star2} alt="" className="w-5 h-5 mt-20" />
						</div>
					</div>
					<div>
						<img src={CarrerLandImg} alt="" className="w-full h-2/5" />
					</div>
				</section>
				<StyledBackGround2>
					<div
						className=" place-items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"
						style={{ maxWidth: '1540px', margin: '0 auto' }}
					>
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
					</div>
				</StyledBackGround2>
				<section
					className="mt-20"
					style={{ maxWidth: '1540px', margin: '0 auto' }}
				>
					<h1 className="text-center font-bold text-3xl p-4 pt-20">
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
						<Link
							to="/carrer-pg-2"
							onClick={() => {
								window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
							}}
						>
							<StyledButton className="mt-12">
								See all job openings
							</StyledButton>
						</Link>
					</div>
				</section>
				<section className="img-carousel mt-11 py-5 flex flex-col justify-center items-center">
					<h1 className="text-3xl font-semibold mt-10">
						Picture yourself as <StyledSpanText>FIXIT</StyledSpanText>
					</h1>
					<h6>
						follow us on instagram:{' '}
						<StyledSpanTextBlue>@_fixit</StyledSpanTextBlue>
					</h6>
					<div
						className="image-carousel flex mt-20 items-center justify-center"
						style={{ maxWidth: '1540px' }}
					>
						<img src={Slider3} alt="" style={mystyle} />
						<img src={Slider2} alt="" style={style} className="active  -mt-5" />
						<img src={Slider1} alt="" style={mystyle} />
					</div>
					{/* <StyledArrowImg src={Arrow} alt='' className='left absolute right-28' />
        <StyledArrowImg
          src={Arrow}
          alt=''
          className='right absolute -rotate-180 left-28'
        /> */}
				</section>
				<StyledBackGround className="grow-together flex flex-col items-center justify-center py-12 ">
					<StyledHeader className="text-center">
						Let's grow together
					</StyledHeader>
					<h4 className="mt-3 text-center">
						Browse our open positions, find a job you love, tell imposter <br />{' '}
						syndrome to take the day off, and apply.
					</h4>
					<Link
						to="/carrer-pg-2"
						onClick={() => {
							window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
						}}
					>
						<StyledButton className="mt-4">See all job openings</StyledButton>
					</Link>
				</StyledBackGround>
			</div>
		</PageLayout>
	);
}

export default Carrerpg1;
