import styled from 'styled-components';
import bg from '../../pages/Blog/Blog-See All/Assets/bg.png';
import React, { useState } from 'react';
import Api from '../../api/axios';
import { Link } from 'react-router-dom';
import useAppContext from '../../hooks/useAppContext';
import { toast, ToastContainer } from 'react-toastify';

const Footer = () => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		phone: '',
		businessName: '',
		reviewLocation: '',
		fullName: '',
	});

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};
	const {
		// setRequestSuccess,
		// setSuccessMessage,
		setRequestFailed,
		setErrMessage,
	} = useAppContext();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const response = await Api.post('/createquote', formData);
			toast.success('Your response has been submitted', {
				position: 'top-left',
			});
			// setSuccessMessage('Your response has been submitted');
			// setRequestSuccess(true);
			setFormData({
				email: '',
				phone: '',
				businessName: '',
				reviewLocation: '',
				fullName: '',
			});
			setLoading(false);
			console.log(response);
		} catch (error) {
			setLoading(false);
			setErrMessage('Request failed');
			setRequestFailed(true);
			toast.error('Request failed, try again later.');
			return error;
		}
	};
	return (
		<FooterParentMain>
			<FooterMain>
				<div>
					<Headin1>Get in touch with us today</Headin1>
					<Headin6>
						Here is an opportunity to improve your reputation and get rid of
						malicious comments
					</Headin6>
				</div>

				{/************************REgister****************************************/}

				<StyledForm onSubmit={handleSubmit}>
					<div >
						<input
							type="text"
							placeholder="Fullname*"
							name="fullName"
							onChange={handleChange}
							value={formData.fullName}
							required
							className='left'
						/>
						<input
							type="text"
							placeholder="Phone*"
							name="phone"
							onChange={handleChange}
							value={formData.phone}
							required
							className='right'
						/>
					</div>
					<div>
						<input
							type="email"
							placeholder="Email*"
							name="email"
							onChange={handleChange}
							value={formData.email}
							required
							className='left'
						/>
						<input
							type="text"
							placeholder="Business Name*"
							name="businessName"
							onChange={handleChange}
							value={formData.businessName}
							required
							className='right'
						/>
					</div>
					<div>
						<input
							name="reviewLocation"
							placeholder="Where is the review?"
							className="review-input"
							onChange={handleChange}
							value={formData.reviewLocation}
							required
							
						/>
					</div>

					<div className="form-footer-info">
						<p>
							Your details are safe & confidential, view our{' '}
							<Link to="/privacy" className="form-footer-link">
								Privacy Policy.
							</Link>
						</p>
					</div>

					<StyledButton extend className="hero-form-button" type="submit">
						{!loading ? 'Submit' : <div className="loading"></div>}
					</StyledButton>
				</StyledForm>

				{/* Old Frm  */}
				{/* <FormMain>
					<form>
						<FormSec1>
							<div className="input-area">
								<input placeholder="Full Name*" />
								<input placeholder="Phone*" />
								<input placeholder="Email*" />
							</div>

							<div className="text-area">
								<textarea
									className="textarea-inner"
									placeholder="Tell us about the review"
								/>
							</div>
						</FormSec1>

						<select name="cars" id="cars">
							<option value="volvo">Where is the review?</option>
							<option value="saab">website</option>
							<option value="mercedes">Mobile App</option>
							<option value="audi">Online Survey</option>
						</select>
						<p>
							Your details are safe & confidential, view our{' '}
							<Link to="">Privacy Policy</Link> to learn more.
						</p>
						<button>submit</button>
					</form>
				</FormMain> */}
			</FooterMain>
			<ToastContainer />
		</FooterParentMain>
	);
};

// Styling

const StyledButton = styled.button`
	background: #233BA9;
	border: none;
	border-radius: 8px;
	padding: 12px 12px;
	color: #fff;
	margin-top: 5px;
	.loading {
		width: 20px;
		height: 20px;
		border: 2px solid #fff;
		border-bottom-color: transparent;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
		@keyframes rotation {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
`;

