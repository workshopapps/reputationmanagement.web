/** @format */
import React, { useState, useEffect } from 'react';
import {
	StyledButton,
	// StyledTextButton,
} from '../../components/Styles/Body/Button.styled';
import SearchIcon from '../../assets/images/Search.png';
import styled from 'styled-components';
import PageLayout from '../../layout/PageLayout';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import OpeningTemplate from './template/OpeningTemplate';
import data from './template/Data';

function Carrerpg2({ DescriptionProps }) {
	const [opens, setOpens] = useState(data);
	const [openings, setOpenings] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [filterTerm, setFilterTerm] = useState('');
	useEffect(() => {
		if (searchTerm === '') {
			setOpenings(opens);
		}
	}, [searchTerm]);

	const handleSearch = () => {
		if (searchTerm === '') {
			setOpenings(opens);
		} else {
			const keySearch = data.filter((open) =>
				open.title.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setOpenings(keySearch);
		}
	};
	const searchChange = (e) => {
		setSearchTerm(e.target.value);
	};
	const handleSelectChange = (e) => {
		console.log('real', e.target.value);
		setFilterTerm(e.target.value);
		filterOpening(e.target.value);
		if (e.target.value === '') {
			setOpenings(opens);
		}
	};
	const filterOpening = (term) => {
		const filteredJobs = opens.filter((open) => open.title === term);
		setOpenings(filteredJobs);
		console.log(filteredJobs);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<PageLayout>
			<div className="lg:px-8 overflow-hidden w-full md:w-[90%] lg:w-[95%] mx-auto">
				<StyledContainer>
					<StyledBackGround className="flex w-full  flex-col text-white items-center justify-center py-8 px-4">
						<h1 className="text-3xl text-center">All Open Positions</h1>
						<h5 className="text-center w-full md:w-3/5 mt-4 py-4">
							If you see a position that makes your heart skip a beat, please
							apply. Come join us and help us build a global company to which we
							can be all proud of.
						</h5>
					</StyledBackGround>

					{/* search bar  */}
					<section className="flex flex-row mt-8 justify-center  items-center ">
						<StyledBox className="search-box flex justify-between px-2 py-1 md:p-3 md:px-4 md:gap-5  md:mr-0  w-full md:w-4/5    md:scale-100">
							<div className="flex justify-center items-center w-full">
								<img src={SearchIcon} alt="" />
								<input
									onChange={searchChange}
									value={searchTerm}
									type="text"
									placeholder="Search job openings"
									className="border-0 outline-0 p-3 w-full"
									disabled={filterTerm === '' ? false : true}
									data-testid="search"
								/>
							</div>
							<div className="flex  ">
								<StyledSelect
									name="filter-jobs"
									id="select"
									className="cursor-pointer px-5 py-3 hidden lg:block"
									onChange={handleSelectChange}
									disabled={searchTerm !== '' ? true : false}
									data-testid="filter1"
								>
									<option value="" className="cursor-pointer">
										Filter
									</option>
									<option className="cursor-pointer">Software Engineer</option>
									<option className="cursor-pointer">Junior UX Designer</option>
									<option className="cursor-pointer">Senior UX Designer</option>
									<option className="cursor-pointer">Marketing Expert</option>
									<option className="cursor-pointer">Frontend Developer</option>
									<option className="cursor-pointer">Backend Developer</option>
								</StyledSelect>
								{/* <StyledButton className="mx-0 mr-16 md:mx-3 md:mr-0">
                                Search
                            </StyledButton> */}
							</div>

							<DeskSearch className="justify-center items-center w-2/5">
								<button
									onClick={handleSearch}
									className="bg-[#233ba9] rounded-md text-white py-4 px-2 w-full"
								>
									Search
								</button>
							</DeskSearch>
						</StyledBox>
					</section>
					{/* search bar  */}
					<MobSearch className="flex justify-center pt-5 items-center ">
						<button
							onClick={handleSearch}
							className="bg-[#233ba9] rounded-md text-white py-2 px-1 w-full"
						>
							Search
						</button>
					</MobSearch>

					<section className=" my-3 md:my-5">
						<div className="lg:flex block justify-between px-3 w-full md:ml-[5%]   lg:ml-[0%] items-center">
							<h2 className="font-bold text-sm md:text-xl">
								Browse Open Positions
							</h2>
							<div className="hidden lg:flex">
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

							<MobFilter className="block md:w-2/5   lg:hidden">
								<StyledSelect
									name="filter-jobs"
									id="select"
									className="cursor-pointer px-1 py-3 w-full lg:hidden"
									onChange={handleSelectChange}
									disabled={searchTerm !== '' ? true : false}
									data-testid="filter2"
								>
									<option value="" className="cursor-pointer">
										Filter
									</option>
									<option className="cursor-pointer">SoftWare Engineer</option>
									<option className="cursor-pointer">Junior UX Designer</option>
									<option className="cursor-pointer">Senior UX Designer</option>
									<option className="cursor-pointer">Frontend Developer</option>
									<option className="cursor-pointer">Backend Developer</option>
									<option className="cursor-pointer">Marketing Expert</option>
								</StyledSelect>
								{/* <img src={MenuIcon} alt="" /> */}
							</MobFilter>
						</div>
					</section>

					<StyledGrid>
						<OpeningTemplate openings={openings} searchTerm={searchTerm} />
					</StyledGrid>
				</StyledContainer>

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

// Styling

const StyledContainer = styled.div`
	max-width: 1240px;
	margin: 0 auto;

	@media screen and (max-width: 1280px) {
		padding: 0 20px;
	}
`;
const MobSearch = styled.div`
	@media screen and (max-width: 550px) {
		display: flex;
		max-width: 450px;
		margin: auto;
	}
	@media screen and (min-width: 550px) {
		display: none;
	}
`;
const DeskSearch = styled.div`
	@media screen and (max-width: 550px) {
		display: none;
	}

	@media screen and (min-width: 550px) {
		display: flex;
	}
`
const MobFilter = styled.div`
	@media screen and (max-width: 550px) {
		display: flex;
		max-width: 400px;
		margin: auto;
	}
	@media screen and (min-width: 550px) {
		width: 40%;
	}

`
const StyledGrid = styled.div`
	display: grid;
	-moz-column-gap: 16px;
	column-gap: 16px;
	row-gap: 38px;
	grid-template-columns: 1fr 1fr 1fr;
	margin-bottom: 50px;
	margin-top: 50px;
	width: 100%;
	justify-items: center;
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
	margin-top: 30px;
`;

const StyledBox = styled.div`
	background: #ffffff;

	border: 1px solid #d2d3d4;
	border-radius: 4px;
	@media screen and (max-width: 550px) {
		max-width: 450px;
		margin: auto;
	}
`;
const StyledSelect = styled.select`
	border: 1px solid #d4d4d4;
	border-radius: 4px;
`;

export default Carrerpg2;
