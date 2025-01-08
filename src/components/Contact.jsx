import React from 'react'
import Navbar from './Navbar'
import Contact_hero from './Contact_hero'
import '../components/contact/contact.css'
const Contact = () => {
  return (
    <div className='max-w-[100vw] max-h-[100vh]' id='top_contact'>
      <Navbar/>
      <Contact_hero/>
    </div>
  )
}

export default Contact
