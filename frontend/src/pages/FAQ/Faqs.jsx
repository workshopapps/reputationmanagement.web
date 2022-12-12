import React, { useState } from 'react';
import FaqItem from './FaqItem';
import PageLayout from '../../layout/PageLayout';
import FaqFooter from './FaqFooter';
import { FaqMainWraper, FaqSection } from './Assets/styles/Faqs.styled';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import Api from '../../api/axios';
import MyChatFunction from '../../modal/chat modal/chatModal';
import useAppContext from '../../hooks/useAppContext';

// import ErrorMessage from '../../components/error message/errorMessage';

function Faqs() {
	const location = useLocation();
	const [email, setEmail] = useState('');
	const [company, setCompany] = useState('');
	const [message, setMessage] = useState('');
	// const [triedToSubmit, setTriedToSubmit] = useState(false);
	const [requestPending, setRequestPending] = useState(false);
	const contactUsRef = useRef(null);
	const faqRef = useRef(null);

	const [faqs, setFaqs] = useState([
		{
			id: 1,
			question: 'How does REPUTE work?',
			answer:
				'REPUTE is a reputation management website that deals swiftly and strategically with responding to customer/client engagement across multiple review sites to improve your brand’s image. REPUTE helps to polish your brands image so that its first impression on prospective customers is positive',
			open: false,
		},

		{
			id: 2,
			question: 'How can I manage my reputation with REPUTE?',
			answer:
				'The first thing you need to do is sign up on REPUTE website after which you can now login to your dashboard. On your dashboard, click on the “New Complaint” button. This will take you to a removal request page. Fill out the form correctly and submit. A lawyer will contact you and the process of taking down the bad review will begin. Once the review is taken down successfully, you will get a notification on your dashboard. ',
			open: false,
		},

		{
			id: 3,
			question: 'How long does reputation management take?',
			answer:
				'Depending on a number of factors, reputation management can take a few days or more, but give or take, a maximum of a week.',
			open: false,
		},

		{
			id: 4,
			question: 'Can I make use of my personal Lawyer on REPUTE?',
			answer:
				'Unfortunately, No. We have a team of highly professional lawyers on REPUTE who are ready to give their best and go all out in ensuring that your brand is free from negative reviews. So, rest assured that you are in safe hands and you will receive Excellent results',
			open: false,
		},

		{
			id: 5,
			question: 'What if the negative review was left on Social Media?',
			answer:
				'That is not a problem. on the removal request form, there are options for where the review was left. Tick the one that is applicable to you and relax while REPUTE fixes it for you.',
			open: false,
		},
	]);

	const handleCompany = (e) => {
		setCompany(e.target.value);
	};
	const handleChange = (e) => {
		setEmail(e.target.value);
	};
	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setRequestPending(true);

		if (company && email && message !== '') {
			try {
				const response = await Api.post('/contactUs/send', {
					email: email,
					company: company,
					message: message,
				});
				if ((await response).status === 200) {
					toast.success('Message sent sucessfully');
					setEmail('');
					setCompany('');
					setMessage('');
				}
				setRequestPending(false);
				console.log(response);
			} catch (error) {
				toast.error('Error');
				console.log(error);
				setRequestPending(false);
			}
			// toast.success('Message sent sucessfully');
			// setCompany('');
			// setEmail('');
			// setMessage('');
			// setRequestPending(false);
		} else {
			toast.error('Fields required');
			setRequestPending(false);
		}
	};

	const toggleFaq = (index) => {
		setFaqs(
			faqs.map((faq, i) => {
				if (i === index) {
					faq.open = !faq.open;
				} else {
					faq.open = false;
				}

				return faq;
			})
		);
	};

	useEffect(() => {
		const { hash } = location;
		if (hash?.includes('contact')) {
			contactUsRef.current.scrollIntoView();
			return;
		} else if (hash?.includes('faq')) {
			faqRef.current.scrollIntoView();
			return;
		}
	}, [location]);
	const { chatModalActive } = useAppContext();
	return (
		<PageLayout>
			{ chatModalActive && <MyChatFunction/>}
			<FaqMainWraper>
				<StyledHeader>
					<h2 id="faq" ref={faqRef}>
						Q & A about Repute
					</h2>
				</StyledHeader>
				<StyledBackground>
					<FaqSection className="faqs">
						{faqs.map((faq, i) => {
							return (
								<FaqItem
									faq={faq}
									index={i}
									toggleFaq={toggleFaq}
									key={faq.id}
								/>
							);
						})}

						<StyledContact>
							<h2 id="contact" ref={contactUsRef}>
								Send us a message
							</h2>
							<form onSubmit={(e) => handleSubmit(e)}>
								<StyledlogForm>
									{/* <label htmlFor="email">Email</label> */}
									<StyledBox>
										<StyledInput
											type="text"
											name="company"
											value={company}
											onChange={handleCompany}
											placeholder="Company/Organization"
											id="company"
											required
										/>
									</StyledBox>
								</StyledlogForm>
								{/* {company === '' && triedToSubmit && (
									<ErrorMessage error="Company Name Required" />
								)} */}
								<StyledlogForm>
									{/* <label htmlFor="email">Email</label> */}
									<StyledBox>
										<StyledInput
											type="email"
											name="email"
											value={email}
											onChange={handleChange}
											placeholder="Email address"
											id="email"
											required
										/>
									</StyledBox>
								</StyledlogForm>
								{/* {email === '' && triedToSubmit && (
									<ErrorMessage error="Email Required" />
								)} */}
								<StyledlogForm>
									{/* <label htmlFor="email">Email</label> */}
									<StyledBox>
										<textarea
											name=""
											id=""
											value={message}
											onChange={handleMessage}
											cols="30"
											rows="5"
											placeholder="Type your enquiry"
											required
										></textarea>
									</StyledBox>
								</StyledlogForm>
								{/* {message === '' && triedToSubmit && (
									<ErrorMessage error="Message Required" />
								)} */}

								<SubmitBtn type="submit">
									{!requestPending ? (
										'Send message'
									) : (
										<div className="loading"></div>
									)}
								</SubmitBtn>
							</form>
						</StyledContact>
					</FaqSection>
				</StyledBackground>
				<FaqFooter />
			</FaqMainWraper>
			<ToastContainer />
		</PageLayout>
	);
}

