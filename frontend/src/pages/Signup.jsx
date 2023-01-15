import React from 'react';
import { useState } from 'react';
import Closed from '../assets/images/img/eye-slash.png';
import REPUTE from '../assets/images/img/repute.svg';
import styled from 'styled-components';
import Api from '../api/axios';
import { Link, useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/error message/errorMessage';
import { useEffect } from 'react';
import useAppContext from '../hooks/useAppContext';
import Cookies from 'js-cookie';
import BusinessNameModal from '../modal/businessNameModal';
import GOOGLE from '../assets/images/img/google.svg'
import { useRef } from 'react';
import ReactGA from 'react-ga'
import { events } from './analyticsevents';


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
				const response = await Api.post('/api/auth/create_account', {
					email: email,
					password: password,
					businessEntityName: businessName,
				});
				localStorage.setItem('auth', email);
				localStorage.setItem('user_type', 'business');
				Cookies.set('reputeAccessToken', response?.data?.token);
				Cookies.set('reputeRefreshToken', response?.data?.refreshToken);
				setRequestPending(false);
				setSuccessMessage('Account Created');
				setRequestSuccess(true);
				ReactGA.event(events.userSignup)
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
	const [ nameModalActive, setNameModalActive ] = useState(false);

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
	const nameModalRef = useRef(null);

    const handleClick = (e) => {
        if (nameModalActive && nameModalRef.current && !nameModalRef.current.contains(e.target)) {
            setNameModalActive(false);
        }
    }

	return (
		<StyledSignupWrapper className="SignUp box-border min-h-32 flex flex-row h-screen" onClick={(e) => handleClick(e)}>
		{nameModalActive && <BusinessNameModal reference={nameModalRef} setBusinessName={setBusinessName} businessName={businessName}/>}
			<StyledFormWrapper>
				<img src={REPUTE} alt="background" className="logo_img" />
				<h2>Welcome to REPUTE</h2>
				<p>Sign up to begin with us</p>
				<div className="form">
					<div className="business-name">
						<label htmlFor="business-name">Business Name</label>
						<input
							type="text"
							className={triedToSubmit && !businessNameValid ? 'invalid' : ''}
							id="business-name"
							value={businessName}
							name="first_name"
							onChange={(e) => setBusinessName(e.target.value)}
							onFocus={() => setBusinessNameFocus(true)}
							onBlur={() => setBusinessNameFocus(false)}
							placeholder="e.g Mark and sons"
							required
						/>
						{!businessNameFocus && !businessNameValid && triedToSubmit && (
							<ErrorMessage error="Enter Your Business Name" />
						)}
					</div>
					<div className="email">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							onFocus={() => setEmailFocus(true)}
							onBlur={() => setEmailFocus(false)}
							placeholder="e.g Marksons@gmail.com"
							className={!emailValid && triedToSubmit ? 'invalid' : ''}
							required
						/>
						{!emailValid && !emailFocus && triedToSubmit && (
							<ErrorMessage
								error={
									email === '' ? 'Enter Your Email' : 'Enter A Valid Email'
								}
							/>
						)}
					</div>
					<div className="password">
						<label htmlFor="Password">Password</label>
						{
							<p
								style={{
									fontSize: '14px',
									lineHeight: '20px',
									marginBottom: '10px',
								}}
							>
								Password should be a minimum of 6 characters
							</p>
						}
						<div
							className={
								triedToSubmit && !passwordValid
									? 'invalid password-input'
									: 'password-input'
							}
						>
							<input
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								type={passwordShown ? 'text' : 'password'}
								className=""
								placeholder="6+ character long"
								onFocus={() => setPasswordFocus(true)}
								onBlur={() => setPasswordFocus(false)}
							/>
							<button onClick={togglePassword}>
								<img src={Closed} alt="" />{' '}
							</button>
						</div>
						{!passwordValid && !passwordFocus && triedToSubmit && (
							<ErrorMessage
								error={
									password === ''
										? 'Enter Your Password'
										: 'Enter A Valid Password'
								}
							/>
						)}
					</div>
					<div className="password">
						<label htmlFor="Password">Re-enter password</label>
						<div
							className={
								!confirmPasswordValid && triedToSubmit
									? 'invalid password-input'
									: 'password-input'
							}
						>
							<input
								type={passwordShown1 ? 'text' : 'password'}
								placeholder="6+ character long"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								onFocus={() => setConfirmPasswordFocus(true)}
								onBlur={() => setConfirmPasswordFocus(false)}
							/>
							<button onClick={togglePassword1}>
								<img src={Closed} alt="" />{' '}
							</button>
						</div>
						{!confirmPasswordValid &&
							!confirmPasswordFocus &&
							triedToSubmit && (
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
					</div>
					<div className="terms">
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
								// onFocus={() => setConfirmPasswordFocus(true)}
								// onBlur={() => setConfirmPasswordFocus(false)}
							/>
							<label htmlFor="terms" className="term-label">
								By signing up, I agree to company{' '}
								<Link to="/terms-of-use"> terms and condition </Link> and{' '}
								<Link to="/privacy">privacy policy </Link>.
							</label>
						</div>
						{!confirmTerms && triedToSubmit && (
							<ErrorMessage
								error={!confirmTerms && 'Agree Terms and Condition'}
							/>
						)}
					</div>
					<button type="submit" onClick={handleSubmit} className="create">
						{!requestPending ? (
							'Create Account'
						) : (
							<div className="loading"></div>
						)}
					</button>
				</div>
				<StyledOptions>
					<div className='or'>
						<span></span>
						<p>or sign in with</p>
						<span></span>
					</div>
					<div className='google' onClick={() => setNameModalActive(true)}>
						<img src={GOOGLE} alt=""/>
						Google
					</div>
				</StyledOptions>
				<StyledSignupOptions>
					<p>
						Already have an account ?{' '}
						<span
							onClick={() => router('/login')}
							style={{ cursor: 'pointer' }}
						>
							Sign In
						</span>
					</p>
				</StyledSignupOptions>
			</StyledFormWrapper>
		</StyledSignupWrapper>
	);
}
const StyledOptions = styled.div`
	.or{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 18px;
		margin-top: 41px;
		p{
			font-family: Lato;
			font-size: 12px;
			font-weight: 700;
			line-height: 18px;
			letter-spacing: 0.01em;
			text-align: left;
			color: #6F7174;
		}
		span{
			height: 0;
			width: 100.07073211669922px;
			border-top: 0.75px solid #98A2B3
		}
	}
	.google{
		display: flex !important;
		align-items: center;
		justify-content: center;
		gap: 20px;
		border: 1px solid #D2D3D4 !important;
		width: 400px;
		margin: 0 auto;
		max-width: 100%;
		border-radius: 7px !important;
		cursor: pointer;
		height: 59px;
		margin-top: 40px;
		box-shadow: none !important;
		opacity: 1 !important;
	}
`
const StyledSignupWrapper = styled.div`
	max-height: 100vh;
	position: relative;
	@media (max-width: 1230px) {
		background-image: none !important;
	}

	.account-type {
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		margin-top: 20px;
		div {
			display: flex;
			align-items: center;
			input {
				width: 20px;
				height: 20px;
				margin-right: 10px;
			}
			label {
				font-size: 18px;
				margin-bottom: 0 !important;
			}
		}
	}
	.invalid {
		border-color: #d8340f !important;
	}
`;
const StyledSignupOptions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 560px;
	.or {
		display: flex;
		gap: 18.76px;
		align-items: center;
		margin-top: 24px;
		span {
			height: 0px;
			width: 99.82857513427734px;
			border: 0.75px solid #98a2b3;
		}
		p {
			font-family: Lato;
			font-size: 12px;
			font-weight: 700;
			line-height: 18px;
			letter-spacing: 0.01em;
			text-align: left;
			color: #6f7174;
			white-space: nowrap;
			margin-top: 0 !important;
		}
	}
	.social-icons {
		width: 100%;
		margin-top: 30px;
		button {
			width: 100%;
			max-width: 560px;
			background-color: transparent;
			display: flex;
			align-items: center;
			border: 1px solid #d2d3d4;
			height: 59px;
			padding-left: 29px;
			border-radius: 4px;
			font-family: Lato;
			font-size: 18px;
			font-weight: 600;
			line-height: 27px;
			letter-spacing: 0em;
			text-align: center;
			color: #2b2c34;
			img {
				margin-right: 144px;
			}
			@media (max-width: 600px) {
				justify-content: center;
				gap: 40px;
				img {
					margin: 0;
				}
			}
		}
	}
	p {
		font-family: Lato;
		font-size: 12px;
		font-weight: 700;
		line-height: 18px;
		letter-spacing: 0.01em;
		text-align: left;
		color: #6f7174;
		white-space: nowrap;
		margin-top: 32px !important;
		span {
			color: blue;
			text-decoration: underline;
		}
	}
`;
const StyledFormWrapper = styled.div`
	padding-top: 54px;
	background-color: #ffffff;
	width: 100%;
	overflow-x: scroll;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 50px;
	@media (max-width: 1230px) {
		width: 100%;
		margin: 0 auto;
	}
	@media (max-width: 650px) {
		max-width: 95%;
	}

	h2 {
		font-family: Lato;
		font-size: 57px;
		font-weight: 700;
		line-height: 68px;
		letter-spacing: 0.01em;
		text-align: left;
		color: #2b2c34;
		margin-top: 35px;
		@media (max-width: 571px) {
			font-size: 48px;
		}
		@media (max-width: 481px) {
			font-size: 42px;
		}
		@media (max-width: 421px) {
			font-size: 35px;
		}
		@media (max-width: 357px) {
			font-size: 31px;
		}
	}
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
	p {
		font-family: Lato;
		font-size: 20px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0.01em;
		text-align: left;
		color: #6f7174;
	}
	.form {
		width: 100%;
		max-width: 560px;
		label {
			font-family: Lato;
			font-size: 16px;
			font-weight: 600;
			line-height: 24px;
			letter-spacing: 0em;
			text-align: left;
			color: #2b2c34;
			margin-bottom: 8px;
		}

		.term-form {
			display: flex;
			margin-top: 15px;
		}
		.term-label {
			font-weight: 400;
			font-size: 14px;
			a {
				color: #f16f04;
			}
		}
		.term-input {
			height: 15px;
			width: auto;
			margin-top: 5px;
			margin-right: 10px;
		}

		.create {
			height: 59px;
			width: 100%;
			border-radius: 4px;
			background: #233ba9;
			font-family: Lato;
			font-size: 16px;
			font-weight: 500;
			line-height: 24px;
			letter-spacing: 0.01em;
			color: #ffffff;
			border: none;
			margin-top: 24px;
		}
		input {
			height: 56px;
			width: 100%;
			border-radius: 8px;
			border: 1px solid #d2d3d4;
			padding-left: 20px;
			outline: none;
			font-family: Lato;
			font-size: 20px;
			font-weight: 500;
			line-height: 30px;
			letter-spacing: 0em;
			text-align: left;
			::placeholder {
				color: #6f7174;
			}
		}
		.business-name {
			display: flex;
			flex-direction: column;
			margin-top: 40px;
		}
		.email {
			display: flex;
			flex-direction: column;
			margin-top: 24px;
		}
		.password {
			margin-top: 24px;
			.password-input {
				display: flex;
				height: 56px;
				width: 100%;
				border-radius: 8px;
				border: 1px solid #d2d3d4;
				align-items: center;
				padding-right: 14.5px;
				input {
					background-color: transparent;
					width: 100%;
					border: none;
					outline: none;
				}
				button {
					width: 24px;
					height: 24px;
				}
			}
		}
	}
`;
export default Signup;
