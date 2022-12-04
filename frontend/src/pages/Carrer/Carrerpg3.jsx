import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { StyledButton } from '../../components/Styles/Body/Button.styled';
import PageLayout from '../../layout/PageLayout';
import { availableJobs } from './jobData';
import { GrLocation } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';

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
	},[ id ])
	useEffect(() => {
		getJobDetails();
	}, [ getJobDetails ]);

	return (
		<PageLayout>
			<section className="p-8">
				<Link
					className="flex items-center text-lg my-12 "
					to="/carrer-pg-2"
					onClick={() => {
						window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
					}}
				>
					<BiArrowBack className="text-lg" />
					<h3 className="mx-3"> Back to all openeings</h3>
				</Link>
				<section className="my-5">
					<h1 className="text-3xl">Junior UX Designer</h1>
					<div className="flex items-center mt-4">
						<GrLocation className="mr-2 text-lg" />
						<h3 className="text-lg">Remote</h3>
					</div>
					<div className="py-4">
						<StyledH2 className="font-semibold">Hiring Process</StyledH2>
						<h4 className="max-w-4xl">{jobDetails.jobDescription}</h4>
					</div>
					<div>
						<StyledH2 className="font-semibold">Requirements</StyledH2>
						<h4 className="py-4">
							Here is what we look for when reviewing CVs & Portfolio's to
							shortlist candidates for interviews:
						</h4>
						<ul className="py-6 list-disc mx-5">
							{jobDetails.jobRequirements?.map((requiremnt, i) => {
								return <li key={i}>{requiremnt}</li>;
							})}
						</ul>
					</div>
					<h3 className="py-7">
						Cash compensation range:{' '}
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
