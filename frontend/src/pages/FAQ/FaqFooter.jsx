import React from 'react';
import {
	FaqFooterWraper,
	FaqFooterHeading,
	FaqFooterLinks,
	SendMailLink,
} from './Assets/styles/FaqFooter.styled';

function FaqFooter() {
	return (
		<FaqFooterWraper>
			<div>
				<FaqFooterHeading>
					Question not answered yet? Shoot us a mail or chat with a member of
					our team
				</FaqFooterHeading>

				<FaqFooterLinks>
					<SendMailLink
						href="mailto:sinachpat@gmail.com"
						background="#233BA9"
						color="#FFFFFF"
					>
						Send a Mail
					</SendMailLink>
					<SendMailLink
						background="transparent"
						color="#233BA9"
						href="https://twitter.com/messages/compose?recipient_id=981997459604934664&text=Hello%20Fixit"
						className="twitter-dm-button"
						data-screen-name="@sinachpatrick"
						target="blank"
					>
						Chat with Us
					</SendMailLink>
				</FaqFooterLinks>
			</div>
		</FaqFooterWraper>
	);
}

export default FaqFooter;
