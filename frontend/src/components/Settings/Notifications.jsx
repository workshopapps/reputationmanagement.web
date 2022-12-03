import React from 'react';
import {
	StyledButtonOutline,
	StyledButton,
	StyledButtonText,
	styleClass,
	StyledTab,
} from './Settings.styled';

function Notifications() {
	return (
		<StyledTab>
			<form className="py-2">
				<div className="email_group">
					<div className={styleClass.inputGroupRow}>
						<HeadingLabel
							text="Email Notifications"
							sub_text="Set which notifications you would like to receive via mail"
						/>
						<StyledButtonOutline>Enable all</StyledButtonOutline>
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel
							text="Complaint Status"
							sub_text="Get notified about the status of your complaint"
						/>
						<CheckInput value="complaint-status" checked={true} />
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel
							text="News and Updates"
							sub_text="Stay updated as we bring you news of updates and promotions."
						/>
						<CheckInput value="news-and-updates" />
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel text="Weekly Newsletter" />
						<CheckInput value="weekly-newsletter" />
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel
							text="Invoice Receipt"
							sub_text="Get a copy of your invoice receipt sent to your mail."
						/>
						<CheckInput value="invoice-receipt" />
					</div>
				</div>

				<div className="push_group mt-14">
					<div className={styleClass.inputGroupRow}>
						<HeadingLabel
							text="Push Notifications"
							sub_text="Set which notifications you would like to receive on the website"
						/>
						<StyledButtonOutline>Enable all</StyledButtonOutline>
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel
							text="Complaint Status"
							sub_text="Get notified about the status of your complaint"
						/>
						<CheckInput value="complaint-status" />
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel
							text="News and Updates"
							sub_text="Stay updated as we bring you news of updates and promotions."
						/>
						<CheckInput value="news-and-updates" />
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel text="Weekly Newsletter" />
						<CheckInput value="weekly-newsletter" />
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel
							text="Invoice Receipt"
							sub_text="Get a copy of your invoice receipt sent to your mail."
						/>
						<CheckInput value="invoice-receipt" />
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

const HeadingLabel = ({ text, sub_text }) => {
	return (
		<div className="w-1/2 md:w-1/2">
			<span className="font-semibold">{text}</span>
			{sub_text && (
				<p className="text-[14px] hidden md:block text-[#787A7D]">{sub_text}</p>
			)}
		</div>
	);
};

const CheckInput = ({ id, value, checked }) => {
	return (
		<label className="inline-flex relative items-center mr-5 cursor-pointer">
			<input
				type="checkbox"
				value={value}
				className="sr-only peer"
				id={id}
				defaultChecked={checked}
			/>

			<div className="w-11 h-6 bg-gray-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
		</label>
	);
};

export default Notifications;
