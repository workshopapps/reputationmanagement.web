import styled from 'styled-components';
import PageLayout from '../../layout/PageLayout';
import { BsPersonFill } from 'react-icons/bs';
import { MdContactMail } from 'react-icons/md';
import { TbMessage } from 'react-icons/tb';
import { useState, useRef } from 'react';
import ContactUsModal from './ContactUsModal';
import { useEffect } from 'react';

function Contact() {
	// const [contactDetailsFrom, setContactDetailsForm] = useState({
	// 	name: '',
	// 	company: '',
	// 	email: '',
	// 	phoneNumber: '',
	// 	mailingAddress: '',
	// 	country: '',
	// 	city: '',
	// 	zipCode: '',
	// 	message: '',
	// });
	const contactRef = useRef(null);
	const messageRef = useRef(null);
	const [personlForm, setPersonalForm] = useState(true);
	const [contactForm, setContactForm] = useState(false);
	const [messageForm, setMessageForm] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleScroll = (ref) => {
		window.scrollTo({
			top: ref.offsetTop,
			left: 0,
			behavior: 'smooth',
		});
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<PageLayout>
			<ContactPageWraper className="contact-page">
				<ContactPageHeading className="contact-heading">
					<h1>
						Talk With Our Digital <span>Strategists</span>
					</h1>
				</ContactPageHeading>
				<div className="bg-[#EEF1FC]">
					<ContactFormSection
						className="contact-form-section"
						style={{ maxWidth: '1540px', margin: '0 auto' }}
					>
						<h3>Get Started in 3 Easy Steps</h3>

						<ContactForm className="form-1">
							<PersonalInfoForm
								onClick={() => {
									setPersonalForm(true);
									setContactForm(false);
									setMessageForm(false);
								}}
								className={`${personlForm && `active`} contact-form`}
							>
								<div>
									<BsPersonFill />
								</div>

								<h4 className="form-title">#1 Personal Information</h4>

								<p>
									Fill a request form with details of your personal information
								</p>

								<form
									onSubmit={(e) => {
										e.preventDefault();
										setPersonalForm(false);
										setContactForm(true);
										handleScroll(contactRef.current);
									}}
								>
									<div>
										<input placeholder="Name" />
									</div>
									<div>
										<input placeholder="Company/Organization" />
									</div>
									<div>
										<input placeholder="Email Address" />
									</div>
									<div>
										<input placeholder="Phone Number" />
									</div>
									<div>
										<button>Next</button>
									</div>
								</form>
							</PersonalInfoForm>
							<div className="right__line"></div>
						</ContactForm>

						<ContactForm className="form-2" ref={contactRef}>
							<div className="left__line"></div>
							<ContactInfoForm
								onClick={() => {
									setPersonalForm(false);
									setContactForm(true);
									setMessageForm(false);
								}}
								className={`${
									contactForm && `active`
								} contact-form contact-info-form`}
							>
								<div>
									<MdContactMail />
								</div>

								<h4 className="form-title">#2 Contact Information</h4>

								<p>
									Fill a request form with details of your contact information
								</p>

								<form
									onSubmit={(e) => {
										e.preventDefault();
										setContactForm(false);
										setMessageForm(true);
										handleScroll(messageRef.current);
									}}
								>
									<div>
										<input placeholder="Mailing Address" />
									</div>
									<div>
										<input placeholder="Country" />
									</div>
									<div>
										<input placeholder="City" />
									</div>
									<div>
										<input placeholder="ZIP Code" />
									</div>
									<div>
										<button>Next</button>
									</div>
								</form>
							</ContactInfoForm>
							<div className="left__line2"></div>
						</ContactForm>

						<ContactForm className="form-3" ref={messageRef}>
							<MessageForm
								onClick={() => {
									setPersonalForm(false);
									setContactForm(false);
									setMessageForm(true);
								}}
								className={`${
									messageForm && `active`
								} contact-form message-form`}
							>
								<div>
									<TbMessage />
								</div>

								<h4 className="form-title">#3 Message</h4>

								<p>
									Kindly explain in detail the problem that you are currently
									experiencing
								</p>

								<form
									onSubmit={(e) => {
										e.preventDefault();
										setShowModal(true);
									}}
								>
									<div>
										<textarea></textarea>
									</div>
									<div>
										<button>Finish</button>
									</div>
								</form>
							</MessageForm>
						</ContactForm>
					</ContactFormSection>
				</div>
			</ContactPageWraper>

			{showModal && (
				<ContactUsModal showModal={showModal} setShowModal={setShowModal} />
			)}
		</PageLayout>
	);
}

