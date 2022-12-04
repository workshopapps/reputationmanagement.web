/** @format */

import React from 'react';
import {
	StyledButton,
	// StyledTextButton,
} from '../../components/Styles/Body/Button.styled';
import SearchIcon from '../../assets/images/Search.png';

import styled from 'styled-components';
import PageLayout from '../../layout/PageLayout';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import Map from '../../assets/images/map.png';
import Arrow from '../../assets/images/arrow-right.png';




const StyledBackGround = styled.section`
	background: #233ba9;
	border-radius: 8px;
`;

const StyledBox = styled.div`
	background: #ffffff;

	border: 1px solid #d2d3d4;
	border-radius: 4px;
`;
const StyledSelect = styled.select`
	border: 1px solid #d4d4d4;
	border-radius: 4px;
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

function Carrerpg2({DescriptionProps }) {
	return (
		<PageLayout>
			<div>
				<StyledBackGround className="flex flex-col text-white items-center justify-center p-4">
					<h1 className="text-3xl">All Open Positions</h1>
					<h5 className="text-center w-3/5 mt-4 py-4">
						If you see a position that makes your heart skip a beat, please
						apply. Come join us and help us build a global company to which we
						can be all proud of.
					</h5>
				</StyledBackGround>
				<section className="flex flex-row mt-8 justify-center items-center ">
					<StyledBox className="search-box flex justify-between p-3 px-4 mr-5 md:mr-0 w-full md:w-3/5 lg:w-3/5 scale-75 md:scale-100">
						<div className="flex justify-center items-center ">
							<img src={SearchIcon} alt="" />
							<input
								type="text"
								placeholder="Search job openings"
								className="border-0 outline-0 p-3"
							/>
						</div>
						<div className="flex">
							<StyledSelect
								name="filter-jobs"
								id="select"
								className="cursor-pointer px-5 py-3 hidden lg:block"
							>
								<option value="" selected className="cursor-pointer">
									Filter
								</option>
								<option value="Business Lawyer" className="cursor-pointer">
									Business Lawyer
								</option>
								<option value="Immigration Lawyer" className="cursor-pointer">
									Immigration Lawyer
								</option>
								<option
									value="Criminal Defense Lawyer"
									className="cursor-pointer"
								>
									Criminal Defense Lawyer
								</option>
								<option value="EstatePlanningLawyer" className="cursor-pointer">
									Estate Planning Lawyer
								</option>
							</StyledSelect>
							<StyledButton className="mx-0 mr-16 md:mx-3 md:mr-0">
								Search
							</StyledButton>
						</div>
					</StyledBox>
				</section>
				<section className="my-11 px-12">
					<div className="flex justify-between items-center">
						<h2 className="font-bold text-xl">Browse Open Positions</h2>
						<div className="hidden lg:block">
							<div className="flex items-center justify-center ">
								<h3 className="text-slate-400">Showing 1-12 of 70</h3>
								<Link
									className="my-5"
									to="#"
									onClick={() => {
										window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
									}}
								>
									<StyledButton outlined className="mx-3">
										Show all
									</StyledButton>
								</Link>
							</div>
						</div>

						<div className="block lg:hidden">
							<StyledSelect
								name="filter-jobs"
								id="select"
								className="cursor-pointer px-1 py-3 lg:hidden"
							>
								<option value="" selected className="cursor-pointer">
									Filter
								</option>
								<option value="Business Lawyer" className="cursor-pointer">
									Business Lawyer
								</option>
								<option value="Immigration Lawyer" className="cursor-pointer">
									Immigration Lawyer
								</option>
								<option
									value="Criminal Defense Lawyer"
									className="cursor-pointer"
								>
									Criminal Defense Lawyer
								</option>
								<option value="EstatePlanningLawyer" className="cursor-pointer">
									Estate Planning Lawyer
								</option>
								<option value="Family Lawyer" className="cursor-pointer">
									Family Lawyer
								</option>
								<option
									value="Personal Injury Lawyer"
									className="cursor-pointer"
								>
									Personal Injury Lawyer
								</option>
								<option value="Bankruptcy Lawyer" className="cursor-pointer">
									Bankruptcy Lawyer
								</option>
								<option
									value="Employment and Labor Lawyer"
									className="cursor-pointer"
								>
									Employment and Labor Lawyer
								</option>
								<option value="Tax Lawyer" className="cursor-pointer">
									Tax Lawyer
								</option>
								<option
									value="Intellectual Property Lawyer"
									className="cursor-pointer"
								>
									Intellectual Property Lawyer
								</option>
								<option
									value="Constitutional Lawyer"
									className="cursor-pointer"
								>
									Constitutional Lawyer
								</option>
								<option value="Entertainment Lawyer" className="cursor-pointer">
									Entertainment Lawyer
								</option>
							</StyledSelect>
							{/* <img src={MenuIcon} alt="" /> */}
						</div>
					</div>
				</section>
				<section className="jobs-grid place-items-center grid lg:grid-cols-3  grid-cols-1 gap-4">
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
							to="/carrer-pg-3"
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
						<h2 className="text-2xl font-bold mt-10">ESTATE PLANNING LAWYER</h2>
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

					<StyledDivContainer>
						<h2 className="text-2xl font-bold mt-10">
							CRIMINAL DEFENSE LAWYER
						</h2>
						<div className=" flex flex-col mt-3">
							<h4>
								We are currently looking for a with CRIMINAL DEFENSE LAWYER vast
								experience
							</h4>
						</div>
						<div className="flex gap-2 mt-5">
							<img src={Map} alt="" className="w-full" />
							<h5 className="mx-2 font-bold">Remote</h5>
						</div>

						<Link
							className="my-5"
							to="/job5"
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

					<StyledDivContainer>
						<h2 className="text-2xl font-bold mt-10">
							EMPLOYMENT AND LABOR LAWYER
						</h2>
						<div className=" flex flex-col mt-3">
							<h4>
								We are currently looking for a with EMPLOYMENT AND LABOR LAWYER
								vast experience
							</h4>
						</div>
						<div className="flex gap-2 mt-5">
							<img src={Map} alt="" className="w-full" />
							<h5 className="mx-2 font-bold">Remote</h5>
						</div>

						<Link
							className="my-5"
							to="/job6"
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

					<StyledDivContainer>
						<h2 className="text-2xl font-bold mt-12">CONSTITUTION LAWYER</h2>

						<div className=" flex flex-col mt-5 leading-7">
							<h4>
								We are currently looking for a with CONSTITUTION LAWYER vast
								experience
							</h4>
						</div>
						<div className="flex gap-2 mt-8">
							<img src={Map} alt="" className="w-full" />
							<h5 className="mx-2 font-bold">Remote</h5>
						</div>

						<Link
							className="my-5"
							to="/job7"
							onClick={() => {
								window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
							}}
						>
							<StyledButton
								outlined
								className=" flex items-center mt-4 justify-center"
							>
								Apply now
								<img src={Arrow} alt="" className="mx-2" />
							</StyledButton>
						</Link>
					</StyledDivContainer>

					<StyledDivContainer>
						<h2 className="text-2xl font-bold mt-12">BANKRUPTCY LAWYER</h2>

						<div className=" flex flex-col mt-5 leading-7">
							<h4>
								We are currently looking for a with BANKRUPTCY LAWYER vast
								experience
							</h4>
						</div>
						<div className="flex gap-2 mt-8">
							<img src={Map} alt="" className="w-full" />
							<h5 className="mx-2 font-bold">Remote</h5>
						</div>

						<Link
							className="my-5"
							to="/job8"
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
						<h2 className="text-2xl font-bold mt-12">FAMILY LAWYER</h2>

						<div className=" flex flex-col mt-5 leading-7">
							<h4>
								We are currently looking for a with FAMILY LAWYER vast
								experience
							</h4>
						</div>
						<div className="flex gap-2 mt-8">
							<img src={Map} alt="" className="w-full" />
							<h5 className="mx-2 font-bold">Remote</h5>
						</div>

						<Link
							className="my-5"
							to="/job9"
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
						<h2 className="text-2xl font-bold mt-12">TAX LAWYER</h2>

						<div className=" flex flex-col mt-5 leading-7">
							<h4>
								We are currently looking for a with TAX LAWYER vast experience
							</h4>
						</div>
						<div className="flex gap-2 mt-8">
							<img src={Map} alt="" className="w-full" />
							<h5 className="mx-2 font-bold">Remote</h5>
						</div>

						<Link
							className="my-5"
							to="/job10"
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
						<h2 className="text-2xl font-bold mt-10">PERSONAL INJURY LAWYER</h2>
						<div className=" flex flex-col mt-2 leading-7">
							<h4>
								We are currently looking for a with PERSONAL INJURY LAWYER vast
								experience
							</h4>
						</div>
						<div className="flex gap-2 mt-3">
							<img src={Map} alt="" className="w-full" />
							<h5 className="mx-2 font-bold">Remote</h5>
						</div>

						<Link
							className="my-5"
							to="/job11"
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

					<StyledDivContainer>
						<h2 className="text-2xl font-bold mt-10">ENTERTAINMENT LAWYER</h2>

						<div className=" flex flex-col mt-8 leading-7">
							<h4>
								We are currently looking for a with ENTERTAINMENT LAWYER vast
								experience
							</h4>
						</div>
						<div className="flex gap-2 mt-8">
							<img src={Map} alt="" className="w-full" />
							<h5 className="mx-2 font-bold">Remote</h5>
						</div>

						<Link
							className="my-5"
							to="/job4"
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

					<StyledDivContainer>
						<h2 className="text-2xl font-bold mt-10">
							INTELLECTUAL INJURY LAWYER
						</h2>
						<div className=" flex flex-col mt-3">
							<h4>
								We are currently looking for a with INTELLECTUAL INJURY LAWYER
								vast experience
							</h4>
						</div>
						<div className="flex gap-2 mt-5">
							<img src={Map} alt="" className="w-full" />
							<h5 className="mx-2 font-bold">Remote</h5>
						</div>

						<Link
							className="my-5"
							to="/job12"
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
				</section>
				<section className=" mt-11 block lg:hidden">
					<div className="flex items-center justify-center">
						<Link
							className="my-5"
							to="#"
							onClick={() => {
								window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
							}}
						>
							<StyledButton outlined className="mx-3">
								Show all
							</StyledButton>
						</Link>
					</div>
				</section>
			</div>
			<Modal />
		</PageLayout>
	);
}

export default Carrerpg2;
