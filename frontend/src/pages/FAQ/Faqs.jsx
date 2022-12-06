import React, { useState } from 'react';
import FaqItem from './FaqItem';
import PageLayout from '../../layout/PageLayout';
import FaqFooter from './FaqFooter';
import { FaqMainWraper, FaqSection, Header } from './Assets/styles/Faqs.styled';

function Faqs() {
	const [faqs, setFaqs] = useState([
		{
			id: 1,
			question: 'How does FixIt work?',
			answer:
				'FixIt is a reputation management website that deals swiftly and strategically with responding to customer/client engagement across multiple review sites to improve your brand’s image. FixIt helps to polish your brands image so that its first impression on prospective customers is positive',
			open: false,
		},

		{
			id: 2,
			question: 'How can I manage my reputation with Fixit?',
			answer:
				'The first thing you need to do is sign up on FixIt website after which you can now login to your dashboard. On your dashboard, click on the “New Complaint” button. This will take you to a removal request page. Fill out the form correctly and submit. A lawyer will contact you and the process of taking down the bad review will begin. Once the review is taken down successfully, you will get a notification on your dashboard. ',
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
			question: 'Can I make use of my personal Lawyer on FixIt?',
			answer:
				'Unfortunately, No. We have a team of highly professional lawyers on FixIt who are ready to give their best and go all out in ensuring that your brand is free from negative reviews. So, rest assured that you are in safe hands and you will receive Excellent results',
			open: false,
		},

		{
			id: 5,
			question: 'What if the negative review was left on Social Media?',
			answer:
				'That is not a problem. on the removal request form, there are options for where the review was left. Tick the one that is applicable to you and relax while FixIt fixes it for you.',
			open: false,
		},
	]);

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

	return (
		<PageLayout>
			<FaqMainWraper>
				<Header>
					<h1>Frequently Asked Questions</h1>
					<h2>FAQ</h2>
					<p>
						We know you might have questions, which is why we have put together
						a list of frequently asked questions to provide clarity and quick
						answers to your concerns.
					</p>
				</Header>

				<FaqSection className="faqs">
					{faqs.map((faq, i) => {
						return (
							<FaqItem faq={faq} index={i} toggleFaq={toggleFaq} key={faq.id} />
						);
					})}
				</FaqSection>

				<FaqFooter />
			</FaqMainWraper>
		</PageLayout>
	);
}

export default Faqs;
