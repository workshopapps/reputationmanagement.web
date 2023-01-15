import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import REPUTE from '../assets/images/img/repute.svg';
import styled from 'styled-components';
import { FaRegEyeSlash } from 'react-icons/fa';
import Api from '../api/axios';
import ErrorMessage from '../components/error message/errorMessage';
import { useEffect } from 'react';
import useAppContext from '../hooks/useAppContext';
import Cookies from 'js-cookie';
import GOOGLE from '../assets/images/img/google.svg';
import { toast } from 'react-toastify';
import { useGoogleLogin } from '@react-oauth/google';
import GoogleLogin from '../components/buttons/googleLogin';
import ReactGA from 'react-ga'
import { events } from './analyticsevents';

const Login = () => {
	localStorage.setItem('user_type', 'business');
	const [passwordShown, setPasswordShown] = useState(false);
	const router = useNavigate();
	// Password toggle handler
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [requestPending, setRequestPending] = useState(false);

	const [triedToSubmit, setTriedToSubmit] = useState(false);
	const [pageValid, setPageValid] = useState(false);

	useEffect(() => {
		email !== '' && password.length >= 6
			? setPageValid(true)
			: setPageValid(false);
	}, [email, password]);
	const {
		setRequestFailed,
		setRequestSuccess,
		setErrMessage,
		setSuccessMessage,
	} = useAppContext();
	const [retainAuth, setRetainAuth] = useState(false);

	const togglePassword = () => {
		setPasswordShown(!passwordShown);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setTriedToSubmit(true);
		if (pageValid) {
			setRequestPending(true);
			try {
				const response = await Api.post('/api/auth/sign_in', {
					email: email,
					password: password,
				});
				localStorage.setItem('auth', email);
				localStorage.setItem('user_type', 'business');
				Cookies.set('reputeAccessToken', response?.data?.token);
				Cookies.set('reputeRefreshToken', response?.data?.refreshToken);
				setRequestPending(false);
				router('/dashboard');
				setSuccessMessage('Login successful');
				setRequestSuccess(true);
				ReactGA.event(events.userLogin)
				
			} catch (err) {
				if (err?.response?.status === 400) {
					setErrMessage(err?.response?.data);
				} else {
					setErrMessage('Login failed');
				}

				setRequestFailed(true);
				console.log(err);
				setRequestPending(false);
			}
		}
	};
	return (
		<ParentContainer
			style={{ maxWidth: '1540px', margin: '0 auto', display: 'flex' }}
		>
			<FormSection>
				<StyledForm>
					<img src={REPUTE} alt="" />
					<StyledHead1 onClick={() => setRequestFailed(true)}>
						Welcome Back
					</StyledHead1>

					<SubHead>signin to continue</SubHead>

					<Input1 className="text-input">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="johndoe@gmail.com"
							id="email"
							required
							className={email === '' && triedToSubmit ? 'invalid' : ''}
						/>
						{email === '' && triedToSubmit && (
							<ErrorMessage error="Enter Your Email" />
						)}
					</Input1>

					<Input2 className="text-input">
						<label htmlFor="email">Password</label>
						<div
							className={
								password < 8 && triedToSubmit
									? 'invalid input2-div'
									: 'input2-div'
							}
						>
							<input
								type={passwordShown ? 'text' : 'password'}
								name="password"
								value={password}
								placeholder="6+ character long"
								id="password"
								required
								onChange={(e) => setPassword(e.target.value)}
							/>

							<button onClick={() => togglePassword()} type="button">
								<FaRegEyeSlash />
							</button>
						</div>
						{password.length < 8 && triedToSubmit && (
							<ErrorMessage
								error={
									password === ''
										? 'Enter your password'
										: 'Password Must Be A Minimum Of 6 Characters'
								}
							/>
						)}
					</Input2>

					<Remember>
						<div className="slide-radio-main">
							<SlideRadio
								className={retainAuth ? 'retain' : ''}
								onClick={() => setRetainAuth(!retainAuth)}
							>
								<div></div>
							</SlideRadio>
							<p>Keep me Signed in</p>
						</div>

						<ForgotPass>
							<Link className="" to="/password-recovery">
								Forgot Password?
							</Link>
						</ForgotPass>
					</Remember>

					<SubmitBtn onClick={(e) => handleSubmit(e)}>
						{!requestPending ? 'Log In' : <div className="loading"></div>}
					</SubmitBtn>
				</StyledForm>
				<StyledOptions>
					<div className='or'>
						<span></span>
						<p>or sign in with</p>
						<span></span>
					</div>
					<GoogleLogin/>
				</StyledOptions>
				<FormFooter>
					<div className="footer-text">
						Don't have an account?{' '}
						<span
							onClick={() => router('/signup')}
							style={{ cursor: 'pointer' }}
						>
							Sign up
						</span>
					</div>
				</FormFooter>
			</FormSection>
		</ParentContainer>
	);
};

