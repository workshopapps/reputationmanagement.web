import React from 'react';
import styled from 'styled-components';
import ResetSuccess from '../../modal/resetpasswordsuccess/resetpasswordsuccessful';
import { toast, ToastContainer } from 'react-toastify';
import Api from '../../api/axios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import REPUTE from '../../assets/images/repute_logo.svg';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

export default function ChangePassword() {
	// Get token from url
	let urlParams = window.location.search;
	const [token, setToken] = React.useState(urlParams.replace('?token=', ''));
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');
	const [passwordShown, setPasswordShown] = React.useState(false);
	const [confirmPasswordShown, setConfirmPasswordShown] = React.useState(false);
	const [showPasswordModal, setShowPasswordModal] = React.useState(false);
	const [requestPending, setRequestPending] = React.useState(false);

	const togglePassword = () => {
		setPasswordShown(!passwordShown);
	};
	const togglePassword2 = () => {
		setConfirmPasswordShown(!confirmPasswordShown);
	};

	const handleChange = (event) => {
		setPassword(event.target.value);
	};

	const handleConfirm = (event) => {
		setConfirmPassword(event.target.value);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const email = localStorage.getItem('forgot');
		setRequestPending(true);

		if (password !== confirmPassword) {
			toast.error('Password does not match');
			setRequestPending(false);
			return;
		}

		try {
			const response = Api.post('/api/auth/reset-password', {
				email: email,
				token: token,
				newPassword: password,
				confirmPassword: confirmPassword,
			});

			if ((await response).status === 200) {
				localStorage.clear('forgot', email);
				setShowPasswordModal(true);
				setRequestPending(false);
				toast.success('Reset Password Successful');
				const timeout = setTimeout(() => {
					window.location.replace('/login');
				}, 5000);
				return () => clearTimeout(timeout);
			}
		} catch (err) {
			toast.error('Reset Password Failed');
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

				{!showPasswordModal ? (
					<>
						<h2>Reset Password</h2>
						<p>Please enter and confirm your new password</p>
						<form onSubmit={handleSubmit}>
							<StyledlogForm>
								{/* <label htmlFor="password">Password</label> */}
								<StyledBox>
									<StyledInput2
										type={passwordShown ? 'text' : 'password'}
										placeholder="New Password"
										required
										onChange={handleChange}
										value={password}
									/>
									<button onClick={() => togglePassword()} type="button">
										{passwordShown ? <FaRegEye /> : <FaRegEyeSlash />}
									</button>
								</StyledBox>
							</StyledlogForm>

							{/* Retype Password  */}

							<StyledlogForm>
								{/* <label htmlFor="password">Password</label> */}
								<StyledBox>
									<StyledInput2
										type={confirmPasswordShown ? 'text' : 'password'}
										placeholder="Re-type Password"
										required
										onChange={handleConfirm}
										value={confirmPassword}
									/>
									<button onClick={() => togglePassword2()} type="button">
										{confirmPasswordShown ? <FaRegEye /> : <FaRegEyeSlash />}
									</button>
								</StyledBox>
							</StyledlogForm>

							<SubmitBtn onClick={handleSubmit}>
								{!requestPending ? (
									'Reset Password'
								) : (
									<div className="loading"></div>
								)}
							</SubmitBtn>
						</form>
					</>
				) : (
					<ResetSuccess />
				)}
			</LoginContainer>
			<ToastContainer />
		</>
	);
}

// New Style
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
const StyledlogForm = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 100%;
	margin-bottom: 20px;
`;
const StyledBox = styled.div`
	border: 2px solid #d2d3d4;
	border-radius: 4px;
`;
const StyledInput2 = styled.input`
	border: none;
	padding: 10px 10px;
	width: 93%;

	&:focus {
		outline: none;
	}
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
