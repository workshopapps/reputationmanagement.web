import { useState } from 'react';
import PageLayout from '../../../layout/PageLayout';

import {
	PostContainer,
	PostHeader,
	MainPostSection,
	ProfileCard,
	// FormContainer,
} from './BlogPost.styled';
import HeroImg from '../Blog-Post/Assets/hero-img.jpg';
import jackImg from '../Blog-Post/Assets/jack.jpg';
// import emailjs from 'emailjs-com';

import { LikeIcon, FacebookIcon, TwitchIcon } from './Assets/SVGs';

import { Posts } from './Assets/data';
import Post from './Post';
import { useEffect } from 'react';

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
		window.scrollTo(0, 0)
	  }, [])
	// const sendMailHandler = (e) => {
	// 	e.preventDefault();

	// 	emailjs
	// 		.sendForm(
	// 			'service_diggy8i',
	// 			'template_3ttmqkn',
	// 			e.target,
	// 			'anOmuqvmkJ_xfUC2O'
	// 		)
	// 		.then((res) => {
	// 			// console.log(res);
	// 		})
	// 		.catch((err) => {
	// 			// console.log(err);
	// 		});
	// };

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

				{/* <FormContainer onSubmit={sendMailHandler}>
					<p>Leave a comment</p>
					<textarea
						name="comment"
						id="comment"
						cols="30"
						rows="7"
						required
					></textarea>

					<input type="text" name="username" placeholder="Username" required />
					<input
						type="email"
						name="email"
						placeholder="Email Address"
						required
					/>

					<button>Comment</button>

					 <div id="toast">TOAST</div>
				</FormContainer> */}
			</PostContainer>
		</PageLayout>
	);
};

export default BlogPost;
