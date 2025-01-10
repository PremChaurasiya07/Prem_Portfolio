import React from 'react'
import { easeInOut, motion } from "motion/react"
import { animate, spring } from 'motion'
import { ImCross } from "react-icons/im";
import '../css/navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [side, setside] = useState(false)
  return (
    <div className='w-[100vw] h-[8vh] text-white font-mono flex justify-evenly text-[17px] tracking-wider font-medium pt-[5vh] bg-black'>
      <motion.h2 id='logo' animate={{
        x:[-1000,0],
        opacity:[0,0,1],
        transition:{duration:2}
      }} className='text-[46px] tracking-widest mt-[-3vh] transition-all hover:text-teal-400'>Prem<motion.span whileHover={{
       }} className='text-5xl text-teal-500 hover:text-white transition-all'>.</motion.span></motion.h2>
      <motion.div animate={{y:[-200,0],transition:{duration:1}}} className='flex justify-between'>
        <ul id='ul' className='flex pt-[0.6vh]'>
          <Link to={'/'}><li className='pl-[3vw] hover:underline hover:text-teal-400 transition-all cursor-pointer hover:underline-offset-4'>Home</li></Link> 
          <Link to={'/Resume'}> <li className='pl-[3vw] hover:underline hover:text-teal-400 transition-all cursor-pointer hover:underline-offset-4'>Resume</li></Link> 
          <Link to={'/Project'}><li className='pl-[3vw] hover:underline hover:text-teal-400 transition-all cursor-pointer hover:underline-offset-4'>Work</li></Link> 
          <Link to={'/Contact'}> <li className='pl-[3vw] hover:underline hover:text-teal-400 transition-all cursor-pointer hover:underline-offset-4'>Contact</li></Link> 
        </ul>
        <div id='icon' className='hidden' onClick={()=>setside(true)}><GiHamburgerMenu color='white'  size={25}/></div>
        {/* //-- media div */}
        <motion.div animate={(side)?{x:[0],transition:{duration:0.5,delay:2,ease:'easeInOut'}}:{x:200}} id='menu' style={(side)?{display:'block'}:{display:"none"}} className='w-[60vw] h-[100vh] bg-gray-300 text-black top-0 absolute right-[0] z-50'>
          <motion.button whileTap={{
            rotate:[0,360,0], transition:{duration:0.1,ease:'easeIn',delay:2}
          }} className='relative top-4 ml-[50vw] transition-all' onClick={()=>setside(false)} ><ImCross color='black' size={22} /></motion.button>
        <ul className=' pt-[0.6vh] mt-[6vh] text-2xl font-serif font-bold tracking-widest text-center'>
          <Link to={'/'}><li className='w-[60vw] border border-black h-[14vh] pt-[4vh] hover:bg-gray-700 hover:underline hover:text-teal-400 transition-all cursor-pointer hover:underline-offset-4'>Home</li></Link> 
          
          <Link to={'/Resume'} >
          <li className='w-[60vw] border border-black h-[14vh] pt-[4vh] hover:bg-gray-700 hover:underline hover:text-teal-400 transition-all cursor-pointer hover:underline-offset-4' >Resume</li></Link> 

          <Link to={'/Project'}>
          <li className='w-[60vw] border border-black h-[14vh] pt-[4vh] hover:bg-gray-700 hover:underline hover:text-teal-400 transition-all cursor-pointer hover:underline-offset-4' >Work</li></Link> 

          <Link to={'/Contact'}>
          <li className='w-[60vw] border border-black h-[14vh] pt-[4vh] hover:bg-gray-700 hover:underline hover:text-teal-400 transition-all cursor-pointer hover:underline-offset-4' >Contact</li></Link> 
        </ul>
        </motion.div>
       <Link to={'/Contact'}><motion.button id='hire-btn'  animate={{scale:[0,2,1],transition:{duration:0.2,delay:2}}} className='w-[6vw] h-[5vh] border border-teal-500 ml-[3vw] bg-teal-500 rounded-lg hover:bg-teal-400 hover:rounded-3xl transition-all'>Hire Me</motion.button></Link> 
      </motion.div>
    </div>
  )
}

export default Navbar
