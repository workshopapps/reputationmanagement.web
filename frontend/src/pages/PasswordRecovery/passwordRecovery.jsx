import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import Api from '../../api/axios';
import { useEffect } from 'react';
import REPUTE from './repute.svg';
import arrow from './arrow-left.svg';

export default function PasswordRecovery() {
	const navigate = useNavigate();
	const [email, setEmail] = React.useState('');

	const handleChange = (e) => {
		setEmail(e.target.value);
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = Api.post('/auth/forgotpassword', {
				emailAddress: email,
			});
			if ((await response).status === 200) {
				toast.success('Reset link sent to email address', {
					position: 'top-left',
					autoClose: 2000,
				});
				localStorage.setItem('auth', email);
				setEmail('');
				navigate('/password-recovery/change');
			}
		} catch (err) {
			toast.error('Email does not exist', {
				position: 'top-left',
				autoClose: 2000,
			});
		}
	};
	return (
		<>
			<LoginContainer>
				<Link to="/">
					<ReputeLogo>
						<img src={REPUTE} alt="Repute Logo" />
					</ReputeLogo>
				</Link>
				<h2>Forgot Password?</h2>
				<p>
					Please enter the email address you used when you joined and we’ll send
					you instructions to reset your password.
				</p>
				<StyledForm>
					{/* <label htmlFor="email">Email</label> */}
					<StyledInput
						type="email"
						placeholder="Email address"
						required
						onChange={handleChange}
						value={email}
					/>

					<StyledSubmit type="submit" onClick={handleSubmit}>
						Reset Password
					</StyledSubmit>
				</StyledForm>
				<StyledBack>
					<Link className="" to="/login">
						<img src={arrow} alt="back" />
						Back to Login
					</Link>
				</StyledBack>
			</LoginContainer>
			<ToastContainer />

			{/* Old Code */}
			<>
				{/* <StyledParent> */}
				{/* <StyledSection onSubmit={handleSubmit}> */}
				{/* <StyledLogo src={repute_logo} alt="repute logo" />
					<div>
						<Link to="/login">
							<StyledIcon src={arrow_left} alt="arrow_left_icon" />
						</Link>
						<StyledHeader>Forgot Password?</StyledHeader>
					</div> */}

				{/* <StyledAuth src={authentication_icon} alt="authentication icon" /> */}
				{/* <StyledParagraph>
						Please enter the email address you used when you joined and we’ll
						send you instructions to reset your password.
					</StyledParagraph> */}

				{/* <StyledForm> */}
				{/* <label htmlFor="email">Email</label>
						<StyledInput
							type="email"
							placeholder="Email address"
							required
							onChange={handleChange}
							value={email}
						/> */}

				{/* <StyledSubmit type="submit">Reset Password</StyledSubmit> */}
				{/* </StyledForm> */}
				{/* </StyledSection> */}

				{/* <StyledDiv>
					<StyledImg
						src={bg_img}
						className="background"
						alt="woman on the phone calling"
					/>
					<StyledImgText>
						Welcome back,{' '}
						<span>
							<Link to="/blog">click here</Link>
						</span>{' '}
						to check out our new updates
					</StyledImgText>
				</StyledDiv> */}

				{/* </StyledParent> */}
			</>
		</>
	);
}

// Styling

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	// align-items: center;
	width: 80%;
	margin: 0 auto;
	height: 100vh;

	h2 {
		font-style: normal;
		font-weight: 700;
		font-size: 28px;
		color: #2b2c34;
		text-align: center;
	}
	p {
		color: #6f7174;
		text-align: center;
		margin-bottom: 30px;
	}

	@media screen and (min-width: 768px) {
		width: 430px;
	}
`;
const ReputeLogo = styled.div`
	margin-top: 30px;
	margin-bottom: 40px;
	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 40%;
	}
	@media (max-width: 320px) {
		margin-bottom: 10px;
	}
`;
const StyledBack = styled.div`
	margin: 30px 0;
	a {
		display: flex;
		justify-content: center;
		color: #000;
		font-weight: 700;
		text-align: start;
		img {
			margin-right: 5px;
		}
	}
