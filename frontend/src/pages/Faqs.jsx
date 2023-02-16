import React, { useState } from 'react';
import PageLayout from '../layout/PageLayout';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import Api from '../api/axios';
import MyChatFunction from '../modal/chat modal/chatModal';
import useAppContext from '../hooks/useAppContext';
import chat from '../assets/images/img/chat.svg';
import email from '../assets/images/img/email.svg';
import phone from '../assets/images/img/phone.svg';
import bg from '../assets/images/img/bg.png';
import { FaChevronDown } from 'react-icons/fa';

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
			question: 'How long does reputation management take?',
			answer:
				'The duration depends both on the particular set of services (content removal, PR, etc), as well as the cause of the negative review. Though this could take anywhere from 3 to 60 days at best.',
			open: false,
		},

		{
			id: 2,
			question: 'What if the negative review was left on Social Media?',
			answer:
				'On the removal request form, there are options for where the review was left. Tick the option that is applicable to you',
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
				const response = await Api.post('/api/contactUs/send', {
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
	const { chatModalActive, setChatModalActive } = useAppContext();
	const [ firsFaqOpen, setFirstFaqOpen ] = useState(false)
	return (
		<PageLayout>
			{chatModalActive && <MyChatFunction />}
			<FaqMainWraper>
				<StyledHeader>
					<h2 id="faq" ref={faqRef}>
						Q & A about Repute
					</h2>
				</StyledHeader>
				<StyledBackground>
					<FaqSection className="faqs">
							<FaqWraper
								className={'faq ' + (firsFaqOpen ? 'open' : '')}
								onClick={() => setFirstFaqOpen(!firsFaqOpen)}
							>
								<FaqQuestion className="faq-question">
									<h2>How does REPUTE work?</h2>
									<FaqArrowDown className="arrow-down">
										<FaChevronDown className="fa-down" />
									</FaqArrowDown>
								</FaqQuestion>
					
								<FaqAnswer className="faq-answer">
									<p>
										With 3 simple steps:
									</p>
									<ul style={{ listStyleType: 'decimal' }}>
										<li>Sign up on the Repute website</li>
										<li>On your dashboard, lodge a complaint by clicking the ‘New Complaint’ button</li>
										<li>Fill out the form and submit</li>
									</ul>
									<p>
										You’ll be given regular updates and notifications on the progress of your request.
									</p>
								</FaqAnswer>
							</FaqWraper>
						{faqs.map((faq, i) => {
							return (
							<FaqWraper
								key={faq.id}
								className={'faq ' + (faq.open ? 'open' : '')}
								onClick={() => toggleFaq(i)}
							>
								<FaqQuestion className="faq-question">
									<h2>{faq.question}</h2>
									<FaqArrowDown className="arrow-down">
										<FaChevronDown className="fa-down" />
									</FaqArrowDown>
								</FaqQuestion>
					
								<FaqAnswer className="faq-answer">
									<p>{faq.answer}</p>
								</FaqAnswer>
							</FaqWraper>
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
				<FaqFooterWraper>
					<div>
						<FaqHeadingMain>
							<FaqFooterHeading>Still got a question?</FaqFooterHeading>

							<FaqFooterSubHeading>
								Send us a message and we will quickly get back to you
							</FaqFooterSubHeading>
						</FaqHeadingMain>

						<FaqFooterLinks>
							<FaqFooterLinksParent>
								<SendMailLink
									onClick={() => setChatModalActive(true)}
									background="#233BA9"
									color="#FFFFFF"
									style={{ cursor: 'pointer'}}
								>
									<div>
										<img src={chat} alt="chat-icon" />

										<span>
											<h1>Live Chat</h1>
											<p>Get one -on-one support now</p>
										</span>
									</div>
								</SendMailLink>
							</FaqFooterLinksParent>

							<FaqFooterLinksParent>
								<SendMailLink
									background="transparent"
									color="#233BA9"
									href="tel:+2348082267608"
									className="twitter-dm-button"
									data-screen-name="@sinachpatrick"
									target="blank"
								>
									<div>
										<img src={phone} alt="chat-icon" />

										<span>
											<h1>Call Support</h1>
											<p>Call +(234)-7354-1234</p>
										</span>
									</div>
								</SendMailLink>
							</FaqFooterLinksParent>

							<FaqFooterLinksParent>
								<SendMailLink
									background="transparent"
									color="#233BA9"
									href=" mailto:sinachpat@gmail.com"
									className="twitter-dm-button"
									data-screen-name="@sinachpatrick"
									target="blank"
								>
									<div>
										<img src={email} alt="chat-icon" />

										<span>
											<h1>Email</h1>
											<p>contact@repute.legal</p>
										</span>
									</div>
								</SendMailLink>
							</FaqFooterLinksParent>
						</FaqFooterLinks>
					</div>
				</FaqFooterWraper>
			</FaqMainWraper>
			<ToastContainer />
		</PageLayout>
	);
}
const FaqMainWraper = styled.div`
	font-family: 'Lato', sans-serif;
`;

const Header = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 48px;

	h1 {
		font-size: 36px;
		text-align: center;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-transform: uppercase;
		line-height: 54px;
		font-weight: 700;
		&::before {
			display: block;
			content: ' ';
			margin-top: -285px;
			height: 285px;
			visibility: hidden;
			pointer-events: none;
		}
	}

	h2 {
		display: none;
		&::before {
			display: block;
			content: ' ';
			margin-top: -285px;
			height: 285px;
			visibility: hidden;
			pointer-events: none;
		}
	}

	p {
		font-size: 32px;
		font-weight: 500;
		line-height: 48px;
		letter-spacing: 0.01em;
		color: #2b2c34;
		margin: 12px auto 30px;
		max-width: 1172px;
	}

	@media screen and (max-width: 425px) {
		padding: 18px;

		h1 {
			display: none;
		}

		h2 {
			display: block;
			font-size: 28px;
			font-weight: 700;
		}

		p {
			font-weight: 500;
			font-size: 20px;
			line-height: 30px;
		}
	}
`;

const FaqSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: 60%;
	margin: 0 auto;

	@media screen and (max-width: 884px) {
		width: 80%;
	}
	@media screen and (max-width: 428px) {
		width: 83%;
	}
`;
const FaqFooterWraper = styled.section`
	text-align: center;
	// margin-top: 65px;
	background: url(${bg}), #eef1fc;
	background-repeat: no-repeat;
	padding: 40px 0;

	& > div {
		margin: auto;
		max-width: 1400px;
	}

	@media screen and (max-width: 425px) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;

const FaqFooterHeading = styled.h3`
	font-size: 40px;
	font-weight: 700;
	line-height: 150%;
	margin-bottom: 20px;

	@media screen and (max-width: 425px) {
		text-align: left;
		font-size: 18px;
	}
`;

const FaqFooterSubHeading = styled.h6`
	width: 510px;
	color: #6f7174;
	font-weight: 600;
	font-size: 16px;
	line-height: 150%;

	@media screen and (max-width: 600px) {
		width: 350px;
		text-align: left;
	}

	@media screen and (max-width: 400px) {
		width: 300px;
	}
`;

const FaqHeadingMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const FaqFooterLinksParent = styled.div`
	width: 400px;
	text-align: left;

	&:nth-child(2) {
		border-left: 1px solid #6f7174;
		border-right: 1px solid #6f7174;

		@media screen and (max-width: 800px) {
			border: none;
		}
	}

	@media screen and (max-width: 400px) {
		width: 320px;
	}
`;

const FaqFooterLinks = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	margin-top: 48px;
`;

const SendMailLink = styled.a`
	display: inline-block;
	padding: 16px 40px;
	text-decoration: none;
	font-size: 18px;
	font-weight: 600;

	div {
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			@media screen and (max-width: 400px) {
				width: 50px;
			}
		}

		span {
			margin-left: 20px;
			h1 {
				margin-bottom: 5px;
				color: #0e1844;
				font-weight: 700;
				font-size: 22px;
				line-height: 150%;
				@media screen and (max-width: 600px) {
					font-size: 16px;
				}
			}
			p {
				color: #6f7174;
				font-weight: 400;
				font-size: 16px;
				line-height: 150%;

				@media screen and (max-width: 600px) {
					font-size: 14px;
				}
			}
		}
	}

	@media screen and (max-width: 425px) {
		padding: 8px 24px;
		font-size: 14px;
	}
`;const FaqWraper = styled.div.attrs((props) => ({
	className: props.className,
}))`
	&.faq.open .faq-question {
		margin-bottom: 20px;
	}

	&.faq.open .faq-answer {
		max-height: 1000px;
		opacity: 1;
	}

	&.faq.open .faq-question .arrow-down {
		transform: translateY(-50%) rotate(180deg);
	}

	display: flex;
	flex-direction: column;
	border: 1px solid #eaecf0;
	border-radius: 8px;
	background: #fff;
	padding: 20px;
	cursor: pointer;
	&:hover {
		// background-color: #233BA9;
		transition: all 0.5s ease-out;
	}

	h2 {
		font-size: 120%;
		font-weight: 700;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	p {
		padding-top: 10px;
		font-weight: 400;
		font-size: 103%;
		line-height: 150%;
		color: #4B515D;
	}

	@media screen and (max-width: 425px) {
		padding: 12px;

		h2 {
			font-size: 24px;
		}

		p {
			font-size: 18px;
		}
	}
`;
const FaqQuestion = styled.div.attrs((props) => ({
	className: props.className,
}))`
	display: flex;
	justify-content: space-between;
	position: relative;

	align-items: center;
	transition: all 0.4s ease;
	//height:40px;
	@media screen and (max-width: 520px) {
		h2 {
			font-size: 16px;
			width: 200px;
		}
	}
`;
const FaqArrowDown = styled.div.attrs((props) => ({
	className: props.className,
}))`
	transition: all 0.2s ease;
	position: relative;
	font-size: 22px;
	width: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translateY(-50%);

	.fa-down {
		position: absolute;
		color: #98a2b3;
		font-weight: 200;
	}

	@media screen and (max-width: 520px) {
		font-size: 18px;
	}
`;
const FaqAnswer = styled.div.attrs((props) => ({
	className: props.className,
}))`
	border-top: 1px solid #98a2b3;
	opacity: 0;
	max-height: 0;
	overflow-y: hidden;
	transition: all 0.4s ease;
`;

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
