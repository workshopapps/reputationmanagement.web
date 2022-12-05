import React from 'react';
import { useState } from 'react';
import useAppContext from '../../hooks/useAppContext';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {
	StyledButtonOutline,
	StyledButton,
	StyledButtonText,
	styleClass,
	StyledTab,
} from './Settings.styled';

function Notifications() {
	const ApiPrivate = useAxiosPrivate();
	const {
		setRequestFailed,
		setRequestSuccess,
		setErrMessage,
		setSuccessMessage,
	} = useAppContext();

	const [requestPending, setRequestPending] = useState(false);
	const [checkboxGroup, setCheckboxGroup] = useState({
		email_complaint: true,
		email_news_updates: false,
		email_weekly_newsletter: false,
		email_invoice_receipt: true,

		push_complaint: true,
		push_news_updates: false,
		push_weekly_newsletter: false,
		push_invoice_receipt: false,
	});

	const onSubmit = (e) => {
		e.preventDefault();
		setRequestPending(true);

		const data = new FormData(e.target);
		console.log(data.get('email_complaint'));

		console.log(data);
		console.log(checkboxGroup);

		ApiPrivate.post('/customer/notifications', { ...checkboxGroup })
			.then((res) => {
				setSuccessMessage('Updated successfully');
				setRequestSuccess(true);
				setRequestPending(false);
			})
			.catch(function (err) {
				setErrMessage('Update failed');
				setRequestFailed(true);
				setRequestPending(false);
			});
	};

	const emailEnableAll = () => {
		setCheckboxGroup({
			...checkboxGroup,
			email_complaint: true,
			email_news_updates: true,
			email_weekly_newsletter: true,
			email_invoice_receipt: true,
		});
	};

	const pushEnableAll = () => {
		setCheckboxGroup({
			...checkboxGroup,
			push_complaint: true,
			push_news_updates: true,
			push_weekly_newsletter: true,
			push_invoice_receipt: true,
		});
	};

	const CheckInput = ({ name, checked }) => {
		return (
			<label className="inline-flex relative items-center mr-5 cursor-pointer">
				<input
					type="checkbox"
					name={name}
					value={name}
					className="sr-only peer"
					checked={checked}
					onChange={(e) => {
						setCheckboxGroup((prev) => {
							return { ...prev, [name]: !checked };
						});
					}}
				/>
				<div className={checkBoxClass}></div>
			</label>
		);
	};

	return (
		<StyledTab>
			<form onSubmit={onSubmit} className={styleClass.form}>
				<div className="email_group">
					<div className={styleClass.inputGroupRow + ' pb-3'}>
						<HeadingLabel
							text="Email Notifications"
							sub_text="Set which notifications you would like to receive via mail"
						/>
						<StyledButtonOutline onClick={emailEnableAll}>
							Enable all
						</StyledButtonOutline>
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel
							text="Complaint Status"
							sub_text="Get notified about the status of your complaint"
						/>
						<CheckInput
							name="email_complaint"
							checked={checkboxGroup.email_complaint}
						/>
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel
							text="News and Updates"
							sub_text="Stay updated as we bring you news of updates and promotions."
						/>
						<CheckInput
							name="email_news_updates"
							checked={checkboxGroup.email_news_updates}
						/>
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel text="Weekly Newsletter" />

						<CheckInput
							name="email_weekly_newsletter"
							checked={checkboxGroup.email_weekly_newsletter}
						/>
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel
							text="Invoice Receipt"
							sub_text="Get a copy of your invoice receipt sent to your mail."
						/>

						<CheckInput
							name="email_invoice_receipt"
							checked={checkboxGroup.email_invoice_receipt}
						/>
					</div>
				</div>

				<div className="push_group mt-14">
					<div className={styleClass.inputGroupRow + ' pb-3'}>
						<HeadingLabel
							text="Push Notifications"
							sub_text="Set which notifications you would like to receive on the website"
						/>
						<StyledButtonOutline onClick={pushEnableAll}>
							Enable all
						</StyledButtonOutline>
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel
							text="Complaint Status"
							sub_text="Get notified about the status of your complaint"
						/>
						<CheckInput
							name="push_complaint"
							checked={checkboxGroup.push_complaint}
						/>
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel
							text="News and Updates"
							sub_text="Stay updated as we bring you news of updates and promotions."
						/>
						<CheckInput
							name="push_news_updates"
							checked={checkboxGroup.push_news_updates}
						/>
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel text="Weekly Newsletter" />

						<CheckInput
							name="push_weekly_newsletter"
							checked={checkboxGroup.push_weekly_newsletter}
						/>
					</div>

					<div className={styleClass.inputGroupRow}>
						<HeadingLabel
							text="Invoice Receipt"
							sub_text="Get a copy of your invoice receipt sent to your mail."
						/>

						<CheckInput
							name="push_invoice_receipt"
							checked={checkboxGroup.push_invoice_receipt}
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

const checkBoxClass =
	"w-11 h-6 bg-gray-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500";

export default Notifications;
