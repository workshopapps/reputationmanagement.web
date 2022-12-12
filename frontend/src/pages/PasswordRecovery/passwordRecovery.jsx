import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import Api from '../../api/axios';
// import { useEffect } from 'react';
import REPUTE from '../../assets/images/repute_logo.svg';
import arrow from './arrow-left.svg';
import ErrorMessage from '../../components/error message/errorMessage';

// const EMAIL_REGEX =
// 	/^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

export default function PasswordRecovery() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	// const [setEmailValid] = useState(false);
	const [requestPending, setRequestPending] = useState(false);
	const [triedToSubmit, setTriedToSubmit] = useState(false);

	const handleChange = (e) => {
		setEmail(e.target.value);
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// useEffect(() => {
	// 	EMAIL_REGEX.test(email) ? setEmailValid(true) : setEmailValid(false);
	// }, [email]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setTriedToSubmit(true);

		try {
			setRequestPending(true);
			const response = Api.post('/auth/forgotpassword', {
				emailAddress: email,
			});
			if ((await response).status === 200) {
				toast.success('Reset link sent to email address');
				localStorage.setItem('forgot', email);
				setEmail('');
				navigate('/check-mail');
			}
		} catch (err) {
			toast.error('Email does not exist');
			setRequestPending(false);
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
				{/* ppppppppppppppppppppppppppppppppppppppppppppppp  */}
				<form>
					<StyledlogForm>
						{/* <label htmlFor="email">Email</label> */}
						<StyledBox>
							<StyledInput
								type="email"
								name="email"
								value={email}
								onChange={handleChange}
								placeholder="Email address"
								id="email"
								required
							/>
						</StyledBox>
					</StyledlogForm>
					{email === '' && triedToSubmit && (
						<ErrorMessage error="Email Required" />
					)}

					<SubmitBtn onClick={(e) => handleSubmit(e)}>
						{!requestPending ? 'Submit' : <div className="loading"></div>}
					</SubmitBtn>
				</form>

				{/* pppppppppppppppppppppppppppppppppppppp */}
				{/* <StyledForm>
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
				</StyledForm> */}

				<StyledBack>
					<Link className="" to="/login">
						<img src={arrow} alt="back" />
						Back to Login
					</Link>
				</StyledBack>
			</LoginContainer>
			<ToastContainer />
		</>
	);
}

// Styling

const StyledBox = styled.div`
	border: 2px solid #d2d3d4;
	border-radius: 4px;
`;
const SubmitBtn = styled.button`
	margin-bottom: 30px;
	margin-top: 20px;
	width: 100%;
	border-radius: 4px;
	background-color: #233ba9;
	color: white;
	padding: 10px;

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
	@media (max-width: 360px) {
		margin-top: -4px;
	}
`;
const StyledlogForm = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 100%;
	margin-bottom: 20px;
`;

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
		margin: auto;
		width: 30%;
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

// const StyledForm = styled.form`
// 	display: flex;
// 	flex-direction: column;
// 	padding: 0 10px;

// 	label {
// 		@media (max-width: 500px) {
// 			width: 80%;
// 			margin: 0 auto;
// 		}
// 	}

// 	@media (max-width: 500px) {
// 		margin-bottom: 50px;
// 	}
// `;

const StyledInput = styled.input`
	border: none;
	padding: 10px 10px;
	width: 100%;

	&:focus {
		outline: none;
	}

	// @media (max-width: 500px) {
	// 	width: 80%;
	// 	margin: 15px auto 0;
	// }
`;

// const StyledSubmit = styled.button`
// 	background-color: #233ba9;
// 	width: 100%;
// 	margin-top: 20px;
// 	padding: 10px 20px;
// 	color: #fff;
// 	border-radius: 4px;
// 	text-align: center;

// 	@media (max-width: 500px) {
// 		width: 80%;
// 		margin: 60px auto 0;
// 	}
// `;
