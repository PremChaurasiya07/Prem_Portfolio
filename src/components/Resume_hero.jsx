import React, { useState } from 'react'
import { motion } from 'motion/react'
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
const Resume_hero = () => {
  const [edu, setedu] = useState(true);
  const [skill, setskill] = useState(false);

const [icon1, seticon1] = useState(false);
const [icon2, seticon2] = useState(false);
const [icon3, seticon3] = useState(false);
const [icon4, seticon4] = useState(false);
const [icon5, seticon5] = useState(false);
const [icon6, seticon6] = useState(false);
const [icon7, seticon7] = useState(false);
const [icon8, seticon8] = useState(false);
  return (
    <motion.div animate={{opacity:[0,0,1],transition:{duration:0.2,ease:'easeInOut'}}} id='main_div' className='bg-black max-w-[100vw] h-[92vh] font-mono'>
      <div id='left_resume' className='w-[40vw]'>
        <h2 className='text-[36px] text-white relative top-[11vh] left-[19vw] tracking-widest'>Why hire me?</h2>
        <div id='option' className='relative top-[18vh] left-[19vw]'>
          <div className='w-[22vw] h-[10vh] rounded-md flex justify-center text-2xl pt-[2.6vh] tracking-widest bg-gray-700 text-white hover:text-black hover:bg-teal-500 hover:font-semibold transition-all' style={(edu)?{backgroundColor:'rgba(0,140,135,1)'}:null} onClick={()=>{setedu(true);setskill(false)}}>Education</div>
          <div className='w-[22vw] mt-[6vh] rounded-md flex justify-center text-2xl pt-[2.6vh] tracking-widest h-[10vh] bg-gray-700 text-white  hover:text-black hover:bg-teal-500 hover:font-semibold transition-all' style={(skill)?{backgroundColor:'rgba(0,140,135,1)'}:null} onClick={()=>{setskill(true);setedu(false)}}>Skills</div>
          {/* <div className='w-[22vw] mt-[6vh] rounded-md flex justify-center text-2xl pt-[2.6vh] tracking-widest h-[10vh] bg-gray-700 text-white  hover:text-black hover:bg-teal-500 hover:font-semibold transition-all' onClick={()=>{setabout(true);setskill(false),setedu(false)}}>About me</div> */}
        </div>
      </div>
      <div id='right' className='w-[50vw]'>
        <div id='right_div' className='relative left-[50vw]' style={(edu)?{display:'block'}:{display:'none'}}>
          <h2 className='text-white text-[28px] font-medium relative top-[-22vh]'>My Education</h2>
          <div className='w-[32vw] absolute top-[-7.5vh] h-[52vh] flex'>
            <div>
            <div className='bg-gray-700 w-[15vw] h-[25vh] rounded-tl-xl '>
              <h2 className='text-5xl text-center pt-[8vh] text-teal-500 hover:text-white transition-all cursor-default'>...</h2>
            </div>
            <div className='bg-gray-700 w-[15vw] h-[25vh] mt-[2vh] rounded-bl-xl '>
            <h1 className='text-[16px] pl-[1vw] pt-[4vh] text-teal-500 font-mono font-semibold tracking-widest'>HSC</h1>
            <p className='pt-[2vh] pl-[1vw] text-[14px] font-semibold text-white tracking-widest'><span className='text-teal-500 text-2xl  '>.</span>Holy Family Convent College, Vasai.</p>
            </div>
            </div>
            <div>
            <div className='bg-gray-700 w-[15vw]  h-[25vh] ml-[1vw] rounded-tr-xl '>
            <h1 className='text-[15px] pl-[1vw] pt-[4vh] text-teal-500 font-mono font-semibold tracking-wide'>BE/Computer Engineering</h1>
            <p className='pt-[2vh] pl-[1vw] text-[14px] font-semibold text-white tracking-wider'><span className='text-teal-500 text-2xl  '>.</span>Vidyavardhini's College of Engineering And Technology, Vasai.</p>
            </div>
            <div className='bg-gray-700 w-[15vw]  h-[25vh] ml-[1vw] mt-[2vh] rounded-br-xl '>
            <h1 className='text-[15px] pl-[1vw] pt-[4vh] text-teal-500 font-mono font-semibold tracking-widest'>SSC</h1>
            <p className='pt-[2vh] pl-[1vw] text-[13.6px] font-semibold text-white tracking-wider'><span className='text-teal-500 text-2xl  '>.</span>Fr Agnel School, Vasai.</p>
            </div>
            </div>
          
           
          </div>
        </div>

        {/* Second Skill Portion */}
        <div id='skill' className='relative left-[50vw]' style={(skill)?{display:'block'}:{display:'none'}}>
          <h2 className='text-white text-[28px] font-medium relative top-[-22vh]'>My Skills</h2>
          <div id='box' className='w-[30vw] absolute top-[-7.5vh] h-[51vh] rounded-xl flex'>
            <div>
            <div className='w-[10vw]  h-[17vh] bg-black border mr-[0.5vw] mb-[1vh] flex justify-center pt-[3vh] transition-all ' onMouseEnter={()=>seticon1(!icon1)} onMouseLeave={()=>seticon1(icon1)} ><FaReact color={(icon1)?'teal':'white'} size={70} /></div>
            <div className='w-[10vw] h-[17vh]  bg-black border mb-[1vh] flex justify-center pt-[3vh]' onMouseEnter={()=>seticon2(!icon2)} onMouseLeave={()=>seticon2(!icon2)} ><SiExpress color={(icon2)?'teal':'white'} size={70} /></div>
            <div className='w-[10vw] h-[17vh]  bg-black border flex justify-center pt-[3vh]' onMouseEnter={()=>seticon3(!icon3)} onMouseLeave={()=>seticon3(!icon3)} ><IoLogoNodejs color={(icon3)?'teal':'white'} size={70} /></div>
            </div>
            <div>
            <div className='w-[10vw]  h-[17vh] bg-black border mr-[0.5vw] mb-[1vh] flex justify-center pt-[3vh]'onMouseEnter={()=>seticon4(!icon4)} onMouseLeave={()=>seticon4(!icon4)} ><RiTailwindCssFill color={(icon4)?'teal':'white'} size={70}/></div>
            <div className='w-[10vw] h-[17vh]  bg-black border mb-[1vh] flex justify-center pt-[3vh]' onMouseEnter={()=>seticon5(!icon5)} onMouseLeave={()=>seticon5(!icon5)} ><SiMongodb color={(icon5)?'teal':'white'} size={70} />
            </div>
            <div className='w-[10vw] h-[17vh]  bg-black border flex justify-center pt-[3vh] ' onMouseEnter={()=>seticon6(!icon6)} onMouseLeave={()=>seticon6(!icon6)} ><FaHtml5 color={(icon6)?'teal':'white'} size={70}/></div>
            </div>
            <div>
            <div className='w-[10vw]  h-[17vh] bg-black border mb-[1vh] flex justify-center pt-[3vh]' onMouseEnter={()=>seticon7(!icon7)} onMouseLeave={()=>seticon7(!icon7)} ><SiCss3 color={(icon7)?'teal':'white'} size={70}/></div>
            <div className='w-[10vw] h-[17vh]  bg-black border mb-[1vh] flex justify-center pt-[3vh]' onMouseEnter={()=>seticon8(!icon8)} onMouseLeave={()=>seticon8(!icon8)} ><FaGitAlt color={(icon8)?'teal':'white'} size={70}/></div>
            <div className='w-[10vw] h-[17vh]  bg-black border'></div>
            </div>
           
          
           
          </div>
        </div>

       
      </div>
    </motion.div>
  )
}

export default Resume_hero
