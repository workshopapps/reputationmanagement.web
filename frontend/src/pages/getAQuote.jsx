import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import PageLayout from '../layout/PageLayout';
import rocket from '../assets/images/noto_rocket.svg';
import { StyledButton } from '../components/Styles/Body/Button.styled';
import { useEffect } from 'react';
import styled from 'styled-components';
import img from '../assets/images/bannerImage.png';
import img2 from '../assets/images/Default.png';
// import { Obj } from 'prelude-ls';

const GetAQuote = () => {
	// Setting React Hook form
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	//   Setting State
	const [name, setName] = useState('Dear');

	const [open, setOpen] = useState(false);
	const closeModal = () => setOpen(false);

	const onFormSubmit = (data) => {
		console.log(data);
		setName(data.firstname);
		setOpen(true);
		setTimeout(() => {
			reset();
		}, 5000);
	};
	const EMAIL_REGEX =
		/^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

	const {
		firstname: firstNameError,
		email: emailError,
		request: requestError,
	} = errors;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<PageLayout>
			<Container>
				<Banner>
					<h1>Get A Quote</h1>
					<p>
						Fill up the form below and we will get back to you within 24 hours
					</p>
				</Banner>
				{/* Form */}
				<StyledForm noValidate onSubmit={handleSubmit(onFormSubmit)}>
					<NameGroup>
						<div>
							<StyledLabel htmlFor="firstname">First Name</StyledLabel>
							<StyledInput
								type="text"
								name="firstname"
								placeholder="Okeke"
								{...register('firstname', {
									required: 'Please enter Your First Name',
								})}
							/>
							<ErrorText>
								{firstNameError ? firstNameError.message : ''}
							</ErrorText>
						</div>
						<div>
							<StyledLabel htmlFor="lastname">Last Name</StyledLabel>
							<StyledInput
								type="text"
								name="lastname"
								placeholder="Chiamaka"
								{...register('lastname')}
							/>
						</div>
					</NameGroup>
					<NameGroup>
						<div>
							<StyledLabel htmlFor="email">Email Address</StyledLabel>
							<StyledInput
								type="email"
								name="email"
								{...register('email', {
									required: {
										value: true,
										message: 'Please enter your email address',
									},
									pattern: {
										value: EMAIL_REGEX,
										message: 'Invalid email address',
									},
								})}
								placeholder="example@gmail.com"
							/>
							<ErrorText>{emailError ? emailError.message : ''}</ErrorText>
						</div>
						<div>
							<StyledLabel htmlFor="company">Company's Name</StyledLabel>
							<StyledInput
								type="text"
								name="company"
								placeholder="Motors"
								{...register('company')}
							/>
						</div>
					</NameGroup>
					<StyledTextGroup>
						<StyledLabel htmlFor="request">Request</StyledLabel>
						<StyledText
							name="text"
							id="text"
							{...register('request', {
								required: 'Please enter Your Message',
							})}
							placeholder="Currently a customer gave a horrible review on our website, we could love you to take it down tonight But for how long sir? I am losing customers already!."
						></StyledText>
						<ErrorText>{requestError ? requestError.message : ''}</ErrorText>
					</StyledTextGroup>

					<StyledBtnContainer>
						<StyledButton>Send Request</StyledButton>
					</StyledBtnContainer>
				</StyledForm>

				{/* POPUP */}
				{open ? (
					<Popup>
						<StyledPopup>
							<Icon onClick={closeModal}>
								<FaTimes />
							</Icon>
							<h3>
								Request Sent
								<img src={rocket} alt="" />
							</h3>
							<p>
								<span>Hello {name}, </span>We have recieved your request and we
								will get back to you shortly.
							</p>
							<StyledButton onClick={closeModal}>Continue</StyledButton>
						</StyledPopup>
					</Popup>
				) : (
					' '
				)}
			</Container>
		</PageLayout>
	);
};

