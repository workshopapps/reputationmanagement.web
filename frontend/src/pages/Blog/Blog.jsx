import React from 'react';
import styled from 'styled-components';
import Search from '../../components/Blog/Search';
import Hero from '../../components/Blog/Hero';
import PostSnippet from '../../components/Blog/PostSnippet';
import PageLayout from '../../layout/PageLayout';

// import Images
import headlines_img1 from '../../assets/images/blog_images/images/headlines_img1.png';
import post_img2 from '../../assets/images/blog_images/images/post_img2.png';
import headlines_img2 from '../../assets/images/blog_images/images/reddit.png';
import headlines_img3 from '../../assets/images/blog_images/images/headlines_img3.png';
import headlines_img4 from '../../assets/images/blog_images/images/privacy.png';
import headlines_img5 from '../../assets/images/blog_images/images/hall.png';
import post_img7 from '../../assets/images/blog_images/images/post_img7.png';
import headlines_img6 from '../../assets/images/blog_images/images/headlines_img6.png';
import headlines_img7 from '../../assets/images/blog_images/images/headlines_img7.png';
import Filter from '../../components/Blog/filter';
import Footer from '../../components/Blog/footer';
import Pagination from '../../components/Blog/pagination';

const StyledArticles = styled.div`
	//width: 70%;
	margin: 0 auto;
	margin-bottom: 50px;
`;

const StyledPostSnippet = styled.div`
	width: 100%;
	display: grid;
	gap: 1.5rem;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 520px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const StyledPostMain = styled.div`
	display: flex;
	//justify-content: center;
	position: relative;
	//background-color: black;
	margin-left: 64px;
	margin-right: 64px;

	@media (max-width: 850px) {
		margin-left: 34px;
		margin-right: 34px;
		flex-direction: column;
	}

	@media (max-width: 520px) {
		margin-left: 20px;
		margin-right: 20px;
	}
`;
const StyledFilter = styled.div`
	margin-right: 32px;

	@media (max-width: 850px) {
		margin-right: 0px;
	}
`;

function Blog() {
	return (
		<section>
			<PageLayout>
				<div style={{ maxWidth: '1540px', margin: '0 auto' }}>
					<Hero />
					<Search />
					<StyledPostMain>
						<StyledFilter>
							<Filter />
						</StyledFilter>
						<div>
							<StyledArticles>
								<StyledPostSnippet>
									<PostSnippet
										img={headlines_img1}
										tag="Reputation Management"
										title="How to Do Defamation Removal Online"
										subtitle="Defamation removal can be challenging. With our step-by-step guide, learn how to protect ..."
									/>
									<PostSnippet
										img={post_img2}
										tag="Reputation Management"
										title="Why You Need An Online Reputation"
										subtitle="If you’re well known in your region, the United States, or the world, you’ve likely put a lot of time and resources,,,"
									/>

									<PostSnippet
										img={headlines_img2}
										tag="Social Media"
										title="How to Remove Info from Reddit"
										subtitle="Fast People Search removal can help protect your privacy online. Learn how to complete the r/reddit.com ..."
									/>
								</StyledPostSnippet>
							</StyledArticles>

							<StyledArticles>
								<StyledPostSnippet>
									<PostSnippet
										img={headlines_img3}
										tag="Reputation Management"
										title="5 Strategies for Customer Review Management in 2022"
										subtitle="Since most customers will interact with as business for the first time on the internet, having an effective customer ...."
									/>
									<PostSnippet
										img={headlines_img4}
										tag="Google Review"
										title="How to Remove Personal Information from Google"
										subtitle="Having a great Google review management strategy is very important. They act as an icebreaker to...."
									/>
									<PostSnippet
										img={headlines_img5}
										tag="Politics"
										title="Reputation Management for Politicians: What to Know"
										subtitle="Fast People Search removal can help protect your privacy online. Learn how to complete the FastPeopleSearch..."
									/>
								</StyledPostSnippet>
							</StyledArticles>

							<StyledArticles>
								<StyledPostSnippet>
									<PostSnippet
										img={post_img7}
										tag="Reputation Management"
										title="How to Remove My Information from Been Verified"
										subtitle="Your public perception is known as your online reputation, telling others who you are, what …"
									/>
									<PostSnippet
										img={headlines_img6}
										tag="Reputation Management"
										title="7 Software Development Models to Organize Your Team"
										subtitle="If you’re well known in your region, the United States, or the world, you’ve likely put a lot of time and..."
									/>

									<PostSnippet
										img={headlines_img7}
										tag="Social Media"
										title="How to Remove My Information from Instagram"
										subtitle="Your public perception is known as your online reputation, telling others who you are, what values..."
									/>
								</StyledPostSnippet>
							</StyledArticles>
						</div>
					</StyledPostMain>

					<Pagination />

					<Footer />
				</div>
			</PageLayout>
		</section>
	);
}

export default Blog;
