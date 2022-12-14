/** @format */

import React, { useState, useEffect } from 'react';
// import {
// 	StyledButton,
// 	// StyledTextButton,
// } from '../../components/Styles/Body/Button.styled';
import SearchIcon from '../../assets/images/Search.png';
import styled from 'styled-components';
import PageLayout from '../../layout/PageLayout';
import Modal from './Modal';
// import { Link } from 'react-router-dom';
import OpeningTemplate from './template/OpeningTemplate';
import data from './template/Data';

function Carrerpg2({ DescriptionProps }) {
	const [openings, setOpenings] = useState(data);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		if (searchTerm === '') {
			setOpenings(data);
		} else {
			const bla = data.filter((open) =>
				open.title.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setOpenings(bla);
		}
	}, [searchTerm]);

	const searchChange = (e) => {
		setSearchTerm(e.target.value);
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<PageLayout>
			<div>
				<StyledContainer>
					<StyledBackGround className="flex flex-col text-white items-center justify-center p-4">
						<h1 className="text-3xl">All Open Positions</h1>
						<h5 className="text-center w-3/5 mt-4 py-4">
							If you see a position that makes your heart skip a beat, please
							apply. Come join us and help us build a global company to which we
							can be all proud of.
						</h5>
					</StyledBackGround>

					{/* <section className="flex flex-row mt-8 justify-center items-center "> */}
					{/* <StyledBox className="search-box flex justify-between p-3 px-4 mr-5 md:mr-0 w-full md:w-3/5 lg:w-3/5 scale-75 md:scale-100"> */}
					{/* <div className="flex justify-center items-center ">
								<img src={SearchIcon} alt="" />
								<input
									onChange={searchChange}
									value={searchTerm}
									type="text"
									placeholder="Search job openings"
									className="border-0 outline-0 p-3"
								/>
							</div> */}
					<div className="flex">
						{/* <StyledSelect
									name="filter-jobs"
									id="select"
									className="cursor-pointer px-5 py-3 hidden lg:block"
								>
									<option value="" className="cursor-pointer">
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
									<option
										value="EstatePlanningLawyer"
										className="cursor-pointer"
									>
										Estate Planning Lawyer
									</option>
								</StyledSelect> */}

						{/* <StyledButton className="mx-0 mr-16 md:mx-3 md:mr-0">
                                Search
                            </StyledButton> */}
					</div>
					{/* </StyledBox> */}

					{/* </section> */}

					{/* search bar  */}

					<CenterSearch>
						<SearchInput>
							<img src={SearchIcon} alt="" />
							<input
								onChange={searchChange}
								value={searchTerm}
								type="text"
								placeholder="Search job openings"
							/>
						</SearchInput>
					</CenterSearch>

					{/* search bar  */}

					<section className="my-11 px-12">
						<div className="lg:flex block justify-between items-center">
							{/* <h2 className="font-bold text-xl">Open Roles</h2> */}
							{/* <div className="hidden lg:block">
								<div className="flex items-center justify-center ">
									<h3 className="text-slate-400">Showing 12 of 12</h3>
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
							</div> */}

							{/* <div className="block lg:hidden"> */}
							{/* <StyledSelect
									name="filter-jobs"
									id="select"
									className="cursor-pointer px-1 py-3 lg:hidden"
								>
									<option value="" className="cursor-pointer">
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
									<option
										value="EstatePlanningLawyer"
										className="cursor-pointer"
									>
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
									<option
										value="Entertainment Lawyer"
										className="cursor-pointer"
									>
										Entertainment Lawyer
									</option>
								</StyledSelect> */}
							{/* <img src={MenuIcon} alt="" /> */}
							{/* </div> */}
						</div>
					</section>
					<StyledH2>OPEN ROLES</StyledH2>
					<StyledGrid>
						<OpeningTemplate openings={openings} searchTerm={searchTerm} />
					</StyledGrid>
				</StyledContainer>

				{/* <section className=" mt-11 block lg:hidden">
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
				</section> */}
			</div>
			<Modal />
		</PageLayout>
	);
}

// Styling

const StyledH2 = styled.h2`
	font-size: 1.5rem;
	font-weight: 600;
	text-align: center;
	margin-bottom: 20px;
`;

const SearchInput = styled.div`
	margin-top: 30px;
	display: flex;
	align-items: center;
	border: 1px #d2d3d4 solid;
	border-radius: 8px;
	padding: 0 20px;
	width: 100%;

	input {
		border: none;
		border-radius: 8px;
		padding: 15px 10px;
		min-width: 98%;
	}
	input:focus {
		outline: none;
	}

	@media screen and (min-width: 768px) {
		width: 75%;
	}
`;

const CenterSearch = styled.div`
	display: flex;
	justify-content: center;
`;

const StyledContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;

	@media screen and (max-width: 1238px) {
		margin: 0 20px;
	}
`;

const StyledGrid = styled.div`
	min-width: 100%;
	display: grid;
	-moz-column-gap: 20px;
	column-gap: 20px;
	row-gap: 20px;
	grid-template-columns: 1fr 1fr 1fr;
	margin-bottom: 50px;

	@media screen and (max-width: 894px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 750px) {
		grid-template-columns: 1fr;
	}
`;

const StyledBackGround = styled.section`
	background: #233ba9;
	border-radius: 8px;
	margin-top: 10px;
`;

// const StyledBox = styled.div`
// 	background: #ffffff;

// 	border: 1px solid #d2d3d4;
// 	border-radius: 4px;
// `;
// const StyledSelect = styled.select`
// 	border: 1px solid #d4d4d4;
// 	border-radius: 4px;
// `;

export default Carrerpg2;
