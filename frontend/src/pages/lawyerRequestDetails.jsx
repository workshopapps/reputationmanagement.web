import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import Checkbox from '../components/requestFormComponents/checkBox';
import Rate from '../components/requestFormComponents/rating';
import {
	StyledDashboard,
	StyledContainer,
} from '../components/Dashboard/Styles/Dashboard.styled';
import useAppContext from '../hooks/useAppContext';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import RequestFailed from '../components/request status/requestFailed';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebarr from '../components/LawyerDashboard/Sidebarr';
import MailModal from '../modal/mailModal';
import LawyerWebAppNav from '../components/Reusables/LawyerWebAppNav';

const LawyerRequestDetails = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [rating, setRating] = useState(0); ///set initial state for rating
	const router = useNavigate();
	//const [checked, setChecked] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [date, setDate] = useState('');
	const [priority, setPriority] = useState();
	const [status, setStatus] = useState();
	const [review, setReview] = useState('');
	const [reviewLink, setReviewLink] = useState('');
	const [websitename, setWebsiteName] = useState('');
	const [businesstype, setBusinessType] = useState('');
	const [loading, setLoading] = useState(false);
	const [failedLoading, setFailedLoading] = useState(false);
	const {
		setErrMessage,
		setRequestFailed,
		setRequestSuccess,
		setSuccessMessage,
		mailModalActive,
		setMailModalActive,
	} = useAppContext();

	const ApiPrivate = useAxiosPrivate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const clearForm = () => {
		// setName()
		setEmail();
		setPriority();
		setReview();
		setWebsiteName();
		setBusinessType();
	};

	const location = useLocation();
	const requestId = new URLSearchParams(location.search).get('requestId');

	const fetchComplaintDetails = useCallback(async () => {
		try {
			const response = await ApiPrivate.get(`/api/lawyer/reviews/${requestId}`);
			console.log(response);
			setEmail(response?.data?.email);
			setPriority(response?.data?.priority);
			setName(response?.data?.complainerName);
			setRating(response?.data?.rating);
			setReview(response?.data?.reviewString);
			setReviewLink(response?.data?.reviewLink);
			setPriority(response?.data?.priority);
			setWebsiteName(response?.data?.websiteName);
			setDate(response?.data?.createdAt);
			setStatus(response?.data?.status);
			setBusinessType(response?.data?.businessType);
		} catch (err) {
			setErrMessage("can't get details of request");
			setRequestFailed(true);
			console.log(err);
		}
	}, [ApiPrivate, requestId, setErrMessage, setRequestFailed]);

	useEffect(() => {
		fetchComplaintDetails();
	}, [fetchComplaintDetails]);

	const claimRequest = async () => {
		try {
			const response = await ApiPrivate.patch(
				`/api/lawyer/review/${requestId}`,
				[
					{
						operationType: 2,
						path: '/status',
						op: 'replace',
						value: 1,
					},
				]
			);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};
	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();
		try {
			const response = await ApiPrivate.post(
				`/api/lawyer/ClaimReview?reviewId=${requestId}`
			);
			claimRequest();
			setLoading(false);
			console.log(response);
			setSuccessMessage('Request claimed successfully');
			setRequestSuccess(true);
			clearForm();
			setTimeout(() => {
				router('/requests');
			}, 2000);
		} catch (err) {
			if (err?.response?.status === 400) {
				setErrMessage('Request already claimed');
			} else {
				setErrMessage('Unable to claim request');
			}
			setLoading(false);
			setRequestFailed(true);
			console.log(err);
		}
	};
	const requestCompleted = async () => {
		setLoading(true);
		try {
			const response = await ApiPrivate.patch(
				`/api/lawyer/review/${requestId}`,
				[
					{
						operationType: 2,
						path: '/status',
						op: 'replace',
						value: 3,
					},
				]
			);
			setLoading(false);
			console.log(response);
			setSuccessMessage('Request has been marked as completed');
			setRequestSuccess(true);
			setTimeout(() => {
				router('/requests');
			}, 2000);
		} catch (err) {
			setLoading(false);
			console.log(err);
			setErrMessage("Couldn't mark request as completed");
			setRequestFailed(true);
		}
	};
	const requestFailed = async () => {
		setFailedLoading(true);
		try {
			const response = await ApiPrivate.patch(
				`/api/lawyer/review/${requestId}`,
				[
					{
						operationType: 2,
						path: '/status',
						op: 'replace',
						value: 4,
					},
				]
			);
			setFailedLoading(false);
			console.log(response);
			setSuccessMessage('Request has been marked as failed');
			setRequestSuccess(true);
			setTimeout(() => {
				router('/requests');
			}, 2000);
		} catch (err) {
			setFailedLoading(false);
			console.log(err);
			setErrMessage("Couldn't mark request as failed");
			setRequestFailed(true);
		}
	};
	return (
		<>
			{mailModalActive && <MailModal userEmail={email} requestId={requestId} />}
			<RequestFailed />
			<StyledDashboard>
				<Sidebarr
					className={`${openMenu ? 'open' : ''}`}
					closeMenuHandler={() => setOpenMenu(false)}
				/>
				<LawyerWebAppNav openMenuHandler={() => setOpenMenu(true)} />

				<StyledContainer>
					<StyledContainers className="container">
						<form className="form">
							<StyledFormCard className="mb-10 md:mb-12">
								<div className="card_header">
									<h2>Complaints Details</h2>
									<p>Details of the complainer and negative review</p>
								</div>

								<div className="card_body">
									<div className={styleClass.inputGroupRow}>
										<div className="md:w-1/2">
											<label htmlFor="_name"> Name</label>
											<input
												type="text"
												name="_name"
												value={name}
												disabled
												placeholder="Enter name of the complainer"
												id="name"
												required
											/>
										</div>

										<div className="md:w-1/2">
											<label htmlFor="email">Email Address</label>
											<input
												type="email"
												name="email"
												value={email}
												placeholder="johndoe@gmail.com"
												id="email"
												disabled
											/>
										</div>
									</div>

									<div className={styleClass.inputGroup}>
										<label>The Negative Review</label>
										<textarea value={review} disabled />
									</div>

									<div className={styleClass.inputGroup}>
										<div className="review-range">
											<Rate rating={rating} className="rate" disabled />

											<label htmlFor="vol" className="pt-3">
												Kindly selected the customer rating drop on your
												app/websites
											</label>
										</div>
									</div>

									<div className={styleClass.inputGroup}>
										<label htmlFor="name_of_website">
											Where is the review? (e.g Link to the review)
										</label>
										<input
											type="text"
											id="name_of_website"
											value={reviewLink}
											onClick={(e) => e.target.blur()}
											disabled
										/>
									</div>

									<div className={styleClass.inputGroupRow}>
										<div className="date-picker">
											<label htmlFor="date"> Date of review</label>
											<input
												type="date"
												name="date"
												id="date"
												value={date ? date.substring(0, 10) : ''}
												disabled
											/>
										</div>

										<div className="time-picker">
											<label htmlFor="_name"> Time of review</label>
											<input
												type="time"
												id="time"
												required
												value={date ? date.substring(11, 16) : ''}
												disabled
											/>
										</div>
									</div>
								</div>
							</StyledFormCard>

							<StyledFormCard>
								<div className="card_header">
									<h2>Your Details</h2>
									<p>Details of your business</p>
								</div>

								<div className="card_body">
									<div className={styleClass.inputGroupRow}>
										<div className="md:w-1/2">
											<label htmlFor="_name">Name of your Website or App</label>
											<input
												type="text"
												name="name_of_website"
												value={websitename}
												placeholder=""
												required
												disabled
											/>
										</div>

										<div className="md:w-1/2">
											<label htmlFor="business_type">Your Business Type</label>
											<input
												type="text"
												name="business_type"
												value={businesstype}
												readOnly
												placeholder=""
												disabled
											/>
										</div>
									</div>

									<div className={styleClass.inputGroup + ' mb-1'}>
										<div className="priority-level">
											<label className="pb-1">Priority level</label>

											<Checkbox label="High" checked={priority === 3} />
											<Checkbox label="Medium" checked={priority === 2} />
											<Checkbox label="Low" checked={priority === 1} />
											<Checkbox label="Not urgent" checked={priority === 0} />
										</div>
									</div>
								</div>
							</StyledFormCard>

							<div className="btn-submit my-10">
								{status === 1 ? (
									<button
										className="submit"
										onClick={(e) => {
											e.preventDefault();
											setMailModalActive(true);
										}}
									>
										Send Mail
									</button>
								) : status === 2 ? (
									<div className="done-buttons">
										<button
											className="delete"
											onClick={(e) => {
												e.preventDefault();
												requestFailed();
											}}
										>
											{!failedLoading ? (
												'Request Failed'
											) : (
												<div className="loading"></div>
											)}
										</button>
										<button
											className="submit"
											onClick={(e) => {
												e.preventDefault();
												requestCompleted();
											}}
										>
											{!loading ? (
												'Request Success'
											) : (
												<div className="loading"></div>
											)}
										</button>
									</div>
								) : status === 3 ? (
									<p className="completed">This request has been completed</p>
								) : status === 4 ? (
									<p className="failed">
										This request had been marked as failed
									</p>
								) : (
									<button className="submit" onClick={(e) => handleSubmit(e)}>
										{!loading ? (
											'Claim Ticket'
										) : (
											<div className="loading"></div>
										)}
									</button>
								)}
							</div>
						</form>
					</StyledContainers>
				</StyledContainer>
			</StyledDashboard>
		</>
	);
};

