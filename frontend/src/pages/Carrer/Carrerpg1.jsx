/** @format */

import React from 'react';

import styled from 'styled-components';
import Background2 from '../../assets/images/BG2.jpg';
import Background1 from '../../assets/images/BG1.jpg';
import Slider3 from '../../assets/images/ImageSlider3.jpg';
import Vectorcolor1 from '../../assets/Vectorcolor1.png';
import Vectorcolo2 from '../../assets/Vectorcolo2.png';
import Vectorcolor3 from '../../assets/Vectorcolor3.png';

import Slider2 from '../../assets/images/ImageSlider2.jpg';
import Slider1 from '../../assets/images/ImageSlider1.jpg';

import { StyledText } from '../../components/Styles/Body/Text.styled';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../components/Styles/Body/Button.styled';
import DescriptionProps from './DescriptionProps';
import CarrerLandImg from '../../assets/images/CarrerLand.png';
import Star from '../../assets/images/Vectorstar.png';
import Star2 from '../../assets/images/Vectorstar2.png';
import Map from '../../assets/images/map.png';
import Arrow from '../../assets/images/arrow-right.png';

import PageLayout from '../../layout/PageLayout';
import { useEffect } from 'react';

const PageContainer = styled.div`
	/* max-width: 1200px; */
	margin: 0 auto;

	#header {
		max-width: 1300px;
		margin: 0 auto;
	}
`;

