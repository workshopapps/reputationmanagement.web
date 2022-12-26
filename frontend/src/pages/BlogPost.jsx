import { useState } from 'react';
import PageLayout from '../layout/PageLayout';
import HeroImg from '../assets/images/img/hero-img.jpg';
import jackImg from '../assets/images/img/jack.jpg';
import { LikeIcon, FacebookIcon, TwitchIcon } from '../assets/images/img/SVGs';
import { useEffect } from 'react';
import styled from 'styled-components';

import p1 from '../assets/images/img/p1.jpg';
import p2 from '../assets/images/img/p2.jpg';
import p3 from '../assets/images/img/p3.jpg';
import p4 from '../assets/images/img/p4.jpg';

const Posts = [
	{
		id: 1,
		title: '',
		paragraph1:
			'It goes without saying that a company’s most valuable asset is its brand reputation. Protecting your brand reputation is more crucial than ever in the modern world, when information travels at the speed of light, and social media can make or break a corporation.',
		paragraph2:
			'Fortunately, there are a few simple techniques to guarantee that your business maintains a positive reputation with the general public. Here are the top six strategies for safeguarding your company’s reputation in 2023.',
		image: p1,
	},

	{
		id: 2,
		title: 'Develop a crisis management plan',
		paragraph1:
			'No matter how skillfully you manage your brand, there will always be the possibility for a catastrophe. Whether it’s a nasty review gone viral or an employee misbehaving on social media, you need to be prepared for anything.',
		paragraph2:
			'The easiest approach to achieve this is to design a crisis management plan. This should include both a team of individuals who are accountable for dealing with the problem as well as a plan of action for how to deal with it.',
		image: p2,
	},

	{
		id: 3,
		title: 'Monitor online reviews',
		paragraph1:
			'In today’s world, online reviews can either massively elevate your business or seriously hurt it. If you’re not monitoring what people are saying about your brand online, you could be in for some serious trouble.',
		paragraph2:
			'The good news is, there are plenty of tools out there that can help you track and monitor online reviews. Use them to your advantage and take action if necessary.',
		image: '',
	},

	{
		id: 4,
		title: 'Social media engagement',
		paragraph1:
			'One of the most effective methods to reach out to and develop relationships with your clientele is via the use of social media. You may also use it to listen in on customer feedback about your brand.',
		paragraph2:
			' Maintain consistent social media interaction with your clientele. Put some soul into your company’s image. Make it clear that you’re paying attention by addressing their feedback and worries.',
		image: p3,
	},

	{
		id: 5,
		title: 'Carry out market research',
		paragraph1:
			'Remaining one step ahead of the competition is crucial if you care about maintaining a positive image for your company. To achieve this goal, frequent market research is one of the greatest practices to use. You may then take measures to protect your brand from the identified dangers.',
		paragraph2:
			'Conducting market research involves learning about and empathizing with a certain consumer demographic. It also entails keeping tabs on your rivals and responding accordingly. Doing so will keep your brand ahead of the curve and in the minds of consumers.',
		image: p4,
	},

	{
		id: 6,
		title: 'Construct measures of trust',
		paragraph1:
			'Trust is necessary for the success of any company, but it is particularly vital for businesses with a significant presence on the internet. People are less inclined to conduct business with you if they do not trust your brand and its reputation.',
		paragraph2:
			'Many approaches exist for quantifying trustworthiness. Using secure socket layer (SSL) encryption on your website is an important first step. You may also use social evidence, like reviews and testimonials from satisfied clients.',
		image: '',
	},

	{
		id: 7,
		title: 'Maintain a current website for your company',
		paragraph1:
			'When someone is seeking information about your company, they will naturally look for it on your website. You should, therefore, keep your website current at all times. This entails taking steps like updating the website content often and checking to see that all of the internal and external links still work.',
		paragraph2:
			'In addition, your website’s design should be clean and modern. We highly suggest engaging The Free Website Guys if you need a professionally created website. They run a popular free website program. Establishing your company’s credibility online is simple if you have a high-quality website.',
		image: '',
	},
];

const BlogPost = () => {
	const [liked, setLiked] = useState(true);

	const likedBtnHandler = (e) => {
		setLiked(!liked);

		if (liked === true) {
			e.currentTarget.style.backgroundColor = '#233ba9';
			e.currentTarget.style.border = '1px solid #233ba9';
		} else {
			e.currentTarget.style.backgroundColor = '#fff';
			e.currentTarget.style.border = '1px solid #d2d3d4';
		}
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<PageLayout>
			<PostContainer>
				<PostHeader>
					<img src={HeroImg} alt="" />
					<div>
						<h3>
							6 Efficient Techniques to <span>Protect Your</span> Brand
							Reputation in 2023
						</h3>
					</div>
				</PostHeader>

				<MainPostSection>
					<h4>
						Protect your brand reputation with the easy-to-implement techniques
						in our guide below.
					</h4>

					<section>
						{Posts.map((post) => {
							return (
								<StyledPost>
									<div>
										<span></span>
										<h1>{post.title}</h1>
									</div>
									<p>{post.paragraph1}</p>
									<p>{post.paragraph2}</p>
									<img src={post.image} alt="" />
								</StyledPost>
							);
						})}
					</section>
				</MainPostSection>

				<ProfileCard>
					<img src={jackImg} alt="" />
					<div>
						<p>Jack Stone</p>
						<p>Online Coach</p>
					</div>
					<div>
						<button onClick={likedBtnHandler}>
							<LikeIcon />
						</button>

						<a
							href="https://web.facebook.com/jackstoneworld?_rdc=1&_rdr"
							target="blank"
						>
							<FacebookIcon />
						</a>

						<a href="https://twitter.com/JackStoneSays" target="blank">
							<TwitchIcon />
						</a>

						<button id="mobile-likeBtn" onClick={likedBtnHandler}>
							<LikeIcon />
						</button>
					</div>
				</ProfileCard>
			</PostContainer>
		</PageLayout>
	);
};

