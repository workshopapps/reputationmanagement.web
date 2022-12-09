import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import REPUTE from './repute.svg';
import styled from 'styled-components';
import { FaRegEyeSlash } from 'react-icons/fa';
import Api from '../../api/axios';
import ErrorMessage from '../../components/error message/errorMessage';
import { useEffect } from 'react';
import useAppContext from '../../hooks/useAppContext';
import Cookies from 'js-cookie';

const Login = () => {
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
				const response = await Api.post('/auth/sign_in', {
					email: email,
					password: password,
				});
				localStorage.setItem('auth', email);
				Cookies.set('reputeAccessToken', response?.data);
				setRequestPending(false);
				router('/dashboard');
				setSuccessMessage('Login successful');
				setRequestSuccess(true);
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
		<>
			<LoginContainer>
				<Link to="/">
					<ReputeLogo>
						<img src={REPUTE} alt="Repute Logo" />
					</ReputeLogo>
				</Link>
				<h2>Welcome Back!</h2>
				<p>Sign in to continue</p>

				<form>
					<StyledlogForm>
						{/* <label htmlFor="email">Email</label> */}
						<StyledBox>
							<StyledInput
								type="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email address"
								id="email"
								required
							/>
						</StyledBox>
					</StyledlogForm>
					{email === '' && triedToSubmit && (
						<ErrorMessage error="Email Required" />
					)}

					<StyledlogForm>
						{/* <label htmlFor="password">Password</label> */}
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
							<button onClick={() => togglePassword()} type="button">
								<FaRegEyeSlash />
							</button>
						</StyledBox>
					</StyledlogForm>
					{password.length < 8 && triedToSubmit && (
						<ErrorMessage
							error={
								password === ''
									? 'Password Required'
									: 'Password Must Be A Minimum Of 8 Characters'
							}
						/>
					)}

					<Remember>
						<div className="flex">
							<SlideRadio
								className={retainAuth ? 'retain' : ''}
								onClick={() => setRetainAuth(!retainAuth)}
							>
								<div></div>
							</SlideRadio>
							<p>Keep me Signed in</p>
						</div>

						<ForgotPass className="f1">
							<Link className="" to="/password-recovery">
								Forgot Password?
							</Link>
						</ForgotPass>
					</Remember>

					<SubmitBtn onClick={(e) => handleSubmit(e)}>
						{!requestPending ? 'Log In' : <div className="loading"></div>}
					</SubmitBtn>
				</form>
				<ForgotPass className="f2">
					<Link className="" to="/password-recovery">
						Forgot Password?
					</Link>
				</ForgotPass>

				<StyledAcc>
					<p>
						Don't have an account?{' '}
						<Link className="" to="/signup">
							Sign Up
						</Link>
					</p>
				</StyledAcc>
			</LoginContainer>


			{/* <ParentContainer
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
						<Input1 className="text-input">
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
									id="email"
									required
									onChange={(e) => setPassword(e.target.value)}
								/>

								<button onClick={() => togglePassword()} type="button">
									<FaRegEyeSlash />
								</button>
							</div>
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
									id="email"
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
											: 'Password Must Be A Minimum Of 8 Characters'
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

					<Loginwith>
						<span></span>
						<h4>or sign in with</h4>
						<span></span>
					</Loginwith>

					<FormFooter>
						<button>
							<img src={GOOGLE} alt="" />
							Sign in with Google
						</button>

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

				<ImgSection>
					<img src={LOGIN} alt="" />
				</ImgSection>
			</ParentContainer> */}
		</>
	);
};

//Styling

const LoginContainer = styled.div`
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

	// @media screen and (min-width: 800px) {
	// 	height: 100vh;
	// }
	@media screen and (min-width: 768px) {
		width: 430px;
		height: 100vh;
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

const StyledAcc = styled.div`
	a {
		margin-top: 5px;
		color: #f16f04;
		font-weight: 700;
		text-align: start;
	}
	@media (max-width: 360px) {
		margin-top: 20px;
		margin-bottom: 10px;
	}
`;

export default Login;

// const ParentContainer = styled.div`
// 	height: 100vh;
// 	display: flex;
// 	@media (max-width: 500px) {
// 		margin-bottom: 30px;
// 	}

// 	.footer-text {
// 		font-family: Lato;
// 		font-size: 24px !important;
// 		font-weight: 400 !important;
// 		line-height: 29px;
// 		-webkit-letter-spacing: 0.01em;
// 		-moz-letter-spacing: 0.01em;
// 		-ms-letter-spacing: 0.01em;
// 		letter-spacing: 0.01em;
// 		text-align: left;
// 		color: #6f7174;
// 		margin-top: 4px;
// 		span {
// 			color: blue;
// 			text-decoration: underline;
// 		}

// 		@media (max-width: 400px) {
// 			display: flex;
// 			flex-direction: column;
// 			align-items: center;
// 		}
// 	}
// `;

// const ImgSection = styled.div`
// 	width: 50%;
// 	display: flex;
// 	height: 100%;
// 	align-items: flex-start;
// 	justify-content: flex-end;
// 	@media (max-width: 1230px) {
// 		display: none;
// 	}
// `;
// const FormSection = styled.section`
// 	width: 50%;
// 	height: 100%;
// 	padding-top: 54px;
// 	max-width: 560px;
// 	margin: 0 auto;
// 	@media (max-width: 1200px) {
// 		width: 95%;
// 	}
// `;
// const StyledForm = styled.form`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// `;

