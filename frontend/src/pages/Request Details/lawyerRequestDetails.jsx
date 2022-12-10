import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import Checkbox from '../../components/requestFormComponents/checkBox';
import Rate from '../../components/requestFormComponents/rating';
import {
	StyledDashboard,
	StyledContainer,
} from '../../components/Dashboard/Styles/Dashboard.styled';
import useAppContext from '../../hooks/useAppContext';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import RequestFailed from '../../components/request status/requestFailed';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebarr from '../../components/LawyerDashboard/Sidebarr';
import MailModal from '../../modal/mailModal';
import LawyerWebAppNav from '../../components/Reusables/LawyerWebAppNav';

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
			const response = await ApiPrivate.get(`/lawyer/reviews/${requestId}`);
			console.log(response);
			setEmail(response?.data?.email);
			setPriority(response?.data?.priority);
			setName(response?.data?.complainerName);
			setRating(response?.data?.rating);
			setReview(response?.data?.reviewString);
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
			const response = await ApiPrivate.patch(`/lawyer/review/${requestId}`, [
				{
					operationType: 2,
					path: '/status',
					op: 'replace',
					value: 1,
				},
			]);
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
				`/lawyer/ClaimReview?reviewId=${requestId}`
			);
			claimRequest();
			setLoading(false);
			console.log(response);
			setSuccessMessage('Request claimed successfully');
			setRequestSuccess(true);
			clearForm();
			setTimeout(() => {
				router('/lawyer-dashboard');
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
			const response = await ApiPrivate.patch(`/lawyer/review/${requestId}`, [
				{
					operationType: 2,
					path: '/status',
					op: 'replace',
					value: 3,
				},
			]);
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
			const response = await ApiPrivate.patch(`/lawyer/review/${requestId}`, [
				{
					operationType: 2,
					path: '/status',
					op: 'replace',
					value: 4,
				},
			]);
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
						<h2 className="container-title">Complaint Details</h2>
						{/********************START OF FORM*************************************************/}
						<form className="form">
							<h4 className="form-heading">Details of the complainer</h4>

							{/********************START OF FORM SECTION A*************************************************/}
							<div className="form-section-a">
								<div className="text-input">
									<label htmlFor="_name"> Name</label>
									<input
										type="text"
										name="_name"
										value={name}
										readOnly
										placeholder="Enter name of the complainer"
										id="name"
										required
									/>
								</div>

								<div className="text-input">
									<label htmlFor="email">Email Address</label>
									<input
										type="email"
										name="email"
										value={email}
										placeholder="johndoe@gmail.com"
										id="email"
										readOnly
									/>
								</div>

								<div className="time-date-picker">
									<div className="date-picker">
										<label htmlFor="date"> Date of review</label>
										<input
											type="date"
											name="date"
											id="date"
											value={date ? date.substring(0, 10) : ''}
											readOnly
										/>
									</div>

									<div className="time-picker">
										<label htmlFor="_name"> Time of review</label>
										<input
											type="time"
											name="time"
											id="time"
											required
											value={date ? date.substring(11, 16) : ''}
											readOnly
										/>
									</div>
								</div>

								<div className="bad-review">
									<div className="bad-review-text">
										<label>The bad review</label>
										<textarea value={review} readOnly />
									</div>

									<div className="review-range">
										<Rate rating={rating} className="rate" disabled />

										<label htmlFor="vol">
											Kindly selected the customer rating drop on your
											app/websites
										</label>
									</div>
								</div>
							</div>

							{/*****************************START OF FORM  SECTION B******************************************/}
							<div className="form-section-b">
								<h2>Filling in your own details</h2>

								<div className="section-b-input">
									<label htmlFor="name_of_website">
										{' '}
										Name of your website or App
									</label>
									<input
										type="text"
										name="name_of_website"
										value={websitename}
										readOnly
										placeholder=""
										required
									/>
								</div>

								<div className="section-b-input">
									<label htmlFor="business_type">
										What type of business do you run
									</label>
									<input
										type="text"
										name="business_type"
										value={businesstype}
										readOnly
										placeholder=""
										required
									/>
								</div>

								<div className="priority-level">
									<h3>Priority level</h3>

									<div>
										<Checkbox label={3} currentValue={priority} />
									</div>

									<div>
										<Checkbox label={2} currentValue={priority} />
									</div>

									<div>
										<Checkbox label={1} currentValue={priority} />
									</div>

									<div>
										<Checkbox label={0} currentValue={priority} />
									</div>
								</div>
							</div>
							{/***************************************FORM SUBMIT BUTTON**********************************************/}
							<div className="btn-submit">
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
								) : status > 1 ? (
									<div className="done-buttons">
										<button className="delete" onClick={() => requestFailed()}>
											{!failedLoading ? (
												'Request Failed'
											) : (
												<div className="loading"></div>
											)}
										</button>
										<button
											className="submit"
											onClick={() => requestCompleted()}
										>
											{!loading ? (
												'Request Success'
											) : (
												<div className="loading"></div>
											)}
										</button>
									</div>
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

const StyledContainers = styled.div`
	padding-bottom: 50px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

	.container-title1 {
		font-size: 20px;
	}
	.container-title {
		font-size: 24px;
		margin-top: 32px;
		margin-bottom: 1rem;
	}

	.form {
		.form-heading {
			font-size: 16px;
		}

		.form-section-a {
			.text-input {
				display: flex;
				flex-direction: column;
				margin-top: 16px;
				label {
					font-size: 16px;
					margin-bottom: 10px;
				}

				input {
					height: 56px;
					padding: 0px 10px 0px 10px;
					border: 1px solid #d2d3d4;
					border-radius: 8px;
					font-size: 16px;
					outline: none;
				}
			}

			.time-date-picker {
				margin-top: 16px;
				width: 100%;
				display: flex;

				.date-picker,
				.time-picker {
					width: 160px;
					height: 69px;
					margin-right: 32px;

					label {
						font-size: 16px;
						margin-bottom: 10px;
					}

					input {
						height: 40px;
						padding: 0px 10px 0px 10px;
						width: 100%;
						border: 1px solid #d2d3d4;
						border-radius: 8px;
						outline: none;
					}
				}
			}

			.bad-review {
				margin-top: 16px;

				.bad-review-text {
					display: flex;
					flex-direction: column;
					label {
						font-size: 16px;
						margin-bottom: 10px;
					}
					textarea {
						max-height: 190px;
						height: 190px;
						font-size: 16px;
						border: 1px solid #d2d3d4;
						border-radius: 8px;
						padding: 15px;
						outline: none;
					}
				}

				.review-range {
					display: flex;
					flex-direction: column;

					.rate {
						width: 40px;
						margin-top: 10px;
						font-size: 50px;
					}

					label {
						margin-top: 10px;
						font-size: 16px;
					}
				}
			}
		}

		.form-section-b {
			margin-top: 16px;
			h2 {
				font-size: 24px;
			}

			.section-b-input {
				margin-top: 16px;
				display: flex;
				flex-direction: column;

				label {
					font-size: 16px;
					margin-bottom: 10px;
				}

				input {
					height: 56px;
					padding: 0px 10px 0px 10px;
					border: 1px solid #d2d3d4;
					border-radius: 8px;
					font-size: 16px;
					outline: none;
				}
			}

			.priority-level {
				margin-top: 20px;
				h3 {
					font-size: 16px;
				}

				div {
					margin-top: 8px;
					display: flex;
					align-items: center;
				}
			}
		}

		.btn-submit {
			margin-top: 32px;
			display: flex;
			justify-content: flex-end;
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
	}
`;
