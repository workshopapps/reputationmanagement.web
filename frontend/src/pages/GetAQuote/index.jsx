import {
	Container,
	Banner,
	NameGroup,
	StyledForm,
	StyledTextGroup,
	StyledLabel,
	StyledInput,
	StyledText,
	Icon,
	ErrorText,
	Popup,
	StyledPopup,
	StyledBtnContainer,
} from './Container.styled';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import PageLayout from '../../layout/PageLayout';
import rocket from '../../assets/images/noto_rocket.svg';
import { StyledButton } from '../../components/Styles/Body/Button.styled';

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
									required: 'Please Enter Your First Name',
								})}
							/>
							<ErrorText> {errors.firstname?.message} </ErrorText>
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
										value:
											/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
										message: 'Invalid email address',
									},
								})}
								placeholder="example@gmail.com"
							/>
							<ErrorText> {errors.email?.message} </ErrorText>
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
								required: 'Please Enter Your Message',
							})}
							placeholder="Currently a customer gave a horrible review on our website, we could love you to take it down tonight But for how long sir? I am losing customers already!."
						></StyledText>
						<ErrorText> {errors.request?.message} </ErrorText>
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
								Request Sent <img src={rocket} alt="" />
							</h3>
							<p>
								<span>Hello {name}, </span>We have recieved your request and we
								will get back to you shortly.
							</p>
							<StyledBtnContainer>
								<StyledButton onClick={closeModal}>Continue</StyledButton>
							</StyledBtnContainer>
						</StyledPopup>
					</Popup>
				) : (
					' '
				)}
			</Container>
		</PageLayout>
	);
};

export default GetAQuote;
