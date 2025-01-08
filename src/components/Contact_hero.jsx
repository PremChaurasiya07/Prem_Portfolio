import React from 'react'
import { useState } from 'react';
import { motion } from 'motion/react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { ToastContainer,toast } from 'react-toastify';
const Contact_hero = () => {
   
    const [email, setemail] = useState(null);
    const [msg, setmsg] = useState(null);
    const [name, setname] = useState(null);
    const [lastname, setlastname] = useState(null);
    const [phone, setphone] = useState(null);
    const handleSubmit = (e) => { 
        e.preventDefault();
       if (email!=null&&msg!=null&&phone!=null&&name!=null){
        toast('Email sent Sucessfully');
          setemail('');
        setname('');
        setphone('');
        setlastname('');
        setmsg('');
        document.getElementById('p').innerHTML='';
       }else{
        toast('Fill The Field');
       }
     
        };
  return (
    <motion.div animate={{opacity:[0,0,1],transition:{duration:0.2,ease:'easeInOut'}}} id='main_contact' className='bg-black max-w-[100vw] h-[92vh] font-mono text-white flex justify-center'>
        <ToastContainer/>
        <div id='left_contact' className=' w-[34vw] relative mr-[35vw] h-[78vh] top-[10vh] bg-gray-800'>
          
                <h2 className='relative top-[2vh] tracking-widest text-teal-500 text-3xl font-serif font-semibold pl-[1vw]'>Let's Work Together</h2>
            
               <div id='first_input' className='relative top-[10vh] flex justify-evenly '>
                <input className= 'pl-[1vw] bg-black text-white w-[14vw]  h-[5vh]' type="text" placeholder='Firstname' onChange={e=>setname(e.target.value)} value={name}/>
                <input className=' pl-[1vw] bg-black text-white  w-[14vw]  h-[5vh]' type="text" onChange={e=>setlastname(e.target.value)} placeholder='Lastname' value={lastname}/>
               </div>
               <div id='second_input'  className='relative top-[16vh] flex justify-evenly'>
                <input className= ' pl-[1vw] bg-black text-white w-[14vw]  h-[5vh]'  type="email" placeholder='Email addres' onChange={e=>setemail(e.target.value)} value={email}/>
                <input className='pl-[1vw] bg-black text-white w-[14vw]  h-[5vh]'  type="number" onChange={e=>setphone(e.target.value)} placeholder='Phone No' value={phone}/>
               </div>
               <div id='third_input'  className='flex justify-center relative top-[20vh] '>
               <p id='p' contentEditable={true} className=' pl-[1vw] overflow-hidden  bg-black text-white w-[30vw]  h-[28vh] text-wrap'  type="text" placeholder='Type your message here.' onChange={e=>setmsg(e.target.value)} value={msg} />
               </div>
          
           <button onClick={handleSubmit} className='bg-teal-500 hover:bg-teal-400 transition-all w-[8vw] h-[5vh] relative top-[24vh] ml-[2vw] rounded-2xl'>Send message</button>
        </div>
        <div id='right_contact' className='relative top-[10vh] h-[60vh]  ml-[-20vw] w-[30vw]'>
            <div id='contact_1' className='flex relative top-[14vh] '>
                <span className='w-[4vw] h-[8vh] bg-gray-700 flex justify-center pt-[2vh] rounded-sm'>
                <FaPhoneAlt size={30} color='teal'/>
                </span>
                <span className='pl-[1vw]'>
                    <h3 className='pt-[0.5vh] text-gray-400 fontmono text-[14px] tracking-wider font-semibold'>Phone</h3>
                    <p className='tracking-wider text-[16px]'>+91-9511293718</p>
                </span>
            </div>
            <div  id='contact_2'  className='flex relative top-[24vh]  '>
            <span className='w-[4vw] h-[8vh] bg-gray-700 flex justify-center pt-[2vh] rounded-sm'> <MdOutlineMail color='teal' size={30} /></span>
                <span className='pl-[1vw]'>
                    <h3 className='pt-[0.5vh] text-gray-400 fontmono text-[14px] tracking-wider font-semibold'>Email</h3>
                    <p className='tracking-wider text-[16px]'>premchaurasiya2006@gmail.com</p>
                </span>
            </div>
            <div  id='contact_3' className='flex  relative top-[32vh] '>
            <span className='w-[4vw] h-[8vh] bg-gray-700 flex justify-center pt-[2vh] rounded-sm'>
            <FaAddressCard color='teal' size={30}/>
            </span>
                <span className='pl-[1vw]'>
                    <h3 className='pt-[0.5vh] text-gray-400 fontmono text-[14px] tracking-wider font-semibold'>Adress</h3>
                    <p className='tracking-wider text-[16px]'>Waliv, Vasai(E), Maharashtra</p>
                </span>
            </div>
        </div>
   </motion.div>
  )
}

export default Contact_hero
