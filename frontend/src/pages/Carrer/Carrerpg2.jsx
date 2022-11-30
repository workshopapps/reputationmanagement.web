/** @format */

import React from 'react';
import JobProps from './JobProps';
import {
	StyledButton,
	// StyledTextButton,
} from '../../components/Styles/Body/Button.styled';
import SearchIcon from '../../assets/images/Search.png';
import MenuIcon from '../../assets/images/menu.png';
import styled from 'styled-components';
import PageLayout from '../../layout/PageLayout';

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

function Carrerpg2() {
	return (
		<PageLayout>
		<div>
			<StyledBackGround className="flex flex-col text-white items-center justify-center p-4">
				<h1 className="text-3xl">All Open Positions</h1>
				<h5 className="text-center w-3/5 mt-4 py-4">
					If you see a position that makes your heart skip a beat, please apply.
					Come join us and help us build a global company to which we can be all
					proud of.
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
							className="cursor-pointer px-2 py-3 hidden lg:block"
						>
							<option value="" selected className="cursor-pointer">
								Filter
							</option>
							<option value="Design" className="cursor-pointer">
								Design
							</option>
							<option value="Engineer" className="cursor-pointer">
								Engineer
							</option>
							<option value="Development" className="cursor-pointer">
								Development
							</option>
							<option value="Marketing" className="cursor-pointer">
								Marketing
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
							<StyledButton outlined className="mx-3">
								Show all
							</StyledButton>
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
							<option value="Design" className="cursor-pointer">
								Design
							</option>
							<option value="Engineer" className="cursor-pointer">
								Engineer
							</option>
							<option value="Development" className="cursor-pointer">
								Development
							</option>
							<option value="Marketing" className="cursor-pointer">
								Marketing
							</option>
						</StyledSelect>
						{/* <img src={MenuIcon} alt="" /> */}
					</div>
				</div>
			</section>
			<section className="jobs-grid place-items-center grid lg:grid-cols-3  grid-cols-1 gap-4">
				<JobProps title={'Software Engineer'} />
				<JobProps title={'Junior UX Designer'} />
				<JobProps title={'Senior UX Designer'} />
				<JobProps title={'Backend Developer'} />
				<JobProps title={'Full Stack Developer'} />
				<JobProps title={'Front-end Developer'} />
				<JobProps title={'Marketing Expert'} />
				<JobProps title={'Graphics Designer'} />
				<JobProps title={'Product Manager'} />
				<JobProps title={'Hardware Engineer'} />
				<JobProps title={'Sales Manager'} />
				<JobProps title={'System Manager'} />
			</section>
			<section className=" mt-11 block lg:hidden">
				<div className="flex items-center justify-center">
					<StyledButton outlined className="mx-3">
						Show all
					</StyledButton>
				</div>
			</section>
		</div>
		</PageLayout>
	);
}

export default Carrerpg2;
