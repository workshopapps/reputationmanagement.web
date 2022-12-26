import React, { useState } from 'react';
import PageLayout from '../layout/PageLayout';
import PostSnippet from '../components/Blog/PostSnippet';
import styled from 'styled-components';
import Search from '../components/Blog/Search';
import { useEffect } from 'react';
import p1 from '../assets/images/img/p1.jpg';
import p2 from '../assets/images/img/p2.jpg';
import p3 from '../assets/images/img/p3.jpg';
import p4 from '../assets/images/img/p4.jpg';
import p5 from '../assets/images/img/p5.jpg';
import p6 from '../assets/images/img/p6.jpg';
import p7 from '../assets/images/img/p7.jpg';
import p8 from '../assets/images/img/p8.jpg';
import p9 from '../assets/images/img/p9.jpg';
import p10 from '../assets/images/img/p10.jpg';

const PostsData = [
	{
		id: 1,
		image: p10,
		title: 'How to Stay Safe While Surfing the Internet',
		subtitle: '',
	},

	{
		id: 2,
		image: p1,
		title: 'How to Do Defamation Removal Online',
		subtitle:
			'Defamation removal can be challenging. With our step-by-step guide, learn how to protect ...',
	},

	{
		id: 3,
		image: p2,
		title: 'Why You Need An Online Reputation',
		subtitle:
			'If you’re well known in your region, the United States, or the world, you’ve likely put a lot of time and resources,,,',
	},

	{
		id: 4,
		image: p3,
		title: 'How to Remove Info from Reddit',
		subtitle:
			'Fast People Search removal can help protect your privacy online. Learn how to complete the r/reddit.com ...',
	},

	{
		id: 5,
		image: p4,
		title: '5 Strategies for Customer Review Management in 2022',
		subtitle:
			'Since most customers will interact with as business for the first time on the internet, having an effective customer ....',
	},

	{
		id: 6,
		image: p5,
		title: 'How to Remove Personal Information from Google',
		subtitle:
			'Having a great Google review management strategy is very important. They act as an icebreaker to....',
	},

	{
		id: 7,
		image: p6,
		title: 'Reputation Management for Politicians: What to Know',
		subtitle:
			'Fast People Search removal can help protect your privacy online. Learn how to complete FastPeopleSearch.com...',
	},

	{
		id: 8,
		image: p7,
		title: 'How to Remove My Information from BeenVerified',
		subtitle:
			'Your public perception is known as your online reputation, telling others who you are, what …',
	},

	{
		id: 9,
		image: p8,
		title: '7 Software Development Models to Organize Your Team',
		subtitle:
			'If you’re well known in your region, the United States, or the world, you’ve likely put a lot of time and...',
	},

	{
		id: 10,
		image: p9,
		title: 'Why Dentists Need Online Reputation Management',
		subtitle:
			'If you’re well known in your region, the United States, or the world, you’ve likely put a lot of time ...',
	},
];

const BlogSeeAll = () => {
	const [search, setSearch] = useState('');
	const searchPostHandler = (e) => {
		setSearch(e.target.value);
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<PageLayout>
			<section>
				<Search onchange={searchPostHandler} />
				<PostSnippetContainer>
					{PostsData.filter((post) => {
						return search.toLowerCase().trim() === ''
							? post
							: post.title.toLowerCase().trim().includes(search);
					}).map((post) => (
						<PostSnippet
							img={post.image}
							title={post.title}
							subtitle={post.subtitle}
							key={post.id}
						/>
					))}
				</PostSnippetContainer>
			</section>
		</PageLayout>
	);
};

const PostSnippetContainer = styled.section`
	display: flex;
	max-width: 1500px;
	flex-flow: wrap;
	margin: 24px 2rem 6rem;
	align-items: center;
	justify-content: center;
	gap: 24px;

	@media (max-width: 745px) {
		gap: 16px;
	}

	section {
		max-width: 400px;
		margin-bottom: 72px;
		width: 33%;

		&:first-child {
			display: none;
		}

		@media (max-width: 1320px) {
			max-width: 360px;
		}

		@media (max-width: 1192px) {
			max-width: 30%;
		}

		@media (max-width: 1080px) {
			p,
			&:last-child {
				display: block;
			}
		}

		@media (max-width: 895px) {
			width: 45%;
			max-width: 60%;

			&:first-child {
				display: block;
			}
		}

		@media (max-width: 745px) {
			margin-bottom: 24px;

			p {
				display: none;
			}
		}
	}
`;


export default BlogSeeAll;
