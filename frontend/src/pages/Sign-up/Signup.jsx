import React from 'react';
import { useState } from 'react';
// import Closed from './Assets/eye-slash.png';
import REPUTE from './Assets/repute.svg';
// import background from './Assets/image-logo.png';
import styled from 'styled-components';
// import GOOGLE from '../Login/google.svg';
import Api from '../../api/axios';
import { Link, useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/error message/errorMessage';
import { useEffect } from 'react';
import useAppContext from '../../hooks/useAppContext';
import Cookies from 'js-cookie';
import { FaRegEyeSlash } from 'react-icons/fa';

const EMAIL_REGEX =
	/^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;


	function Signup() {
	const [businessName, setBusinessName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [requestPending, setRequestPending] = useState(false);
	const router = useNavigate();

	const [pageValid, setPageValid] = useState(false);

	const [businessNameValid, setBusinessNameValid] = useState(false);
	const [emailValid, setEmailValid] = useState(false);
	const [passwordValid, setPasswordValid] = useState(false);
	const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

	const [businessNameFocus, setBusinessNameFocus] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);
	const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
	const [triedToSubmit, setTriedToSubmit] = useState(false);
	const [confirmTerms, setConfirmTerms] = useState(false);
	const {
		setRequestSuccess,
		setErrMessage,
		setRequestFailed,
		setSuccessMessage,
	} = useAppContext();

	useEffect(() => {
		businessName !== ''
			? setBusinessNameValid(true)
			: setBusinessNameValid(false);
		EMAIL_REGEX.test(email) ? setEmailValid(true) : setEmailValid(false);
		password.length >= 6 ? setPasswordValid(true) : setPasswordValid(false);
		confirmPassword === password && confirmPassword.length >= 6
			? setConfirmPasswordValid(true)
			: setConfirmPasswordValid(false);
	}, [email, businessName, password, confirmPassword]);

	useEffect(() => {
		businessNameValid &&
		emailValid &&
		passwordValid &&
		confirmPasswordValid &&
		confirmTerms
			? setPageValid(true)
			: setPageValid(false);
	}, [
		passwordValid,
		confirmPasswordValid,
		businessNameValid,
		emailValid,
		confirmTerms,
	]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setTriedToSubmit(true);
		if (pageValid) {
			setRequestPending(true);
			try {
				const response = await Api.post('/auth/create_account', {
					email: email,
					password: password,
					businessEntityName: businessName,
				});
				localStorage.setItem('auth', email);
				Cookies.set('reputeAccessToken', response?.data);
				setRequestPending(false);
				setSuccessMessage('Account Created');
				setRequestSuccess(true);
				clearForm();
				router('/dashboard');
			} catch (err) {
				if (err.response.status === 400) {
					setErrMessage(err?.response?.data);
				} else {
					setErrMessage('Sign up Failed');
				}
				setRequestFailed(true);
				setRequestPending(false);
				console.log(err);
			}
		}
	};
	const clearForm = () => {
		setBusinessName('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
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

	return (
		<>
			<SignupContainer>
				<Link to="/">
					<ReputeLogo>
						<img src={REPUTE} alt="Repute Logo" />
					</ReputeLogo>
				</Link>
				<p>Sign up to begin with us</p>

				<form>
					{/* Business name */}
					<StyledlogForm>
						<StyledBox>
							<StyledInput
								type="text"
								className={triedToSubmit && !businessNameValid ? 'invalid' : ''}
								id="business-name"
								value={businessName}
								name="first_name"
								onChange={(e) => setBusinessName(e.target.value)}
								onFocus={() => setBusinessNameFocus(true)}
								onBlur={() => setBusinessNameFocus(false)}
								placeholder="Business Name"
								required
							/>
						</StyledBox>
					</StyledlogForm>
					{!businessNameFocus && !businessNameValid && triedToSubmit && (
						<ErrorMessage error="Business Name Required" />
					)}

					{/* Email */}
					<StyledlogForm>
						<StyledBox>
							<StyledInput
								type="email"
								name="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								onFocus={() => setEmailFocus(true)}
								onBlur={() => setEmailFocus(false)}
								placeholder="Email address"
								className={!emailValid && triedToSubmit ? 'invalid' : ''}
								required
							/>
						</StyledBox>
					</StyledlogForm>
					{!emailValid && !emailFocus && triedToSubmit && (
						<ErrorMessage
							error={email === '' ? 'Email Required' : 'Enter A Valid Email'}
						/>
					)}

					{/* Password */}
					<StyledlogForm>
						<StyledBox>
							<StyledInput2
								type={passwordShown ? 'text' : 'password'}
								name="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
								id="password"
								required
							/>
							<button onClick={togglePassword} type="button">
								<FaRegEyeSlash />
							</button>
						</StyledBox>
					</StyledlogForm>
					{!passwordValid && !passwordFocus && triedToSubmit && (
						<ErrorMessage
							error={
								password === '' ? 'Password Required' : 'Enter A Valid Password'
							}
						/>
					)}

					{/* Retype Password */}
					<StyledlogForm>
						<StyledBox>
							<StyledInput2
								type={passwordShown1 ? 'text' : 'password'}
								placeholder="Re-type Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								onFocus={() => setConfirmPasswordFocus(true)}
								onBlur={() => setConfirmPasswordFocus(false)}
							/>
							<button onClick={togglePassword1}>
								<FaRegEyeSlash />
							</button>
						</StyledBox>
					</StyledlogForm>
					{!confirmPasswordValid && !confirmPasswordFocus && triedToSubmit && (
						<ErrorMessage
							error={
								confirmPassword === ''
									? 'Confirm Your Password'
									: confirmPassword === password
									? 'Password Is Invalid'
									: "Passwords Don't Match"
							}
						/>
					)}

					{/* Terms */}

					<StyledTerms>
						<div
							className={
								!confirmPasswordValid && triedToSubmit
									? 'invalid '
									: 'term-form'
							}
						>
							<input
								type="checkbox"
								value={confirmTerms}
								onChange={(e) => setConfirmTerms(!confirmTerms)}
								className="term-input"
							/>
							<label htmlFor="terms" className="term-label">
								By signing up, I agree to company{' '}
								<Link to="/terms-of-use"> terms and condition </Link> and{' '}
								<Link to="/privacy">privacy policy </Link>.
							</label>
						</div>
					</StyledTerms>

					<Remember>
						{!confirmTerms && triedToSubmit && (
							<ErrorMessage
								error={!confirmTerms && 'Agree Terms and Condition'}
							/>
						)}
					</Remember>

					{/* Button */}
					<SubmitBtn onClick={handleSubmit}>
						{!requestPending ? (
							'Create account'
						) : (
							<div className="loading"></div>
						)}
					</SubmitBtn>
				</form>

				<StyledAcc>
					<p>
						Alreaady have an account?{' '}
						<Link className="" to="/Login">
							Login
						</Link>
					</p>
				</StyledAcc>
			</SignupContainer>

		</>
	);
}

// Styling

const SignupContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	// align-items: center;
	width: 80%;
	margin: 0 auto;
	// height: 100vh;

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
const Remember = styled.div`
	margin-top: 13px;
	// display: flex;
	// justify-content: space-between;
	width: 100%;

	@media (max-width: 320px) {
		// flex-direction: column;
		// justify-content: flex-start;
	}
`;
const StyledTerms = styled.div`
	.term-label {
		margin-left: 5px;
		a {
			color: #f16f04;
		}
	}
`;
const StyledAcc = styled.div`
	a {
		margin-top: 5px;
		color: #f16f04;
		font-weight: 700;
	}

	@media (max-width: 320px) {
	}
`;
export default Signup;
