import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact} from 'react-icons/fa'




const Skills = () => {
    return (
        <div id='skills' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 font-neon '>
            <h1 className='text-5xl font-bold text-center text-[white] pb-8'>Skills</h1>
            <p className='text-xl text-center text-[white] pb-8'>Soft Skills</p>
            <div className='flex justify-center gap-10 flex-wrap align-items mt-4'>
                <img className='h-16 w-16 md:h-[80px] med:w-auto'  src="../public/team-work.png" alt="" />
                <img className='h-16 w-16 md:h-[80px] med:w-auto'  src="../public/comunication.png" alt="" />
                <img className='h-16 w-16 md:h-[80px] med:w-auto'  src="../public/adaptability.png" alt="" />
                <img className='h-16 w-16 md:h-[80px] med:w-auto'  src="../public/problem-resolution.png" alt="" />
                <img className='h-16 w-16 md:h-[80px] med:w-auto'  src="../public/hello.png" alt="" />
            </div>
            <h2 className='text-xl text-center text-[white] pb-8 mt-8'>Hard Skills</h2>

            <div className='flex justify-center gap-5 flex-wrap align-items'>
            <FaHtml5 className=' text-orange-500 h-16 w-16 md:h-24 md:w-auto' />
            <FaCss3 className=' text-blue-700 h-16 w-16 md:h-24 md:w-auto' />
            <FaJs className=' text-yellow-400 h-16 w-16 md:h-24 md:w-auto' />
            <FaReact className=' text-blue-400 h-16 w-16 md:h-24 md:w-auto' />
            <FaNodeJs className=' text-green-400 h-16 w-16 md:h-24 md:w-auto' />
            <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"  className='h-16 w-16 md:h-24 md:w-24' alt="" />
            <img src="https://wsofter.ru/wp-content/uploads/2017/12/node-express.png"  className='h-16 w-16 md:h-24 md:w-24' alt="" />
            <img src="https://assets.stickpng.com/images/62cc1b3a150d5de9a3dad5f7.png"  className='h-16 w-auto md:h-24 md:w-auto' alt="" />
            <img src="../public/bootstrap.png"  className='h-16 w-16 md:h-[80px] md:w-auto mt-2' alt="" />
            <img src="https://icon-library.com/images/github-icon-white/github-icon-white-5.jpg"  className='h-16 w-16 md:h-24 md:w-24' alt="" />
            <img src="../public/tailwind.png"  className='h-16 w-16 md:h-24 md:w-24' alt="" />
            
            
            </div>
            
        </div>
    )
}

export default Skills