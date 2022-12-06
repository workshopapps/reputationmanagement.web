import React from 'react';
import { StyledRetention } from './Retention.styled';

export default function Retention() {
	return (
		<StyledRetention>
			<h3>Retention and deletion of information</h3>
			<p>
				We will only keep your information for as long as it is necessary for
				the purposes set out in this privacy notice unless a longer retention
				period is requested. No purpose in this notice will require us keeping
				your personal information for longer than the period of time a user has
				an account with us.
			</p>

			<p>
				You may request to access, update, correct, or delete most of your
				personal information through the site. We will promptly take action in
				response to your request, but we only retain information for as long as;
			</p>
			<ul>
				<li>You use our services and maintain an account</li>
				<li>We have a legitimate reason to do so</li>
			</ul>
		</StyledRetention>
	);
}
