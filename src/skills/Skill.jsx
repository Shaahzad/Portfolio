import React from 'react'
import './skill.css'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoRedux } from "react-icons/bi";
import { RiFirebaseFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMui } from "react-icons/si";



const Skill = () => {
  return (
    <>
    <div>
        <h1 className='skill-heading'>Frontend Skills</h1>
        <div className='skill-container'>
            <div className='skill'>
                <h3>HTML</h3>
                <FaHtml5 style={{color:"brown", fontSize:"20px"}}/>
            </div>
            <div className='skill'>
                <h3>CSS</h3>
                <FaCss3 style={{color:"blue", fontSize:"20px" }}/>
            </div>
            <div className='skill'> 
                <h3>JavaScript</h3>
                <FaJs style={{color:"yellow", fontSize:"20px"}}/>
            </div>
            <div className='skill'>
                <h3>React</h3>
                <FaReact style={{color:"lightblue",fontSize:"20px"}}/>
            </div>
            <div className='skill'>
                <h3>Bootstrap</h3>
                <FaBootstrap style={{color:"purple", fontSize:"20px"}}/>
            </div>
            <div className='skill'>
                <h3>Tailwind</h3>
                <RiTailwindCssFill style={{color:"skyblue", fontSize:"20px"}}/>
            </div>
            <div className='skill'>
              <h3>Redux ToolKit</h3>
              <BiLogoRedux style={{color:"purple", fontSize:"20px"}}/>
            </div>
            <div className='skill'>
              <h3>Github</h3>
              <FaGithub/>
            </div>
             <div className="skill">
              <h3>Firebase</h3>
              <RiFirebaseFill style={{color:"yellow", fontSize:"20px"}}/>
            </div> 
            <div className="skill">
              <h3>MUI</h3>
              <SiMui style={{color:"blue", fontSize:"20px"}}/>
            </div>
        </div>
    </div>
    <h1 className='skill-heading'>Backend Skills</h1>
    <div className="skill-container">
        <div className="skill">
            <h3>Nodejs</h3>
            <FaNodeJs style={{color:"green", fontSize:"20px"}}/>
        </div>
        <div className="skill">
            <h3>Express.Js</h3>
            <SiExpress style={{fontSize:"20px"}}/>
        </div>
        <div className="skill">
            <h3>MongoDb</h3>
            <DiMongodb style={{color:"green", fontSize:"20px"}}/>
        </div>
    </div>
    </>
  )
}

export default Skill