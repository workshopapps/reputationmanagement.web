import React from 'react';
import { useState } from 'react';
import Closed from './Assets/eye-slash.png';
import Logo from './Assets/Logo(1).png';
import background from './Assets/image-logo.png';
import styled from 'styled-components';
import google_icon from './Assets/google-icon.svg';
import facebook_icon from './Assets/facebook-icon.svg';
import apple_icon from './Assets/apple-icon.svg';
import Api from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/error message/errorMessage';
import { useEffect } from 'react';
import useAppContext from '../../hooks/useAppContext';
import Cookies from "js-cookie";

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const EMAIL_REGEX = /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;
function Signup() {
	const [ businessName, setBusinessName ] = useState('')
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ confirmPassword, setConfirmPassword ] = useState('')
	const [ requestPending, setRequestPending ] = useState(false)
	const router = useNavigate();

	const [ pageValid, setPageValid ] = useState(false);

	const [ businessNameValid, setBusinessNameValid ] = useState(false);
	const [ emailValid, setEmailValid ] = useState(false)
	const [ passwordValid, setPasswordValid] = useState(false)
	const [ confirmPasswordValid, setConfirmPasswordValid] = useState(false)

	const [ lawyerName, setLawyerName ] = useState('')
	const [ lawyerNameFocus, setLawyerNameFocus ] = useState('')
	const [ lawyerNameValid, setLawyerNameValid ] = useState('')

	const [ lawyerSurname, setLawyerSurname ] = useState('')
	const [ lawyerSurnameFocus, setLawyerSurnameFocus ] = useState('')
	const [ lawyerSurnameValid, setLawyerSurnameValid ] = useState('')

	const [ businessNameFocus, setBusinessNameFocus ] = useState(false);
	const [ emailFocus, setEmailFocus ] = useState(false)
	const [ passwordFocus, setPasswordFocus] = useState(false)
	const [ confirmPasswordFocus, setConfirmPasswordFocus] = useState(false)
	const [ triedToSubmit, setTriedToSubmit ] = useState(false)

	const { setRequestSuccess, setErrMessage, setRequestFailed, setSuccessMessage } = useAppContext();

	
	const [ userType, setUserType ] = useState('business')
	const [ nameValid, setNameValid ] = useState(false);

	const path = userType === 'business' ? '/auth/create_account' : '/lawyer/auth/create_account' 
	useEffect(() => {
		userType === 'business'
			?
			businessNameValid
				?
				setNameValid(true)
				:
				setNameValid(false)
			:
			lawyerName !== '' && lawyerSurname !== '' ? setNameValid(true) : setNameValid(false)
			console.log(nameValid)
	},[ lawyerName, lawyerSurname, businessNameValid, userType, nameValid ])

	useEffect(()=> {
		businessName !== '' ? setBusinessNameValid(true) : setBusinessNameValid(false)
		lawyerName !== '' ? setLawyerNameValid(true) : setLawyerNameValid(false)
		lawyerSurname !== '' ? setLawyerSurnameValid(true) : setLawyerSurnameValid(false)
		EMAIL_REGEX.test(email) ? setEmailValid(true) : setEmailValid(false)
		PASSWORD_REGEX.test(password) ? setPasswordValid(true) : setPasswordValid(false);
		confirmPassword === password && PASSWORD_REGEX.test(confirmPassword) ? setConfirmPasswordValid(true) : setConfirmPasswordValid(false)
	},[ email, businessName, password, confirmPassword, lawyerName, lawyerSurname ])

	useEffect(() => {
		nameValid && emailValid && passwordValid && confirmPasswordValid ? setPageValid(true) : setPageValid(false)
	},[ passwordValid, confirmPasswordValid, businessNameValid, emailValid, nameValid ])
	const handleSubmit = async(e) => {
		e.preventDefault();
		setTriedToSubmit(true)
		if(pageValid){
			setRequestPending(true)
			try{
				const response = await Api.post(path,
					{
						email: email,
						password: password,
						businessEntityName: businessName,
						firstName: lawyerName,
						lastName: lawyerSurname,
					}
				)
				console.log(response)
				localStorage.setItem('auth', email)
				Cookies.set('repboostAccessToken', response?.data?.accessToken)
				setRequestPending(false) 
				setSuccessMessage('Account Created')
				setRequestSuccess(true)
				clearForm()
				userType === 'business' ?  router('/dashboard') : router('/lawyer-dashboard')
			}
			catch(err){
				if(err.response.status === 400){
					setErrMessage('This email is already in use')
				}
				setErrMessage('Sign up Failed')
				setRequestFailed(true)
				setRequestPending(false)
				console.log(err)
			}
		}
	};
	const clearForm = () => {
		setBusinessName('')
		setEmail('')
		setPassword('')
		setConfirmPassword('')
	}
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
		<StyledSignupWrapper className="SignUp box-border min-h-32 flex flex-row h-screen" 
		style={{
			backgroundImage:`url(${background})`, 
			backgroundRepeat:"no-repeat", 
			backgroundSize:"cover",
			backgroundPosition: 'fixed',
			display: 'flex',
			width: '100%',
			backgroundAttachment: 'fixed',
			}}>
			<StyledFormWrapper style={{ maxWidth: '770px' }}>
				<h2>
					Welcome to Fixit
				</h2>
				<p>Sign up to begin with us</p>
				<div className='form'>
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
						{ !emailValid && !emailFocus && triedToSubmit && <ErrorMessage error={ email === '' ? "Enter Your Email" : "Enter A Valid Email"}/>}
					</div>
					<div className="password">
						<label htmlFor="Password">Password</label>
						{
							<p style={{fontSize: '14px', lineHeight: '20px', marginBottom: '10px'}}>
								Minimum eight characters, 
								at least one uppercase letter,
								one lowercase letter, 
								one number and one special character (@$!%*?&) :
							</p>
						}
						<div className={ triedToSubmit && !passwordValid ? "invalid password-input" : "password-input"}>
							<input  
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								type={passwordShown ? 'text' : 'password'} className='' placeholder='6+ character long' 
								onFocus={() => setPasswordFocus(true)}
								onBlur={() => setPasswordFocus(false)}
							/>
							<button onClick={togglePassword}>
								<img src={Closed} alt="" />{' '}
							</button>
						</div>
						{ !passwordValid && !passwordFocus && triedToSubmit && <ErrorMessage error={ password === '' ? 'Enter Your Password': "Enter A Valid Password"}/>}
					</div>
					<div className="password">
						<label htmlFor="Password">Re-enter password</label>
						<div className={ !confirmPasswordValid && triedToSubmit ? 'invalid password-input' : 'password-input' }>
							<input  
								type={passwordShown1 ? 'text' : 'password'} 
								placeholder='6+ character long' 
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								onFocus={() => setConfirmPasswordFocus(true)}
								onBlur={() => setConfirmPasswordFocus(false)}
							/>
							<button onClick={togglePassword1}>
								<img src={Closed} alt="" />{' '}
							</button>
						</div>
						{ !confirmPasswordValid && !confirmPasswordFocus && triedToSubmit && 
							<ErrorMessage 
								error={
									confirmPassword === '' 
										? 
										'Confirm Your Password'
										:
										confirmPassword === password 
											?
											"Password Is Invalid"
											:
											"Passwords Don't Match"
								}
							/>
						}
					</div>
					<div className='account-type'>
						<div className='business'>
							<input type="radio" checked={ userType === 'business'}  value="business" onClick={() => setUserType('business')}  name="user_type" />
							<label htmlFor="html">Business</label>
						</div>
						<div className='lawyers'>
							<input type="radio" checked={ userType === 'lawyer'}  value="lawyer" name="user_type" onClick={() => setUserType('lawyer')}/>
							<label htmlFor="css">I am a lawyer</label>
						</div>
					</div>
					{ userType === 'business' &&
					<div className='business-name'>
						<label htmlFor='business-name'>Business Name</label>
						<input
							type="text"
							className={ triedToSubmit && !businessNameValid ? "invalid" : ''}
							id="business-name"
							value={businessName}
							name="first_name"
							onChange={(e) => setBusinessName(e.target.value)}
							onFocus={() => setBusinessNameFocus(true)}
							onBlur={() => setBusinessNameFocus(false)}
							placeholder="e.g Mark and sons"
							required
						/>
						{ !businessNameFocus && !businessNameValid && triedToSubmit && <ErrorMessage error="Enter Your Business Name"/>}
					</div>
					}
					{	userType === 'lawyer' &&
					<>
						<div className='business-name'>
							<label htmlFor='business-name'>First Name</label>
							<input
								type="text"
								className={ triedToSubmit && !lawyerNameValid ? "invalid" : ''}
								id="business-name"
								value={lawyerName}
								name="first_name"
								onChange={(e) => setLawyerName(e.target.value)}
								onFocus={() => setLawyerNameFocus(true)}
								onBlur={() => setLawyerNameFocus(false)}
								placeholder="Enter your first name"
								required
							/>
							{ !lawyerNameFocus && !lawyerNameValid && triedToSubmit && <ErrorMessage error="Enter Your First Name"/>}
						</div>
						<div className='business-name'>
							<label htmlFor='business-name'>Last Name</label>
							<input
								type="text"
								className={ triedToSubmit && !lawyerSurnameValid ? "invalid" : ''}
								id="business-name"
								value={lawyerSurname}
								name="first_name"
								onChange={(e) => setLawyerSurname(e.target.value)}
								onFocus={() => setLawyerSurnameFocus(true)}
								onBlur={() => setLawyerSurnameFocus(false)}
								placeholder="Enter your last name"
								required
							/>
							{ !lawyerSurnameFocus && !lawyerSurnameValid && triedToSubmit && <ErrorMessage error="Enter Your Last Name"/>}
						</div>
					</>
					}
					<button type="submit" onClick={handleSubmit} className='create'>
						{
							!requestPending
								?
								"Create Account"
							:
							<div className="loading"></div>
						}
					</button>
				</div>
				<StyledSignupOptions>
					<div className="or">
						<span></span>
						<p>or sign up with</p>
						<span></span>
					</div>
					<div className="social-icons">
						<img src={google_icon} alt="" style={{ cursor: 'pointer'}}/>
						<img src={facebook_icon} alt="" style={{ cursor: 'pointer'}}/>
						<img src={apple_icon} alt="" style={{ cursor: 'pointer'}}/>
					</div>
					<p>Already have an account ? <span onClick={() => router('/login')} style={{ cursor: 'pointer'}}>Sign In</span></p>
				</StyledSignupOptions>
			</StyledFormWrapper>
			<div className="logo" > 
				<img src={Logo} alt=""/>
			</div>
		</StyledSignupWrapper>
	);
}
const StyledSignupWrapper = styled.div`
	max-height: 100vh;
	@media(max-width: 910px){
		background-image: none !important;
		display: flex;
		justify-content-center;
		.logo{
			width: auto;
			img{
				height: 78px !important;
				width: 170.8707046508789px !important;
			}
		}
	}
	.account-type{
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		margin-top: 20px;
		div{
			display: flex;
			align-items: center;
			input{
				width: 20px;
				height: 20px;
				margin-right: 10px;
			}
			label{
				font-size: 18px;
				margin-bottom: 0 !important;
			}
		}
	}
	.logo{
		position: fixed;
		display: flex;
		align-items: flex-start;
		padding-right: 10px;
		width: 100%;
		justify-content: flex-end;
	}
	.invalid{
		border-color: #D8340F !important;
	}
`;
const StyledSignupOptions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	.or{
		display: flex;
		gap: 18.76px;
		align-items: center;
		margin-top: 24px;
		span{
			height: 0px;
			width: 99.82857513427734px;
			border: 0.75px solid #98A2B3;
		}
		p{
			font-family: Lato;
			font-size: 12px;
			font-weight: 700;
			line-height: 18px;
			letter-spacing: 0.01em;
			text-align: left;
			color: #6F7174;
			white-space: nowrap;
			margin-top: 0 !important;
		}
	}
	.social-icons{
		display: flex;
		justify-content: space-between;
		width: 318px;
		margin-top: 32px;
		max-width: 95%;
	}
	p{
		font-family: Lato;
		font-size: 12px;
		font-weight: 700;
		line-height: 18px;
		letter-spacing: 0.01em;
		text-align: left;
		color: #6F7174;
		white-space: nowrap;
		margin-top: 32px !important;
		span{
			color: blue;
			text-decoration: underline;
		}
	}
