
import React from "react";
import Vector from '../../assets/Vector.png';
import { Link } from 'react-router-dom';

const  Successfulmodal = ({ open, onClose }) => {
    if (!open) return null;
    return (
			<div className="relative">
				<div className="bg-[#7c7979] z-10 fixed bg-opacity-60 inset-0 flex flex-col justify-center items-center w-full h-full mx-auto ">
					<div className="lg:w-[55%] w-[80%] absolute rounded-md top-[20%] z-50 lg:left-[25%] left-[10%] bg-white">
						<div className="flex justify-between font-bold p-5">
							<h1>APPLICATION SENT</h1>
							<button onClick={onClose}>X</button>
						</div>
						<div className="flex flex-col text-center">
							<center>
								<img src={Vector} alt="" className="mb-10 w-20" />
							</center>
							<h1 className="text-[#2B2C34] lg:text-4xl text-2xl leading-9 mb-10">
								Application Sent!
							</h1>
							<h4 className="text-[#2B2C34] lg:text-xl text-base leading-8 mb-10">
								Congratulations, we have recieved your application
								<br /> for a position in REPUTE as a LAWYER. You will be notified by email with
								<br />
								any update about your application.
								<br />
							</h4>
						</div>
						<div className="flex justify-center pb-5">
							<button className="px-5 py-3 bg-[#233BA9] text-white">
								<Link
									className="flex "
									to="/"
									onClick={() => {
										window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
									}}
								>
									Home Page
								</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
}
export default Successfulmodal;