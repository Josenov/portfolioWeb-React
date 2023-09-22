import React from 'react'
import TastyImg from '../images/tastyland.jpg'
import AmazingImg from '../images/amazingevents.jpg'
import ArgentinaProgramaImg from '../images/argentinaprograma.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <>
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 font-neon '>
            <h1 className='text-5xl font-bold text-center text-[white]  '>Proyectos</h1>
            <p className='text-center py-8 text-xl font-normal text-white'></p>
        </div>
        <div className='flex items-center justify-center flex-wrap gap-10 rounded-full font-neon'>
            <ProjectItem img={TastyImg} title={'TastyLand'} link={"https://tastyland.netlify.app/"}/>
            <ProjectItem img={AmazingImg} title={'Amazing Events'} link={"https://amazingeventspage.netlify.app/"}/>
            <ProjectItem img={ArgentinaProgramaImg} title={'Portfolio Argentina Programa'}/>
        </div>
        </>
    )
}

export default Projects