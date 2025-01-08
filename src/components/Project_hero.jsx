import React, { useEffect } from 'react'
import { motion } from 'motion/react'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useState } from 'react';
import {repo} from '../utils/repo.js'
import { Link } from 'react-router-dom';
const Project_hero = () => {
    const [link, setlink] = useState(false)
    const [git, setgit] = useState(false);
    let [y, sety] = useState(0);
  return (
    <motion.div animate={{opacity:[0,0,1],transition:{duration:0.2,ease:'easeInOut'}}} id='main_div' className='bg-black max-w-[100vw] h-[92vh] font-mono flex justify-center text-white'>
      <div id='project_left' className='w-[40vw] '>
        <div className='relative top-[16vh]'>
        <h1 className='text-7xl'>{repo[y].id}</h1>
        <h2 className='text-4xl relative top-[6vh] tracking-wider font-serif'>{repo[y].name}</h2>
        <p className='text-[16px] tracking-wider relative top-[8vh] pt-[4vh] w-[38vw] text-gray-300'>{repo[y].des}</p>
        <p className='text-xl relative top-[10vh] text-teal-400 capitalize'>{repo[y].tech}</p>
        </div>
        
       <hr id='hr' className=' relative top-[28vh] w-[38vw]' />
       <div className='text-3xl relative top-[30vh] flex '>
        <Link to={repo[y].active_link} target='_blank'> <div className='w-[4vw] h-[8vh] flex justify-center rounded-full  pt-[1.5vh] bg-gray-800 ml-[0.2vw] transition-all' onMouseEnter={()=>setlink(!link)} onMouseLeave={()=>setlink(!link)}><FaLink size={34} color={(link)?'teal':'white'} /></div></Link>
        <Link to={repo[y].repo_link} target='_blank'><div className='w-[4vw] h-[8vh] flex justify-center rounded-full ml-[2vw] pt-[1.5vh] bg-gray-800 transition-all' onMouseEnter={()=>setgit(!git)} onMouseLeave={()=>setgit(!git)}><FaGithub size={34} color={(git)?'teal':'white'}  /></div></Link>
       </div>
      </div>
      <div id='right_project' className='w-[36vw]'>
        <img src={repo[y].img} alt={repo[y].img} className='border border-white h-[60vh] relative top-[11vh]' />
        <div className='relative top-[16vh] float-right flex'>
            <button className='flex justify-center pt-[0.1vh] w-[2vw] bg-teal-600 cursor-pointer h-[4vh] mr-[1.5vw]' onClick={()=>{(y==0)?sety(0):sety(--y)}}><GrFormPrevious size={26} color='black'/></button>
          <button className='flex justify-center pt-[0.1vh] w-[2vw] cursor-pointer bg-teal-600  h-[4vh] mr-[1vw] ' onClick={()=>(y==1)?sety(1):sety(++y)}><GrFormNext  size={26} color='black'/></button>
        </div>
      </div>  
    </motion.div>
  )
}

export default Project_hero
