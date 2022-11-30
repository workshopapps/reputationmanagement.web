import React from 'react';
import { StyledInformation } from './Information.styled';

export default function Information() {
	return (
		<StyledInformation>
			<h3>Information Collection</h3>
			<p>
				We collect personal information that you voluntarily provide to us when
				you visit our site and express interest in obtaining information about
				our products or services. Among the personal information we may collect
				include names, phone numbers, and email addresses.{' '}
			</p>
			<p>
				Our collection and use of your information will remain subject to this
				privacy policy, but we cannot guarantee your information will be
				absolutely secure or that unauthorized persons will not access or use
				your personal information for improper purposes.{' '}
			</p>
			<p>
				In the event of a breach of security affecting the personal information
				that you have provided to us, or the personal information that we have
				collected, we will take actions as required by applicable laws, which
				might include providing you notice of such breach.
			</p>
		</StyledInformation>
	);
}
