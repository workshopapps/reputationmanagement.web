import { useState } from 'react';
import styled from 'styled-components';
import { StyledOverlay } from './request-successful/styles';
import useAppContext from '../hooks/useAppContext';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useNavigate } from 'react-router-dom';
import CLOSE from './close.svg';

const MailModal = (props) => {
	const [loading, setLoading] = useState(false);
	const [ price, setPrice ] = useState()
	const {
		setMailModalActive,
		setErrMessage,
		setRequestFailed,
		setRequestSuccess,
		setSuccessMessage,
	} = useAppContext();
	const ApiPrivate = useAxiosPrivate();
	const [email, setEmail] = useState(
		'Hello,I am the lawyer that has claimed your request from repute,Below are terms to continue with this request'
	);
	const router = useNavigate();
	const requestId = props.requestId;

	const changeRequestStatus = async () => {
		try {
			const response = await ApiPrivate.patch(
				`/api/lawyer/review/${requestId}`,
				[
					{
						operationType: 2,
						path: '/status',
						op: 'replace',
						value: 2,
					},
				]
			);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = async () => {
		setLoading(true);
		try {
			const response = await ApiPrivate.post('/api/lawyer/email/create', {
				emailBody: email,
				price: price,
			});
			setLoading(false);
			console.log(response);
			setSuccessMessage('Mail sent successfully');
			setRequestSuccess(true);
			changeRequestStatus();
			setEmail('')
			setTimeout(() => {
				setMailModalActive(false);
				router('/requests');
			}, 2000);
		} catch (err) {
			setLoading(false);
			setErrMessage('Mail not sent');
			setRequestFailed(true);
			console.log(err);
		}
	};
	return (
		<StyledOverlay>
			<StyledMailModal>
				<div className="top">
					<h2>Claim Ticket</h2>
					<img onClick={() => setMailModalActive(false)} src={CLOSE} alt=""/>
				</div>
				<div className="main">
					<div className="to">
						<h4>To: <span>{props.userEmail}</span></h4>
					</div>
					<div className="review-removal">
						<h4>Review Removal</h4>
					</div>
					<div className="mail">
						<h4>Hello, I am the lawyer that has claimed your request from repute. Below are terms to continue with this request.</h4>
						<div className="terms">
							<h4>Repute Terms of Use</h4>
							<h5>EFFECTIVE JANUARY 2023</h5>
							<p>
								Repute operates repute.hng.tech and associated sites and mobile applications.
								Please read these Terms of Use carefully, They govern your access to and use of <span className='black'>repute.hng.tech</span>, 
								Its content, and the services offered on or through it.These Terms of Use constitute a binding legal agreement between you and us. <span className='orange' onClick={() => router('/terms-of-use')}>See more</span>
							</p>
						</div>
					</div>
					<div className="amount">
						<label>Amount in dollars</label>
						<input
							type="text"
							placeholder='20'
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>
					<div className="buttons">
						<button onClick={(e) => { e.preventDefault(); handleSubmit()}}>Send</button>
						<button onClick={() => setMailModalActive(false)}>cancel</button>
					</div>
				</div>
			</StyledMailModal>
		</StyledOverlay>
	);
};

const StyledMailModal = styled.div`
	background-color: #ffffff;
	width: 657px;
	height: 683px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 5px;
	.top{
		display: flex;
		justify-content: space-between;
		background-color: #F9F8FD;
		width: 100%;
		padding: 18px 32px;
		padding-right: 19px;
		h2 {
			font-family: Lato;
			font-size: 24px;
			font-weight: 600;
			line-height: 36px;
			letter-spacing: 0em;
			text-align: left;
			color: #2B2C34;			
		}
	}
	.main{
		padding: 0 32px;
		.to{
			margin-top: 8px;
			display: flex;
			h4{
				font-family: Lato;
				font-size: 18px;
				font-weight: 600;
				line-height: 27px;
				letter-spacing: 0em;
				text-align: left;
				padding-bottom: 8px;
				border-bottom: 1px solid #D2D3D4;
				span{
					color: #6F7174;
				}
			}
		}
		.review-removal{
			padding: 8px 0;
			border-bottom: 1px solid #D2D3D4;
			h4{
				font-family: Lato;
				font-size: 18px;
				font-weight: 700;
				line-height: 27px;
				letter-spacing: 0em;
				text-align: left;
				color: #2B2C34;
			}
		}
		.mail{
			padding-top: 20px;
			h4{
				font-family: Lato;
				font-size: 16px;
				font-weight: 600;
				line-height: 24px;
				letter-spacing: 0em;
				text-align: left;
				color: #2B2C34;
			}
			h5{
				font-family: Lato;
				font-size: 14px;
				font-weight: 600;
				line-height: 21px;
				letter-spacing: 0em;
				text-align: left;
				margin-bottom: 4px;
				color: #6F7174;
			}
			.terms{
				border: 1px solid #D2D3D4;
				border-radius: 4px;
				padding 8px 13px 23px 8px;
				margin-top: 8px;
				h4{
					font-family: Lato;
					font-size: 18px;
					font-weight: 700;
					line-height: 27px;
					letter-spacing: 0em;
					text-align: left;
					color: #2B2C34;
					margin-bottom: 9px;
				}
				p{
					font-family: Lato;
					font-size: 14px;
					font-weight: 400;
					line-height: 21px;
					letter-spacing: 0em;
					text-align: justified;
					color: #6F7174;
					.black{
						color: #2B2C34;
					}
					.orange{
						color: #F16F04;
					}
				}
			}
		}
		.amount{
			margin-top: 29px;
			display: flex;
			flex-direction: column;
			label{
				font-family: Lato;
				font-size: 16px;
				font-weight: 600;
				line-height: 24px;
				letter-spacing: 0em;
				text-align: left;
				color: #4D5154;
			}
			input{
				border: 1px solid #D2D3D4;
				height: 56px;
				border-radius: 8px;
				margin-top: 8px;
				padding-left: 14px;
				outline: none;
			}
		}
		.buttons{
			display: flex;
			justify-content: flex-end;
			margin-top: 45px;
			button{
				height: 48px;
				width: 130px;
				border-radius: 4px;
				font-family: Lato;
				font-size: 16px;
				font-weight: 600;
				line-height: 24px;
				letter-spacing: 0em;
				text-align: center;
				&:first-child{
					background-color: #2A47CB;
					color: #ffffff;
				}
				&:nth-child(2){
					color: #2A47CB;
				}
			}
		}
	}
`;
export default MailModal;
