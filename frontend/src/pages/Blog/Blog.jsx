import React from 'react';
import styled from 'styled-components';
import Search from '../../components/Blog/Search';
import Hero from '../../components/Blog/Hero';
import PostSnippet from '../../components/Blog/PostSnippet';
import Headlines from '../../components/Blog/Headlines';
import PageLayout from '../../layout/PageLayout';

// import Images
import headlines_img1 from '../../assets/images/blog_images/images/headlines_img1.png';
import post_img2 from '../../assets/images/blog_images/images/post_img2.png';
import headlines_img2 from '../../assets/images/blog_images/images/headlines_img2.png';
import headlines_img3 from '../../assets/images/blog_images/images/headlines_img3.png';
import headlines_img4 from '../../assets/images/blog_images/images/headlines_img4.png';
import headlines_img5 from '../../assets/images/blog_images/images/headlines_img5.png';
import post_img7 from '../../assets/images/blog_images/images/post_img7.png';
import headlines_img6 from '../../assets/images/blog_images/images/headlines_img6.png';
import headlines_img7 from '../../assets/images/blog_images/images/headlines_img7.png';

const StyledArticles = styled.div`
	width: 90%;
	margin: 0 auto;
	margin-bottom: 50px;
`;

const StyledPostSnippet = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
`;

function Blog() {
	return (
		<section >
			<PageLayout>
				<div style={{ maxWidth: '1540px', margin: '0 auto'}}>
					<Hero/>
					<Search />
					<StyledArticles>
						<Headlines title="Recent Articles" />
						<StyledPostSnippet>
							<PostSnippet
								img={headlines_img1}
								title="How to Do Defamation Removal Online"
								subtitle="Defamation removal can be challenging. With our step-by-step guide, learn how to protect ..."
							/>
							<PostSnippet
								img={post_img2}
								title="Why You Need An Online Reputation"
								subtitle="If you’re well known in your region, the United States, or the world, you’ve likely put a lot of time and resources,,,"
							/>

							<PostSnippet
								img={headlines_img2}
								title="Removing Info from FastPeopleSearch"
								subtitle="Fast People Search removal can help protect your privacy online. Learn how to complete the process..."
							/>
						</StyledPostSnippet>
					</StyledArticles>
					<StyledArticles>
						<Headlines title="Trending Topics" />
						<StyledPostSnippet>
							<PostSnippet
								img={headlines_img3}
								title="5 Strategies for Customer Review Management in 2022"
								subtitle="Since most customers will interact with as business for the first time on the internet, having an effective customer ...."
							/>
							<PostSnippet
								img={headlines_img4}
								title="How to Remove Personal Information from Google"
								subtitle="Having a great Google review management strategy is very important. They act as an icebreaker to...."
							/>
							<PostSnippet
								img={headlines_img5}
								title="Reputation Management for Politicians: What to Know"
								subtitle="Fast People Search removal can help protect your privacy online. Learn how to complete the FastPeopleSearch..."
							/>
						</StyledPostSnippet>
					</StyledArticles>
					<StyledArticles>
						<Headlines title="Popular" />
						<StyledPostSnippet>
							<PostSnippet
								img={post_img7}
								title="How to Remove My Information from Been Verified"
								subtitle="Your public perception is known as your online reputation, telling others who you are, what …"
							/>
							<PostSnippet
								img={headlines_img6}
								title="7 Software Development Models to Organize Your Team"
								subtitle="If you’re well known in your region, the United States, or the world, you’ve likely put a lot of time and..."
							/>

							<PostSnippet
								img={headlines_img7}
								title="How to Remove My Information from Instagram"
								subtitle="Your public perception is known as your online reputation, telling others who you are, what values..."
							/>
						</StyledPostSnippet>
					</StyledArticles>
				</div>
			</PageLayout>
		</section>
	);
}

export default Blog;
