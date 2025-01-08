import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Resume from './components/Resume'
import Project from './components/Project'
import Contact from './components/Contact'
function App() {

  return (
   
   <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/Resume'} element={<Resume/>}/>
      <Route path={'/Project'} element={<Project/>}/>
      <Route path={'/Contact'} element={<Contact/>}/>
    </Routes>
   
  )
}

export default App
