/** @format */

import React from 'react';
import PageLayout from '../../layout/PageLayout';
import PostSnippettt from '../../components/Blog/PostSnippet'
import styled from 'styled-components';
import Background1 from '../../assets/images/BG1.jpg';



import { Link } from 'react-router-dom';
import {
	StyledButton,
	StyledTextButt
} from '../../components/Styles/Body/Button.styled';

// import Images
// import mark_img from '../../assets/images/ourteam-images/image_13.png'
import mark from '../../assets/images/blog_images/images/mark.png'
import david from '../../assets/images/blog_images/images/david.png'
import etim from '../../assets/images/blog_images/images/etim.png'
import anidi from '../../assets/images/blog_images/images/anidi.png'
import okeke from '../../assets/images/blog_images/images/okeke.png'
import hammed from '../../assets/images/blog_images/images/hammed.png'
import vivian from '../../assets/images/blog_images/images/vivian.png'
import adaeze from '../../assets/images/blog_images/images/adaeze.png'

const StyledHeader = styled.h1`
	color: #000;

	font-size: 2rem;
	padding: 4px 0;
`;
const StyledBackGround = styled.section`
	background: linear-gradient(
		0deg,
		rgba(255, 246, 231, 0.91),
		rgba(255, 246, 231, 0.91)
	);
	background-image: url(${Background1});
`;
const StyledBanner = styled.div`
    width: 90%;
    background-color: #3844a3;
    height: 200px;
    border-radius: 8px;
    margin: 50px 0 50px 0;
    display: flex;
    align-items: center;
    Justify-content: center;
    flex-direction: column;
    padding: 0px 35px 10px 35px;
    color: #fff;
`
const StyledHeader1 = styled.h1`
   font-size: 30px;
   font-weight: bold;
`

const StyledTeam = styled.span`
   font-size: 30px;
   font-weight: bold;
   color: #fc9a4a;
`

const StyledMainDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center:
`

const StyledPostSnippet = styled.div`
    display: flex; 
    width: 90%;
    gap: 10px;
    margin: 0 auto;
    flex-wrap: wrap;
    line-height: 50px;
`

function Ourteam() {
    let display;
    if (window.innerWidth < 768) {
      display = false
    } else {
      display = true
    }
	return (
		<div className="carrer-landing-pg py-12">
            <PageLayout>
                <StyledMainDiv>
             <StyledBanner>
              <StyledHeader1> Meet our <StyledTeam>  Team </StyledTeam></StyledHeader1>
              Businesses are at the mercy of negative reviews. Words can have devastating impact on brand reputation and can affect future
               sales and recruitment efforts. Here at Fixit, we provide quick and reliable actions to erase negative reviews. Here are the key 
               members that make up the team.
             </StyledBanner>

            <StyledPostSnippet>
                <PostSnippettt 
                    img={mark}
                    title="Mark Essien"
                    subtitle="Founder jhgioyo"
                    display = {display}
                />
                <PostSnippettt
                    img={david}
                    title="David Abraham"
                    subtitle="Director"
                    display = {display}
                />
                {window.innerWidth > 768 && <PostSnippettt 
                    img={etim}
                    title="Idaresit Etim"
                    subtitle="Managerr"
                    display = {display}
                />}

                 <PostSnippettt 
                    img={anidi}
                    title="Anidi Izuchukwu"
                    subtitle="Design Lead"
                    display = {display}
                />
                <PostSnippettt 
                    img={okeke}
                    title="David Okeke"
                    subtitle="Backend Lead,"
                    display = {display}
                />
                {window.innerWidth > 768 && <PostSnippettt 
                    img={hammed}
                    title="Hammed Akinyemi"
                    subtitle="Frontend Lead"
                    display = {display}
                />}

               <PostSnippettt 
                    img={vivian}
                    title="Vivianne Thomas"
                    subtitle="Sales & Marketing Lead"
                    display = {display}
                />
                <PostSnippettt 
                    img={adaeze}
                    title="Adaeze Ifeanyi"
                    subtitle="product Manager"
                    display = {display}
                />
            
            </StyledPostSnippet>
			<StyledBackGround className="grow-together flex flex-col items-center justify-center py-12 w-full mt-20">
				<StyledHeader className="text-center">Want to be a part of something special?</StyledHeader>
				<h4 className="mt-3 text-center">
					Brand reputation management is our core responsibility and this is made possible with a great team. <br />{' '}
					There really is no company like Fixit, and you can join us
				</h4>
				<Link
					to="/carrer-pg-2"
					onClick={() => {
						window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
					}}
				>
					<StyledButton className="mt-4">Join our team --></StyledButton>
				</Link>
			</StyledBackGround>
            </StyledMainDiv>
            </PageLayout>
		</div>
	);
}

export default Ourteam;