`;
const StyledFormWrapper = styled.div`
	padding: 120px 55px 35px 63px;
	background-color: #ffffff;
	width: 50%;
	overflow-x: scroll;
	@media(min-width: 9100px){
		min-width: 566px;
	}
	@media(max-width: 910px){
		width: 100%;
	}
	@media(max-width: 530px){
		padding-left: 30px;
		padding-right: 30px;
	}
	h2{
		font-family: Lato;
		font-size: 57px;
		font-weight: 700;
		line-height: 68px;
		letter-spacing: 0.01em;
		text-align: left;
		color: #2B2C34;		
	}
	.loading{
        width: 20px;
        height: 20px;
        border: 2px solid #FFF;
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
	p{
		font-family: Lato;
		font-size: 24px;
		font-weight: 400;
		line-height: 29px;
		letter-spacing: 0.01em;
		text-align: left;
		color: #6F7174;
		margin-top: 4px;
	}
	.form{
		label{
			font-family: Lato;
			font-size: 16px;
			font-weight: 600;
			line-height: 24px;
			letter-spacing: 0em;
			text-align: left;
			color: #2B2C34;
			margin-bottom: 8px;
		}
		.create{
			height: 59px;
			width: 100%;
			border-radius: 4px;
			background: #233BA9;
			font-family: Lato;
			font-size: 16px;
			font-weight: 500;
			line-height: 24px;
			letter-spacing: 0.01em;
			color: #ffffff;
			border: none;
			margin-top: 24px;
		}
		input{
			height: 56px;
			width: 100%;
			border-radius: 8px;
			border: 1px solid #D2D3D4;
			padding-left: 20px;
			outline: none;
			font-family: Lato;
			font-size: 20px;
			font-weight: 500;
			line-height: 30px;
			letter-spacing: 0em;
			text-align: left;
			::placeholder{
				color: #6F7174;
			}
		}
		.business-name{
			display: flex;
			flex-direction: column;
			margin-top: 24px;
		}
		.email{
			display: flex;
			flex-direction: column;
			margin-top: 40px;
		}
		.password{
			margin-top: 24px;
			.password-input{
				display: flex;
				height: 56px;
				width: 100%;
				border-radius: 8px;
				border: 1px solid #D2D3D4;
				align-items: center;
				padding-right: 14.5px;
				input{
					background-color: transparent;
					width: 100%;
					border: none;
					outline: none;
				}
				button{
					width: 24px;
					height: 24px;
				}
			}
		}
	}
`;
export default Signup;
