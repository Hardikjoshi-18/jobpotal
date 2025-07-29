import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousely from './CategoryCarousely'
import LatestJobs from './LatestJobs'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarousely/>
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home
