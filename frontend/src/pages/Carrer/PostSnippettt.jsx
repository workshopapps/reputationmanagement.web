import React from 'react'
// import Blog_see_all from '../pages/Blog--see-all'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledPost = styled.section`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    flex: 1 1 30%;
    height: 50%;
`

const StyledImg = styled.img`
    width: 50%;
`

const StyledHeader = styled.h2`
    font-weight: ${ display => display === false? 400: 600};
    font-size: 20px;
    line-height: 150%;
    color: #233BA9;
    margin: 15px 0 8px;
    padding-left: 15px;
`



function PostSnippet({ img, title, subtitle, display}) {
  return (
    <StyledPost>
      <StyledImg src={img} alt="blogpost image" />
      <StyledHeader>{title}</StyledHeader>
    </StyledPost>
  )
}

PostSnippet.propTypes = {
    img : PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    display: PropTypes.bool
}

export default PostSnippet;
