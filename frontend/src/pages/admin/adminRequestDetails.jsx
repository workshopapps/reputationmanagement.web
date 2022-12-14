import styled from 'styled-components';
import { useState } from 'react';
import Checkbox from '../../components/requestFormComponents/checkBox';
import Rate from '../../components/requestFormComponents/rating';
import WebAppNav from '../../components/Reusables/WebAppNav';
import {
	StyledDashboard,
	StyledContainer,
} from '../../components/Dashboard/Styles/Dashboard.styled';
import useAppContext from '../../hooks/useAppContext';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import RequestFailed from '../../components/request status/requestFailed';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminSideBar from './adminSideBar';

const AdminRequestDetails = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [rating, setRating] = useState(0); ///set initial state for rating

	const location = useLocation();
	const requestId = new URLSearchParams(location.search).get('requestId');
	//const [checked, setChecked] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [date, setDate] = useState('');
    const [ year, setYear ] = useState('')
	const [time, setTime] = useState('');
	const [priority, setPriority] = useState(0);
	const [review, setReview] = useState('');
	const [reviewLink, setReviewLink] = useState('');
	const [websitename, setWebsiteName] = useState('');
	const [businesstype, setBusinessType] = useState('');
    const [ status, setStatus ] = useState(0)
	const {		
        setRequestFailed,
		setRequestSuccess,
		setErrMessage,
		setSuccessMessage,
    } =
		useAppContext();

	const ApiPrivate = useAxiosPrivate();

    const router = useNavigate();

	const Today = new Date();

	let month = Today.getMonth() + 1;
	let day = Today.getDate();
	const fullyear = Today.getFullYear();
	if (month < 10) month = '0' + month.toString();
	if (day < 10) day = '0' + day.toString();
	const maxDate = fullyear + '-' + month + '-' + day;

    useEffect(() => {
        setTime(
            date.substring(11,16)
        )
        setYear(
            date.substring(0,10)
        )
    },[date])
    const fetchComplaintDetails = async () => {
		try {
			const response = await ApiPrivate.get(`/api/admin/reviews/${requestId}`);
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
        fetchComplaintDetails()
    },[])
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await ApiPrivate.put(`/api/admin/reviews/${requestId}?reviewId=${requestId}`, {
				email: email,
				timeOfReview: year + 'T' + time,
				reviewString: review,
				rating: rating,
				websiteName: websitename,
				businessType: businesstype,
				priority: priority,
				status: status,
				complainerName: name,
				reviewLink: reviewLink,
			});
            setSuccessMessage('Request updated successfully')
            setRequestSuccess(true)
            router(-1)
		} catch (err) {
			setRequestFailed(true);
			setErrMessage("Couldn't update requests");
			setRequestFailed(true)
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
				<AdminSideBar
					className={`${openMenu ? 'open' : ''}`}
					closeMenuHandler={() => setOpenMenu(false)}
				/>
				<WebAppNav
					pageTitle="Request Removal Form"
					openMenuHandler={() => setOpenMenu(true)}
				/>
				<StyledContainer>
					<StyledContainers className="container">
						<form
							className="form"
							onSubmit={(e) => {
								handleSubmit(e);
							}}
						>
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
												required
											/>
										</div>

										<div className="md:w-1/2">
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
									</div>

									<div className={styleClass.inputGroup}>
										<label>The Negative Review</label>
										<textarea
											rows="4"
											value={review}
											onChange={(e) => setReview(e.target.value)}
										/>
									</div>

									<div className={styleClass.inputGroup}>
										<div className="review-range">
											<Rate
												rating={rating}
												onRating={(rate) => setRating(rate)}
												className="rate"
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
											name="name_of_website"
											value={reviewLink}
											onChange={(e) => setReviewLink(e.target.value)}
											placeholder=""
											required
										/>
									</div>

									<div className={styleClass.inputGroupRow}>
										<div className="date-picker">
											<label htmlFor="date"> Date of review</label>
											<input
												type="date"
												name="date"
												id="date"
												onChange={(e) => setYear(e.target.value)}
												required
                                                value={year}
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
                                                value={time}
												onChange={(e) => setTime(e.target.value)}
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
												onChange={(e) => setWebsiteName(e.target.value)}
												placeholder=""
												required
											/>
										</div>

										<div className="md:w-1/2">
											<label htmlFor="business_type">Your Business Type</label>
											<input
												type="text"
												name="business_type"
												value={businesstype}
												onChange={(e) => setBusinessType(e.target.value)}
												placeholder=""
												required
											/>
										</div>
									</div>

									<div className={styleClass.inputGroup + ' mb-1'}>
										<div className="priority-level">
											<label className="pb-1">Priority level</label>
											<CheckboxGroup setPriority={setPriority} priority={priority} />
										</div>
									</div>
								</div>
							</StyledFormCard>
                            <div className="status">
                                <label>Status:</label>
                                <select onChange={(e) => setStatus(e.target.selectedIndex)} value={status}>
                                    <option value={0}>Pending</option>
                                    <option value={1}>In Progress</option>
                                    <option value={2}>In Progress(mail sent)</option>
                                    <option value={3}>Completed</option>
                                    <option value={4}>Failed</option>
                                    <option value={5}>Paid</option>
                                </select>
                            </div>
							<div className="btn-submit">
                                <h4 onClick={() => router(-1)}>Return</h4>
								<button type="submit">Update</button>
							</div>
						</form>
					</StyledContainers>
				</StyledContainer>
			</StyledDashboard>
		</>
	);
};

export default AdminRequestDetails;

const CheckboxGroup = ({ setPriority, priority }) => {
	const [currentValue, setCurrentValue] = useState(priority === 3 ? 'High' : priority === 2 ? 'Medium' : priority === 3 ? 'Low' : 'Not urgent');

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
    .status{
        display: flex;
        gap: 20px;
        margin-top: 20px;
        align-items: center;
        label{
            margin-bottom: 0 !important;
        }
        select{
            border: 1px solid #000000;
            border-radius: 4px;
            height: 40px;
            width: 150px;
            outline: none;
        }
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

const styleClass = {
	inputGroup: 'mb-6 flex flex-col',
	inputGroupRow:
		'formGroupRow mb-6 flex flex-col gap-3 md:flex-row justify-start md:items-center',
};
