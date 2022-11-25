import React from 'react'
import Article from '../../components/Support/Article'
import Hero from '../../components/Support/Hero'
import Question from '../../components/Support/Question'
import { StyledSupport } from '../../components/Support/Support.styled'
import PageLayout from '../../layout/PageLayout'

const SupportPage = () => {
    return (
        <PageLayout>
            <StyledSupport>
                <Hero />
                <Article />
                <Question />
            </StyledSupport>
        </PageLayout>
    )
}

export default SupportPage;