const Div1 = styled.div`
 margin-right: 10px;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
	}
	div {
		display: flex;
		flex-direction: row;
		column-gap: 5px;

		@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
	}
	 input{
		border: 1px solid #a09f9f;
		// border: none;
		border-radius: 8px;
		background: #fff;
		height: 43px;
		// width: 245px;
		width: 50%;
		// gap: 13px;
		padding: 15px 12px;
		margin-bottom: 10px;
		.left{
			margin-right: 15px;
		}
		.right{
			margin-left: 50%;
		}

		&::placeholder {
			// font-size: 14px;
			color: #667085;
		}
		&:focus {
			outline: none;
		}
		@media (max-width: 840px) {
			width: 100%;
		}

		
	}
}

	div .review-input {
		
		width: 100%;
		border: 1px solid #a09f9f;
		// border: none;
		border-radius: 8px;
		// height: 43px;
		// font-size: 15px;
		color: #6f7174;
		padding: 15px 12px;
		// margin-top: 10px;

		&:focus {
			outline: none;
		}
		
	}

	.form-footer-info{
		font-size: 95%;
		text-align: start;
		margin: 5px 0;
		a{
			color: #f16f04;
		}
	}
`;

export default Footer;

const FooterMain = styled.section`
	max-width: 1500px;
	width: 1500px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 850px) {
		text-align: center;
		flex-direction: column;
		justify-content: center;
	}
`;

const Headin1 = styled.section`
	font-size: 45px;
	font-weight: 700;

	@media (max-width: 1000px) {
		font-size: 30px;
		margin-right: 15px;
	}
	@media (max-width: 520px) {
		font-size: 25px;
		margin-right: 0px;
	}
`;
const Headin6 = styled.section`
	font-size: 18px;
	font-weight: 400;
	margin-right: 15px;

	@media (max-width: 850px) {
		margin-top: 20px;
		margin-bottom: 20px;
	}
	@media (max-width: 520px) {
		font-size: 13px;
		margin-right: 0px;
	}
`;

// const FormMain = styled.section`
// 	width: 500px;

// 	form {
// 		select {
// 			width: 100%;
// 			padding: 10px 14px;
// 			font-size: 16px;
// 			border: 1px solid #a5a6a8;
// 			outline: none;
// 			border-radius: 8px;
// 			color: #a5a6a8;
// 		}

// 		p {
// 			font-size: 12px;
// 			font-weight: 400;
// 			margin-top: 8px;
// 			margin-bottom: 16px;
// 			text-align: left;

// 			a {
// 				text-decoration: none;
// 				color: #f16f04;
// 			}
// 		}

// 		button {
// 			width: 100%;
// 			background-color: #233ba9;
// 			border-radius: 8px;
// 			padding: 12px 24px;
// 			font-size: 16px;
// 			font-weight: 600;
// 			color: white;
// 		}
// 	}

// 	@media (max-width: 800px) {
// 		width: 100%;
// 	}
// `;

// const FormSec1 = styled.section`
// 	display: flex;

// 	.input-area {
// 		width: 50%;
// 		padding-right: 10px;
// 		input {
// 			border: 1px solid #a5a6a8;
// 			width: 100%;
// 			margin-bottom: 8px;
// 			border-radius: 8px;
// 			padding: 10px 14px;
// 			font-size: 16px;
// 			outline: none;
// 		}

// 		@media (max-width: 800px) {
// 			padding-right: 0px;
// 		}
// 	}

// 	.text-area {
// 		width: 50%;
// 		padding-bottom: 8px;
// 		padding-left: 10px;
// 		textarea {
// 			width: 100%;
// 			max-width: 100%;
// 			height: 100%;
// 			border: 1px solid #a5a6a8;
// 			border-radius: 8px;
// 			padding: 10px 14px;
// 			font-size: 16px;
// 			outline: none;
// 		}

// 		@media (max-width: 800px) {
// 			padding-left: 0px;
// 		}
// 	}

// 	@media (max-width: 800px) {
// 		flex-direction: column;

// 		.input-area,
// 		.text-area {
// 			width: 100%;
// 		}
// 	}
// `;

const FooterParentMain = styled.div`
	background: url(${bg}), #eef1fc;
	background-repeat: no-repeat;
	padding: 40px 64px 40px 64px;
	display: flex;
	justify-content: center;

	@media (max-width: 1000px) {
		padding: 40px 34px 40px 34px;
	}
`;
