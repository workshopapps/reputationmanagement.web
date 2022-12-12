import React from 'react';
import { useState } from 'react';
import useAppContext from '../../hooks/useAppContext';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { styleClass, StyledButton, StyledTab } from './Settings.styled';

function Preferences({ accessibility, setAccessibility }) {
	const ApiPrivate = useAxiosPrivate();
	const languages = ['english', 'german', 'russian', 'chinese'];
	const [requestPending, setRequestPending] = useState(false);

	const {
		setRequestFailed,
		setRequestSuccess,
		setErrMessage,
		setSuccessMessage,
	} = useAppContext();

	const onSubmit = (e) => {
		e.preventDefault();
		setRequestPending(true);
		console.log(accessibility);

		ApiPrivate.post('/api/customer/accessibility', accessibility)
			.then((res) => {
				setAccessibility(res.data);
				setSuccessMessage('Update successful');
				setRequestSuccess(true);
				setRequestPending(false);
			})
			.catch(function (error) {
				setErrMessage('Update failed');
				setRequestFailed(true);
				setRequestPending(false);
			});
	};

	const CheckInputGroup = ({ id, checked, label }) => {
		return (
			<div className="flex items-center mb-1">
				<input
					className={styleClass.inputCheckClass}
					type="checkbox"
					value={id}
					id={id}
					checked={checked}
					onChange={(e) => {
						setAccessibility((prev) => {
							return { ...prev, [id]: !checked };
						});
					}}
				/>
				<label className="inline-block text-gray-800" htmlFor={id}>
					{label}
				</label>
			</div>
		);
	};

	return (
		<StyledTab>
			<form onSubmit={onSubmit} className={styleClass.form}>
				<div className={styleClass.inputGroup}>
					<label htmlFor="first" className="md:w-1/3 font-semibold">
						Preferred Language
					</label>

					<div className="w-full">
						<select
							className={styleClass.selectClass + ' max-w-[380px]'}
							value={accessibility.language}
							onChange={(e) => {
								setAccessibility((prev) => {
									return { ...prev, language: e.target.value };
								});
							}}
							required
						>
							{languages.map((item) => (
								<option key={item} value={item}>
									{item}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className={styleClass.inputGroup}>
					<label htmlFor="first" className="md:w-1/3 font-semibold">
						Accessibility
					</label>

					<div className="w-full">
						<CheckInputGroup
							id="screenReader"
							checked={accessibility.screenReader}
							label="I use a screen reader"
						/>
						<CheckInputGroup
							id="largeText"
							checked={accessibility.largeText}
							label="I use large text"
						/>
						<CheckInputGroup
							id="highContrast"
							checked={accessibility.highContrast}
							label="I use high contrast colors"
						/>
					</div>
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

export default Preferences;
