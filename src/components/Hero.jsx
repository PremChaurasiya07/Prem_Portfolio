import React, { useState } from 'react'
import '../components/hero/hero.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import profile from '../../public/profile_img.png'
const Hero = () => {
  const [icon1,seticon1] = useState(false);
  const [icon2,seticon2] = useState(false);
  const [icon3,seticon3] = useState(false);
  return (
    <>
      <div id='main' className='text-white w-[100vw] h-[70vh] mt-[4vh] flex justify-between font-mono'>
        <div id='left' className='w-[56vw] pl-[15vw]  pt-[12vh]'>
            <h3 className=' text-xl' >Full Stack Developer</h3>
            <h2  className='text-7xl font-mono font-medium'>Hello I'm</h2>
            <h2 className='text-7xl font-mono font-medium text-teal-400'>Prem Chaurasiya</h2>
            <p  className='pt-[1vh] text-[17px]'>I am a passionate Full Stack Web Developer with a strong background in both front-end and back-end development. My expertise lies in crafting dynamic, responsive, and user-friendly websites and applications.</p>
        </div>
        <div id='right_home' className='w-[40vw]'>
            <div id='frame' className='border border-teal-400 h-[63vh] w-[30vw] rounded-full mt-[8vh] ml-[10vw] border-x-8 border-y-8 border-dashed'>
        </div>
        </div>
       <img src={profile}  className='relative top-[6.5vh] right-[59.6vh] w-[60vw] h-[57vh]' /> 
      
      </div>
      <div id='contact' className=' text-white relative top-[-15vh] left-[15vw] w-[40vw] font-mono font-semibold flex justify-center '>
        <button className=' bg-black w-[10vw] h-[6vh]  rounded-lg text-[14px] tracking-wider mr-[6vw] transition-all border-x-2 border-y-2 border-teal-500 hover:bg-teal-500'>Download CV</button>
        <ul className='flex mr-[8vw]'>
            <li className='pl-[3vw] cursor-pointer transition-all' onMouseEnter={()=>seticon1(!icon1)} onMouseLeave={()=>seticon1(!icon1)}><FaGithub size={33}  color={!(icon1)?'teal':'white'}/></li>
            <li className='pl-[3vw] cursor-pointer transition-all'  onMouseEnter={()=>seticon2(!icon2)} onMouseLeave={()=>seticon2(!icon2)}><FaLinkedin size={33} color={!(icon2)?'teal':'white'}/></li>
            <li className='pl-[3vw] cursor-pointer transition-all'  onMouseEnter={()=>seticon3(!icon3)} onMouseLeave={()=>seticon3(!icon3)}><CgMail size={34} color={!(icon3)?'teal':'white'}/></li>
        </ul>
      </div>
    </>
  )
}

export default Hero
