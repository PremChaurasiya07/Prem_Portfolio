import React from 'react'
import Navbar from './Navbar'
import Resume_hero from './Resume_hero'
import '../css/resume.css'

const Resume = () => {
  return (
    <div className='min-w-[100vw] min-h-[100vh]' id='main_main'>
      <div id='resume_nav'>
      <Navbar/>
      </div>
    
    <Resume_hero/>
    </div>
  )
}

export default Resume
