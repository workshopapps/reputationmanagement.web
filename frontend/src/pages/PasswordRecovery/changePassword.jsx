import React from 'react';
import PageLayout from '../../layout/PageLayout';
import styled from 'styled-components';
import { FaRegEyeSlash } from 'react-icons/fa';
import ResetSuccess from '../../modal/resetpasswordsuccess/resetpasswordsuccessful';
import { ToastContainer, toast } from 'react-toastify';
// import { even } from 'prelude-ls';
import Api from '../../api/axios';

export default function ChangePassword() {
	const [token, setToken] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');
	const [passwordShown, setPasswordShown] = React.useState(false);
	const [confirmPasswordShown, setConfirmPasswordShown] = React.useState(false);
	const [resetPasswordModal, setResetPasswordModal] = React.useState(false);
	const [showPasswordModal, setShowPasswordModal] = React.useState(false);

	

	const togglePassword = (event) => {
		event.preventDefault();
		setPasswordShown((prevState) => !prevState);
	};

	const toggleConfirmPassword = (event) => {
		event.preventDefault();
		setConfirmPasswordShown((prevState) => !prevState);
	};

	const handleToken = (event) => {
		setToken(event.target.value);
	};

	const handleChange = (event) => {
		setPassword(event.target.value);
	};

	const handleConfirm = (event) => {
		setConfirmPassword(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const email = localStorage.getItem('auth');

		if (password !== confirmPassword) {
			toast.error('Password does not match');
		}
		try {
			const response = Api.post('/auth/reset-password', {
				email: email,
				token: token,
				newPassword: password,
				confirmPassword: confirmPassword,
			});

            if ((await response).status === 200) {
                localStorage.clear('auth', email);
                setToken('');
                setPassword('');
                setConfirmPassword('');
                setShowPasswordModal(true);
                setResetPasswordModal(true);
			}
		} catch (err) {
            setShowPasswordModal(true);
            setResetPasswordModal(false);
        }
	};
	return (
		<PageLayout>
			<StyledSection onSubmit={handleSubmit}>
				<StyledHeader>Change password</StyledHeader>

				<StyledForm style={{ opacity: showPasswordModal ? 0.4 : 1 }}>
					<label htmlFor="token">Enter token</label>
					<StyledDiv>
						<StyledInput
							type="text"
							name="token"
							placeholder="Enter token sent to email"
							required
							onChange={handleToken}
							value={token}
						/>
					</StyledDiv>

					<label htmlFor="password">Enter new password</label>
					<StyledDiv>
						<StyledInput
							type={passwordShown ? 'text' : 'password'}
							placeholder="Max of 8 characters"
							required
							onChange={handleChange}
							value={password}
						/>
						<button onClick={togglePassword}>
							<FaRegEyeSlash />
						</button>
					</StyledDiv>

					<label htmlFor="password">Confirm the new password</label>
					<StyledDiv>
						<StyledInput
							type={confirmPasswordShown ? 'text' : 'password'}
							placeholder="Ensure it is the same"
							required
							onChange={handleConfirm}
							value={confirmPassword}
						/>
						<button onClick={toggleConfirmPassword}>
							<FaRegEyeSlash />
						</button>
					</StyledDiv>

					<StyledSubmit type="submit">Send Reset Link</StyledSubmit>
				</StyledForm>
				<StyledModal>
					{showPasswordModal && (
						<ResetSuccess resetPasswordModal={resetPasswordModal} />
					)}
				</StyledModal>
			</StyledSection>
			<ToastContainer />
		</PageLayout>
	);
}

const StyledSection = styled.section`
	position: relative;
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
	margin-bottom: 30px;

	@media (max-width: 500px) {
		margin-top: 5px;
	}
`;

const StyledForm = styled.form`
	border: 2px dotted #233ba9;
	display: flex;
	flex-direction: column;
	padding: 30px 10px;
	/* {showPasswordModal && opacity: 0.5}; */

	@media (max-width: 500px) {
		margin-bottom: 50px;
	}
`;

const StyledDiv = styled.form`
	display: flex;
	flex-direction: column;
	position: relative;

	button {
		position: absolute;
		top: 30px;
		right: 10px;
	}
`;

const StyledModal = styled.div`
	position: absolute;
	top: 25%;
	left: 50%;
	transform: translate(-50%, 0);
	/* left: 25%; */
	width: 80%;
`;

const StyledInput = styled.input`
	background: #ffffff;
	border: 1px solid #e8e8e8;
	border-radius: 8px;
	padding: 8px 20px;
	margin-top: 15px;
	margin-bottom: 20px;

	&:focus {
		outline: 1px solid #233ba9;
	}
`;

const StyledSubmit = styled.button`
	background-color: #233ba9;
	width: 100%;
	margin-top: 20px;
	padding: 10px 20px;
	color: #fff;
	border-radius: 8px;
	text-align: center;
`;