`;

// const StyledParent = styled.div`
// 	display: flex;
// `;
// const StyledSection = styled.section`
// 	max-width: 600px;
// 	margin: 50px auto;

// 	div {
// 		display: flex;
// 		flex-direction: column;
// 		gap: 30px;
// 		align-items: center;

// 		@media (max-width: 500px) {
// 			flex-direction: row;
// 			margin-bottom: 40px;
// 		}
// 	}

// 	@media (max-width: 500px) {
// 		margin: 5px auto;
// 	}
// `;
// const StyledLogo = styled.img`
// 	margin: 0 auto;
// 	margin-bottom: 60px;

// 	@media (max-width: 500px) {
// 		display: none;
// 	}
// `;
// const StyledAuth = styled.img`
// 	display: none;

// 	@media (max-width: 500px) {
// 		display: block;
// 		width: 150px;
// 		height: 150px;
// 		margin: 0 auto 20px;
// 	}
// `;

// const StyledIcon = styled.img`
// 	display: none;

// 	&:hover {
// 		border: 1px solid #f16f04;
// 		cursor: pointer;
// 	}

// 	@media (max-width: 500px) {
// 		display: inline-block;
// 		border-radius: 50%;
// 		border: 1px solid #bcbdbe;
// 		width: 40px;
// 		height: 40px;
// 		margin-left: 30px;
// 	}
// `;

// const StyledDiv = styled.div`
// 	width: 50%;
// 	height: 100vh;
// 	position: relative;

// 	@media (max-width: 900px) {
// 		display: none;
// 	}
// `;

// const StyledImg = styled.img`
// 	width: 100%;
// 	height: 100%;
// `;

// const StyledImgText = styled.p`
// 	position: absolute;
// 	bottom: 9%;
// 	background: linear-gradient(
// 		180deg,
// 		rgba(245, 245, 245, 0.1764) -22.33%,
// 		rgba(245, 245, 245, 0.1904) 77.67%
// 	);
// 	mix-blend-mode: normal;
// 	border: 0.85625px solid rgba(255, 255, 255, 0.3);
// 	box-shadow: 0px 3.425px 20.55px rgba(0, 0, 0, 0.25);
// 	backdrop-filter: blur(12.8438px);
// 	border-radius: 34.25px;
// 	padding: 50px;
// 	width: 60%;
// 	left: 50%;
// 	transform: translate(-50%, 0);
// 	color: #fff;

// 	span {
// 		color: #f16f04;

// 		&:hover {
// 			cursor: pointer;
// 		}
// 	}
// `;
// const StyledHeader = styled.h1`
// 	text-align: center;
// 	color: #2b2c34;
// 	font-size: 40px;
// 	font-weight: 700;
// 	padding: 5px;

// 	@media (max-width: 500px) {
// 		margin-top: 5px;
// 		font-size: 24px;
// 	}
// `;

// const StyledParagraph = styled.p`
// 	font-weight: 400;
// 	text-align: center;
// 	font-size: 16px;
// 	margin-bottom: 40px;

// 	@media (max-width: 500px) {
// 		width: 80%;
// 		margin: 0 auto 40px;
// 	}
// `;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	padding: 0 10px;

	label {
		@media (max-width: 500px) {
			width: 80%;
			margin: 0 auto;
		}
	}

	@media (max-width: 500px) {
		margin-bottom: 50px;
	}
`;

const StyledInput = styled.input`
	background: #ffffff;
	border: 1px solid #e8e8e8;
	border-radius: 4px;
	padding: 4px 20px;
	margin-top: 15px;

	&:focus {
		outline: 1px solid #233ba9;
	}

	@media (max-width: 500px) {
		width: 80%;
		margin: 15px auto 0;
	}
`;

const StyledSubmit = styled.button`
	background-color: #233ba9;
	width: 100%;
	margin-top: 20px;
	padding: 10px 20px;
	color: #fff;
	border-radius: 4px;
	text-align: center;

	@media (max-width: 500px) {
		width: 80%;
		margin: 60px auto 0;
	}
`;
