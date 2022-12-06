import React from 'react';
import styled from 'styled-components';
import ResetSuccess from '../../modal/resetpasswordsuccess/resetpasswordsuccessful';
import { toast } from 'react-toastify';
// import { even } from 'prelude-ls';
import Api from '../../api/axios';
import bg_img from '../../assets/images/woman_on_phone.png';
import repute_logo from '../../assets/images/repute_logo.png';
import { Link } from 'react-router-dom';

export default function ChangePassword() {
	const [token, setToken] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');
	const [passwordShown] = React.useState(false);
	const [confirmPasswordShown] = React.useState(false);
	// const [passwordShown, setPasswordShown] = React.useState(false);
	// const [confirmPasswordShown, setConfirmPasswordShown] = React.useState(false);
	const [resetPasswordModal, setResetPasswordModal] = React.useState(false);
	const [showPasswordModal, setShowPasswordModal] = React.useState(false);

	// const togglePassword = (event) => {
	// 	event.preventDefault();
	// 	setPasswordShown((prevState) => !prevState);
	// };

	// const toggleConfirmPassword = (event) => {
	// 	event.preventDefault();
	// 	setConfirmPasswordShown((prevState) => !prevState);
	// };

	const handleToken = (event) => {
		setToken(event.target.value);
	};

	const handleChange = (event) => {
		setPassword(event.target.value);
	};

	const handleConfirm = (event) => {
		setConfirmPassword(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const email = localStorage.getItem('forgot');

		if (password !== confirmPassword) {
			toast.error('Password does not match', {
				position: 'top-left',
				autoClose: 2000,
			});
		}
		try {
			const response = Api.post('/auth/reset-password', {
				email: email,
				token: token,
				newPassword: password,
				confirmPassword: confirmPassword,
			});

			if ((await response).status === 200) {
				localStorage.clear('forgot', email);
				setToken('');
				setPassword('');
				setConfirmPassword('');
				setShowPasswordModal(true);
				setResetPasswordModal(true);
			}
		} catch (err) {
			setShowPasswordModal(true);
			setResetPasswordModal(false);
		}
	};

	return (
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

					{/* <label htmlFor="password">Enter new password</label>
					<StyledDiv>
						<StyledInput
							type={passwordShown ? 'text' : 'password'}
							placeholder="Max of 8 characters"
							required
							onChange={handleChange}
							value={password}
						/>
						<button onClick={togglePassword}>
							<FaRegEyeSlash />
						</button>
					</StyledDiv>

					<label htmlFor="password">Confirm the new password</label>
					<StyledFormInput>
						<StyledInput
							type={confirmPasswordShown ? 'text' : 'password'}
							placeholder="Ensure it is the same"
							required
							onChange={handleConfirm}
							value={confirmPassword}
						/>
						<button onClick={toggleConfirmPassword}>
							<FaRegEyeSlash />
						</button>
					</StyledFormInput> */}

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
	);
}

const StyledParent = styled.div`
	display: flex;
`;

const StyledSection = styled.section`
	position: relative;
	width: 90%;
	max-width: 600px;
	margin: 50px auto;

	@media (max-width: 500px) {
		margin: 5px auto;
	}
`;

const StyledDiv = styled.div`
	width: 50%;
	height: 100vh;
	position: relative;

	@media (max-width: 600px) {
		display: none;
	}
`;

const StyledLogo = styled.img`
	margin: 0 auto;
	margin-bottom: 60px;

	@media (max-width: 500px) {
		margin-top: 60px;
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

const StyledInput = styled.input`
	background: #ffffff;
	border: 1px solid #e8e8e8;
	border-radius: 8px;
	padding: 8px 20px;
	margin-top: 15px;
	margin-bottom: 20px;

	&:focus {
		outline: 1px solid #233ba9;
	}
`;

const StyledSubmit = styled.button`
	background-color: #233ba9;
	width: 100%;
	margin-top: 20px;
	padding: 10px 20px;
	color: #fff;
	border-radius: 8px;
	text-align: center;
`;
