import React, { useState } from 'react';
import avatar from '../../assets/images/Settings/human.svg';
import useAppContext from '../../hooks/useAppContext';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {
	StyledTab,
	StyledButton,
	StyledButtonText,
	styleClass,
} from './Settings.styled';

function Accounts({ user, setUser }) {
	const ApiPrivate = useAxiosPrivate();
	const {
		setRequestFailed,
		setRequestSuccess,
		setErrMessage,
		setSuccessMessage,
	} = useAppContext();
	const [requestPending, setRequestPending] = useState(false);

	const handleSubmit = () => {
		setRequestPending(true);

		if (!user.phoneNumber) {
			setErrMessage('Phone number is required');
			setRequestFailed(true);
			setRequestPending(false);
			return;
		}

		// API request
		ApiPrivate.put('/auth/details', user)
			.then((res) => {
				setSuccessMessage('Updated successfully');
				setRequestSuccess(true);
				setRequestPending(false);
			})
			.catch(function (error) {
				setErrMessage('Update failed');
				setRequestFailed(true);
				setRequestPending(false);
			});
	};

	return (
		<StyledTab>
			<div className="pt-4">
				<h3>Profile Information</h3>
				<p className="text-[#787A7D]">
					This information will be publicly displayed so be careful what you
					fill
				</p>
			</div>
			<AccountForm
				handleSubmit={handleSubmit}
				user={user}
				setUser={setUser}
				requestPending={requestPending}
				setRequestPending={setRequestPending}
			/>
		</StyledTab>
	);
}

const AccountForm = ({
	handleSubmit,
	user,
	setUser,
	requestPending,
	setRequestPending,
}) => {
	const [avatarFile, setAvatarFile] = useState(avatar);

	const onSubmit = (e) => {
		e.preventDefault();
		setRequestPending(true);
		handleSubmit();
	};

	return (
		<form onSubmit={onSubmit} className={styleClass.form}>
			<div className="mt-4 mb-7">
				<label htmlFor="userPhoto">
					<img
						src={avatarFile}
						className="h-[80px] w-[80px] rounded-full object-cover"
						alt="avatar"
					/>
				</label>
				<input
					type="file"
					id="userPhoto"
					className="hidden"
					onChange={(e) => {
						setAvatarFile(URL.createObjectURL(e.target.files[0]));
					}}
				/>
			</div>

			<div className={styleClass.inputGroup}>
				<label htmlFor="business-name" className={styleClass.inputLabel}>
					Business Name
				</label>

				<input
					type="text"
					id="business-name"
					className={styleClass.input}
					value={user.businessEntityName}
					onChange={(e) => {
						setUser({ ...user, businessEntityName: e.target.value });
					}}
				/>
			</div>

			<div className={styleClass.inputGroup}>
				<label htmlFor="email" className={styleClass.inputLabel}>
					Email
				</label>
				<input
					type="email"
					id="email"
					className={styleClass.input}
					value={user.email}
					onChange={(e) => {
						setUser({ ...user, email: e.target.value });
					}}
				/>
			</div>

			<div className={styleClass.inputGroup}>
				<label htmlFor="phoneNumber" className={styleClass.inputLabel}>
					Phone number
				</label>
				<input
					type="text"
					id="phoneNumber"
					className={styleClass.input}
					value={user.phoneNumber}
					onChange={(e) => {
						setUser({ ...user, phoneNumber: e.target.value });
					}}
				/>
			</div>

			<div className="my-14 flex justify-end">
				<StyledButtonText type="reset">Discard</StyledButtonText>
				<StyledButton type="submit">
					{requestPending ? 'Loading...' : 'Save Changes'}
				</StyledButton>
			</div>
		</form>
	);
};

export default Accounts;
