import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { StyledButton } from '../../components/Styles/Body/Button.styled';
import PageLayout from '../../layout/PageLayout';
import { availableJobs } from './jobData';
import Map from '../../assets/images/map.png';
// import { GrLocation } from 'react-icons/gr';
// import { BiArrowBack } from 'react-icons/bi';
import Arrow from '../../assets/images/arrow-right.png';

import Modal from './Modal';
import { useCallback } from 'react';

const StyledH2 = styled.h2`
	font-size: 1.6rem;
	color: #233ba9;
	padding: 18px 0;
`;
function Carrerpg3() {
	const [openModal, setOpenModal] = useState(false);
	const [jobDetails, setJobDetails] = useState([]);
	const { id } = useParams();
	const getJobDetails = useCallback(() => {
		const result = availableJobs.find((availble) => availble.id === id);
		setJobDetails(result);
	}, [id]);
	useEffect(() => {
		getJobDetails();
	}, [getJobDetails]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<PageLayout>
			<section className="p-8">
				<Link
					className="flex my-5 "
					to="/carrer-pg-2"
					onClick={() => {
						window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
					}}
				>
					<img src={Arrow} alt="" />
					<h3 className="mx-3"> Back to all openings</h3>
				</Link>
				<section className="my-5">
					<h1 className="text-3xl mt-10 font-bold">BUSINESS LAWYER</h1>
					<div className="flex gap-2 mt-10">
						<img src={Map} alt="" className="w-5 h-5" />
						<h3>Remote</h3>
					</div>
					<div className="py-8">
						<StyledH2 className="font-semibold">Hiring Process</StyledH2>
						<h4 className="max-w-4xl">{jobDetails.jobDescription}</h4>
					</div>
					<div>
						<StyledH2 className="font-semibold">Requirements</StyledH2>
						<h4 className="py-4">
							Here is what we look for when reviewing CVs & Portfolio's to
							shortlist candidates for interviews:
						</h4>
						<ul className="py-6 list-disc mx-12">
							<li>Relevant experience in the role you are applying for</li>
							<li>Volunteer experience</li>
							<li>Relevant industry experience</li>
							<li>High IQ and EQ</li>
						</ul>
					</div>
					<h3 className="py-7">
						Cash compensation range
						<span className="font-bold">150000-200000 USD Annually</span>
					</h3>
					<StyledButton onClick={() => setOpenModal(true)} className="my-8">
						Send us your CV/ Portfolio
					</StyledButton>
					<Modal open={openModal} onClose={() => setOpenModal(false)} />
				</section>
			</section>
		</PageLayout>
	);
}

export default Carrerpg3;
