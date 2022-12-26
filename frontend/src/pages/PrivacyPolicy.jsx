import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import PageLayout from '../layout/PageLayout';

function PrivacyPolicy() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<PageLayout>
				<Container>
					<Header>
						<h1>Privacy Policy</h1>
					</Header>
					<Main>
						<ContentLinks>
							<h3>Contents</h3>
							<ul>
								<li>
									<a href="#sec_1">Our Privacy Policy</a>
								</li>
								<li>
									<a href="#sec_2">Information Collection</a>
								</li>
								<li>
									<a href="#sec_3">How We Process Information</a>
								</li>
								<li>
									<a href="#sec_4">Retention and Detection of Information</a>
								</li>
								<li>
									<a href="#sec_5">Your Privacy Rights</a>
								</li>
								<li>
									<a href="#sec_6">Changes to This Privacy Policy</a>
								</li>
								<li>
									<a href="#sec_7">Contact Us About This Policy</a>
								</li>
							</ul>
						</ContentLinks>
						<MainContent>
							<section>
								<h3 id="sec_1">Our Privacy Policy</h3>
								<p>
									REPUTE provides this Privacy Policy to inform you of our
									policies and procedures regarding the collection, use and
									disclosure of personal information when you use our services,
									such as:
								</p>
								<ul>
									<li>
										Visit our website at [https://repute.hng.tech] or any
										website of ours that links to this privacy policy
									</li>
									<li>
										Engage with us in other related ways, including sales and
										marketing.
									</li>
								</ul>
								<p>
									Reading this privacy policy will help you understand your
									rights and choices. Please do not use this website or our
									services if you do not <br /> accept these. By using this
									website or our services, you agree to this privacy policy.
								</p>
							</section>
							<section>
								<h3 id="sec_2">Information Collection</h3>
								<p>
									We collect personal information that you voluntarily provide
									to us when you visit our site and express interest in
									obtaining information about our products or services. Among
									the personal information we may collect include names, phone
									numbers, and email addresses.{' '}
								</p>
								<p>
									Our collection and use of your information will remain subject
									to this privacy policy, but we cannot guarantee your
									information will be absolutely secure or that unauthorized
									persons will not access or use your personal information for
									improper purposes.{' '}
								</p>
								<p>
									In the event of a breach of security affecting the personal
									information that you have provided to us, or the personal
									information that we have collected, we will take actions as
									required by applicable laws, which might include providing you
									notice of such breach.
								</p>
							</section>
							<section>
								<h3 id="sec_3">How We Process Information</h3>
								<p>
									{' '}
									We process your personal information for a variety of reasons,
									depending on how you interact with our services, including:
								</p>
								<ul>
									<li>
										To facilitate account creation and manage users' accounts:
										We may process your information so you can create and log in
										to your account as well as keep your account in order
									</li>

									<li>
										To deliver and facilitate the delivery of services to the
										user: We may process your information to provide you with
										the requested service.
									</li>
									<li>
										{' '}
										To respond to user inquiries: We may process your
										information to respond to your inquiries and solve any
										issues you might have with the requested service.
									</li>

									<li>
										{' '}
										To fulfil and manage your tickets: We may process your
										information to fulfil and manage your tickets made through
										the services.
									</li>
									<li>
										{' '}
										To request feedback: We may process your information when
										necessary to request feedback and contact you about your use
										of our service.
									</li>
									<li>
										To send you marketing and promotional content: We may
										process your information for marketing purposes. You can
										opt-out of our
										<br /> marketing emails at any time.
									</li>
									<li>
										To protect an individual's vital interest: We may process
										your information to save or protect an individual's
										interest, such as prevent harm
									</li>
								</ul>
							</section>
							<section>
								<h3 id="sec_4">Retention and deletion of information</h3>
								<p>
									We will only keep your information for as long as it is
									necessary for the purposes set out in this privacy notice
									unless a longer retention period is requested. No purpose in
									this notice will require us keeping your personal information
									for longer than the period of time a user has an account with
									us.
								</p>

								<p>
									You may request to access, update, correct, or delete most of
									your personal information through the site. We will promptly
									take action in response to your request, but we only retain
									information for as long as;
								</p>
								<ul>
									<li>You use our services and maintain an account</li>
									<li>We have a legitimate reason to do so</li>
								</ul>
							</section>
							<section>
								<h3 id="sec_5">Your Privacy Rights</h3>
								<p>As a user, you have the right to;</p>
								<ul>
									<li>
										{' '}
										Request access and obtain a copy of your personal
										information
									</li>
									<li> To request rectification</li>
									<li>
										To restrict the processing of your personal information.
									</li>
								</ul>
								<p>
									You can make such requests by contacting us. We will consider
									and act upon your request by applicable data protection laws.
								</p>
							</section>
							<section>
								<h3 id="sec_6">Changes To This Privacy Policy</h3>
								<p>
									REPUTE has the discretion to update this policy from time to
									time. The updated version will be indicated with a date as
									soon as it is available. Users are encouraged to check this
									page for changes often to be informed of how we protect your
									information
								</p>
							</section>
							<section>
								<h3 id="sec_7">Contact Us About This Policy</h3>
								<p>
									If you have questions about this privacy policy or your
									dealings with our services, please email us at [email
									address].
								</p>
							</section>
						</MainContent>
					</Main>
				</Container>
			</PageLayout>
		</>
	);
}

const Container = styled.div`
	scroll-behavior: smooth;
	/* max-width: 90%; */
	max-width: 1200px;
	margin: 0px auto;
	min-height: 100vh;
`;

const Header = styled.header`
	width: 100%;
	background-color: #233ba9;
	border-radius: 8px;
	padding: 34px 0px;
	max-height: 136px;
	h1 {
		color: white;
		text-align: center;
		font-family: 'Lato';
		font-style: normal;
		font-weight: 700;
		font-size: 45px;
		line-height: 150%;
	}

	@media (max-width: 1020px) {
		h1 {
			color: white;
			font-size: 24px;
			font-style: bold;
		}
	}
`;

const Main = styled.main`
	display: grid;
	grid-template-columns: 30% 70%;
	padding-top: 88px;
	padding-bottom: 100px;

	@media (max-width: 1020px) {
		display: flex;
		flex-direction: column;
	}
`;
const ContentLinks = styled.div`
	position: sticky;
	top: 100px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	font-family: 'Lato';
	height: fit-content;
	padding-bottom: 40px;
	h3 {
		font-style: normal;
		font-weight: 700;
		font-size: 28px;
		line-height: 150%;
		color: #2b2c34;
	}
	ul li {
		padding-bottom: 16px;
	}
	a {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 150%;
		color: #2b2c34;
		&:active {
			color: #233ba9;
		}
	}

	@media (max-width: 1020px) {
		display: none;
	}
`;
const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	section {
		padding-bottom: 40px;
		h3 {
			font-family: 'Lato';
			font-style: normal;
			font-weight: 700;
			font-size: 32px;
			line-height: 150%;
			padding-bottom: 16px;
			color: #0e1844;
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
			font-family: 'Lato';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 150%;
			color: #2b2c34;
			padding-bottom: 4px;
		}
		ul {
			list-style-type: disc;
			margin-left: 25px;
			font-size: 16px;
			line-height: 25px;
			font-family: 'Lato';
			font-style: normal;
		}
	}
`;


export default PrivacyPolicy;
