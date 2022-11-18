import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Home/Hero'
import HowFixItWorks from '../components/Home/HowFixItWorks'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <HowFixItWorks />
            <Footer />

        </>
    )
}

export default Home