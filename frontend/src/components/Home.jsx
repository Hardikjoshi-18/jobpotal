import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousely from './CategoryCarousely'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const {user} = useSelector(store=>store.auth);
  const navigate = useNavigate();
  useEffect(()=>{
    if(user?.role=== 'recruiter'){
      navigate('/admin/companies')
    }
  },[])
  // Home.jsx
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
