import React from 'react'
import styled from 'styled-components'
import search from '../../assets/images/blog_images/icons/search.png'

const StyledForm = styled.form`
    border: 1px solid #E4E4E5;
    border-radius: 8px;
    width: 40%;
    margin: 30px auto;
    padding: 10px auto;
    display: flex;

    @media screen and (max-width: 768px) {
        width: 60%;
        font-size: 18px;
    }
`

const StyledInput = styled.input`
    padding: 10px;
    border: 0;
    margin: auto 10px;
    &:placeholder {
        padding: 10px;
        border: 0;
        margin: auto 10px;
    }
`

const StyledImg = styled.img`
    margin-left: 10px;
    margin: auto 0 auto 10px;
`

function Search({ display }) {
    console.log(display);
  return (
    <>
        <StyledForm>
            <StyledImg src={search} alt="" />   
            <StyledInput type="text" placeholder="Search for anything..."/>
        </StyledForm>
    </>
  )
}

export default Search;
