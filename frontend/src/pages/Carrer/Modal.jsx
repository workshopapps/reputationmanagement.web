/** @format */

import React, { useState, useEffect } from "react";
import Successfulmodal from './Successfulmodal'
import styled from 'styled-components';
import axios from 'axios';


const StyledSelect = styled.select`
	border: 1px solid #d4d4d4;
	border-radius: 4px;
	defaultValue: "";
`;

const Modal = ({ open, onClose }) => {

	const [firstName, setFirstName] = useState('')
	const [email, setEmail] = useState('');
	const [lastName, setLastName] = useState('');
	const [phoneNo, setPhoneNo] = useState('');
	const [position, setPositions] = useState('');
	const [reasons, setReasons] = useState('');
	const [resume, setResume] = useState('');
	const [coverLetter, setCoverLetter] = useState('');
	

	const handleFirstName = (e) => {
		setFirstName(e.target.value)
	}

	const handleLastName = (e) => {
		setLastName(e.target.value);
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePhoneNo = (e) => { 
		setPhoneNo(e.target.value);
	};
	
	const handlePosition = (e) => { 
		setPositions(e.target.value);
	};
	
	const handleReasons = (e) => {
		setReasons(e.target.value);
	 };
	
	const handleResume = (e) => { 
		setResume(e.target.value);
	};
	
	const handleCoverLetter = (e) => {
		setCoverLetter(e.target.value);
	};


	const [openModal, setOpenModal] = useState(false);

	const initialValues = { first_name: "", last_name: "", email: "", phone_no: "", position: ""};

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    // const handleChange = (e) => {
    //     e.preventDefault()
    //     const { name, value } = e.target;
    //     setFormValues({...formValues, [name]: value});
        
    // }
 
    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(false);
    };

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            
        }
    },[formErrors, isSubmit])

 

	const validate = (values) => {
		const errors = {}
		// const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		if (!values.firstName) {
			errors.first_name = "Please enter first name!";
		}
		if (!values.lastName) {
			errors.last_name = "Please enter last name!";
		}
		if (!values.email) {
			errors.email = "Please enter email!";
		}
		if (!values.phone_no) {
			errors.phone_no = "Please enter Phone no!";
		}

		if (!values.position) {
			errors.position = "Please enter the position you are applying for!";
		}

		if (!values.reasons) {
			errors.reasons = 'Please enter your reasons!';
		}


		return errors;
	}

	if (!open) return null;


	const SubmitForm = (e) =>  {
		e.preventDefault()
		const form = e.currentTarget.closest("form")
		const url = 'https://api.repute.hng.tech/swagger/api/apply';
		const data = new FormData(form)


		axios.post(url, {
			FIrstName: data.get('firstName'),
			LastName: data.get('lastName'),
			PhoneNumber: data.get('PhoneNo'),
			Position: data.get('position'),
			Resume: data.get('resume'),
			CoverLetter: data.get('coverletter')

		}) 
			.then(response => {
			setOpenModal(true)
		})
    }


    return (
			<>
				<div className="relative lg:overflow-hidden">
					<div className="bg-[#7c7979] z-10 fixed bg-opacity-60 inset-0 flex flex-col justify-center items-center w-full h-full mx-auto ">
						<div className="bg-white rounded-lg lg:max-w-[720px] w-full  p-5 lg:fixed  overflow-scroll lg:overflow-hidden">
							<div className="font-semibold lg:text-2xl text-base leading-9 text-[#2B2C34] flex justify-between -mt-1 mb-2">
								<h2>APPLY FOR THIS JOB</h2>
								<button onClick={onClose}>X</button>
							</div>

							<form
								onSubmit={handleSubmit}
								method="post"
								action=""
								encType="multipart/formData"
							>
								<div className="lg:flex lg:gap-10 lg:mt-3 mt-2">
									<div className="flex flex-col w-full ">
										<label className="font-semibold lg:text-base text-sm leading-6">
											First Name
										</label>
										<input
											type="text"
											id="firstName"
											name="firstName"
											// value={formValues.firstName}
											value={firstName}
											onChange={handleFirstName}
											placeholder="First name"
											className="w-full lg:h-10 h-5 rounded-lg p-5 border-2 focus:outline-[#84CAFF] border-[#D2D3D4]"
										/>
										<p className="text-sm pt-2 flex-start text-[#F89687]">
											{formErrors.firstName}
										</p>
									</div>
									<div className="flex flex-col w-full">
										<label className="font-semibold lg:text-base text-sm leading-6">
											Last Name
										</label>
										<input
											type="text"
											id="lastName"
											name="lastName"
											value={lastName}
											// value={formValues.lastName}
											onChange={handleLastName}
											placeholder="Last name"
											className="w-full lg:h-10 h-5 rounded-lg p-5 border-2 border-[#D2D3D4] focus:outline-[#84CAFF]"
										/>
										<p className="text-sm pt-2 flex-start text-[#F89687]">
											{formErrors.last_name}
										</p>
									</div>
								</div>
								<div className="lg:flex lg:gap-10 lg:mt-3 mt-2">
									<div className="flex flex-col w-full">
										<label className="font-semibold lg:text-base text-sm leading-6">
											Email
										</label>
										<input
											type="text"
											id="email"
											name="email"
											// value={formValues.email}
											value={email}
											onChange={handleEmail}
											placeholder="Email"
											className="w-full lg:h-10 h-5 rounded-lg p-5 border-2 border-[#D2D3D4] focus:outline-[#84CAFF]"
										/>
										<p className="text-sm pt-2 flex-start text-[#F89687]">
											{formErrors.email}
										</p>
									</div>
									<div className="flex flex-col w-full">
										<label className="font-semibold lg:text-base text-sm leading-6">
											Phone No
										</label>
										<input
											type="text"
											id="phoneNo"
											name="phoneNo"
											value={phoneNo}
											// value={formValues.phone_no}
											onChange={handlePhoneNo}
											placeholder="Phone No"
											className="w-full lg:h-10 h-5 rounded-lg p-5 border-2 border-[#D2D3D4] focus:outline-[#84CAFF]"
										/>
										<p className="text-sm pt-2 flex-start text-[#F89687]">
											{formErrors.phone_no}
										</p>
									</div>
								</div>
								<div className="lg:mt-3 mt-2">
									<label className="font-semibold lg:text-base text-sm leading-6">
										Position
									</label>
									<StyledSelect
										name="filter-jobs"
										id="select"
										className="cursor-pointer px-1 py-2 pr-2 rounded-lg border-2 border-[#D2D3D4] focus:outline-[#84CAFF]"
										value={position}
										onChange={handlePosition}
									>
										<option value="" selected className="cursor-pointer">
											positions
										</option>
										<option value="Business Lawyer" className="cursor-pointer">
											Business Lawyer
										</option>
										<option
											value="Immigration Lawyer"
											className="cursor-pointer"
										>
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
										<option
											value="Bankruptcy Lawyer"
											className="cursor-pointer"
										>
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
									<p className="text-sm pt-2 flex-start text-[#F89687]">
										{formErrors.position}
									</p>
								</div>

								<div className="lg:mt-3 mt-2">
									<label className="font-semibold lg:text-base text-sm leading-6">
										Why would you be a good fit?
									</label>
									<input
										type="text"
										id="reasons"
										name="reasons"
										value={reasons}
										// value={formValues.reasons}
										onChange={handleReasons}
										className="w-full lg:h-12 h-10 rounded-lg border-2 border-[#D2D3D4] focus:outline-[#84CAFF]"
									/>

									<p className="text-sm pt-2 flex-start text-[#F89687]">
										{formErrors.reasons}
									</p>
								</div>

								<div>
									<div className="lg:flex lg:gap-10 lg:mt-3 mt-2 relative">
										<div className="flex flex-col w-full">
											<label
												className="font-bold text-base leading-6 text-[#FF8017]
"
											>
												ATTACH RESUME
											</label>
											<input
												type="text"
												className="w-full lg:h-16 h-14 rounded-lg p-5 border-2 border-[#D2D3D4] focus:outline-[#84CAFF]"
											/>
											<input
												type="file"
												name="resume"
												value={resume}
												onChange={handleResume}
												className="text-[#4D5154] text-xs leading-4  absolute lg:top-[78%] top-[24%] rounded-md p-2 ml-3 lg:-mt-4"
											/>
										</div>
										<div className="flex flex-col w-full">
											<label
												className="font-bold text-base leading-6 text-[#FF8017]
"
											>
												ATTACH COVER LETTER
											</label>
											<input
												type="text"
												className="w-full lg:h-16 h-14 rounded-lg p-5 border-2 border-[#D2D3D4] focus:outline-[#84CAFF]"
											/>
											<input
												type="file"
												name="coverletter"
												value={coverLetter}
												onChange={handleCoverLetter}
												className=" text-[#4D5154] text-xs leading-4 absolute lg:top-[78%] top-[73%]  rounded-md p-2 ml-3 lg:-mt-4"
											/>
										</div>
									</div>
								</div>
								<div className="flex justify-center mt-7">
									<button
										onClick={(e) => SubmitForm(e)}
										className="bg-[#233BA9] text-white font-semibold lg:text-lg text-base leading-7 px-10 py-3 rounded-md"
									>
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
}
export default Modal;