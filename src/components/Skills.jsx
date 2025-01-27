import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact} from 'react-icons/fa'
import tailwindLogo from '../images/tailwind.png'
import bootstrapLogo from '../images/bootstrap.png'
import teamWork from '../images/team-work.png'
import comunication from '../images/comunication.png'
import adaptability from '../images/adaptability.png'
import problemResolution from '../images/problem-resolution.png'
import idiom from '../images/hello.png'
import {useTranslation} from "react-i18next"
import hmtl from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import react from '../images/react.png'
import nodejs from '../images/nodejs.png'
import express from '../images/express.png'
import postman from '../images/postman.png'
import github from '../images/github.png'
import mongo from '../images/mongo.png'
import sass from '../images/sass.png'
import ts from '../images/typescript.png'
import java from '../images/java.png'
import spring from '../images/spring.png'





const Skills = () => {

    const{t} = useTranslation("global")

    return (
        <div id='skills' className='max-w-[1040px] m-auto md:pl-20 font-neon mt-10'>
            <h1 className='text-5xl font-bold text-center text-[white] pb-8'>{t("skills.h1")}</h1>
            <p className='text-2xl text-center text-[white] mt-8 '>{t("skills.soft")}</p>
            <div className='flex justify-center gap-10 flex-wrap align-items mt-10 mb-[100px]'>
                <div className='flex flex-col items-center'>
                    <img className='h-16 w-16  md:h-[95px] md:w-auto mb-1'   src={teamWork}  alt="Trabajo en equipo" />
                    <p className='text-white'>{t("skills.soft_skills.1")}</p>
                </div>
                <div className='flex flex-col items-center ' >
                    <img className='h-16 w-16 md:h-[95px] md:w-auto mb-1'  src={comunication} alt="" />
                    <p className='text-white'>{t("skills.soft_skills.2")}</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img className='h-16 w-16 md:h-[95px] md:w-auto mb-1'  src={adaptability} alt="" />
                    <p className='text-white'>{t("skills.soft_skills.3")}</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img className='h-16 w-16 md:h-[95px] md:w-auto mb-1'  src={problemResolution} alt="" />
                    <p className='text-white'>{t("skills.soft_skills.4")}</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img className='h-16 w-16 md:h-[95px] md:w-auto mb-1'  src={idiom} alt="" />
                    <p className='text-white'>{t("skills.soft_skills.5")}</p>
                </div>

                
                
                
            </div>
            <h2 className='text-2xl text-center text-[white] pb-8 mt-8'>{t("skills.hard")}</h2>

            <div className='flex justify-center gap-5 flex-wrap align-items items-center'>
                <div className='flex flex-col items-center' >
                    <img src={hmtl} alt="" className='h-16 w-16 md:h-24 md:w-auto' />
                    
                    <p className='text-white'>HTML</p>
                </div>
                <div className='flex flex-col items-center' >
                <img src={css} alt="" className='h-16 w-16 md:h-24 md:w-auto' />       
                    <p className='text-white'>CSS</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src={bootstrapLogo}  className='h-14 w-auto md:h-24 md:w-auto' alt="" />    
                    <p className='text-white'>Bootstrap</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src={tailwindLogo}  className='h-16 w-16 md:h-24 md:w-auto' alt="" />    
                    <p className='text-white'>Tailwind CSS</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src={sass}  className='h-16 w-16 md:h-24 md:w-auto' alt="" />    
                    <p className='text-white'>Sass</p>
                </div>
                <div className='flex flex-col items-center' >
                <img src={js} alt="" className='h-16 w-16 md:h-24 md:w-auto' />     
                    <p className='text-white'>JavaScript</p>
                </div>
                <div className='flex flex-col items-center' >
                <img src={ts} alt="" className='h-20 w-20 md:h-28 md:w-auto' />     
                    <p className='text-white'>TypeScript</p>
                </div>
                <div className='flex flex-col items-center' >
                <img src={react} alt="" className='h-16 w-16 md:h-24 md:w-auto' />     
                    <p className='text-white'>React</p>
                </div>
                <div className='flex flex-col items-center' >
                <img src={nodejs} alt="" className='h-16 w-16 md:h-24 md:w-auto' />       
                    <p className='text-white'>NodeJS</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src={mongo}  className='h-16 w-16 md:h-24 md:w-24' alt="" />      
                    <p className='text-white'>MongoDB</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src={express}  className='h-16 w-16 md:h-24 md:w-24' alt="" />      
                    <p className='text-white'>Express</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src={postman}  className='h-auto w-[70px] md:h-24 md:w-24' alt="" />     
                    <p className='text-white'>Postman</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src={github}  className='h-16 w-16 md:h-24 md:w-24' alt="" />    
                    <p className='text-white'>Github</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src={java}  className='h-20 w-20 md:h-28 md:w-auto' alt="" />    
                    <p className='text-white'>Java</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src={spring}  className='h-16 w-16 md:h-24 md:w-24' alt="" />    
                    <p className='text-white'>Spring</p>
                </div>
                
            
            
            
            
            
            
            
            
            
            
            
            
            
            </div>
            
        </div>
    )
}

export default Skills