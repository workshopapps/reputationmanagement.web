import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import arr from './assets/arrow-right.svg';
export const DetailsDispute = () => {
	const [dispute, setDispute] = useState({});
	const location = useLocation();
	const Id = new URLSearchParams(location.search).get('requestId');
	const router = useNavigate();

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
			<section className="flex flex-col md:flex-row gap-5 md:gap-0 py-4 px-10 ">
				<main className="md:w-3/5 flex flex-col gap-5 ">
					<h1 className="text-xl font-semibold leading">
						Dispute Case for ContractID23140285
					</h1>
					<div className="flex justify-between gap-6  md:gap-20 ">
						<div>
							<ul>
								<li className="font-medium">Undefined:</li>
								<li className="font-medium">Amount:</li>
								<li className="font-medium">Dispute:</li>
								<li className="font-medium">Comment:</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>Undefined</li>
								<li>200</li>
								<li>15-7-22</li>
								<li>Name: Raya Enterprises </li>
								<li>Dispute ID: 2270212 </li>
								<li>Email: rayaenterprises.ng</li>
								<li>website: www.rayaenterprises.com </li>
								<li>Phone No: 070456780 </li>
								<li>Business Type: Gadgets </li>
								<li>
									Description: Raya enterprise is a world famous brand in
									production of gadgets. Raya is a world famous brand in
									production of gadgets Raya enterprise is world famous brand in
									production of gadgets Raya enterprise is a world famous brand
									in production of gadgets. Raya enterprise is a world famous
									brand in production of gadgets.{' '}
								</li>
							</ul>
						</div>
					</div>
				</main>
				<aside className="flex flex-col gap-4 items-center md:items-end w-full md:w-2/5">
					<button
						className="text-white bg-[#233BA9] px-4 w-full max-w-[350px] md:w-fit md:max-w-full py-2 rounded "
						onClick={() => router(`/lawyer-disputes`)}
					>
						Accept Dispute
					</button>
					<button
						className="text-[#4560D9] border px-4 py-2 w-full max-w-[350px] md:max-w-full md:w-fit hover:bg-red-600 hover:text-white hover:border-0 rounded border-[#4560D9]"
						onClick={() => router(`/lawyer-disputes`)}
					>
						Reject Dispute
					</button>
				</aside>
			</section>
		</div>
	);
};
