import React from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../layout/PageLayout'
import Styled from "styled-components"

const ErrorPage = () => {
    return (
        <PageLayout>
            <Wrapper>
                <H1text>
                    Page Not Found

                </H1text>
                <Link to="/">
                    <Button>
                        Home
                    </Button>
                </Link>
            </Wrapper>
        </PageLayout>
    )
}

export default ErrorPage

const Wrapper = Styled.section`
text-align: center;


`
const H1text = Styled.h1`
text-align: center;
font-size: 5rem;
padding: 3rem 0;
`
const Button = Styled.button`
text-align: center;
padding: 1rem 2rem;
border: 1px solid blue;
margin-bottom:2rem;

`