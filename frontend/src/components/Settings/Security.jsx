import React from 'react';
import { useState } from 'react';
import useAppContext from '../../hooks/useAppContext';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {
	styleClass,
	StyledButton,
	StyledButtonOutline,
	StyledButtonText,
	StyledTab,
} from './Settings.styled';

function Security() {
	const ApiPrivate = useAxiosPrivate();
	const {
		setRequestFailed,
		setRequestSuccess,
		setErrMessage,
		setSuccessMessage,
	} = useAppContext();

	const [requestPending, setRequestPending] = useState(false);
	const [form, setForm] = useState({
		current_password: '',
		new_password: '',
		confirm_new_password: '',
	});

	const onSubmit = (e) => {
		e.preventDefault();
		// Validation
		if (form.new_password.length < 12) {
			setErrMessage('New password must contain a minimum of 12 characters');
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
				<div className={styleClass.inputGroupRow}>
					<HeadingLabel
						text="Two Factor Authentication"
						sub_text="When enabled, your account is further protected from being hacked"
					/>
					<StyledButtonOutline>Enable</StyledButtonOutline>
				</div>

				<div className="w-full mt-12 mb-8">
					<span className="font-semibold">Password</span>
					<p className="text-[14px] hidden md:block text-[#787A7D] ">
						To create a new password, it must contain a minimum of 12 letters,
						an uppercase letter, a number and a character
					</p>
				</div>

				<div className={styleClass.inputGroup}>
					<label htmlFor="current_password" className="md:w-1/3 font-semibold">
						Current Password
					</label>
					<input
						type="password"
						id="current_password"
						className={styleClass.input}
						onChange={(e) => {
							setForm({ ...form, current_password: e.target.value });
						}}
						required
					/>
				</div>

				<div className={styleClass.inputGroup}>
					<label htmlFor="new_password" className="md:w-1/3 font-semibold">
						New Password
					</label>
					<input
						type="password"
						id="new_password"
						className={styleClass.input}
						onChange={(e) => {
							setForm({ ...form, new_password: e.target.value });
						}}
						required
					/>
				</div>

				<div className={styleClass.inputGroup}>
					<label
						htmlFor="confirm_new_password"
						className="md:w-1/3 font-semibold"
					>
						Confirm New Password
					</label>
					<input
						type="password"
						id="confirm_new_password"
						className={styleClass.input}
						onChange={(e) => {
							setForm({ ...form, confirm_new_password: e.target.value });
						}}
						required
					/>
				</div>

				<div className="my-14 flex justify-end">
					<StyledButtonText type="reset">Discard</StyledButtonText>
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

export default Security;
