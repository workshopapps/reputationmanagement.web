/** @format */

import React from 'react';
import PageLayout from '../../layout/PageLayout';
import styled from 'styled-components';
import Background1 from '../../assets/images/BG1.jpg';



import { Link } from 'react-router-dom';
import {
	StyledButton,
	// StyledTextButt
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

    @media screen and (max-width: 568px) {
      height: 300px;
    }
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
   justify-content: center;
   background: #f9f8fd;
`
const FeatureText = styled.div`

`

const FeatureImageWrapper = styled.div`
// display: grid;
// grid-template-columns: repeat(4, 1fr);
// margin-top: 1rem;
// grid-gap: 1rem;
display: flex;
flex-wrap: wrap;
width: 90%;

`

const FeatureColumn = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width: 90%;
background: #fff;
border-radius: 8px;

@media screen and (max-width: 568px) {
  display: flex;
  justify-content: center;
  align-items: center;
}
`
const FeatureWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 8px;
color: #a4a5a7;
`
const FeatureName = styled.div`
  color: #000;
  font-weight: bold;
`

const Img = styled.div`
  width: 200px;
  margin: 30px 10px 30px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function Ourteam() {
    let display;
    if (window.innerWidth < 768) {
      display = false
    } else {
      display = true
    }
	return (
		// <div className="carrer-landing-pg py-12">
            <PageLayout>
                <StyledMainDiv>
             <StyledBanner>
              <StyledHeader1> Meet our <StyledTeam>  Team </StyledTeam></StyledHeader1>
              Businesses are at the mercy of negative reviews. Words can have devastating impact on brand reputation and can affect future
               sales and recruitment efforts. Here at Fixit, we provide quick and reliable actions to erase negative reviews. Here are the key 
               members that make up the team.
             </StyledBanner>
            <FeatureWrapper>
                <FeatureColumn>
                  <FeatureImageWrapper>
                  <Img>
				           	<img src={mark} alt="" />
                     <FeatureName>Mark Essien</FeatureName>
                     <FeatureText>Founder</FeatureText>
                  
                  </Img>
				          
                  <Img>
				           	<img src={david} alt="" />
                     <FeatureName>David Abraham</FeatureName>
                     <FeatureText>Director</FeatureText>
                  </Img>

                  <Img>
				           	<img src={etim} alt="" />
                     <FeatureName>Idaresit Etim</FeatureName>
                     <FeatureText>Manager</FeatureText>
				          </Img>

                  <Img>
				           	<img src={anidi} alt="" />
                     <FeatureName>Anidi Izuchukwu</FeatureName>
                     <FeatureText>Design Lead</FeatureText>
				          </Img>

                  <Img>
				           	<img src={okeke} alt="" />
                     <FeatureName>David Okeke</FeatureName>
                     <FeatureText>Backend Lead</FeatureText>
				          </Img>

                  <Img>
				           	<img src={hammed} alt=""s />
                     <FeatureName>Hammed Akinyemi</FeatureName>
                     <FeatureText>Frontend Lead</FeatureText>
				          </Img>

                  <Img>
				           	<img src={vivian} alt="" />
                     <FeatureName>Vivianne Thomas</FeatureName>
                     <FeatureText>Sales & Marketing Lead</FeatureText>
				          </Img>

                  <Img>
				           	<img src={adaeze} alt="" />
                     <FeatureName>Adaeze Ifeanyi</FeatureName>
                     <FeatureText>Product Manager</FeatureText>
				          </Img>

                  </FeatureImageWrapper>
                </FeatureColumn>
            </FeatureWrapper>
           
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
					<StyledButton className="mt-4">Join our team</StyledButton>
				</Link>
			</StyledBackGround>
            </StyledMainDiv>
            </PageLayout>
		// </div>
	);
}

export default Ourteam;