const StyledBackground = styled.div`
	background: #eef1fc;
	padding: 80px 0;
`;
const StyledHeader = styled.div`
	margin-top: 70px;
	margin-bottom: 50px;
	text-align: center;
	font-weight: 700;
	font-size: 200%;
	color: #233ba9;
	@media screen and (max-width: 428px) {
		margin-top: 50px;
	}
`;
const StyledContact = styled.div`
	background: #fff;
	border: 1px solid #eaecf0;
	border-radius: 8px;
	padding: 20px;
	h2 {
		text-align: center;
		font-weight: 700;
		font-size: 130%;
		margin-bottom: 20px;
		&::before {
			display: block;
			content: ' ';
			margin-top: -285px;
			height: 285px;
			visibility: hidden;
			pointer-events: none;
		}
	}
`;
const StyledlogForm = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 100%;
	margin-bottom: 30px;
`;
const StyledBox = styled.div`
	border: 2px solid #eaecf0;
	border-radius: 8px;
	textarea {
		border: none;
		padding: 10px 10px;
		width: 100%;

		&:focus {
			outline: none;
		}
	}
`;
const StyledInput = styled.input`
	border: none;
	padding: 10px 10px;
	width: 100%;

	&:focus {
		outline: none;
	}

	// @media (max-width: 500px) {
	// 	width: 80%;
	// 	margin: 15px auto 0;
	// }
`;
const SubmitBtn = styled.button`
	margin-bottom: 10px;
	margin-top: 20px;
	width: 100%;
	border-radius: 4px;
	background-color: #233ba9;
	color: white;
	padding: 10px;

	.loading {
		width: 20px;
		height: 20px;
		border: 2px solid #fff;
		border-bottom-color: transparent;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
		@keyframes rotation {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
	@media (max-width: 360px) {
		margin-top: -4px;
	}
`;
export default Faqs;
