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
  <div className='px-8 mt-12 mb-20'> 
  <image src="../../public/images/skill.jpg"/>
  <h1 className='text-center text-3xl font-bold text-black mb-2'>Frontend Skills</h1>
    <div className='flex flex-wrap justify-center gap-5'>
    <div className="flex items-center gap-2 cursor-pointer hover:scale-110 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 px-6 py-2 rounded">
                <h3 className='font-bold'>HTML</h3> 
                <FaHtml5 style={{color:"brown", fontSize:"30px"}}/>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:scale-110 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 px-6 py-2 rounded">
                <h3 className='font-bold'>CSS</h3>
                <FaCss3 style={{color:"blue", fontSize:"30px" }}/>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:scale-110 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 px-6 py-2 rounded">
                <h3 className='font-bold'>JavaScript</h3>
                <FaJs style={{color:"yellow", fontSize:"30px"}}/>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:scale-110 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 px-6 py-2 rounded">
                <h3 className='font-bold'>React</h3>
                <FaReact style={{color:"lightblue", fontSize:"30px"}}/>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:scale-110 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 px-6 py-2 rounded">
                <h3 className='font-bold'>Bootstrap</h3>
                <FaBootstrap style={{color:"purple", fontSize:"30px"}}/>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:scale-110 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 px-6 py-2 rounded">
                <h3 className='font-bold'>Tailwind</h3>
                <RiTailwindCssFill style={{color:"skyblue", fontSize:"30px"}}/>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:scale-110 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 px-6 py-2 rounded">
              <h3 className='font-bold'>Redux ToolKit</h3>
              <BiLogoRedux style={{color:"purple", fontSize:"30px"}}/>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:scale-110 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 px-6 py-2 rounded">
              <h3 className='font-bold'>Github</h3>
              <FaGithub style={{fontSize: "30px"}}/>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:scale-110 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 px-6 py-2 rounded">
              <h3 className='font-bold'>Firebase</h3>
              <RiFirebaseFill style={{color:"yellow", fontSize:"30px"}}/>
            </div> 
            <div className="flex items-center gap-2 cursor-pointer hover:scale-110 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 px-6 py-2 rounded">
              <h3 className='font-bold'>MUI</h3>
              <SiMui style={{color:"blue", fontSize:"30px"}}/>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:scale-110 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 px-6 py-2 rounded">
              <h3 className='font-bold'>React Native</h3>
              <TbBrandReactNative style={{color:"blue", fontSize:"30px"}}/>
            </div>
        </div>
        <div className='px-8 mt-12 mb-20'>
    <h1 className='text-center text-3xl font-bold text-black mb-2'>Backend Skills</h1>
    <div className='flex flex-wrap justify-center gap-5'>
        <div className="flex items-center gap-2 cursor-pointer hover:scale-110 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 px-6 py-2 rounded">
            <h3 className='font-bold'>Nodejs</h3>
            <FaNodeJs style={{color:"green", fontSize:"30px"}}/>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:scale-110 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 px-6 py-2 rounded">
            <h3 className='font-bold'>Express.Js</h3>
            <SiExpress style={{fontSize:"30px", color: "white"}}/>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:scale-110 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 px-6 py-2 rounded">
            <h3 className='font-bold'>MongoDb</h3>
            <DiMongodb style={{color:"green", fontSize:"30px"}}/>
        </div>
    </div>
        </div>
    </div>
    </>
  )
}

export default Skill