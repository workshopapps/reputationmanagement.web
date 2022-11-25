import React from 'react'
import Sidebar from '../../components/Settings/Sidebar'
import Main from '../../components/Settings/Main'
import styled from 'styled-components'

export default function Settings() {
    const StyledBody = styled.div`
        display: flex;

        /* @media (min-width: 800px){

        } */
    `
  return (
    <StyledBody>
      <Sidebar />
      <Main />
    </StyledBody>
  )
}
