import React from 'react'
import '../css/hero.css'
import Navbar from './Navbar'
import Hero from './Hero'
const Home = () => {
  return (
    <div className='bg-black max-w-[100vw] min-h-[100vh]'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home
