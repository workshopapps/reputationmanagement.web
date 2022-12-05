import React from 'react';
import {
	FaqFooterWraper,
	FaqFooterHeading,
	FaqFooterLinks,
	SendMailLink,
	FaqFooterSubHeading,
	FaqFooterLinksParent,
	FaqHeadingMain,
} from './Assets/styles/FaqFooter.styled';

import chat from "./Assets/chat.svg"
import email from "./Assets/email.svg"
import phone from "./Assets/phone.svg"

function FaqFooter() {
	return (
		<FaqFooterWraper>
			<div>
				<FaqHeadingMain>
				<FaqFooterHeading>
				Still got a question?
				</FaqFooterHeading>

				<FaqFooterSubHeading>
				Always send us a message, we will get back to you shortly, Always send us a message , we will get back to you shortly.
				</FaqFooterSubHeading>
				</FaqHeadingMain>

				<FaqFooterLinks>
					<FaqFooterLinksParent>
					<SendMailLink
						href="mailto:sinachpat@gmail.com"
						background="#233BA9"
						color="#FFFFFF"
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
						href="https://twitter.com/messages/compose?recipient_id=981997459604934664&text=Hello%20Fixit"
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
						href="https://twitter.com/messages/compose?recipient_id=981997459604934664&text=Hello%20Fixit"
						className="twitter-dm-button"
						data-screen-name="@sinachpatrick"
						target="blank"
					>
						<div>
						<img src={email} alt="chat-icon" />

							<span>
							<h1>Email</h1>
								<p>contactus@repute.com</p>
							</span>
							</div>
						
					</SendMailLink>
					</FaqFooterLinksParent>
				</FaqFooterLinks>
			</div>
		</FaqFooterWraper>
	);
}

export default FaqFooter;
