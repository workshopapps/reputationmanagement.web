import React, { useState } from 'react';
import avatar from '../../assets/images/Settings/human.svg';
import {
	StyledTab,
	StyledButton,
	StyledButtonText,
	styleClass,
} from './Settings.styled';

function Accounts() {
	const handleSubmit = (form) => {
		console.log(form);
		// Call API here
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
			<AccountForm handleSubmit={handleSubmit} />
		</StyledTab>
	);
}

const AccountForm = ({ handleSubmit }) => {
	const [form, setForm] = useState({
		BusinessName: 'Raya',
		email: 'raya@enterprise.ng',
		phone: '09038254560',
		photo: avatar,
	});

	const onSubmit = (e) => {
		e.preventDefault();
		handleSubmit(form);
	};

	return (
		<form onSubmit={onSubmit} className={styleClass.form}>
			<div className="mt-4 mb-7">
				<label htmlFor="userPhoto">
					<img
						src={form.photo}
						className="h-[80px] w-[80px] rounded-full object-cover"
						alt="avatar"
					/>
				</label>
				<input
					type="file"
					id="userPhoto"
					className="hidden"
					onChange={(e) => {
						console.log(e.target.files[0]);
						setForm({ ...form, photo: URL.createObjectURL(e.target.files[0]) });
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
					value={form.BusinessName}
					onChange={(e) => {
						setForm({ ...form, BusinessName: e.target.value });
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
					value={form.email}
					onChange={(e) => {
						setForm({ ...form, email: e.target.value });
					}}
				/>
			</div>

			<div className={styleClass.inputGroup}>
				<label htmlFor="phone" className={styleClass.inputLabel}>
					Phone number
				</label>
				<input
					type="text"
					id="phone"
					className={styleClass.input}
					value={form.phone}
					onChange={(e) => {
						setForm({ ...form, phone: e.target.value });
					}}
				/>
			</div>

			<div className="my-14 flex justify-end">
				<StyledButtonText type="reset">Discard</StyledButtonText>
				<StyledButton type="submit">Save Changes</StyledButton>
			</div>
		</form>
	);
};

export default Accounts;
