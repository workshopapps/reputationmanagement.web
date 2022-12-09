import React from 'react';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import styled from 'styled-components';
import useAppContext from '../../hooks/useAppContext';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { styleClass, StyledButton, StyledTab } from './Settings.styled';

function Security() {
	const ApiPrivate = useAxiosPrivate();
	const {
		setRequestFailed,
		setRequestSuccess,
		setErrMessage,
		setSuccessMessage,
	} = useAppContext();

	const [requestPending, setRequestPending] = useState(false);
	const [passwordShown, setPasswordShown] = useState(false);
	const [NewPasswordShown, setNewPasswordShown] = useState(false);
	const [form, setForm] = useState({});

	const onSubmit = (e) => {
		e.preventDefault();
		// Validation
		if (form.new_password.length < 8) {
			setErrMessage('New password must contain a minimum of 8 characters');
			setRequestFailed(true);
			return;
		}
		if (form.new_password !== form.confirm_new_password) {
			setErrMessage('New password and confirm new password must be the same.');
			setRequestFailed(true);
			return;
		}
		setRequestPending(true);
		// API request
		ApiPrivate.post('/auth/change_password', {
			oldPassword: form.current_password,
			newPassword: form.new_password,
		})
			.then((res) => {
				setSuccessMessage('Password changed successfully');
				setRequestSuccess(true);
				setRequestPending(false);
				// Reset input fields
				e.target.reset();
				setForm({
					current_password: '',
					new_password: '',
					confirm_new_password: '',
				});
			})
			.catch(function (error) {
				setErrMessage('Password update failed');
				setRequestFailed(true);
				setRequestPending(false);
			});
	};

	return (
		<StyledTab>
			<form onSubmit={onSubmit} className={styleClass.form}>
				<div className="w-full mb-8">
					<span className="font-semibold">Create a new password</span>
					<p className="mt-1 text-[14px] hidden md:block text-[#787A7D] ">
						New password must contain a minimum of 8 characters
					</p>
				</div>

				<div className={styleClass.inputGroup}>
					<label htmlFor="current_password" className="md:w-1/3 font-normal">
						Current Password
					</label>

					<InputField className={styleClass.input}>
						<input
							type={passwordShown ? 'text' : 'password'}
							id="current_password"
							onChange={(e) => {
								setForm({ ...form, current_password: e.target.value });
							}}
							required
						/>
						<PasswordButton
							togglePassword={() => setPasswordShown(!passwordShown)}
							inputStatus={passwordShown}
						/>
					</InputField>
				</div>

				<div className={styleClass.inputGroup}>
					<label htmlFor="new_password" className="md:w-1/3 font-normal">
						New Password
					</label>

					<InputField className={styleClass.input}>
						<input
							type={NewPasswordShown ? 'text' : 'password'}
							id="new_password"
							onChange={(e) => {
								setForm({ ...form, new_password: e.target.value });
							}}
							required
						/>
						<PasswordButton
							togglePassword={() => setNewPasswordShown(!NewPasswordShown)}
							inputStatus={NewPasswordShown}
						/>
					</InputField>
				</div>

				<div className={styleClass.inputGroup}>
					<label
						htmlFor="confirm_new_password"
						className="md:w-1/3 font-normal"
					>
						Confirm Password
					</label>

					<InputField className={styleClass.input}>
						<input
							type={NewPasswordShown ? 'text' : 'password'}
							id="confirm_new_password"
							onChange={(e) => {
								setForm({ ...form, confirm_new_password: e.target.value });
							}}
							required
						/>
						<PasswordButton
							togglePassword={() => setNewPasswordShown(!NewPasswordShown)}
							inputStatus={NewPasswordShown}
						/>
					</InputField>
				</div>

				<div className="my-14 flex justify-end">
					<StyledButton type="submit">
						{requestPending ? 'Loading...' : 'Save Changes'}
					</StyledButton>
				</div>
			</form>
		</StyledTab>
	);
}

const HeadingLabel = ({ text, sub_text }) => {
	return (
		<div className="md:w-fit">
			<span className="font-semibold">{text}</span>
			{sub_text && (
				<p className="text-[14px] hidden md:block text-[#787A7D]">{sub_text}</p>
			)}
		</div>
	);
};

const PasswordButton = ({ togglePassword, inputStatus }) => {
	return (
		<button onClick={() => togglePassword()} type="button">
			{inputStatus ? <FaRegEyeSlash /> : <FaRegEye />}
		</button>
	);
};

const InputField = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;

	button {
		position: absolute;
		right: 16px;
		font-size: 18px;
		color: #a5a6a8;

		&:hover {
			cursor: pointer;
		}
	}
`;

export default Security;