const Container = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300&display=swap');
	* {
		margin: 0;
		box-sizing: border-box;
		font-family: 'Lato', sans-serif;
	}

	display: flex;
	flex-direction: column;
	margin: 68px auto;
	width: 100%;
	max-width: 91%;
	min-height: 100vh;
	max-width: 1200px;

	@media (min-width: 700px) and (max-width: 900px) {
		max-width: 95%;
	}
`;

const StyledBtnContainer = styled.div`
	max-width: 30%;
	margin: 0 auto;

	@media (min-width: 200px) and (max-width: 699px) {
		max-width: 70%;
	}
`;

const Popup = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.6);
`;

const StyledPopup = styled.div`
	width: 401px;
	height: 300px;
	background: #ffffff;
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
	box-shadow: 2px 2px 8px rgba(120, 122, 125, 0.15);

	h3 {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 600;
		font-size: 22px;
		line-height: 150%;
		width: 100%;
		color: #2b2c34;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 28px;

		img {
			margin-right: 15px;
		}
	}
	p {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 150%;
		padding-bottom: 20px;
		text-align: center;
		span {
			color: #233ba9;
		}
	}
	@media (min-width: 501px) and (max-width: 900px) {
		width: 400px;
		height: 300px;
	}

	@media (min-width: 200px) and (max-width: 500px) {
		width: 400px;
		height: 300px;
	}
`;
const Icon = styled.div`
	display: flex;
	width: 100%;
	padding-bottom: 5px;
	padding-right: 20px;
	justify-content: flex-end;
	align-items: center;
`;
const Banner = styled.div`
	width: 100%;
	height: 347px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
	background-image: url(${img});

	h1 {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 900;
		font-size: 40px;
		line-height: 50px;
		letter-spacing: 0.01em;

		color: #ffffff;
	}
	p {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 600;
		font-size: 22px;
		line-height: 150%;
		color: #ffffff;
	}

	@media (min-width: 200px) and (max-width: 699px) {
		height: 150px;
		width: 100%;
		justify-content: center;
		margin-bottom: 20px;
		background: url(${img2});
		background-repeat: no-repeat;
		background-size: 100% 100%;

		h1 {
			font-size: 20px;
			line-height: 30px;
		}
		p {
			font-size: 10px;
			text-align: center;
		}
	}
`;
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	padding: 0;
	gap: 20px;
`;
const NameGroup = styled.div`
	width: 100%;
	max-width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 192px;

	div {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	@media (min-width: 700px) and (max-width: 900px) {
		gap: 50px;
	}
	@media (min-width: 200px) and (max-width: 699px) {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`;

const ErrorText = styled.p`
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 150%;
	color: #f03738;
`;
const StyledLabel = styled.label`
	padding-bottom: 8px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 600;
	font-size: 22px;
	line-height: 150%;
	color: #2b2c34;
`;
const StyledTextGroup = styled.div`
	width: 100%;
	max-width: 100%;
	display: flex;
	flex-direction: column;
`;

const StyledInput = styled.input`
	border: 1px solid #d2d3d4;
	border-radius: 8px;
	outline: none;
	max-width: 100%;
	padding: 17px;

	font-family: 'Lato';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 150%;
	color: #4d5154;

	&::placeholder {
		opacity: 0.8;
		font-weight: 400;
	}
	&:focus {
		border: 0.596671px solid #ff725e;
		border-radius: 4.77337px;
	}
`;

const StyledText = styled.textarea`
	border: 1px solid #d2d3d4;
	border-radius: 8px;
	outline: none;
	max-width: 100%;
	height: 221px;
	padding: 17px;

	font-family: 'Lato';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 150%;
	color: #4d5154;

	&::placeholder {
		opacity: 0.8;
		font-weight: 400;
	}
	&:focus {
		border: 0.596671px solid #ff725e;
		border-radius: 4.77337px;
	}
`;
export default GetAQuote;