export default BlogPost;

export const StyledPost = styled.div`
	div {
		display: flex;
		gap: 1rem;
		align-items: center;

		span {
			display: block;
			height: 12px;
			width: 12px;
			background-color: #233ba9;
			border-radius: 50%;
		}

		h1 {
			font-weight: 600;
			font-size: 32px;
			line-height: 38px;
			letter-spacing: 0.01em;
			color: #233ba9;
		}
	}

	p {
		font-style: normal;
		font-weight: 300;
		font-size: 18px;
		line-height: 36px;
		letter-spacing: 0.01em;
		color: #000000;

		&:first-of-type {
			margin-top: 24px;
		}

		&:last-of-type {
			margin-bottom: 64px;
		}
	}

	img {
		width: 100%;
		margin-bottom: 64px;
	}

	@media (max-width: 856px) {
		div {
			align-items: flex-start;
			/* border: 2px solid red; */

			span {
				margin-top: 13px;
			}
		}
	}

	@media (max-width: 477px) {
		div {
			align-items: center;
			margin-left: 10px;
			margin-right: 10px;

			span {
				margin-top: 0;
			}

			h1 {
				font-weight: 700;
				font-size: 18px;
				line-height: 27px;
			}
		}

		p {
			font-size: 12px;
			line-height: 18px;

			&:first-of-type {
				margin-top: 16px;
			}

			&:last-of-type {
				margin-bottom: 32px;
			}
		}

		img {
			margin-bottom: 32px;
		}
	}
`;

const PostContainer = styled.section`
	max-width: 1060px;
	width: 100%;
	margin: 34px auto 7rem;
	font-family: Lato;

	@media (max-width: 988px) {
		width: 80%;
		margin: 32px auto 4rem;
	}

	@media (max-width: 720px) {
		width: 85%;
		margin: 16px auto 64px;
	}
`;

const PostHeader = styled.header`
	height: min-content;
	position: relative;

	img {
		width: 100%;
	}

	div {
		background-color: #fff;
		height: fit-content;
		transform: translateY(-97px);
		width: 100%;
		margin-top: 74px;
		padding: 34px 0 28px 0;

		h3 {
			font-weight: 900;
			font-size: 40px;
			line-height: 50px;
			letter-spacing: 0.01em;
			color: #233ba9;
			max-width: 1020px;

			// span {
			// 	display: flex;
			// }
		}
	}

	@media (max-width: 720px) {
		div {
			transform: translateY(0);
			width: 100%;
			padding: 1rem 0;

			h3 {
				width: 100%;
				max-width: 100%;

				span {
					display: inline;
				}
			}
		}
	}

	@media (max-width: 477px) {
		div {
			h3 {
				font-weight: 700;
				font-size: 18px;
				line-height: 27px;
			}
		}
	}
`;

const MainPostSection = styled.main`
	margin-top: -65px;

	h4 {
		font-weight: 600;
		font-size: 32px;
		line-height: 38px;
		letter-spacing: 0.01em;
		color: #233ba9;
		margin-bottom: 64px;
	}

	section {
		border-top: 3px solid #233ba9;
		border-bottom: 3px solid #233ba9;
		& > div {
			&:first-of-type {
				div {
					display: none;
				}

				p:first-of-type {
					margin-top: 64px;
				}
			}

			&:nth-of-type(3),
			&:nth-of-type(6),
			&:nth-of-type(7) {
				img {
					display: none;
				}
			}
		}
	}

	@media (max-width: 720px) {
		margin-top: 32px;
	}

	@media (max-width: 477px) {
		h4 {
			font-size: 14px;
			line-height: 21px;
			margin-bottom: 32px;
		}

		section {
			& > div {
				&:first-of-type {
					p:first-of-type {
						margin-top: 32px;
					}
				}
			}
		}
	}
`;

const ProfileCard = styled.section`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin: 32px 0 67px;
	padding: 0 20px;

	& > div:nth-of-type(1) {
		flex: 1;

		p:first-of-type {
			font-weight: 700;
			font-size: 14px;
			line-height: 21px;
			color: #646668;
		}

		p:last-of-type {
			font-weight: 400;
			font-size: 12px;
			line-height: 18px;
			color: #646668;
		}
	}

	& > div:nth-of-type(2) {
		display: flex;
		align-items: center;
		gap: 2rem;

		.mobile-likeBtn,
		.mobile-shareBtn {
			display: none;
		}

		button {
			cursor: default;
		}

		button,
		a {
			border: 1px solid #d2d3d4;
			padding: 8px 6px;

			&:hover {
				background-color: #233ba9;
				border: 1px solid #233ba9;
			}

			svg {
				width: 24px;
				height: 24px;
			}
		}
	}

	@media (max-width: 552px) {
		& > div:nth-of-type(1) {
			p:first-of-type {
				font-size: 12px;
				line-height: 18px;
			}

			p:last-of-type {
				font-weight: 300;
				font-size: 10px;
				line-height: 15px;
			}
		}

		& > div:nth-of-type(2) {
			gap: 1rem;

			button:nth-of-type(1),
			button:nth-of-type(2),
			a:nth-of-type(1),
			a:nth-of-type(2) {
				display: none;
			}

			#mobile-likeBtn {
				display: block;
				svg {
					height: 16px;
					width: 16px;
				}
			}
		}
	}
`;
