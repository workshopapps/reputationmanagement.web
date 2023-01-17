import pay_icon from '../assets/images/payment page/check.svg';
import mater from '../assets/images/payment page/master.svg';
import visa from '../assets/images/payment page/visa.svg';
import verve from '../assets/images/payment page/verve.svg';
import Sidebar from '../components/Reusables/Sidebar';
import WebAppNav from '../components/Reusables/WebAppNav';
import { useState } from 'react';
import styled from 'styled-components';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Payment = () => {
	const name = localStorage.getItem('user');
	const email = localStorage.getItem('auth');
	const [priority, setPriority] = useState(null);
	const [amount, setAmount] = useState(0);

	const publicKey = process.env.REACT_APP_PAYMENT_KEY;
	const ApiPrivate = useAxiosPrivate();
	const router = useNavigate();
	const location = useLocation();
	const requestId = new URLSearchParams(location.search).get('requestid');

	useEffect(() => {
		fetchDetails();
	}, []);

	const fetchDetails = async () => {
		try {
			const response = await ApiPrivate.get(`/api/review/${requestId}`);
			setPriority(response?.data?.priority);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		priority === 3
			? setAmount(30)
			: priority === 2
			? setAmount(20)
			: priority === 1
			? setAmount(10)
			: setAmount(5);
	}, [priority]);

	const savePayment = async () => {
		try {
			const response = await ApiPrivate.patch(`/api/review/${requestId}`, [
				{
					operationType: 2,
					path: '/status',
					op: 'replace',
					value: 5,
				},
			]);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	const fwConfig = {
		public_key: 'FLWPUBK_TEST-899eed6270b7047fb904db68bcde3304-X',
		tx_ref: Date.now(),
		amount: amount,
		currency: 'USD',
		payment_options: 'card',
		customer: {
			email,
			name,
		},
		customizations: {
			title: 'Repute',
			logo: 'https://repute.legal/fav.svg',
		},
		text: 'Pay Now!',
		callback: (res) => {
			savePayment();
			closePaymentModal();
			router('/dashboard');
		},
		onClose: () => {},
	};

	const [openMenu, setOpenMenu] = useState(false);

	return (
		<>
			<Sidebar
				className={`${openMenu ? 'open' : ''}`}
				closeMenuHandler={() => setOpenMenu(false)}
			/>
			<WebAppNav openMenuHandler={() => setOpenMenu(true)} />

			<StyledSection>
				<StyledBox>
					<div>
						<Section1>
							<img src={pay_icon} alt="check icon" />
							<h1>Your request has been completed</h1>

							<h5>
								We will start processing your request as soon as we receive
								payment. You will receive an email for payment confirmation
								within 24 hours of receiving payment.
							</h5>
						</Section1>

						<Section2>
							<div>
								<div>order No</div>
								<Second>{requestId.substring(0, 8)}</Second>
							</div>

							<div>
								<div>Email</div>
								<Second>{email}</Second>
							</div>

							<div>
								<div>Amount</div>
								<Third>${amount}</Third>
							</div>
						</Section2>

						<Section3>
							<h1>Proceed to Payment</h1>
							<img src={mater} alt="" />
							<img src={visa} alt="" />
							<img src={verve} alt="" />
						</Section3>

						<FlutterWaveButton {...fwConfig} className="flutterwavebutton" />
					</div>
				</StyledBox>
			</StyledSection>
		</>
	);
};

export default Payment;

const StyledSection = styled.section`
	padding-left: 400px;
	padding-right: 100px;
	display: flex;
	justify-content: center;
	align-items: center;

	.flutterwavebutton {
		background-color: #233ba9;
		color: white;
		width: 400px;
		height: 55px;
		margin: 0 auto;
		display: block;
		margin-top: 30px;
		border-radius: 4px;
		max-width: 80%;
	}

	@media (max-width: 1140px) {
		padding-left: 0px;
		padding-right: 0px;
	}

	@media (min-width: 1950px) {
		height: 100vh;
	}
`;

const StyledBox = styled.div`
	width: 100%;
	max-width: 900px;
	box-shadow: 0px 6px 24px rgba(120, 122, 125, 0.15);
	border-radius: 10px;
	padding: 50px 154px 50px 154px;
	margin-bottom: 50px;
	margin-top: 50px;

	@media (max-width: 1300px) {
		padding: 50px 90px 50px 90px;
	}
	@media (max-width: 1140px) {
		max-width: 700px;
		padding: 50px 100px 50px 100px;
	}

	@media (max-width: 860px) {
		max-width: 600px;
		padding: 50px 60px 50px 60px;
	}

	@media (max-width: 600px) {
		max-width: 100%;
		padding: 50px 40px 50px 40px;
	}
`;

const Section1 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: center;

	img {
		width: 100px;
	}

	h1 {
		font-weight: 700;
		font-size: 28px;
		line-height: 150%;
		margin-bottom: 20px;
		margin-top: 20px;

		@media (max-width: 600px) {
			font-weight: 600;
			font-size: 20px;
		}
	}

	h5 {
		//width:600px ;
		font-weight: 400;
		font-size: 16px;
		line-height: 150%;
		margin-top: 20px;

		@media (max-width: 600px) {
			font-size: 14px;
		}
	}
`;

const Section2 = styled.div`
	margin-top: 31px;

	div {
		display: flex;
		//justify-content: space-between;
		height: 57px;
		border-bottom: 1px solid #c9b9b9;

		div {
			width: 50%;
			display: inline-flex;
			align-items: center;
			padding: 10px;
		}
	}
`;

const Second = styled.div`
	justify-content: right;
	background-color: #fdf8f8;
`;
const Third = styled.div`
	justify-content: right;
`;

const Section3 = styled.div`
	position: relative;

	margin-top: 40px;
	display: flex;
	justify-content: center;
	border: 1px solid black;
	border-radius: 10px;
	padding: 30px 57px 30px 57px;

	@media (max-width: 600px) {
		padding: 35px 40px;
	}

	h1 {
		position: absolute;
		background-color: white;
		padding: 5px 10px 5px 10px;
		top: -25px;
		font-weight: 600;
		font-size: 24px;
		line-height: 150%;

		@media (max-width: 600px) {
			font-weight: 600;
			font-size: 18px;
			top: -20px;
		}
	}

	img {
		width: 105px;
		margin-right: 30px;

		&:hover {
			cursor: pointer;
		}

		@media (max-width: 600px) {
			width: 70px;
			margin-right: 15px;
		}
	}
`;
