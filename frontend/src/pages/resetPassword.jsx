import React from 'react';
import PageLayout from '../layout/PageLayout';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';

export default function ResetPassword() {
	const [email, setEmail] = React.useState('');

	function handleChange(event) {
		setEmail(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		alert(`The password for ${email} has been reset`);
		setEmail('');
	}
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<PageLayout>
			<StyledSection onSubmit={handleSubmit}>
				<StyledHeader>Forgot your password</StyledHeader>
				<StyledParagraph>
					You can easily reset your password below - a password reset link would
					be sent to email inputted below if registered. Kindly ensure it is
					correct.{' '}
				</StyledParagraph>

				<StyledForm>
					<label htmlFor="email">Email</label>
					<StyledInput
						type="email"
						placeholder="johndoe@gmail.com"
						required
						onChange={handleChange}
						value={email}
					/>

					<StyledButton type="submit" onClick={handleSubmit}>
						Send Reset Link
					</StyledButton>
					<StyledLink to="/login">Back to Login</StyledLink>
				</StyledForm>
			</StyledSection>
		</PageLayout>
	);
}

const StyledSection = styled.section`
	width: 90%;
	max-width: 600px;
	margin: 50px auto;

	@media (max-width: 500px) {
		margin: 5px auto;
	}
`;

const StyledHeader = styled.h1`
	text-align: center;
	color: #233ba9;
	font-size: 30px;
	font-weight: 700;
	padding: 5px;

	@media (max-width: 500px) {
		margin-top: 5px;
	}
`;

const StyledParagraph = styled.p`
	font-weight: 400;
	text-align: center;
	margin-bottom: 20px;
`;

const StyledForm = styled.form`
	border: 2px dotted #233ba9;
	display: flex;
	flex-direction: column;
	padding: 30px 10px;

	@media (max-width: 500px) {
		margin-bottom: 50px;
	}
`;

const StyledInput = styled.input`
	background: #ffffff;
	border: 1px solid #e8e8e8;
	border-radius: 15px;
	padding: 8px 20px;
	margin-top: 15px;

	&:focus {
		outline: 1px solid #233ba9;
	}
`;

const StyledButton = styled.button`
	background-color: #233ba9;
	width: 100%;
	margin-top: 20px;
	padding: 10px 20px;
	color: #fff;
	border-radius: 15px;
`;

const StyledLink = styled(Link)`
	text-align: center;
	margin-top: 20px;

	&:hover {
		border: 1px solid #233ba9;
		border-radius: 15px;
		padding: 10px 20px;
	}
`;
