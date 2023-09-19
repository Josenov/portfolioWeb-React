import React from 'react'

const ProjectItem = ({ img, title }) => {
    return (
        <>
        <div className='relative flex items-center justify-center h-auto w-full  m-2 lg:w-1/4 shadow-xl shadow-gray-800 rounded-xl group hover:bg-gradient-to-r from-gray-700 to-[#000000]'>
            <img className='rounded-xl group-hover:opacity-10' src={img} alt="/" />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-xl font-bold pb-3 text-center text-white'>{title}</h3>
                <a href="/">
                    <p className='text-center w-64 p-3 rounded-full bg-yellow-300 text-gray-700  cursor-pointer text-lg'>More Info</p>
                </a>
            </div>
        </div>
        </>
    )
}

export default ProjectItem