// Styling

const ContactPageWraper = styled.div`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

const ContactPageHeading = styled.div`
	text-align: center;
	margin-top: 72px;

	h1 {
		font-size: 53px;
		font-weight: 700;
		color: #233ba9;
		margin-bottom: 30px;

		span {
			color: #f16f04;
		}
	}

	@media screen and (max-width: 700px) {
		margin-top: 40px;

		h1 {
			font-size: 38px;
		}
	}
	@media screen and (max-width: 425px) {
		margin-top: 18px;

		h1 {
			font-size: 18px;
		}
	}
`;

const ContactFormSection = styled.div.attrs((props) => ({
	className: props.className,
}))`
	display: flex;
	flex-direction: column;
	gap: 60px;
	margin-top: 70px;
	padding: 70px 126px;

	h3 {
		text-align: center;
		font-weight: 700;
		font-size: 36px;
	}
	@media (max-width: 760px) {
		padding: 35px 70px;
	}

	@media screen and (max-width: 525px) {
		padding: 15px 30px;
		justify-content: center;
		margin-top: 18px;

		h3 {
			font-size: 16px;
			font-weight: 600;
		}
	}
`;

const ContactForm = styled.div.attrs((props) => ({
	className: props.className,
}))`
	&.form-1 {
		display: flex;
	}
	.right__line {
		width: 42%;
		height: 329px;
		border-top: 3px dashed #233ba9;
		border-right: 3px dashed #233ba9;
		margin-top: 234px;
		border-top-right-radius: 30px;
	}
	hr {
		display: none;
	}
	&.form-2 {
		display: flex;
		justify-content: flex-end;
		margin-top: -60px;
		@media screen and (max-width: 425px) {
			justify-content: unset;
		}
	}
	.left__line {
		border-top: 3px dashed #233ba9;
		border-left: 3px dashed #233ba9;
		width: 42%;
		height: 329px;
		margin-top: 234px;
		border-top-left-radius: 30px;
	}
	.left__line2 {
		display: none;
	}
	&.form-3 {
		margin-top: -60px;
	}
	@media (max-width: 1300px) {
		.right__line {
			width: 30%;
		}
		.left__line {
			width: 30%;
		}
	}
	@media (max-width: 1100px) {
		&.form-1 {
			flex-direction: column;
			align-items: center;
			margin: 40px 0;
		}
		.right__line {
			width: 4%;
			height: 150px;
			border-top: none;
			border-left: 3px dashed #233ba9;
			border-right: none;
			margin-top: 0px;
			border-top-right-radius: none;
		}

		&.form-2 {
			/* margin-top: 0px; */
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-bottom: 40px;
		}
		.left__line2 {
			display: block;
			width: 7%;
			height: 150px;
			border-top: none;
			border-left: 3px dashed #233ba9;
			border-right: none;
			margin-top: 0px;
			border-top-right-radius: none;
		}
		.left__line {
			display: none;
		}
		&.form-3 {
			margin-bottom: 40px;
			display: flex;
			justify-content: center;
		}
	}
	@media (max-width: 700px) {
		.right__line {
			width: 5%;
		}
		.left__line2 {
			width: 5%;
		}
	}
	@media (max-width: 425px) {
		.right__line2 {
			width: 7%;
		}
		.left__line2 {
			width: 7%;
		}
	}
