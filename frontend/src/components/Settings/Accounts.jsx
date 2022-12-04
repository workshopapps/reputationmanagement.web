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
			<div className="pt-4 mb-8">
				<h3>Company Information</h3>
				<p className="text-[#787A7D]">Update your company information here</p>
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
	const onSubmit = (e) => {
		e.preventDefault();
		setRequestPending(true);
		handleSubmit();
	};

	return (
		<form onSubmit={onSubmit} className={styleClass.form}>
			<div className={styleClass.inputGroup}>
				<label htmlFor="business-name" className={styleClass.inputLabel}>
					Company Name
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
					Email Address
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
