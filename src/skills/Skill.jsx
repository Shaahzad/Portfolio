import React from 'react'
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
import { TbBrandReactNative } from "react-icons/tb";


const Skill = () => {
  return (
    <>
    <div className='px-8'>
        <h1 className='text-center text-3xl font-bold text-white mb-2'>Frontend Skills</h1>
    <div className='flex flex-wrap justify-center gap-6'>
            <div className='skill btn btn-outline btn-info'>
                <h3>HTML</h3> 
                <FaHtml5 style={{color:"brown", fontSize:"18px"}}/>
            </div>
            <div className='skill btn btn-outline btn-info'>
                <h3>CSS</h3>
                <FaCss3 style={{color:"blue", fontSize:"18px" }}/>
            </div>
            <div className='skill btn btn-outline btn-info'> 
                <h3>JavaScript</h3>
                <FaJs style={{color:"yellow", fontSize:"18px"}}/>
            </div>
            <div className='skill btn btn-outline btn-info'>
                <h3>React</h3>
                <FaReact style={{color:"lightblue",fontSize:"18px"}}/>
            </div>
            <div className='skill btn btn-outline btn-info'>
                <h3>Bootstrap</h3>
                <FaBootstrap style={{color:"purple", fontSize:"18px"}}/>
            </div>
            <div className='skill btn btn-outline btn-info'>
                <h3>Tailwind</h3>
                <RiTailwindCssFill style={{color:"skyblue", fontSize:"18px"}}/>
            </div>
            <div className='skill btn btn-outline btn-info'>
              <h3>Redux ToolKit</h3>
              <BiLogoRedux style={{color:"purple", fontSize:"18px"}}/>
            </div>
            <div className='skill btn btn-outline btn-info'>
              <h3>Github</h3>
              <FaGithub/>
            </div>
             <div className="skill btn btn-outline btn-info">
              <h3>Firebase</h3>
              <RiFirebaseFill style={{color:"yellow", fontSize:"20px"}}/>
            </div> 
            <div className="skill btn btn-outline btn-info">
              <h3>MUI</h3>
              <SiMui style={{color:"blue", fontSize:"20px"}}/>
            </div>
            <div className="skill btn btn-outline btn-info">
              <h3>React Native</h3>
              <TbBrandReactNative style={{color:"blue", fontSize:"20px"}}/>
            </div>
        </div>
    <h1 className='text-center text-3xl font-bold text-white m-2'>Backend Skills</h1>
    <div className='flex flex-wrap justify-center gap-6'>
        <div className="skill btn btn-outline btn-info">
            <h3>Nodejs</h3>
            <FaNodeJs style={{color:"green", fontSize:"20px"}}/>
        </div>
        <div className="skill btn btn-outline btn-info">
            <h3>Express.Js</h3>
            <SiExpress style={{fontSize:"20px"}}/>
        </div>
        <div className="skill btn btn-outline btn-info">
            <h3>MongoDb</h3>
            <DiMongodb style={{color:"green", fontSize:"20px"}}/>
        </div>
    </div>
    </div>
    </>
  )
}

export default Skill