// const StyledHead1 = styled.h1`
// 	font-family: Lato;
// 	font-size: 57px;
// 	font-weight: 700;
// 	line-height: 68px;
// 	letter-spacing: 0.01em;
// 	text-align: left;
// 	color: #2b2c34;
// 	margin-top: 35px;
// 	@media (max-width: 410px) {
// 		font-size: 48px;
// 	}
// 	@media (max-width: 343px) {
// 		font-size: 42px;
// 	}
// `;

// const SubHead = styled.h5`
// 	font-family: Lato;
// 	font-size: 20px;
// 	font-weight: 400;
// 	line-height: 24px;
// 	letter-spacing: 0.01em;
// 	text-align: left;
// 	color: #6f7174;
// `;

// const Input1 = styled.div`
// 	margin-top: 40px;
// 	display: flex;
// 	flex-direction: column;
// 	width: 100%;
// 	max-width: 560px;
// 	label {
// 		margin-bottom: 8px;
// 		font-family: Lato;
// 		font-size: 16px;
// 		font-weight: 600;
// 		line-height: 24px;
// 		letter-spacing: 0em;
// 		text-align: left;
// 		color: #2b2c34;
// 	}

// 	input {
// 		height: 56px;
// 		width: 100%;
// 		border-radius: 8px;
// 		border: 1px solid #d2d3d4;
// 		padding-left: 19px;
// 		outline: none;
// 	}
// `;

// const Input2 = styled.div`
// 	margin-top: 20px;
// 	width: 100%;
// 	max-width: 560px;
// 	label {
// 		margin-bottom: 8px;
// 	}

// 	.input2-div {
// 		position: relative;
// 		display: flex;
// 		flex-direction: column;
// 		justify-content: center;

// 		input {
// 			border: 1px solid #d2d3d4;
// 			border-radius: 8px;
// 			height: 50px;
// 			padding-left: 10px;
// 			padding-right: 10px;
// 			outline: none;
// 		}
// 		button {
// 			position: absolute;
// 			right: 10px;
// 			font-size: 25px;

// 			&:hover {
// 				cursor: pointer;
// 			}
// 		}
// 	}
// `;

const Remember = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	width: 100%;

	.flex {
		display: flex;
		justify-content: center;
	}
	@media (max-width: 320px) {
		flex-direction: column;
		justify-content: flex-start;
		.flex {
			justify-content: flex-start;

			// gap: 15px;
		}
	}
	.retain {
		border: 1px solid #f16f04 !important;
		transition: all ease-in-out 0.5s;
		div {
			background-color: #f16f04 !important;
			right: 0 !important;
			transition: all ease-in-out 0.5s;
		}
	}
`;

const SlideRadio = styled.div`
	margin-right: 5px;
	margin-top: 5px;
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
	&.f2 {
		display: none;
	}
	@media (max-width: 360px) {
		line-height: 0;
		&.f1 {
			display: none;
		}
		&.f2 {
			display: block;
			margin-top: 8px;
			margin-bottom: 10px;
		}
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

// const Loginwith = styled.div`
// 	margin-top: 20px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	gap: 18.75px;
// 	white-space: nowrap;
// 	span {
// 		height: 2px;
// 		width: 100px;
// 		background-color: #98a2b3;

// 		@media (max-width: 520px) {
// 			width: 60px;
// 		}
// 	}
// 	h4 {
// 		margin-left: 5px;
// 		margin-right: 5px;
// 	}
// `;

// const FormFooter = styled.div`
// 	margin-top: 30px;
// 	display: flex;
// 	justify-content: center;
// 	flex-direction: column;
// 	align-items: center;

// 	button {
// 		width: 100%;
// 		max-width: 560px;
// 		background-color: transparent;
// 		display: flex;
// 		align-items: center;
// 		border: 1px solid #d2d3d4;
// 		height: 59px;
// 		padding-left: 29px;
// 		border-radius: 4px;
// 		font-family: Lato;
// 		font-size: 18px;
// 		font-weight: 600;
// 		line-height: 27px;
// 		letter-spacing: 0em;
// 		text-align: center;
// 		color: #2b2c34;
// 		img {
// 			margin-right: 144px;
// 		}
// 		@media (max-width: 600px) {
// 			justify-content: center;
// 			gap: 40px;
// 			img {
// 				margin: 0;
// 			}
// 		}
// 	}
// 	.form-footer-icon {
// 		display: flex;
// 		width: 100%;
// 		max-width: 350px;
// 		justify-content: space-between;

// 		div {
// 			height: 48px;
// 			width: 48px;
// 			border: 1px solid #787a7d;
// 			border-radius: 8px;
// 			display: flex;
// 			justify-content: space-between;
// 			align-items: center;
// 			//margin-left: 80px;
// 			gap: 30px;

// 			img {
// 				height: 23px;
// 			}
// 		}
// 	}

// 	.footer-text {
// 		margin-top: 30px;
// 		font-size: 16px;
// 		font-weight: 700;

// 		span {
// 			color: #233ba9;
// 		}
// 	}
// `;
