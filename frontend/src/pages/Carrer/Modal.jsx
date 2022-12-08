/** @format */
 
import React, { useState } from 'react';
import Successfulmodal from './Successfulmodal';
import styled from 'styled-components';
import axios from 'axios';
// import Api from '../../api/axios';

const StyledSelect = styled.select`
	border: 1px solid #d4d4d4;
	border-radius: 4px;
	defaultvalue: '';
`;

const Modal = ({ open, onClose }) => {
	
	// const [firstName, setFirstName] = useState('');
	// const [email, setEmail] = useState('');
	// const [lastName, setLastName] = useState('');
	// const [phoneNo, setPhoneNo] = useState('');
	// const [position, setPositions] = useState('');
	// const [reasons, setReasons] = useState('');
	// const [resume, setResume] = useState('');
	// const [coverLetter, setCoverLetter] = useState('');

	// const handleFirstName = (e) => {
	// 	setFirstName(e.target.value);
	// };

	// const handleLastName = (e) => {
	// 	setLastName(e.target.value);
	// };

	// const handleEmail = (e) => {
	// 	setEmail(e.target.value);
	// };

	// const handlePhoneNo = (e) => {
	// 	setPhoneNo(e.target.value);
	// };

	// const handlePosition = (e) => {
	// 	setPositions(e.target.value);
	// };

	// const handleReasons = (e) => {
	// 	setReasons(e.target.value);
	// };

	// const handleResume = (e) => {
	// 	setResume(e.target.files[0]);
	// };

	// const handleCoverLetter = (e) => {
	// 	setCoverLetter(e.target.files[0]);
	// };

	const [openModal, setOpenModal] = useState(false);

	
	if (!open) return null;

	// const SubmitForm = async (e) => {
	// 	e.preventDefault();
		
		
	// 	try{
	// 		const response = await Api.post("/apply", {
	// 			FIrstName: firstName,
	// 			LastName: lastName,
	// 			PhoneNumber: phoneNo,
	// 			Position: position,
	// 			Reason: reasons,
	// 			Resume: resume,
	// 			CoverLetter: coverLetter,
	// 		})
	// 		console.log(response)
	// 		setOpenModal(true)

	// 	} catch (err) {
			// alert('APPLICATION FAILED, PLEASE TRY AGAIN');
	// 	}	
	// };

	
	const SubmitForm = (e) => {
		e.preventDefault();


		const form = e.currentTarget.closest('form')
		const url = form.action
		const data = new FormData(form)
		

		try {

			axios.post(url, data, {
				headers: {
					'Content-Type': "multipart/form-data"
				}
			}).then(response => {
				console.log(response);
				setOpenModal(true)
			})
			
		} catch (err) {
			alert('APPLICATION FAILED, PLEASE TRY AGAIN');
		}
	}
	return (
		<>
			<div className="relative lg:overflow-hidden">
				<div className="bg-[#7c7979] z-10 fixed bg-opacity-60 inset-0 flex flex-col justify-center items-center w-full h-full mx-auto ">
					<div className="bg-white rounded-lg lg:max-w-[720px] w-full  p-5 lg:fixed  overflow-scroll lg:overflow-hidden">
						<div className="font-semibold lg:text-2xl text-base leading-9 text-[#2B2C34] flex justify-between -mt-1 mb-5">
							<h2>APPLY FOR THIS JOB</h2>
							<button onClick={onClose}>X</button>
						</div>

						<form
							onSubmit={SubmitForm}
							method="post"
							encType="multipart/form-data"
							action="https://api.repute.hng.tech/api/apply"
						>
							<div className="lg:flex lg:gap-10 lg:mt-3 mt-5">
								<div className="flex flex-col w-full ">
									<label className="font-semibold lg:text-base text-sm leading-6">
										First Name
									</label>
									<input
										type="text"
										id="firstName"
										name="FirstName"
										// value={firstName}
										// onChange={handleFirstName}
										placeholder="First name"
										required
										className="w-full lg:h-10 h-5 rounded-lg p-5 border-2 focus:outline-[#84CAFF] border-[#D2D3D4]"
									/>
								</div>
								<div className="flex flex-col w-full mt-5 lg:mt-0">
									<label className="font-semibold lg:text-base text-sm leading-6">
										Last Name
									</label>
									<input
										type="text"
										id="lastName"
										name="LastName"
										// value={lastName}
										// onChange={handleLastName}
										placeholder="Last name"
										required
										className="w-full lg:h-10 h-5 rounded-lg p-5 border-2 border-[#D2D3D4] focus:outline-[#84CAFF]"
									/>
								</div>
							</div>
							<div className="lg:flex lg:gap-10 lg:mt-5 mt-5">
								<div className="flex flex-col w-full">
									<label className="font-semibold lg:text-base text-sm leading-6">
										Email
									</label>
									<input
										type="text"
										id="email"
										name="Email"
										// value={email}
										// onChange={handleEmail}
										placeholder="Email"
										required
										className="w-full lg:h-10 h-5 rounded-lg p-5 border-2 border-[#D2D3D4] focus:outline-[#84CAFF]"
									/>
								</div>
								<div className="flex flex-col w-full mt-5 lg:mt-0">
									<label className="font-semibold lg:text-base text-sm leading-6">
										Phone No
									</label>
									<input
										type="tel"
										id="phoneNo"
										name="PhoneNumber"
										// value={phoneNo}
										// onChange={handlePhoneNo}
										placeholder="Phone No"
										required
										className="w-full lg:h-10 h-5 rounded-lg p-5 border-2 border-[#D2D3D4] focus:outline-[#84CAFF]"
									/>
								</div>
							</div>
							<div className="lg:mt-7 mt-6">
								<label className="font-semibold pr-5 lg:text-base text-sm leading-6 pt-5">
									Position
								</label>
								<StyledSelect
									id="select"
									name="Position"
									// defaultValue={position}
									required
									className="cursor-pointer px-1 py-2 pr-2 rounded-xl border-2 border-[#D2D3D4] focus:outline-[#84CAFF]"
									// onChange={handlePosition}
								>
									<option value="" className="cursor-pointer" disabled>
										positions
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
								</StyledSelect>
							</div>

							<div className="lg:mt-5 mt-5">
								<label className="font-semibold lg:text-base text-sm leading-6">
									Why would you be a good fit?
								</label>
								<input
									type="text"
									id="reasons"
									name="Reason"
									// value={reasons}
									// onChange={handleReasons}
									className="w-full lg:h-12 h-10 rounded-lg border-2 border-[#D2D3D4] focus:outline-[#84CAFF]"
								/>
							</div>

							<div>
								<div className="lg:flex lg:gap-10 lg:mt-3 mt-5 relative">
									<div className="flex flex-col w-full mt-5">
										<label
											className="font-bold text-base leading-6 text-[#FF8017]
"
										>
											ATTACH RESUME
										</label>
										<div
											className="w-full lg:h-16 h-14 rounded-lg p-5
											border-2 border-[#D2D3D4] focus:outline-[#84CAFF]"
										></div>
										<input
											type="file"
											name="Resume"
											// onChange={handleResume}
											required
											className="text-[#4D5154] text-xs leading-4  absolute lg:top-[78%] top-[24%] rounded-md p-2 ml-5 lg:-mt-4"
										/>
									</div>
									<div className="flex flex-col w-full mt-5">
										<label
											className="font-bold text-base leading-6 text-[#FF8017]
"
										>
											ATTACH COVER LETTER
										</label>
										<div className="w-full lg:h-16 h-14  rounded-lg p-5 border-2 border-[#D2D3D4] focus:outline-[#84CAFF]">
											<input
												type="file"
												name="CoverLetter"
												// onChange={handleCoverLetter}
												className=" text-[#4D5154] text-xs leading-4 absolute lg:top-[78%] top-[73%]  rounded-md p-2 lg:-mt-4"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex justify-center mt-7">
								<button className="bg-[#233BA9] text-white font-semibold lg:text-lg text-base leading-7 px-10 py-3 rounded-md">
									Submit Application
								</button>
							</div>
							<Successfulmodal
								open={openModal}
								onClose={() => setOpenModal(false)}
							/>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default Modal;
