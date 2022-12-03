import React from 'react';
import useAppContext from '../../hooks/useAppContext';
import { CustomApiPrivate } from './Main';
import {
	styleClass,
	StyledButton,
	StyledButtonText,
	StyledTab,
} from './Settings.styled';

function Preferences({ userLanguage, setUserLanguage }) {
	const languages = ['english', 'german', 'russian', 'chinese'];
	const {
		setRequestFailed,
		setRequestSuccess,
		setErrMessage,
		setSuccessMessage,
	} = useAppContext();

	const onSubmit = (e) => {
		e.preventDefault();
		CustomApiPrivate.post('/customer/language?language=' + userLanguage)
			.then((res) => {
				setUserLanguage(res.data);
				setSuccessMessage('Update successful');
				setRequestSuccess(true);
			})
			.catch(function (error) {
				setErrMessage('Update failed');
				setRequestFailed(true);
			});
	};

	return (
		<StyledTab>
			<form onSubmit={onSubmit} className={styleClass.form}>
				<div className={styleClass.inputGroup}>
					<label htmlFor="first" className="md:w-1/3 font-semibold">
						Preferred Language
					</label>

					<select
						className={styleClass.selectClass}
						value={userLanguage}
						onChange={(e) => setUserLanguage(e.target.value)}
						required
					>
						{languages.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>
				</div>

				<div className={styleClass.inputGroup}>
					<label htmlFor="first" className="md:w-1/3 font-semibold">
						Accessibility
					</label>

					<div className="w-full">
						<CheckInputGroup id="screen-reader" label="I use a screen reader" />
						<CheckInputGroup id="large-text" label="I use large text" />
						<CheckInputGroup
							id="contrast-colors"
							label="I use high contrast colors"
						/>
					</div>
				</div>

				<div className="my-14 flex justify-end">
					<StyledButtonText type="reset">Discard</StyledButtonText>
					<StyledButton type="submit">Save Changes</StyledButton>
				</div>
			</form>
		</StyledTab>
	);
}

const CheckInputGroup = ({ id, label }) => {
	return (
		<div className="flex items-center">
			<input
				className={styleClass.inputCheckClass}
				type="checkbox"
				value={id}
				id={id}
			/>
			<label className="inline-block text-gray-800" htmlFor={id}>
				{label}
			</label>
		</div>
	);
};

export default Preferences;
