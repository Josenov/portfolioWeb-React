import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact} from 'react-icons/fa'




const Skills = () => {
    return (
        <div id='skills' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
            <h1 className='text-5xl font-bold text-center text-[white] pb-8'>Skills</h1>
            <p className='text-center py-8 text-xl font-medium text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, eligendi autem consequatur neque soluta nisi perferendis ullam animi eum, sequi voluptate pariatur id itaque nemo minima voluptas quasi? Dolor, excepturi!</p>
            <h2 className='text-xl font-bold text-center text-[white] pb-8'>Technologies</h2>

            <div className='flex justify-center gap-5 flex-wrap align-items'>
            <FaHtml5 className=' text-orange-500' size={100}/>
            <FaCss3 className=' text-blue-700' size={100}/>
            <FaJs className=' text-yellow-400' size={100}/>
            <FaReact className=' text-blue-400' size={100}/>
            <FaNodeJs className=' text-green-400' size={100}/>
            <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"  className='h-24 w-24' alt="" />
            <img src="https://wsofter.ru/wp-content/uploads/2017/12/node-express.png"  className='h-24 w-24' alt="" />
            
            </div>
            
        </div>
    )
}

export default Skills