import React from 'react';
import styled from 'styled-components';
import ResetSuccess from '../../modal/resetpasswordsuccess/resetpasswordsuccessful';
import { toast, ToastContainer } from 'react-toastify';
import Api from '../../api/axios';
import bg_img from '../../assets/images/woman_on_phone.png';
import repute_logo from '../../assets/images/repute_logo.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import REPUTE from './repute.svg';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

export default function ChangePassword() {
	const [token, setToken] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');
	const [passwordShown, setPasswordShown] = React.useState(false);
	const [confirmPasswordShown, setConfirmPasswordShown] = React.useState(false);
	const [resetPasswordModal, setResetPasswordModal] = React.useState(false);
	const [showPasswordModal, setShowPasswordModal] = React.useState(false);
	const [requestPending, setRequestPending] = React.useState(false);

	// const togglePassword = (event) => {
	// 	event.preventDefault();
	// 	setPasswordShown((prevState) => !prevState);
	// };

	// const toggleConfirmPassword = (event) => {
	// 	event.preventDefault();
	// 	setConfirmPasswordShown((prevState) => !prevState);
	// };

	const togglePassword = () => {
		setPasswordShown(!passwordShown);
	};
	const togglePassword2 = () => {
		setConfirmPasswordShown(!confirmPasswordShown);
	};

	const handleToken = (event) => {
		setToken(event.target.value);
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
			toast.error('Password does not match', {
				position: 'top-left',
				autoClose: 2000,
			});
			setRequestPending(false);
		}
		try {
			const response = Api.post('/auth/reset-password', {
				email: email,
				token: token,
				newPassword: password,
				confirmPassword: confirmPassword,
			});

			if ((await response).status === 200) {
				localStorage.clear('auth', email);
				setToken('');
				setPassword('');
				setConfirmPassword('');
				setShowPasswordModal(true);
				setResetPasswordModal(true);
			}
		} catch (err) {
			// setShowPasswordModal(true);
			// setResetPasswordModal(false);
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
				<h2>Reset Password</h2>
				<p>Please enter and confirm your new password</p>

				<form>
					<StyledlogForm>
						{/* <label htmlFor="email">Email</label> */}
						<StyledBox>
							<StyledInput
								type="text"
								name="token"
								placeholder="Enter token sent to email"
								required
								onChange={handleToken}
								value={token}
							/>
						</StyledBox>
					</StyledlogForm>

					{/* Password  */}

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
						{!requestPending ? 'Reset Password' : <div className="loading"></div>}
					</SubmitBtn>
				</form>

				{/* jsjbsjfjfjfsjfjfjfs  */}


				<StyledModal>
					{showPasswordModal && (
						<ResetSuccess resetPasswordModal={resetPasswordModal} />
					)}
				</StyledModal>
			</LoginContainer>
			<ToastContainer />

			{/* Old Code */}
			{/* <>
				<StyledParent>
					<StyledSection onSubmit={handleSubmit}>
						<StyledLogo src={repute_logo} alt="repute logo" />
						<StyledHeader>Reset Password</StyledHeader>
						<StyledParagraph>
							Please enter and confirm your new password
						</StyledParagraph>

						<StyledForm style={{ opacity: showPasswordModal ? 0.4 : 1 }}>
							<label htmlFor="token">Enter token</label>
							<StyledFormInput>
								<StyledInput
									type="text"
									name="token"
									placeholder="Enter token sent to email"
									required
									onChange={handleToken}
									value={token}
								/>
							</StyledFormInput>

							<label htmlFor="password">Enter new password</label>
							<StyledFormInput>
								<StyledInput
									type={passwordShown ? 'text' : 'password'}
									placeholder="Max of 8 characters"
									required
									onChange={handleChange}
									value={password}
								/>
							</StyledFormInput>

							<label htmlFor="password">Confirm the new password</label>
							<StyledFormInput>
								<StyledInput
									type={confirmPasswordShown ? 'text' : 'password'}
									placeholder="Ensure it is the same"
									required
									onChange={handleConfirm}
									value={confirmPassword}
								/>
							</StyledFormInput>

							<StyledSubmit type="submit">Sign in</StyledSubmit>
						</StyledForm>

						<StyledModal>
							{showPasswordModal && (
								<ResetSuccess resetPasswordModal={resetPasswordModal} />
							)}
						</StyledModal>
					</StyledSection>
					<StyledDiv>
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
					</StyledDiv>
				</StyledParent>
			</> */}
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

const StyledInput = styled.input`
	border: none;
	padding: 10px 10px;
	width: 100%;

	&:focus {
		outline: none;
	}
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

// Styled
const StyledParent = styled.div`
	display: flex;
`;

const StyledSection = styled.section`
	position: relative;
	width: 90%;
	max-width: 600px;
	margin: 20px auto 0;

	@media (max-width: 500px) {
		margin: 5px auto;
	}
`;

const StyledDiv = styled.div`
	width: 50%;
	max-height: 100vh;
	position: relative;

	@media (max-width: 900px) {
		display: none;
	}
`;

const StyledLogo = styled.img`
	margin: 0 auto;
	margin-bottom: 30px;

	@media (max-width: 500px) {
		margin-top: 40px;
	}
`;

const StyledImg = styled.img`
	width: 100%;
	height: 100%;
`;

const StyledImgText = styled.p`
	position: absolute;
	bottom: 9%;
	background: linear-gradient(
		180deg,
		rgba(245, 245, 245, 0.1764) -22.33%,
		rgba(245, 245, 245, 0.1904) 77.67%
	);
	mix-blend-mode: normal;
	border: 0.85625px solid rgba(255, 255, 255, 0.3);
	box-shadow: 0px 3.425px 20.55px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(12.8438px);
	border-radius: 34.25px;
	padding: 50px;
	width: 60%;
	left: 50%;
	transform: translate(-50%, 0);
	color: #fff;

	span {
		color: #f16f04;

		&:hover {
			cursor: pointer;
		}
	}
`;
const StyledHeader = styled.h1`
	text-align: center;
	color: #2b2c34;
	font-size: 40px;
	font-weight: 700;
	padding: 5px;

	@media (max-width: 500px) {
		margin-top: 5px;
		font-size: 24px;
	}
`;

const StyledParagraph = styled.p`
	font-weight: 400;
	text-align: center;
	font-size: 16px;
	margin-bottom: 40px;

	@media (max-width: 500px) {
		font-size: 15px;
		width: 90%;
		margin: 0 auto 40px;
	}
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	padding: 0px 10px;
	/* {showPasswordModal && opacity: 0.5}; */

	@media (max-width: 500px) {
		margin-bottom: 50px;
	}
`;

const StyledFormInput = styled.form`
	display: flex;
	flex-direction: column;
	position: relative;

	button {
		position: absolute;
		top: 30px;
		right: 10px;
	}
`;

const StyledModal = styled.div`
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, 0);
	width: 80%;
`;

// const StyledInput = styled.input`
// 	background: #ffffff;
// 	border: 1px solid #e8e8e8;
// 	border-radius: 8px;
// 	padding: 8px 20px;
// 	margin-top: 15px;
// 	margin-bottom: 20px;

// 	&:focus {
// 		outline: 1px solid #233ba9;
// 	}
// `;

const StyledSubmit = styled.button`
	background-color: #233ba9;
	width: 100%;
	margin-top: 20px;
	padding: 10px 20px;
	color: #fff;
	border-radius: 8px;
	text-align: center;
`;
