import React from 'react'
import BgImage from '../images/bg-workspace.jpg'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

export const Main = () => {
  return (
    <>
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1] opacity-100' src={BgImage} alt="" />
    </div>
    <div className='w-full h-screen absolute top-0 left-0'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start'>
          <h1 className='sm:text-7xl text-5xl font-bold text-white'>Jose Maria Novillo</h1>
          <h2 className='flex sm:text-4xl text-3xl font-bold text-yellow-300 p-2'>
                <TypeAnimation
                    sequence={[
                      'Frontend-Developer',
                      3000,
                      'Backend-Developer',
                      3000,
                      'UX/UI Designer',
                      3000,
                      'Tech Lover',
                      3000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block', paddingLeft:'5px' }}
                    repeat={Infinity}
              />
          </h2>
          <div className='flex justify-between pt-6 gap-3'>
            <FaTwitter className='cursor-pointer text-white' size={30}/>
            <FaFacebook className='cursor-pointer text-white' size={30}/>
            <FaInstagram className='cursor-pointer text-white' size={30}/>
            <FaLinkedin className='cursor-pointer text-white' size={30}/>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default Main;