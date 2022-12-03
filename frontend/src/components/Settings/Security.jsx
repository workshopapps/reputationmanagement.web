import React from 'react';
import {
	styleClass,
	StyledButton,
	StyledButtonOutline,
	StyledButtonText,
	StyledTab,
} from './Settings.styled';

function Security() {
	return (
		<StyledTab>
			<form className="py-2">
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
					/>
				</div>

				<div className={styleClass.inputGroup}>
					<label htmlFor="current_password" className="md:w-1/3 font-semibold">
						Confirm New Password
					</label>
					<input
						type="password"
						id="cnf_new_password"
						className={styleClass.input}
					/>
				</div>

				<div className="my-14 flex justify-end">
					<StyledButtonText>Discard</StyledButtonText>
					<StyledButton>Save Changes</StyledButton>
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
