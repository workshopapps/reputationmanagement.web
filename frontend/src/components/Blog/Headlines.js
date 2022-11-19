import React from 'react'
// import Blog from '../pages/Blog/Blog'
import arrow_right from '../../assets/images/blog_images/icons/gold-arrow-right.png'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyleHeader = styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    color: #233BA9;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`

const StyleSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 64px;
`

const StyleChildSection = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const StyleImg = styled.img`
    
`

const StyleParagraph = styled.p`
    width: 50px;

    &:hover {
      cursor: pointer;
    }
`

function Headlines({ title }) {
  return (
    <StyleSection>
      <StyleHeader>{title}</StyleHeader>
      <StyleChildSection className="details">
        <StyleParagraph>See All</StyleParagraph>
        <StyleImg src={arrow_right} alt="" />
      </StyleChildSection>
    </StyleSection>
  )
}

Headlines.propTypes = {
    title: PropTypes.string
}
export default Headlines;