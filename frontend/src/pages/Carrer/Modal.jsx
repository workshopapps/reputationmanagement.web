/** @format */

import React, { useState, useEffect } from "react";
import Successfulmodal from './Successfulmodal'



const Modal = ({ open, onClose }) => {

	const [openModal, setOpenModal] = useState(false);

	const initialValues = { first_name: "", last_name: "", email: "", phone_no: "", position: ""};

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
        
    }
 
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

		if (!values.first_name) {
			errors.first_name = "Please enter first name!";
		}
		if (!values.last_name) {
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
    return (
			<>
				<div className="relative lg:overflow-hidden">
					<div className="bg-[#7c7979] z-10 fixed bg-opacity-60 inset-0 flex flex-col justify-center items-center w-full h-full mx-auto ">
						<div className="bg-white rounded-lg lg:max-w-[720px] w-full  p-5 lg:fixed lg:top-[10%] lg:left-[22.5%] xl:left-[22.5%] lg:-mt-[70px]  overflow-scroll lg:overflow-hidden">
							<div className="font-semibold lg:text-2xl text-base leading-9 text-[#2B2C34] flex justify-between -mt-1 mb-2">
								<h2>APPLY FOR THIS JOB</h2>
								<button onClick={onClose}>X</button>
							</div>

							<form onSubmit={handleSubmit}>
								<div className="lg:flex lg:gap-10 lg:mt-3 mt-2">
									<div className="flex flex-col w-full ">
										<label className="font-semibold lg:text-base text-sm leading-6">
											First Name
										</label>
										<input
											type="text"
											id="first_name"
											name="first_name"
											value={formValues.first_name}
											onChange={handleChange}
											placeholder="First name"
											className="w-full lg:h-10 h-5 rounded-lg p-5 border-2 focus:outline-[#84CAFF] border-[#D2D3D4]"
										/>
										<p className="text-sm pt-2 flex-start text-[#F89687]">
											{formErrors.first_name}
										</p>
									</div>
									<div className="flex flex-col w-full">
										<label className="font-semibold lg:text-base text-sm leading-6">
											Last Name
										</label>
										<input
											type="text"
											id="last_name"
											name="last_name"
											value={formValues.last_name}
											onChange={handleChange}
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
											value={formValues.email}
											onChange={handleChange}
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
											id="phone_no"
											name="phone_no"
											value={formValues.phone_no}
											onChange={handleChange}
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
									<input
										type="text"
										id="position"
										name="position"
										value={formValues.position}
										onChange={handleChange}
										className="w-full lg:h-12 h-10 rounded-lg border-2 border-[#D2D3D4] focus:outline-[#84CAFF]"
									/>
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
										value={formValues.reasons}
										onChange={handleChange}
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
												className=" text-[#4D5154] text-xs leading-4 absolute lg:top-[78%] top-[73%]  rounded-md p-2 ml-3 lg:-mt-4"
											/>
										</div>
									</div>
								</div>
								<div className="flex justify-center mt-7">
									<button
										onClick={() => setOpenModal(true)}
										className="bg-[#233BA9] text-white font-semibold lg:text-lg text-base leading-7 px-10 py-3 rounded-md"
									>
										Submit Application
									</button>
								</div>
								<Successfulmodal open={openModal} onClose={() => setOpenModal(false)} />
							</form>
						</div>
					</div>
				</div>
			</>
		);
}
export default Modal;