const StyledHeader = styled.h1`
	// color: #fdb172;
	color: #ff8017;
	font-size: 3.9rem;
	font: bold;
	padding: 4px 0;
`;

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
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<PageLayout>
			<PageContainer className="carrer-landing-pg">
				<section>
					<div className="lg:flex lg:justify-between p-10" id="header">
						<div className="flex flex-col">
							<StyledHeader>Let's grow together</StyledHeader>
							<StyledText className="mt-3 break-all leading-8">
								We are all about growth, and growing with our clients. If you’re
								<br />
								looking to hitch your career to a company that’s going places,
								<br />
								look no further than Repute.
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

						<div className="lg:flex lg:justify-end pr-5">
							<img src={CarrerLandImg} alt="" className="lg:w-[70%] lg:h-5/6" />
						</div>
					</div>
				</section>

				{/* <section
					className="flex justify-between items-center  py-4 px-10 flex-col-reverse lg:flex-row"
					style={{ maxWidth: '1540px', margin: '0 auto' }}
				>
					<div className="lg:flex gap-72 p-2">
						<div>
							<StyledHeader>Let's grow together</StyledHeader>
							<StyledText className="max-w-md mt-3">
								We are all about growth, and growing with our clients. If you’re
								looking to hitch your career to a company that’s going places,
								look no further than Repute.
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
							<img src={CarrerLandImg} alt="" className="w-[70%] h-4/6" />
						</div>
					</div>
				</section> */}

				<div className="mt-10">
					<StyledBackGround2>
						<div
							className=" place-items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"
							style={{ maxWidth: '1200px', margin: '0 auto' }}
						>
							<div className="p-3 -mt-2">
								<center>
									<img src={Vectorcolor1} alt="" />
								</center>
								<DescriptionProps title="You with us" />
								<p className="text-base pt-10 leading-8 break-normal text-justify p-2">
									REPUTE employees recognize their responsibility to uphold the
									values that have been established over the years. These values
									outline what we stand for and influence the way we behave,
									both with our clients and with one another.We aspire to do
									bigger and better things.
								</p>
							</div>

							<div className="p-3 -mt-1">
								<center>
									<img src={Vectorcolo2} alt="" />
								</center>
								<DescriptionProps title="We are particular about growth" />
								<p className="text-base leading-8 break-normal -mt-1 text-justify p-2 pt-1">
									REPUTE is all about growth, and growing with our clients. If
									you’re looking to hitch your career to a company that’s going
									places, look no further than REPUTE. We aspire to do bigger
									and better things and take our growth and performance to new
									heights.
								</p>
							</div>

							<div className="p-3 -mt-7">
								<center>
									<img src={Vectorcolor3} alt="" />
								</center>
								<DescriptionProps title="Learning and Development" />
								<p className="text-base leading-8 break-normal -mt-3 text-justify p-2">
									Development is vital to our people’s success and ours. The
									skills, knowledge and capabilities of our people are central
									to our success. That’s why we’re fully committed to developing
									a continuous learning culture.
								</p>
							</div>
						</div>
					</StyledBackGround2>
				</div>
				<section
					className="mt-20"
					style={{ maxWidth: '1200px', margin: '0 auto' }}
				>
					<h1 className="text-center font-bold text-5xl p-4 pt-32 ">
						See our latest vacancies
					</h1>
					<h4 className="text-center text-base my-4">
						We are actively recruiting for this positions, if you feel you’re a
						good fit for <br /> the position feel free to apply.
					</h4>
					<div className="jobs mt-20 place-items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-10">
						<StyledDivContainer>
							<h2 className="text-2xl font-bold mt-12">BUSINESS LAWYER</h2>

							<div className=" flex flex-col mt-5 leading-7">
								<h4>
									We are currently looking for a with BUSINESS LAWYER vast
									experience
								</h4>
							</div>
							<div className="flex gap-2 mt-8">
								<img src={Map} alt="" className="w-full" />
								<h5 className="mx-2 font-bold">Remote</h5>
							</div>

							<Link
								className="my-5"
								to="/job1"
								onClick={() => {
									window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
								}}
							>
								<StyledButton
									outlined
									className=" flex items-center mt-3 justify-center"
								>
									Apply now
									<img src={Arrow} alt="" className="mx-2" />
								</StyledButton>
							</Link>
						</StyledDivContainer>

						<StyledDivContainer>
							<h2 className="text-2xl font-bold mt-12">IMMIGRATION LAWYER</h2>

							<div className=" flex flex-col mt-5 leading-7">
								<h4>
									We are currently looking for a with IMMIGRATION LAWYER vast
									experience
								</h4>
							</div>
							<div className="flex gap-2 mt-8">
								<img src={Map} alt="" className="w-full" />
								<h5 className="mx-2 font-bold">Remote</h5>
							</div>

							<Link
								className="my-5"
								to="/job2"
								onClick={() => {
									window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
								}}
							>
								<StyledButton
									outlined
									className=" flex items-center mt-3 justify-center"
								>
									Apply now
									<img src={Arrow} alt="" className="mx-2" />
								</StyledButton>
							</Link>
						</StyledDivContainer>

						<StyledDivContainer>
							<h2 className="text-2xl font-bold mt-10">
								ESTATE PLANNING LAWYER
							</h2>
							<div className=" flex flex-col mt-3">
								<h4>
									We are currently looking for a with ESTATE PLANNING LAWYER
									LAWYER vast experience
								</h4>
							</div>
							<div className="flex gap-2 mt-5">
								<img src={Map} alt="" className="w-full" />
								<h5 className="mx-2 font-bold">Remote</h5>
							</div>

							<Link
								className="my-5"
								to="/job3"
								onClick={() => {
									window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
								}}
							>
								<StyledButton
									outlined
									className=" flex items-center mt-1 justify-center"
								>
									Apply now
									<img src={Arrow} alt="" className="mx-2" />
								</StyledButton>
							</Link>
						</StyledDivContainer>
					</div>
					<div className="flex items-center justify-center">
						<Link
							to="/carrer-pg-2"
							onClick={() => {
								window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
							}}
						>
							<StyledButton className="mt-16">
								See all job openings
							</StyledButton>
						</Link>
					</div>
				</section>
				<section
					className="img-carousel mt-11 py-5 flex flex-col justify-center items-center"
					style={{ maxWidth: '1200px', margin: '0 auto' }}
				>
					<h1 className="text-3xl font-semibold mt-12">
						Picture yourself as <StyledSpanText>REPUTE</StyledSpanText>
					</h1>
					<h6>
						follow us on instagram:
						<StyledSpanTextBlue>@_repute</StyledSpanTextBlue>
					</h6>
					<div
						className="image-carousel flex mt-16 items-center justify-center"
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
				<StyledBackGround className="grow-together h-full flex flex-col items-center mt-40 justify-center  ">
					<StyledHeader className="text-center">
						Let's grow together
					</StyledHeader>
					<h4 className="mt-3 text-center">
						Browse our open positions, find a job you love, tell imposter <br />
						syndrome to take the day off, and apply.
					</h4>
					<Link
						to="/carrer-pg-2"
						onClick={() => {
							window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
						}}
					>
						<StyledButton className="mt-4 mb-20">
							See all job openings
						</StyledButton>
					</Link>
				</StyledBackGround>
			</PageContainer>
		</PageLayout>
	);
}

export default Carrerpg1;
