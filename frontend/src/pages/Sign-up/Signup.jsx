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

function Signup() {

	const [ businessName, setBusinessName ] = useState('')
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ requestPending, setRequestPending ] = useState(false)
	const router = useNavigate();

	const handleSubmit = async(e) => {
		e.preventDefault();
		setRequestPending(true)
		try{
			const response = await Api.post('/auth/create-account',
				{
					businessEntityName: businessName,
					email: email,
					password: password,
				}
			)
			console.log(response?.data)
			response && setRequestPending(false) && router('/dashboard')
		}
		catch(err){
			setRequestPending(false)
			console.log(err)
		}
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
		<StyledSignupWrapper className="SignUp box-border min-h-32 flex flex-row h-screen" 
		style={{
			backgroundImage:`url(${background})`, 
			backgroundRepeat:"no-repeat", 
			backgroundSize:"cover",
			display: 'flex',
			width: '100%',
			}}>
			<StyledFormWrapper>
				<h2>
					Welcome to Fixit
				</h2>
				<p>Sign up to begin with us</p>
				<div className='form'>
					<div className='business-name'>
						<label htmlFor='business-name'>Business Name</label>
						<input
							type="text"
							className=""
							id="business-name"
							value={businessName}
							name="first_name"
							onChange={(e) => setBusinessName(e.target.value)}
							placeholder="e.g Mark and sons"
							required
						/>
					</div>
					<div className="email">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="e.g Marksons@gmail.com"
							required
						/>
					</div>
					<div className="password">
						<label htmlFor="Password">Password</label>
						<div className="password-input">
							<input  
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								type={passwordShown ? 'text' : 'password'} className='' placeholder='6+ character long' />
						<button onClick={togglePassword}>
							<img src={Closed} alt="" />{' '}
						</button>
						</div>
						
					</div>
					<div className="password">
						<label htmlFor="Password">Re-enter password</label>
						<div className="password-input">
							<input  type={passwordShown ? 'text' : 'password'} className='' placeholder='6+ character long' />
						<button onClick={togglePassword1}>
							<img src={Closed} alt="" />{' '}
						</button>
						</div>
					</div>
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
						<img src={google_icon} alt=""/>
						<img src={facebook_icon} alt=""/>
						<img src={apple_icon} alt=""/>
					</div>
				</StyledSignupOptions>
			</StyledFormWrapper>
			<div className="logo" > 
				<img src={Logo} alt=""/>
			</div>
		</StyledSignupWrapper>
	);
}
const StyledSignupWrapper = styled.div`
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
	.logo{
		position: fixed;
		max-width: 1440px;
		display: flex;
		align-items: flex-start;
		padding-right: 10px;
		width: 100%;
		justify-content: flex-end;
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
		}
	}
	.social-icons{
		display: flex;
		justify-content: space-between;
		width: 318px;
		margin-top: 32px;
		max-width: 95%;
	}
`;
const StyledFormWrapper = styled.div`
	padding: 120px 55px 0 63px;
	background-color: #ffffff;
	width: 50%;
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
			margin-top: 40px;
			margin-bottom: 24px;
		}
		.email{
			display: flex;
			flex-direction: column;
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
