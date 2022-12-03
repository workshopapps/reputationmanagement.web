import React from 'react';
import {
	styleClass,
	StyledButton,
	StyledButtonText,
	StyledTab,
} from './Settings.styled';

function Preferences() {
	return (
		<StyledTab>
			<form className="py-2">
				<div className={styleClass.inputGroup}>
					<label htmlFor="first" className="md:w-1/3 font-semibold">
						Preferred Language
					</label>

					<select className={styleClass.selectClass}>
						<option value="English" selected>
							English
						</option>
						<option value="FR">French</option>
						<option value="ES">Spanish</option>
						<option value="JP">Japanese</option>
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
					<StyledButtonText>Discard</StyledButtonText>
					<StyledButton>Save Changes</StyledButton>
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
