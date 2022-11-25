import React from 'react';
import { useState } from 'react';
import Logo from '../../assets/images/AuthImages/Logo(1).png';
import background from '../../assets/images/AuthImages/image-logo.png';
import styled from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import google_icon from '../../assets/images/AuthImages/google-icon.svg';
import facebook_icon from '../../assets/images/AuthImages/facebook-icon.svg';
import apple_icon from '../../assets/images/AuthImages/apple-icon.svg';
import Api from '../../api/axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
	const [signupDetails, setSignupDetails] = useState({
		email: '',
		password: '',
	});
	const [requestPending, setRequestPending] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setSignupDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setRequestPending(true);
		try {
			const response = await Api.post('/auth/login', signupDetails);
			console.log(response?.data);
			response && setRequestPending(false) && navigate('/dashboard');
			setSignupDetails({
				email: '',
				password: '',
			});
		} catch (err) {
			setRequestPending(false);
			console.log(err);
		}
	};
	const [passwordShown, setPasswordShown] = useState(false);

	// Password toggle handler
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	};

	return (
		<StyledLoginWrapper>
			<StyledFormWrapper>
				<div className="signupForm__container">
					<h2>Welcome back</h2>
					<p>Log in to continue</p>
					<form className="login__form" onSubmit={handleSubmit}>
						<div className="form__details">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								id="email"
								value={signupDetails.email}
								onChange={handleChange}
								placeholder="Marksons@gmail.com"
								required
							/>
						</div>
						<div className="form__details">
							<label htmlFor="Password">Password</label>
							<div className="password-input">
								<input
									onChange={handleChange}
									value={signupDetails.password}
									type={passwordShown ? 'text' : 'password'}
									name="password"
									id="Password"
									placeholder="6+ character long"
								/>
								<span onClick={togglePassword}>
									{passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
								</span>
							</div>
						</div>
						<Remember>
							<div className="slide-radio-main">
								<SlideRadio>
									<div></div>
								</SlideRadio>
								Keep me Signed in
							</div>

							<ForgotPass>
								<Link className="">forgot password</Link>
							</ForgotPass>
						</Remember>

						<button type="submit" className="create">
							{!requestPending ? (
								'Create Account'
							) : (
								<div className="loading"></div>
							)}
						</button>
					</form>
					<StyledLoginOptions>
						<div className="or">
							<span></span>
							<p>or sign up with</p>
							<span></span>
						</div>
						<div className="social-icons">
							<img src={google_icon} alt="" />
							<img src={facebook_icon} alt="" />
							<img src={apple_icon} alt="" />
						</div>
						<div className="footer-text">
							Don't have an account?{' '}
							<span onClick={() => navigate('/signup')}>Sign up</span>
						</div>
					</StyledLoginOptions>
				</div>
				<div className="signUp__logo">
					<div className="img__container">
						<img src={Logo} alt="" />
					</div>
				</div>
			</StyledFormWrapper>
			<div className="logo">
				<div className="img__container">
					<img src={Logo} alt="" />
				</div>
			</div>
		</StyledLoginWrapper>
	);
}
const StyledLoginWrapper = styled.div`
	display: flex;

	.logo {
		display: flex;
		justify-content: flex-end;
		background: url(${background});
		background-size: cover;
		width: 50%;
		padding-right: 60px;
		padding-top: 10px;
		.img__container {
			width: 154px;
			height: 55px;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	@media (max-width: 910px) {
		.logo {
			display: none;
		}
	}
`;
const StyledLoginOptions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
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
		}
	}
	.social-icons {
		display: flex;
		justify-content: space-between;
		width: 318px;
		margin-top: 32px;
		max-width: 95%;
		> img {
			cursor: pointer;
		}
	}
	.footer-text {
		margin-top: 30px;
		font-size: 16px;
		font-weight: 700;
	}
`;

const Remember = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	.slide-radio-main {
		display: flex;
		align-items: center;
	}
	@media (max-width: 400px) {
		flex-direction: column;
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
	&:hover {
		cursor: pointer;
	}
	div {
		position: absolute;
		right: 0;
		height: 11px;
		width: 11px;
		background-color: black;
		border-radius: 50%;
	}
`;

const ForgotPass = styled.div`
	color: #f16f04;
	font-size: 14px;
	font-weight: 700;
`;
const StyledFormWrapper = styled.div`
	padding: 50px 0;
	background-color: #ffffff;
	width: 50%;
	display: flex;
	.signupForm__container {
		width: 80%;
		margin: 0 auto;
	}

	h2 {
		font-size: 3.3rem;
		font-weight: 700;
		text-align: left;
		color: #2b2c34;
		@media (max-width: 910px) {
			text-align: center;
		}
		@media (max-width: 600px) {
			font-size: 2.5rem;
		}
	}
	p {
		font-size: 1.4rem;
		font-weight: 400;
		text-align: left;
		color: #6f7174;
		margin-top: 4px;
		@media (max-width: 910px) {
			text-align: center;
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

	.login__form {
		margin-top: 40px;
		label {
			font-size: 0.9rem;
			font-weight: 600;
			line-height: 24px;
			letter-spacing: 0em;
			text-align: left;
			color: #2b2c34;
		}
		input {
			height: 50px;
			width: 100%;
			border-radius: 8px;
			border: 1px solid #d2d3d4;
			padding-left: 20px;
			outline: none;
			font-size: 1.2rem;
			font-weight: 400;
			&:placeholder {
				color: #6f7174;
				opacity: 0.4;
			}
		}
		.password-input {
			display: flex;
			height: 50px;
			width: 100%;
			border-radius: 8px;
			border: 1px solid #d2d3d4;
			align-items: center;

			> input {
				background-color: transparent;
				border: none;
				outline: none;
				width: 92%;
				height: 100%;
			}
			span {
				> svg {
					font-size: 2rem;
					padding-left: 10px;
					color: #aaabad;
				}
			}
		}
		.create {
			height: 60px;
			width: 100%;
			border-radius: 4px;
			background: #233ba9;
			font-size: 1rem;
			font-weight: 400;
			color: #ffffff;
			border: none;
			margin-top: 24px;
		}
	}
	.form__details {
		margin: 20px 0;
	}
	.signUp__logo {
		position: absolute;
		top: 10px;
		right: 20px;
		display: none;
		.img__container {
			width: 120.87px;
			height: 40px;
			> img {
				width: 100%;
				height: 100%;
			}
		}
	}
	@media (max-width: 910px) {
		padding: 90px 0;
		width: 100%;
		.signUp__logo {
			display: block;
		}
	}
	@media (max-width: 600px) {
		.signupForm__container {
			width: 90%;
			margin: 0 auto;
		}
	}
`;
export default Login;
