import React from 'react'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Insight from '../components/Insight'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Pricing from '../components/Pricing'
import Stats from '../components/Stats'
import Testimony from '../components/Testimony'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Stats />
            <Features />
            <Pricing />
            <Insight />
            <Testimony />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home