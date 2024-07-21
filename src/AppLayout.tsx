import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/frontPage/HeroSection'

export const AppLayout = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
        </div>
    )
}
