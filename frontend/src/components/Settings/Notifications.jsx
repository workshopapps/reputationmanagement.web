import React from 'react';
import { useState } from 'react';
import useAppContext from '../../hooks/useAppContext';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { StyledButton, styleClass, StyledTab } from './Settings.styled';

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
		email_invoice_receipt: true,
	});

	const onSubmit = (e) => {
		e.preventDefault();
		setRequestPending(true);

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

	const CheckInput = ({ name, checked }) => {
		return (
			<label className="inline-flex relative items-center mr-5 cursor-pointer">
				<input
					type="checkbox"
					id={name}
					name={name}
					value={name}
					className="sr-only peer"
					checked={checked}
					onChange={(e) => {
						setCheckboxGroup((prev) => {
							return { ...prev, [name]: !checked };
						});
					}}
					disabled={name === 'email_invoice_receipt' ? true : false}
				/>
				<div className={checkBoxClass}></div>
			</label>
		);
	};

	return (
		<StyledTab>
			<form onSubmit={onSubmit} className={styleClass.form}>
				<div className={styleClass.inputGroupRow + ' pb-3'}>
					<div className=" w-1/2 md:w-1/2">
						<span className="font-semibold">Email Notifications</span>
						<p className="text-[14px] hidden md:block text-[#787A7D]">
							Set which notifications you would like to receive via mail
						</p>
					</div>
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
						text="Invoice Receipt"
						sub_text="Get a copy of your invoice receipt sent to your mail."
					/>

					<CheckInput
						name="email_invoice_receipt"
						checked={checkboxGroup.email_invoice_receipt}
					/>
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

const HeadingLabel = ({ text, sub_text }) => {
	return (
		<div className="w-1/2 md:w-1/2">
			<span>{text}</span>
			{sub_text && (
				<p className="text-[14px] hidden md:block text-[#787A7D]">{sub_text}</p>
			)}
		</div>
	);
};

const checkBoxClass =
	"w-11 h-6 bg-gray-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500";

export default Notifications;
