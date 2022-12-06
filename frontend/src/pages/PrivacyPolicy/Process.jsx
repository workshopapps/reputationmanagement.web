import React from 'react';
import { StyledProcess } from './Process.styled';

export default function Process() {
	return (
		<StyledProcess>
			<h3>How We Process Information</h3>
			<p>
				{' '}
				We process your personal information for a variety of reasons, depending
				on how you interact with our services, including:
			</p>
			<ul>
				<li>
					To facilitate account creation and manage users' accounts: We may
					process your information so you can create and log in to your
					account as well as keep your account in order
				</li>

				<li>
					To deliver and facilitate the delivery of services to the user: We may
					process your information to provide you with the requested service.
				</li>
				<li>
					{' '}
					To respond to user inquiries: We may process your information to
					respond to your inquiries and solve any issues you might have with the
					requested service.
				</li>

				<li>
					{' '}
					To fulfil and manage your tickets: We may process your information to
					fulfil and manage your tickets made through the services.
				</li>
				<li>
					{' '}
					To request feedback: We may process your information when necessary to
					request feedback and contact you about your use of our service.
				</li>
				<li>
					To send you marketing and promotional content: We may process your
					information for marketing purposes. You can opt-out of our
					<br /> marketing emails at any time.
				</li>
				<li>
					To protect an individual's vital interest: We may process your
					information to save or protect an individual's interest, such as
					prevent harm
				</li>
			</ul>
		</StyledProcess>
	);
}
