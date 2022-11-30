/** @format */

import React from 'react';
import Arrow from '../../assets/images/arrow-left.png';
import Map from '../../assets/images/map.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../components/Styles/Body/Button.styled';
import PageLayout from '../../layout/PageLayout';

const StyledH2 = styled.h2`
	font-size: 1.6rem;
	color: #233ba9;
	padding: 18px 0;
`;
function Carrerpg3() {
	return (
		<PageLayout>
		<section className="p-8">
			<Link
				className="flex my-12 "
				to="/carrer-pg-2"
				onClick={() => {
					window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
				}}
			>
				<img src={Arrow} alt="" />
				<h3 className="mx-3"> Back to all openeings</h3>
			</Link>
			<section className="my-5">
				<h1 className="text-3xl">Junior UX Designer</h1>
				<div className="flex py-3">
					<img src={Map} alt="" />
					<h3>Remote</h3>
				</div>
				<div className="py-12">
					<StyledH2 className="font-semibold">Hiring Process</StyledH2>
					<h4 className="max-w-4xl">
						We are looking for people who are passionate about the relentless
						pursuit of perfection; people who are never satisfied, who want to
						change the world and make it into their own image, who want to leave
						a mark; people who want to join an exceptional and extraordinary
						team of individuals creating great products and having an impact on
						millions of lives across Africa and the world at large; people who
						are either exceptionally gifted at what they do or want to grow to
						become exceptionally gifted at what they do.
					</h4>
				</div>
				<div>
					<StyledH2 className="font-semibold">Requirements</StyledH2>
					<h4 className="py-4">
						Here is what we look for when reviewing CVs & Portfolio's to
						shortlist candidates for interviews:
					</h4>
					<ul className="py-6 list-disc mx-12">
						<li>A good looking Portfolio</li>
						<li>Relevant experience in the role you are applying for</li>
						<li>Volunteer experience</li>
						<li>Relevant industry experience</li>
						<li>High IQ and EQ</li>
					</ul>
				</div>
				<h3 className="py-7">
					Cash compensation range:{' '}
					<span className="font-bold">150000-200000 USD Annually</span>
				</h3>
				<StyledButton className="my-8">Send us your CV/ Portfolio</StyledButton>
			</section>
		</section>
		</PageLayout>
	);
}

export default Carrerpg3;
