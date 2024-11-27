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





const Skills = () => {

    const{t} = useTranslation("global")

    return (
        <div id='skills' className='max-w-[1040px] m-auto md:pl-20 font-neon'>
            <h1 className='text-5xl font-bold text-center text-[white] pb-8'>{t("skills.h1")}</h1>
            <p className='text-2xl text-center text-[white] mt-8 '>{t("skills.soft")}</p>
            <div className='flex justify-center gap-10 flex-wrap align-items mt-10 mb-[100px]'>
                <div className='flex flex-col items-center'>
                    <img className='h-16 w-16 md:h-[95px] md:w-auto mb-1'  src={teamWork} alt="" />
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
                    <FaHtml5 className=' text-orange-500 h-16 w-16 md:h-24 md:w-auto' />
                    <p className='text-white'>HTML</p>
                </div>
                <div className='flex flex-col items-center' >
                    <FaCss3 className=' text-blue-700 h-16 w-16 md:h-24 md:w-auto' />       
                    <p className='text-white'>CSS</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src={bootstrapLogo}  className='h-16 w-auto md:h-[90px] md:w-auto' alt="" />    
                    <p className='text-white'>Bootstrap</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src={tailwindLogo}  className='h-16 w-16 md:h-24 md:w-auto' alt="" />    
                    <p className='text-white'>Tailwind CSS</p>
                </div>
                <div className='flex flex-col items-center' >
                    <FaJs className=' text-yellow-400 h-16 w-16 md:h-24 md:w-auto' />      
                    <p className='text-white'>JavaScript</p>
                </div>
                <div className='flex flex-col items-center' >
                    <FaReact className=' text-blue-400 h-16 w-16 md:h-24 md:w-auto' />     
                    <p className='text-white'>React</p>
                </div>
                <div className='flex flex-col items-center' >
                    <FaNodeJs className=' text-green-400 h-16 w-16 md:h-24 md:w-auto' />       
                    <p className='text-white'>NodeJS</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"  className='h-16 w-16 md:h-24 md:w-24' alt="" />      
                    <p className='text-white'>MongoDB</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"  className='h-16 w-16 md:h-24 md:w-24' alt="" />      
                    <p className='text-white'>Express</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src="https://cdn.worldvectorlogo.com/logos/postman.svg"  className='h-16 w-16 md:h-24 md:w-24' alt="" />     
                    <p className='text-white'>Postman</p>
                </div>
                <div className='flex flex-col items-center' >
                    <img src="https://icon-library.com/images/github-icon-white/github-icon-white-5.jpg"  className='h-16 w-16 md:h-24 md:w-24' alt="" />    
                    <p className='text-white'>Github</p>
                </div>
                
            
            
            
            
            
            
            
            
            
            
            
            
            
            </div>
            
        </div>
    )
}

export default Skills