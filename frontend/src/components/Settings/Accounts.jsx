import React from 'react';
import avatar from '../../assets/images/Settings/human.svg';
import {
	StyledTab,
	StyledButton,
	StyledButtonText,
	styleClass,
} from './Settings.styled';

function Accounts() {
	return (
		<StyledTab>
			<div className="_heading">
				<h3>Profile Information</h3>
				<p className="text-[#787A7D]">
					This information will be publicly displayed so be careful what you
					fill
				</p>
			</div>

			<form className="py-8">
				<img src={avatar} className="h-[100px] pb-5" alt="avatar" />

				<div className={styleClass.inputGroup}>
					<label htmlFor="first" className={styleClass.inputLabel}>
						First Name
					</label>
					<input type="text" id="first" className={styleClass.input} />
				</div>

				<div className={styleClass.inputGroup}>
					<label htmlFor="last" className={styleClass.inputLabel}>
						Last Name
					</label>
					<input type="text" id="last" className={styleClass.input} />
				</div>

				<div className={styleClass.inputGroup}>
					<label htmlFor="email" className={styleClass.inputLabel}>
						Email
					</label>
					<input type="email" id="email" className={styleClass.input} />
				</div>

				<div className={styleClass.inputGroup}>
					<label htmlFor="phone" className={styleClass.inputLabel}>
						Phone number
					</label>
					<input type="text" id="phone" className={styleClass.input} />
				</div>

				<div className="my-14 flex justify-end">
					<StyledButtonText>Discard</StyledButtonText>
					<StyledButton>Save Changes</StyledButton>
				</div>
			</form>
		</StyledTab>
	);
}

export default Accounts;