export default LawyerRequestDetails;

const StyledFormCard = styled.div`
	background: #fff;
	border: 1px solid #a5a6a8;
	border-radius: 4px;
	overflow: hidden;

	.card_header {
		background: #f2f2f2;
		color: #111;
		padding: 12px 16px;

		h2 {
			font-weight: 600;
			font-size: 18px;
			line-height: 35px;
		}
	}

	.card_body {
		padding: 24px 16px;
	}
`;

const StyledContainers = styled.div`
	padding: 40px 0px;
	margin: 0 auto;
	font-family: 'Lato', sans-serif;

	.form {
		label {
			display: block;
			font-size: 16px;
			margin-bottom: 10px;
		}

		input {
			height: 50px;
			width: 100%;
			padding: 0px 12px;
			border: 1px solid #d2d3d4;
			border-radius: 8px;
			font-size: 16px;
			outline: none;
		}

		textarea {
			width: 100%;
			font-size: 16px;
			border: 1px solid #d2d3d4;
			border-radius: 8px;
			padding: 15px;
			outline: none;
		}

		.date-picker,
		.time-picker {
			width: 100%;
			max-width: 220px;

			input {
				height: 40px;
				padding: 0px 10px 0px 10px;
				width: 100%;
				border: 1px solid #d2d3d4;
				border-radius: 8px;
				outline: none;
			}
		}

		.review-range {
			display: flex;
			flex-direction: column;

			.rate {
				width: 40px;
				font-size: 50px;
				margin-bottom: 8px;
			}
			label {
				margin: 0;
			}
		}

		.section-b-input {
			margin-top: 16px;
			display: flex;
			flex-direction: column;
		}

		.priority-level {
			h3 {
				font-size: 16px;
			}

			div {
				margin-top: 8px;
				display: flex;
				align-items: center;
			}
		}

		.btn-submit {
			/* margin-top: 40px; */
			display: flex;
			justify-content: flex-end;

			button {
				height: 50px;
				width: 180px;
				border-radius: 4px;
				text-align: center;
				font-weight: 600;
				font-size: 16px;
				border: none;
				transition: 0.5s;
			}

			.payment,
			.return {
				background: #233ba9;
				color: #fff;

				&:hover {
					background: #0a1d88;
				}
			}
			.disputeBtn {
				border: 1px solid #f16f04;
				color: #f16f04;
				background-color: transparent;
				margin-right: 16px;
			}

			@media (max-width: 500px) {
				justify-content: center;

				button {
					width: 100%;
				}
			}
		}
	}
	.btn-submit {
		margin-top: 32px;
		display: flex;
		justify-content: flex-end;
		.completed {
			border-radius: 8px;
			padding: 16px;
			border: 1px solid #6ce9a6;
			background-color: #f6fef9;
			margin: 20px auto;
			max-width: 90%;
			@media (max-width: 470px) {
				height: auto;
				max-height: max-content;
			}
			max-width: 400px;
			font-size: 14px;
			font-weight: 700;
			line-height: 20px;
			letter-spacing: 0em;
			text-align: center;
			color: #027a48;
		}
		.failed {
			border-radius: 8px;
			padding: 16px;
			border: 1px solid #d83407;
			background-color: rgba(256, 52, 15, 0.1);
			margin: 20px auto;
			max-width: 90%;
			@media (max-width: 470px) {
				height: auto;
				max-height: max-content;
			}
			font-size: 14px;
			font-weight: 700;
			line-height: 20px;
			letter-spacing: 0em;
			text-align: left;
			color: #d8340f;
		}
		.done-buttons {
			@media (max-width: 497px) {
				display: flex;
				flex-direction: column;
				gap: 30px;
				button {
					margin: 0 auto;
				}
			}
		}
		.submit {
			width: 192px;
			height: 59px;
			background: #233ba9;
			border-radius: 4px;
			padding: 16px 24px;
			font-size: 18px;
			border: none;
			color: white;
			transition: 0.5s;

			&:hover {
				background: #0a1d88;
			}
			.loading {
				width: 20px;
				height: 20px;
				border: 2px solid #fff;
				border-bottom-color: transparent;
				border-radius: 50%;
				display: inline-block;
				box-sizing: border-box;
				animation: rotation 1s linear infinite;
				margin: 0 !important;
				padding: 10px;
				@keyframes rotation {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
			}
		}
		.delete {
			height: 59px;
			width: 192px;
			border-radius: 4px;
			border: 1px solid rgba(240, 55, 56, 1);
			font-family: Lato;
			font-size: 18px;
			font-weight: 600;
			line-height: 27px;
			letter-spacing: 0em;
			text-align: center;
			color: rgba(240, 55, 56, 1);
			background-color: transparent;
			margin-right: 16px;
		}

		@media (max-width: 500px) {
			justify-content: center;

			button {
				width: 100%;
			}
		}
	}
`;

const styleClass = {
	inputGroup: 'mb-6 flex flex-col',
	inputGroupRow:
		'formGroupRow mb-6 flex flex-col gap-3 md:flex-row justify-start md:items-center',
};
