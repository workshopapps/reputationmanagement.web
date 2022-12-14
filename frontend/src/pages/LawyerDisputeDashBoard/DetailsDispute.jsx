import React, { useState, useEffect } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

import { useLocation, useNavigate } from 'react-router-dom';
import arr from './assets/arrow-right.svg';
export const DetailsDispute = () => {
	const [dispute, setDispute] = useState({});
	const location = useLocation();
	const Id = new URLSearchParams(location.search).get('requestId');
	const router = useNavigate();
	const ApiPrivate = useAxiosPrivate();
	const {
		status,
		badReviewerEmail,
		complaint,
		complaintMessage,
		businessEntityName,
	} = dispute;
	const hideClass = status === 0;
	const busname = businessEntityName === '';
	async function getDisputes() {
		try {
			const response = await ApiPrivate.get(`api/disputes/${Id}`);
			setDispute(response?.data);
			console.log(response?.data);
		} catch (err) {
			if (err?.response?.status) {
			}
			console.log(err);
		}
	}

	useEffect(() => {
		getDisputes();
	}, []);

	const changeStatus = async () => {
		try {
			const response = await ApiPrivate.put(`/api/disputes/lawyer/${Id}`, [
				{
					status: 1,
				},
			]);
			if (response) {
				router('/lawyer-disputes');
			}
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	console.log(Id);
	return (
		<div>
			<header className="bg-[#F9F8FD]">
				<span
					className=" flex gap-2 py-5 pl-10 cursor-pointer w-fit  "
					onClick={() => router(`/lawyer-disputes`)}
				>
					<img src={arr} alt="arrowright" />
					<p className="text-lg ">Back to My Disputes</p>
				</span>
			</header>
			<section className="flex flex-col md:flex-row gap-5 md:gap-0 py-10 px-10 ">
				<main className="md:w-3/5 flex flex-col gap-10 ">
					<h1 className="text-2xl font-semibold leading">
						Dispute Case for Contract{Id}
					</h1>
					<div className="flex w-full ">
						<div className="w-full flex">
							<ul className="w-4/5 flex flex-col gap-5">
								<li className="font-medium flex  ">
									<span className="text-xl">Email: </span>
								</li>

								<li className="font-medium flex ">
									<span className="text-xl">Complaint: </span>
								</li>
								<li className="font-medium flex ">
									<span className="text-xl">Complaint Message: </span>
								</li>

								{!busname ? (
									<li className="font-medium">
										<span className="text-xl">Business Name </span>
									</li>
								) : null}
							</ul>

							<ul className="w-4/5 flex flex-col gap-5">
								<span className="text-lg font-[400] "> {badReviewerEmail}</span>

								<span className="text-lg font-[400] ">{complaint}</span>

								<span className="font-[400] text-lg">{complaintMessage}</span>

								{!busname ? <span> {businessEntityName} </span> : null}
							</ul>
						</div>
					</div>
				</main>
				<aside className="flex flex-col gap-4 items-center md:items-end w-full md:w-2/5">
					<button
						className={`text-white bg-[#233BA9] ${
							hideClass ? 'flex' : 'hidden'
						} px-4 w-full max-w-[350px] md:w-fit md:max-w-full py-2 rounded`}
						onClick={changeStatus}
					>
						Resolve Dispute
					</button>
					<button
						className={`text-[#4560D9] border px-5 py-2 w-full ${
							hideClass ? 'flex' : 'hidden'
						} max-w-[350px] md:max-w-full md:w-fit hover:bg-red-600 hover:text-white hover:border-0 rounded border-[#4560D9]`}
						onClick={() => router(`/lawyer-disputes`)}
					>
						Reject Dispute
					</button>
					<h2
						className={`${
							hideClass ? 'hidden' : 'flex'
						} text-xl text-blue-400 self-start mt-5`}
					>
						{' '}
						This Dispute has been resolved.
					</h2>
				</aside>
			</section>
		</div>
	);
};
