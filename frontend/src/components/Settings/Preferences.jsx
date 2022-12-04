import React from 'react';
import { useState } from 'react';
import useAppContext from '../../hooks/useAppContext';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {
	styleClass,
	StyledButton,
	StyledButtonText,
	StyledTab,
} from './Settings.styled';

function Preferences({ userLanguage, setUserLanguage }) {
	const languages = ['english', 'german', 'russian', 'chinese'];
	const [requestPending, setRequestPending] = useState(false);
	const ApiPrivate = useAxiosPrivate();
	const {
		setRequestFailed,
		setRequestSuccess,
		setErrMessage,
		setSuccessMessage,
	} = useAppContext();

	const onSubmit = (e) => {
		e.preventDefault();
		setRequestPending(true);

		ApiPrivate.post('/customer/language?language=' + userLanguage)
			.then((res) => {
				setUserLanguage(res.data);
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
					<StyledButton type="submit">
						{requestPending ? 'Loading...' : 'Save Changes'}
					</StyledButton>
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
