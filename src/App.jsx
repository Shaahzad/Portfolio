import React from 'react'
import Navbar from './Navbar/Navbar'
import Project from './Projects/Project'
import About from './About/About'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import Skill from './skills/Skill'
import Home from './Home/Home'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/skill' element={<Skill/>} />
       </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App


      {/* <Project/>
      <Contact/>
      <Footer/> */}