`;

const PersonalInfoForm = styled.div.attrs((props) => ({
	className: props.className,
}))`
	&.contact-form {
		width: 500px;
		height: 510px;
		background: #ffffff;
		border-radius: 12px;
		padding: 32px 32px 72px 32px;
		position: relative;

		> div {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 88px;
			height: 88px;
			border-radius: 50%;
			margin-top: -63px;
			margin-left: -20px;
			position: absolute;
			left: 0;
			top: 0;
			right: 100%;
			border: 1px solid #e8e8e8;
			background: #ffffff;
			> svg {
				font-size: 3.2rem;
				color: #d2d3d4;
			}
		}

		h4 {
			font-weight: 600;
			font-size: 22px;
			color: #2b2c34;
			margin-top: 14px;
		}

		p {
			font-weight: 400;
			font-size: 16px;
			color: #2b2c34;
			margin-top: 24px;
		}

		form {
			margin-top: 24px;
		}

		form div {
			margin-top: 20px;
		}

		form div input {
			width: 70%;
			height: 50px;
			border: 1px solid #e8e8e8;
			border-radius: 15px;
			text-indent: 20px;

			&:focus {
				border: 1px solid #788be3;
				outline: none;
			}

			&::placeholder {
				font-weight: 400;
				font-size: 14px;
				color: #bababa;
			}
		}

		form div button {
			width: 120px;
			height: 40px;
			background: #e0e0e0;
			border: none;
			color: #ffffff;
			font-size: 16px;
			font-weight: 600;
			border-radius: 8px;
			cursor: pointer;
		}
		&.active {
			> div {
				> svg {
					color: #233ba9;
				}
			}
			form div button {
				background: #233ba9;
			}
		}
	}

	@media screen and (max-width: 1100px) {
		&.contact-form {
			position: relative;
			display: flex;
			flex-direction: column;
			height: fit-content;
			width: 100%;

			> div {
				align-self: center;
				width: 88px;
				height: 88px;
				padding: 20px;
				margin-top: -80px;
				position: static;
			}
		}
	}
	@media screen and (max-width: 425px) {
		&.contact-form {
			width: 100%;
			padding: 32px 16px;

			h4 {
				font-size: 18px;
				font-weight: 700;
			}

			p {
				font-size: 16px;
			}

			form div input {
				width: 100%;
				height: 39px;
				border-radius: 8px;

				&::placeholder {
					font-size: 12px;
				}
			}

			form div button {
				width: 80px;
				height: 30px;
				font-size: 12px;
			}
		}
	}
`;

const ContactInfoForm = styled(PersonalInfoForm).attrs((props) => ({
	className: props.className,
}))`
	&.contact-info-form {
		form div button {
			background: #e0e0e0;
		}

		> div {
			left: 93%;
			> svg {
				color: #e0e0e0;
			}

			@media screen and (max-width: 425px) {
				left: 50%;
			}
		}
	}
	&.active {
		form div button {
			background: #233ba9;
		}
		> div {
			> svg {
				color: #233ba9;
			}
		}
	}

	form div button {
		background: #e0e0e0;
		color: #ffffff;
	}
`;

const MessageForm = styled(PersonalInfoForm).attrs((props) => ({
	className: props.className,
}))`
	&.message-form {
		form div button {
			background: #e0e0e0;
		}
	}
	form div textarea {
		width: 80%;
		height: 174px;
		resize: none;
		border: 1px solid #e8e8e8;
		border-radius: 8px;
		padding: 12px;

		&:focus {
			outline: none;
			border: 1px solid #788be3;
		}

		@media screen and (max-width: 425px) {
			width: 90%;
		}
	}
	&.active {
		> div {
			> svg {
				color: #233ba9;
			}
		}
	}
`;

export default Contact;
