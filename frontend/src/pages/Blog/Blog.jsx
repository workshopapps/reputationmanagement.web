import React from 'react'
import styled from 'styled-components'
import Search from '../../components/Blog/Search'
import Hero from '../../components/Blog/Hero'
import PostSnippet from '../../components/Blog/PostSnippet'
import Headlines from '../../components/Blog/Headlines'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'

// import Images
import headlines_img1 from '../../assets/images/blog_images/images/headlines_img1.png'
import post_img2 from '../../assets/images/blog_images/images/post_img2.png'
import headlines_img2 from '../../assets/images/blog_images/images/headlines_img2.png'
import headlines_img3 from '../../assets/images/blog_images/images/headlines_img3.png'
import headlines_img4 from '../../assets/images/blog_images/images/headlines_img4.png'
import headlines_img5 from '../../assets/images/blog_images/images/headlines_img5.png'
import post_img7 from '../../assets/images/blog_images/images/post_img7.png'
import headlines_img6 from '../../assets/images/blog_images/images/headlines_img6.png'
import headlines_img7 from '../../assets/images/blog_images/images/headlines_img7.png'

const StyledPostSnippet = styled.div`
    display: flex; 
    width: 90%;
    gap: 10px;
    margin: 0 auto;
`

const StyledArticles = styled.div`
    margin-bottom: 20px;
`

function Blog() {
    let display;
  if (window.innerWidth < 768) {
    display = false
  } else {
    display = true
  }
  return (
    <section>
        <Header />
        <Hero />
        <Search />
        <StyledArticles>
            <Headlines 
                title="Recent Articles"
            />
            <StyledPostSnippet>
                <PostSnippet 
                    img={headlines_img1}
                    title="How to Do Defamation Removal Online"
                    subtitle="Defamation removal can be challenging. With our step-by-step guide, learn how to protect ..."
                    display = {display}
                />
                <PostSnippet 
                    img={post_img2}
                    title="Why You Need An Online Reputation"
                    subtitle="If you’re well known in your region, the United States, or the world, you’ve likely put a lot of time and resources,,,"
                    display = {display}
                />
                {window.innerWidth > 768 && <PostSnippet 
                    img={headlines_img2}
                    title="Removing Info from FastPeopleSearch"
                    subtitle="Fast People Search removal can help protect your privacy online. Learn how to complete the process..."
                    display = {display}
                />}
            </StyledPostSnippet>
        </StyledArticles>
        <StyledArticles>
            <Headlines 
                title="Trending Topics"
            />
            <StyledPostSnippet>
                <PostSnippet 
                    img={headlines_img3}
                    title="5 Strategies for Customer Review Management in 2022"
                    subtitle="Since most customers will interact with as business for the first time on the internet, having an effective customer ...."
                    display = {display}
                />
                <PostSnippet 
                    img={headlines_img4}
                    title="How to Remove Personal Information from Google"
                    subtitle="Having a great Google review management strategy is very important. They act as an icebreaker to...."
                    display = {display}
                />
                {window.innerWidth > 768 && <PostSnippet 
                    img={headlines_img5}
                    title="Reputation Management for Politicians: What to Know"
                    subtitle="Fast People Search removal can help protect your privacy online. Learn how to complete the FastPeopleSearch..."
                    display = {display}
                />}
            </StyledPostSnippet>
        </StyledArticles>
        <StyledArticles>
            <Headlines 
                title="Popular"
            />
            <StyledPostSnippet>
                <PostSnippet 
                    img={post_img7}
                    title="How to Remove My Information from BeenVerified"
                    subtitle="Your public perception is known as your online reputation, telling others who you are, what …"
                    display = {display}
                />
                <PostSnippet 
                    img={headlines_img6}
                    title="7 Software Development Models to Organize Your Team"
                    subtitle="If you’re well known in your region, the United States, or the world, you’ve likely put a lot of time and..."
                    display = {display}
                />
                {window.innerWidth > 768 && <PostSnippet 
                    img={headlines_img7}
                    title="How to Remove My Information from Instagram"
                    subtitle="Your public perception is known as your online reputation, telling others who you are, what values..."
                    display = {display}
                />}
            </StyledPostSnippet>
        </StyledArticles>
        <Footer />
    </section>
  )
}


export default Blog;