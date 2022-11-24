import React from 'react'
import { HeroSection, HeroTextDiv, StyledSupportForm } from './Support.styled';
import {
    StyledH1Center,

} from '../../components/Styles/Body/Text.styled';


const Hero = () => {
    return (

        <HeroSection>
            <HeroTextDiv>
                <StyledH1Center>
                    Hi, how can we help you?
                </StyledH1Center>
                <p className='md:w-7/12'>
                    Ask a question or describe the problem you are having, an we will respond to you shortly and swiftly.
                </p>
            </HeroTextDiv>

            <StyledSupportForm>
                <input
                    type="search"
                    placeholder='Search for articles'
                    required
                />
                <button type='button'>
                    Search
                </button>
            </StyledSupportForm>
        </HeroSection>
    )
}

export default Hero;