export default Login;

const ParentContainer = styled.div`
	height: 100vh;
	display: flex;
	@media (max-width: 500px) {
		margin-bottom: 30px;
	}

	.footer-text {
		font-family: Lato;
		font-size: 24px !important;
		font-weight: 400 !important;
		line-height: 29px;
		-webkit-letter-spacing: 0.01em;
		-moz-letter-spacing: 0.01em;
		-ms-letter-spacing: 0.01em;
		letter-spacing: 0.01em;
		text-align: left;
		color: #6f7174;
		margin-top: 4px;
		span {
			color: blue;
			text-decoration: underline;
		}

		@media (max-width: 400px) {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
`;
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
`
const FormSection = styled.section`
	width: 100%;
	height: 100%;
	padding-top: 54px;
	max-width: 560px;
	margin: 0 auto;
	@media (max-width: 1200px) {
		width: 95%;
	}
`;
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledHead1 = styled.h1`
	font-family: Lato;
	font-size: 57px;
	font-weight: 700;
	line-height: 68px;
	letter-spacing: 0.01em;
	text-align: left;
	color: #2b2c34;
	margin-top: 35px;
	@media (max-width: 410px) {
		font-size: 48px;
	}
	@media (max-width: 343px) {
		font-size: 42px;
	}
`;

const SubHead = styled.h5`
	font-family: Lato;
	font-size: 20px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0.01em;
	text-align: left;
	color: #6f7174;
`;

const Input1 = styled.div`
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 560px;
	label {
		margin-bottom: 8px;
		font-family: Lato;
		font-size: 16px;
		font-weight: 600;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: left;
		color: #2b2c34;
	}

	input {
		height: 56px;
		width: 100%;
		border-radius: 8px;
		border: 1px solid #d2d3d4;
		padding-left: 19px;
		outline: none;
	}
`;

const Input2 = styled.div`
	margin-top: 20px;
	width: 100%;
	max-width: 560px;
	label {
		margin-bottom: 8px;
	}

	.input2-div {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;

		input {
			border: 1px solid #d2d3d4;
			border-radius: 8px;
			height: 50px;
			padding-left: 10px;
			padding-right: 10px;
			outline: none;
		}
		button {
			position: absolute;
			right: 10px;
			font-size: 25px;

			&:hover {
				cursor: pointer;
			}
		}
	}
`;

const Remember = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	width: 100%;

	.slide-radio-main {
		display: flex;
		align-items: center;
	}
	@media (max-width: 400px) {
		flex-direction: column;
		gap: 15px;
	}
	.retain {
		border: 1px solid #000000 !important;
		transition: all ease-in-out 0.5s;
		div {
			background-color: #000000 !important;
			right: 0 !important;
			transition: all ease-in-out 0.5s;
		}
	}
`;

const SlideRadio = styled.div`
	margin-right: 5px;
	position: relative;
	width: 32px;
	height: 17px;
	border-radius: 11px;
	border: 1px solid #e8e8e8;
	display: flex;
	align-items: center;
	transition: all ease-in-out 0.5s;
	p {
		font-family: Lato;
		font-size: 14px;
		font-weight: 700;
		line-height: 24px;
		letter-spacing: 0.01em;
		text-align: left;
		color: #6f7174;
		margin-left: 4px;
	}
	&:hover {
		cursor: pointer;
	}
	div {
		position: absolute;
		height: 11px;
		width: 11px;
		background-color: #e8e8e8;
		border-radius: 50%;
		transition: all ease-in-out 0.5s;
	}
`;

const ForgotPass = styled.div`
	color: #f16f04;
	font-size: 14px;
	font-weight: 700;
	font-family: Lato;
	line-height: 24px;
	letter-spacing: 0.01em;
`;

const SubmitBtn = styled.button`
	margin-top: 65px;
	width: 100%;
	height: 59px;
	border-radius: 7px;
	background-color: #233ba9;
	color: white;
	max-width: 560px;
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

const FormFooter = styled.div`
	margin-top: 30px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

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
	.form-footer-icon {
		display: flex;
		width: 100%;
		max-width: 350px;
		justify-content: space-between;

		div {
			height: 48px;
			width: 48px;
			border: 1px solid #787a7d;
			border-radius: 8px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			//margin-left: 80px;
			gap: 30px;

			img {
				height: 23px;
			}
		}
	}

	.footer-text {
		margin-top: 30px;
		font-size: 16px;
		font-weight: 700;

		span {
			color: #233ba9;
		}
	}
`;
