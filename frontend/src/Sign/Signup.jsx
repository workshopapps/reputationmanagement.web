import React from 'react';
import { useState, useEffect } from 'react';
import Closed from '../Sign/Assets/eye-slash.png';
import Logo from '../Sign/Assets/Logo(1).png';
import background from '../Sign/Assets/image-logo.png';
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
	const [passwordShown1, setPasswordShown1] = useState(false);

	// Password toggle handler
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	};
	const togglePassword1 = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown1(!passwordShown1);
	};

	const [width, setWidth] = useState("big");

	useEffect(() => {
		const hideMenu = () => {
			if (window.innerWidth < 960) {
				setWidth('small');
			} else {
				setWidth('big');
			}
		};

		window.addEventListener("resize", hideMenu)

		return () => {
			window.removeEventListener("resize", hideMenu)
		}
	});

	return (
		<div>
			<div
			className="hidden SignUp place-content-center box-border min-h-32 lg:flex flex-row h-screen min-w-full"
			style={{
				backgroundImage: width === "big" ? `url(${background})` : "",
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
			>
				<div className="left-s place-content-start text-left gap-x-7 bg-white sm:w-full sm:pl-72 md:pl-0 md:w-1/2 ">
				<h2 className="font-bold text-6xl place-content-start w-full ml-16 mt-6 sm:text-3xl sm w-1/2">
					Welcome to Fixit
				</h2>
				<p className="mt-5 ml-16">Sign up to begin with us</p>
				<div className="form flex flex-col w-4/5 mx-auto">
					<div className="name border-solid ml-1 mt-5 w-full">
						<p>Business Name</p>
						<input
							type="text"
							className="first_name border-solid border-2 border-black mt-2 w-full h-9 "
							value={formData.first_name}
							name="first_name"
							onChange={handleChange}
							placeholder="e.g Mark and sons"
							required
						/>
					</div>
					<div className="email  border-solid my-3 w-full flex flex-col">
						<label htmlFor="email">Email</label>
						<input
							type="email" 
							className="email first_name border-solid border-2 border-black  mt-2 w-full h-9"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="e.g Marksons@gmail.com"
							required
						/>
					</div>
					<div className="password border-solid my-3 w-full ">
						<label htmlFor="Password">Password</label>
						<div className="tla flex border border-black border-solid p-1 w-full justify-between">
							<input
								type={passwordShown ? 'text' : 'password'}
								className=" border-black mt-2 w-4/5 h-9 "
								placeholder="6+ character long"
							/>
							<button onClick={togglePassword}>
								<img src={Closed} alt="" />{' '}
							</button>
						</div>
					</div>
					<div className="confirm-password border-solid my-3 w-full">
						<label htmlFor="Password">Re-enter password</label>
						<div className="tla flex border border-black border-solid p-1 w-full justify-between">
							<input
								type={passwordShown ? 'text' : 'password'}
								className=" border-black mt-2 w-4/5 h-9 "
								placeholder="6+ character long"
							/>
							<button onClick={togglePassword1}>
								<img src={Closed} alt="" />{' '}
							</button>
						</div>
					</div>
					<button
						type="submit"
						onClick={handleSubmit}
						className="mt-5 bg-blue-800 w-full h-10 text-white"
					>
						Create Account
					</button>
				</div>
			</div>
			<div className="right-s ">
				<img src={Logo} alt="" className="image ml-96 sm:ml-56" />
			</div>	
			</div>
			<div className='lg:hidden flex flex-row'>
			<div className="left-s place-content-start text-left gap-x-7 bg-white sm:w-full sm:pl-72 md:pl-0 md:w-1/2 ">
				<h2 className="font-bold text-6xl place-content-start  ml-16 mt-6 sm:text-3xl sm w-1/2">
					Welcome to Fixit
				</h2>
				<p className="mt-5 ml-16">Sign up to begin with us</p>
				<div className="form flex flex-col w-4/5 mx-auto">
					<div className="name border-solid ml-1 mt-5 w-full">
						<p>Business Name</p>
						<input
							type="text"
							className="first_name border-solid border-2 border-black mt-2 w-full h-9 "
							value={formData.first_name}
							name="first_name"
							onChange={handleChange}
							placeholder="e.g Mark and sons"
							required
						/>
					</div>
					<div className="email  border-solid my-3 w-full flex flex-col">
						<label htmlFor="email">Email</label>
						<input
							type="email" 
							className="email first_name border-solid border-2 border-black  mt-2 w-full h-9"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="e.g Marksons@gmail.com"
							required
						/>
					</div>
					<div className="password border-solid my-3 w-full ">
						<label htmlFor="Password">Password</label>
						<div className="tla flex border border-black border-solid p-1 w-full justify-between">
							<input
								type={passwordShown ? 'text' : 'password'}
								className=" border-black mt-2 w-4/5 h-9 "
								placeholder="6+ character long"
							/>
							<button onClick={togglePassword}>
								<img src={Closed} alt="" />{' '}
							</button>
						</div>
					</div>
					<div className="confirm-password border-solid my-3 w-full">
						<label htmlFor="Password">Re-enter password</label>
						<div className="tla flex border border-black border-solid p-1 w-full justify-between">
							<input
								type={passwordShown ? 'text' : 'password'}
								className=" border-black mt-2 w-4/5 h-9 "
								placeholder="6+ character long"
							/>
							<button onClick={togglePassword1}>
								<img src={Closed} alt="" />{' '}
							</button>
						</div>
					</div>
					<button
						type="submit"
						onClick={handleSubmit}
						className="mt-5 bg-blue-800 w-full h-10 text-white"
					>
						Create Account
					</button>
				</div>
			</div>
			<div className="right-s ">
				<img src={Logo} alt="" className="image ml-32 " />
			</div>
			</div>
		</div>
	);
}

export default Signup;
