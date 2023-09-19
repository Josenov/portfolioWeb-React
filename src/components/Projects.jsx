import React from 'react'
import TastyImg from '../images/tastyland.jpg'
import AmazingImg from '../images/amazingevents.jpg'
import ArgentinaProgramaImg from '../images/argentinaprograma.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <>
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
            <h1 className='text-5xl font-bold text-center text-[white] pb-8'>Projects</h1>
            <p className='text-center py-8 text-xl font-normal text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, eligendi autem consequatur neque soluta nisi perferendis ullam animi eum, sequi voluptate pariatur id itaque nemo minima voluptas quasi? Dolor, excepturi!</p>
        </div>
        <div className='flex items-center justify-center flex-wrap gap-8 rounded-full'>
            <ProjectItem img={TastyImg} title={'TastyLand'}/>
            <ProjectItem img={AmazingImg} title={'Amazing Events'}/>
            <ProjectItem img={ArgentinaProgramaImg} title={'Portfolio Argentina Programa'}/>
        </div>
        </>
    )
}

export default Projects