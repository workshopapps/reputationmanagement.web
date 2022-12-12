import styled from 'styled-components';
import { useState } from 'react';
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
import { useEffect } from 'react';

const RequestForm = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [rating, setRating] = useState(0); ///set initial state for rating

	//const [checked, setChecked] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [priority, setPriority] = useState(0);
	const [review, setReview] = useState('');
	const [websitename, setWebsiteName] = useState('');
	const [businesstype, setBusinessType] = useState('');
	const { setRequestSuccessfulModalActive, setErrMessage, setRequestFailed } =
		useAppContext();

	const ApiPrivate = useAxiosPrivate();

	const Today = new Date();

	let month = Today.getMonth() + 1;
	let day = Today.getDate();
	const year = Today.getFullYear();
	if (month < 10) month = '0' + month.toString();
	if (day < 10) day = '0' + day.toString();
	const maxDate = year + '-' + month + '-' + day;

	const clearForm = () => {
		// setName()
		setEmail();
		setPriority();
		setReview();
		setWebsiteName();
		setBusinessType();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await ApiPrivate.post('/api/review', {
				email: email,
				timeOfReview: date + 'T' + time,
				reviewString: review,
				rating: rating,
				websiteName: websitename,
				businessType: businesstype,
				priority: priority,
				status: 0,
				complainerName: name,
			});
			console.log(response);
			setRequestSuccessfulModalActive(true);
			clearForm();
		} catch (err) {
			setRequestFailed(true);
			if (err?.response?.status === 400) {
				err.response?.data?.errors.email
					? setErrMessage(err.response?.data?.errors.email)
					: err.response?.data?.errors?.reviewString
					? setErrMessage('The review field is required')
					: err.response?.data?.errors?.websiteName
					? setErrMessage('The website name field is required')
					: err.response?.data?.error?.businessType
					? setErrMessage('The business type is required')
					: setErrMessage('Server error');
			} else {
				setErrMessage("Couldn't fetch requests");
			}
			setRequestSuccessfulModalActive(false);
			console.log(err);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<RequestFailed />
			<StyledDashboard>
				<Sidebar
					className={`${openMenu ? 'open' : ''}`}
					closeMenuHandler={() => setOpenMenu(false)}
				/>
				<WebAppNav openMenuHandler={() => setOpenMenu(true)} />
				<StyledContainer>
					<StyledContainers className="container">
						<h2 className="container-title">Kindly Fill in Your Request</h2>
						{/********************START OF FORM*************************************************/}
						<form className="form">
							<h4 className="form-heading">
								Fill in the details of the individual that drop the bad review
								and the review
							</h4>

							{/********************START OF FORM SECTION A*************************************************/}
							<div className="form-section-a">
								<div className="text-input">
									<label htmlFor="_name"> Name</label>
									<input
										type="text"
										name="_name"
										value={name}
										onChange={(e) => setName(e.target.value)}
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
										onChange={(e) => setEmail(e.target.value)}
										placeholder="johndoe@gmail.com"
										id="email"
										required
									/>
								</div>

								<div className="time-date-picker">
									<div className="date-picker">
										<label htmlFor="date"> Date of review</label>
										<input
											type="date"
											name="date"
											id="date"
											onChange={(e) => setDate(e.target.value)}
											required
											max={maxDate}
										/>
									</div>

									<div className="time-picker">
										<label htmlFor="_name"> Time of review</label>
										<input
											type="time"
											name="time"
											id="time"
											required
											onChange={(e) => setTime(e.target.value)}
										/>
									</div>
								</div>

								<div className="bad-review">
									<div className="bad-review-text">
										<label>The bad review</label>
										<textarea
											rows="4"
											value={review}
											onChange={(e) => setReview(e.target.value)}
										/>
									</div>

									<div className="review-range">
										<Rate
											rating={rating}
											onRating={(rate) => setRating(rate)}
											className="rate"
										/>

										<label htmlFor="vol" className="pt-2">
											Kindly selected the customer rating drop on your
											app/websites
										</label>
									</div>
								</div>
							</div>

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
										onChange={(e) => setWebsiteName(e.target.value)}
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
										onChange={(e) => setBusinessType(e.target.value)}
										placeholder=""
										required
									/>
								</div>

								<div className="priority-level">
									<h3>Priority level</h3>

									<CheckboxGroup setPriority={setPriority} />
								</div>
							</div>

							<div className="btn-submit">
								<button
									onClick={(e) => {
										e.preventDefault();
										handleSubmit(e);
										console.log(priority);
									}}
									type="submit"
								>
									Submit
								</button>
							</div>
						</form>
					</StyledContainers>
				</StyledContainer>
			</StyledDashboard>
		</>
	);
};

export default RequestForm;

const CheckboxGroup = ({ setPriority }) => {
	const [currentValue, setCurrentValue] = useState('');

	return (
		<>
			<Checkbox
				label="High"
				currentValue={currentValue}
				onClick={() => {
					setCurrentValue('High');
					setPriority(3);
					console.log(currentValue);
				}}
			/>
			<Checkbox
				label="Medium"
				currentValue={currentValue}
				onClick={() => {
					setCurrentValue('Medium');
					setPriority(2);
				}}
			/>
			<Checkbox
				label="Low"
				currentValue={currentValue}
				onClick={() => {
					setCurrentValue('Low');
					setPriority(1);
				}}
			/>
			<Checkbox
				label="Not urgent"
				currentValue={currentValue}
				onClick={() => {
					setCurrentValue('Not urgent');
					setPriority(0);
				}}
			/>
		</>
	);
};

const StyledContainers = styled.div`
	padding-bottom: 50px;
	font-family: 'Lato', sans-serif;
	max-width: 640px;
	margin: auto;

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

		.form-section-a {
			.text-input {
				display: flex;
				flex-direction: column;
				margin-top: 16px;
			}

			.time-date-picker {
				margin-top: 16px;
				width: 100%;
				display: flex;
				/* justify-content: space-between; */

				.date-picker,
				.time-picker {
					width: 160px;
					margin-right: 32px;

					input {
						height: 40px;
						padding: 0px 10px 0px 10px;
						width: 100%;
						border: 1px solid #d2d3d4;
						border-radius: 8px;
						outline: none;
					}
					@media (max-width: 365px) {
						margin-bottom: 10px;
					}
				}
				@media (max-width: 365px) {
					flex-direction: column;
				}
			}

			.bad-review {
				margin-top: 16px;

				.bad-review-text {
					display: flex;
					flex-direction: column;
				}

				.review-range {
					display: flex;
					flex-direction: column;
					margin-top: 15px;

					.rate {
						width: 40px;
						font-size: 50px;
						margin-bottom: 8px;
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
			justify-content: flex-start;

			button {
				width: 220px;
				height: 59px;
				background: #233ba9;
				border-radius: 4px;
				padding: 16px 24px;
				font-size: 18px;
				border: none;
				color: white;
				transition: 0.5s;
				margin-left: auto;

				&:hover {
					background: #0a1d88;
				}
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
