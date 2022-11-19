import React from 'react';
import { useState } from 'react';
import Closed from '../Sign/Assets/eye-slash.png';

function Signup() {
	const InitialValues = {
		first_name: '',
		last_name: '',
		email: '',
		message: '',
		check: false,
	};

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === 'checkbox' ? checked : value,
			};
		});
	};
	const [formData, setFormData] = useState(InitialValues);

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormData(InitialValues);
	};
	const [passwordShown, setPasswordShown] = useState(false);

	// Password toggle handler
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	};

	return (
		<div className="SignUp place-content-center ">
			<div className="left-s place-content-start text-left gap-x-7">
				<h2 className="font-bold text-6xl place-content-start w-3/4 ml-5 mt-6 ">
					Welcome to Fixit
				</h2>
				<p className="mt-5 ml-6">Sign up to begin with us</p>
				<div className="form flex flex-col w-40">
					<div className="name border-solid ml-6 mt-5">
						<p>Business Name</p>
						<input
							type="text"
							className="first_name border-solid border-2 border-black mt-2 w-96 h-9"
							value={formData.first_name}
							name="first_name"
							onChange={handleChange}
							placeholder="e.g Mark and sons"
							required
						/>
					</div>
					<div className="email  border-solid ml-6 mt-3">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							className="email first_name border-solid border-2 border-black mt-2 w-96 h-9"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="e.g Marksons@gmail.com"
							required
						/>
					</div>
					<div className="password border-solid ml-6 mt-3 ">
						<label htmlFor="Password">Password</label>
						<span cla></span>
						<input
							className="border-solid border-2 border-black mt-2 w-80 h-9"
							type={passwordShown ? 'text' : 'password'}
						/>
						<button onClick={togglePassword}>
							<img src={Closed} alt="" />{' '}
						</button>
					</div>
				</div>
			</div>
			<div className="right-s"></div>
		</div>
	);
}

export default Signup;
