import styled from 'styled-components';
import React, { useState } from 'react';
import closeBtn from '../assets/images/Dashboard/x.svg';

const OpenDisputeModal = ({
	requestLoading,
	setDisputeModalActive,
	handleSubmitDispute,
}) => {
	const [complaint, setComplaint] = useState('');
	const [message, setMessage] = useState('');
	const [reason, setReason] = useState('Unresolved');
	const [file, setFile] = useState(null);

	return (
		<StyledOverlay>
			<div className="modal">
				<div className="modalHeader">
					<h3>Open Dispute</h3>
					<img
						src={closeBtn}
						alt="close-btn"
						onClick={() => setDisputeModalActive(false)}
					/>
				</div>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmitDispute({
							emailSubject: complaint,
							reason,
							emailBody: message,
							fromEmail: localStorage.getItem('auth'),
							file,
						});
					}}
				>
					<div className={inputGroup}>
						<label>Complaint</label>
						<input
							type="text"
							value={complaint}
							onChange={(e) => setComplaint(e.target.value)}
							required
						/>
					</div>

					<div className={inputGroup}>
						<label>Reason</label>
						<select
							type="text"
							value={reason}
							onChange={(e) => setReason(e.target.value)}
							required
						>
							<option value="Unresolved">Unresolved</option>
							<option value="Delayed Request">Delayed Request</option>
							<option value="Other">Other</option>
						</select>
					</div>

					<div className={inputGroup}>
						<label>Message</label>
						<textarea
							rows="3"
							value={message}
							placeholder="Please explain to us the reason for this dispute."
							onChange={(e) => setMessage(e.target.value)}
							required
						/>
					</div>

					<div className={inputGroup}>
						<label>Attach file</label>
						<input
							type="file"
							onChange={(e) => setFile(e.target.value)}
							multiple
						/>
					</div>

					<div className="pt-3 mb-4 flex">
						<StyledButton type="submit">
							{requestLoading ? 'Loading...' : 'Send Request'}
						</StyledButton>
						<StyledButtonText
							type="button"
							onClick={() => setDisputeModalActive(false)}
						>
							Cancel
						</StyledButtonText>
					</div>
				</form>
			</div>
		</StyledOverlay>
	);
};

export default OpenDisputeModal;

export const StyledOverlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: #1111114d;
	display: flex;
	left: 0;
	justify-content: center;
	align-items: center;
	z-index: 9;

	.modal {
		color: #2b2c34;
		background-color: #ffffff;
		width: 90%;
		max-width: 480px;
		/* max-height: 80%; */
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.modalHeader {
			display: flex;
			width: 100%;
			justify-content: space-between;
			padding: 16px;
			background: #f9f8fd;

			img {
				width: 32px;
			}
		}

		form {
			width: 100%;
			padding: 12px 20px;

			label {
				font-weight: 500;
			}

			input,
			textarea,
			select {
				width: 100%;
				border: 1px solid #d2d3d4;
				border-radius: 8px;
				padding: 0.6rem 0.8rem;
				outline: none;

				&:focus {
					border: 1px solid #f16f04;
				}
			}
			select {
				text-transform: capitalize;
			}

			input[type='file'] {
				padding: 0;
				border: none;
				margin-top: 5px;
			}
			input[type='file']::file-selector-button {
				margin-right: 20px;
				color: #f16f04;
				border: 1px solid #f16f04;
				background: #fff;
				padding: 10px 20px;
				border-radius: 10px;
				cursor: pointer;
			}

			input[type='file']::file-selector-button:hover {
				background: #f1f1f1;
				color: #f16f04;
			}
		}

		h3 {
			font-family: Lato;
			font-size: 26px;
			font-weight: 600;
			line-height: 35px;
			letter-spacing: 0em;
			text-align: center;
			max-width: 364px;
			color: #2b2c34;
		}
	}

	.buttons {
		display: flex;
		gap: 70px;
		font-family: Lato;
		font-size: 16px;
		font-weight: 600;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: center;
		color: #ffffff;
		margin-top: 62px;
		.delete {
			height: 48px;
			width: 143px;
			border-radius: 4px;
			background-color: #f04438;
		}
		.cancel {
			height: 48px;
			width: 143px;
			border-radius: 4px;
			background-color: #233ba9;
		}
	}
`;

export const StyledButton = styled.button`
	background-color: #f16f04;
	color: #fff;
	padding: 10px 30px;
	border-radius: 3px;
	border: none;
	text-align: center;
`;

export const StyledButtonText = styled.button`
	color: #f16f04;
	padding: 10px;
	margin: 0 30px;
	border-radius: 3px;
	border: none;
	text-align: center;
`;

const inputGroup = 'mb-4 flex flex-col gap-2 justify-start ';
