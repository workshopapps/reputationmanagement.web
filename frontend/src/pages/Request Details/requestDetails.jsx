import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Checkbox from '../../components/requestFormComponents/checkBox';
import Rate from '../../components/requestFormComponents/rating';
import Sidebar from '../../components/Reusables/Sidebar';
import WebAppNav from '../../components/Reusables/WebAppNav';
import {
	StyledDashboard,
	StyledContainer,
} from '../../components/Dashboard/Styles/Dashboard.styled';
import useAppContext from '../../hooks/useAppContext';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import RequestFailed from '../../components/request status/requestFailed';
import { useLocation, useNavigate } from 'react-router-dom';
import OpenDisputeModal from '../../modal/openDisputeModal';

const RequestDetails = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [rating, setRating] = useState(0); // set initial state for rating
	const router = useNavigate();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [year, setYear] = useState('');
	const [priority, setPriority] = useState();
	const [review, setReview] = useState('');
	const [reviewLink, setReviewLink] = useState('');
	const [websitename, setWebsiteName] = useState('');
	const [businesstype, setBusinessType] = useState('');
	const [requestLoading, RequestLoading] = useState(false);
	const [status, setStatus] = useState();
	const {
		setErrMessage,
		setRequestFailed,
		setRequestSuccess,
		setSuccessMessage,
		// requestSuccess,
		// requestFailed,
	} = useAppContext();

	const [disputeModalActive, setDisputeModalActive] = useState(false);

	const ApiPrivate = useAxiosPrivate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const location = useLocation();
	const requestId = new URLSearchParams(location.search).get('requestId');

	const fetchComplaintDetails = async () => {
		try {
			const response = await ApiPrivate.get(`/api/review/${requestId}`);
			setEmail(response?.data?.email);
			setPriority(response?.data?.priority);
			setName(response?.data?.complainerName);
			setRating(response?.data?.rating);
			setReview(response?.data?.reviewString);
			setReviewLink(response?.data?.reviewLink);
			setWebsiteName(response?.data?.websiteName);
			setDate(response?.data?.timeOfReview);
			setStatus(response?.data?.status);
			setBusinessType(response?.data?.businessType);
		} catch (err) {
			setErrMessage("can't get details of request");
			setRequestFailed(true);
			console.log(err);
		}
	};

	useEffect(() => {
		setYear(date.substring(0, 10) || '');
		setTime(date.substring(11, 16));
	}, [date]);

	const handleSubmitDispute = async (data) => {
		RequestLoading(true);
		try {
			const response = await ApiPrivate.post(`/dispute`, data);
			setSuccessMessage('Dispute created successfully!');
			setRequestSuccess(true);
			setDisputeModalActive(false);
			RequestLoading(false);
		} catch (err) {
			setErrMessage('Dispute creation failed!');
			setRequestFailed(true);
			RequestLoading(false);
			console.log(err);
		}
	};

	useEffect(() => {
		fetchComplaintDetails();
	}, []);

	return (
		<>
			<RequestFailed />
			{disputeModalActive && (
				<OpenDisputeModal
					setDisputeModalActive={setDisputeModalActive}
					handleSubmitDispute={handleSubmitDispute}
					requestLoading={requestLoading}
					requestId={requestId}
				/>
			)}

			<StyledDashboard>
				<Sidebar
					className={`${openMenu ? 'open' : ''}`}
					closeMenuHandler={() => setOpenMenu(false)}
				/>
				<WebAppNav
					pageTitle="Request Details"
					openMenuHandler={() => setOpenMenu(true)}
				/>
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
												onChange={(e) => setName(e.target.value)}
												placeholder="Enter name of the complainer"
												id="name"
												disabled
											/>
										</div>

										<div className="md:w-1/2">
											<label htmlFor="email">Email Address</label>
											<input
												type="email"
												name="email"
												value={email}
												readonly
												onClick={(e) => e.target.blur()}
												placeholder="johndoe@gmail.com"
												id="email"
												disabled
											/>
										</div>
									</div>

									<div className={styleClass.inputGroup}>
										<label>The Negative Review</label>
										<textarea
											value={review}
											disabled
											onClick={(e) => e.target.blur()}
										/>
									</div>

									<div className={styleClass.inputGroup}>
										<div className="review-range">
											<Rate
												rating={rating}
												onRating={(rate) => setRating(rate)}
												className="rate"
												onClick={(e) => e.target.blur()}
												readState={true}
												disabled
											/>

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
												value={year}
												onClick={(e) => e.target.blur()}
												disabled
											/>
										</div>

										<div className="time-picker">
											<label htmlFor="_name"> Time of review</label>
											<input
												type="time"
												id="time"
												value={time}
												onClick={(e) => e.target.blur()}
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
												readonly
												onClick={(e) => e.target.blur()}
												placeholder=""
												disabled
											/>
										</div>

										<div className="md:w-1/2">
											<label htmlFor="business_type">Your Business Type</label>
											<input
												type="text"
												name="business_type"
												readonly
												value={businesstype}
												onClick={(e) => e.target.blur()}
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
							{
								status === 5 && <p className="completed">This Transaction has been completed</p>
							}
							{
								status === 4 && <p className="failed">This Transaction has Failed</p>
							}
							<div className="btn-submit my-10">
								{status >= 3 && (
									<button
										className="disputeBtn"
										onClick={(e) => {
											e.preventDefault();
											setDisputeModalActive(true);
										}}
									>
										Open Dispute
									</button>
								)}

								{status === 3 ? (
									<button
										className="payment"
										onClick={(e) => router(`/payment?requestid=${requestId}`)}
									>
										Make Payment
									</button>
								) : (
									<button
										className="return"
										onClick={(e) => router(`/dashboard`)}
									>
										Return
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

export default RequestDetails;

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
	padding: 40px 0 20px;
	font-family: 'Lato', sans-serif;
	.completed {
		border-radius: 8px;
		padding: 16px;
		border: 1px solid #6ce9a6;
		background-color: #f6fef9;
		margin: 0 auto;
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
		margin-bottom: 4px;
		margin-top: 20px;
	}
	.failed {
		border-radius: 8px;
		padding: 16px;
		border: 1px solid #d83407;
		background-color: rgba(256, 52, 15, 0.1);
		margin: 0 auto;
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
		margin-bottom: 4px;
	}
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
`;

const styleClass = {
	inputGroup: 'mb-6 flex flex-col',
	inputGroupRow:
		'formGroupRow mb-6 flex flex-col gap-3 md:flex-row justify-start md:items-center',
};
