import React from 'react';
import PageLayout from '../../../layout/PageLayout';
import {
	PostContainer,
	PostHeader,
	MainPostSection,
	ProfileCard,
	FormContainer,
} from './BlogPost.styled';
import HeroImg from '../Blog-Post/Assets/hero-img.jpg';
import jackImg from '../Blog-Post/Assets/jack.jpg';
import like from '../Blog-Post/Assets/like.jpg';
import share from '../Blog-Post/Assets/share.jpg';
import facebook from '../Blog-Post/Assets/facebook.jpg';
import twitch from '../Blog-Post/Assets/twitch.jpg';
import mobileLike from '../Blog-Post/Assets/heart.svg';
import mobileShare from '../Blog-Post/Assets/share.svg';
import emailjs from 'emailjs-com';

import { Posts } from './Assets/data';
import Post from './Post';

const BlogPost = () => {
	const sendMailHandler = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_diggy8i',
				'template_3ttmqkn',
				e.target,
				'anOmuqvmkJ_xfUC2O'
			)
			.then((res) => {
				// console.log(res);
			})
			.catch((err) => {
				// console.log(err);
			});
	};

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
								<Post
									title={post.title}
									paragraph1={post.paragraph1}
									paragraph2={post.paragraph2}
									image={post.image}
									key={post.id}
								/>
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
						<button>
							<img src={like} alt="" />
						</button>

						<a href="#">
							<img src={facebook} alt="" />
						</a>

						<a href="#">
							<img src={twitch} alt="" />
						</a>

						<button>
							<img src={share} alt="" />
						</button>

						<button className="mobile-likeBtn">
							<img src={mobileLike} alt="" />
						</button>

						<a href="" className="mobile-shareBtn">
							<img src={mobileShare} alt="" />
						</a>
					</div>
				</ProfileCard>

				<FormContainer onSubmit={sendMailHandler}>
					<p>Leave a comment</p>
					<textarea name="comment" id="" cols="30" rows="7"></textarea>

					<input type="text" name="username" placeholder="Username" />
					<input type="email" name="email" placeholder="Email Address" />

					<button>Comment</button>
				</FormContainer>
			</PostContainer>
		</PageLayout>
	);
};

export default BlogPost;
