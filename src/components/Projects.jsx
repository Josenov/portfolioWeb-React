import React from 'react'
import TastyImg from '../images/tastyland.jpg'
import AmazingImg from '../images/amazingevents.jpg'
import MoonbeanCoffee from '../images/moonbeancoffee.png'
import ProjectItem from './ProjectItem'
import {useTranslation} from "react-i18next"

const Projects = () => {

    const{t} = useTranslation("global")

    return (
        <div className=' '>
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 mt-16 font-neon flex items-center justify-center  '>
            <h1 className='text-5xl font-bold text-center text-[white]  mb-8'>{t("projects.h1")}</h1>
        </div>
        <div className='flex items-center justify-center flex-wrap gap-10 rounded-full w-full p-6 font-neon'>
            
            <ProjectItem img={TastyImg} title={'TastyLand'} link={"https://tastyland.netlify.app/"} description={t("projects.description1")} />
            <ProjectItem img={AmazingImg} title={'Amazing Events'} link={"https://amazingeventspage.netlify.app/"} description={ t("projects.description2")}/>
            <ProjectItem img={MoonbeanCoffee} title={'Moonbeans Coffee'} link={"https://moonbeancafe.netlify.app/"} description={ t("projects.description3")}/>
            
        </div>
        </div>
    )
}

export default Projects