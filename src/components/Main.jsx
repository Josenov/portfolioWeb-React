import React from 'react'
import BgImage from '../images/bg-workspace.jpg'
import {TypeAnimation} from 'react-type-animation'
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'

export const Main = () => {
  return (
    <>
    <div id='main'>
        <img className='w-full h-screen object-cover object-center scale-x-[-1] opacity-40' src={BgImage} alt="" />
        
    </div>
    <div className='w-full h-screen absolute top-0 left-0'>
        
        <div className='max-w-[700px] m-auto pt-8 h-full w-full flex flex-col justify-center items-center lg:items-center'>
        <img src="https://images.hola.com/imagenes/actualidad/20211110199327/paul-rudd-hombre-mas-sexy/1-18-201/rudd-getty-m.jpg?tx=w_680" className='rounded-full h-48 w-48 md:h-64 md:w-64' alt="" />
          <h1 className='lg:text-7xl text-4xl  my-2 font-normal text-white'>Jose Maria Novillo</h1>
          <h2 className='flex sm:text-4xl text-3xl font-normal text-yellow-300 p-2'>
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
          
          <div className='flex justify-between pt-2 gap-3'>
            <a href="https://twitter.com/?lang=es" target='_blank'><FaXTwitter className='cursor-pointer text-white' size={35}/></a>
            <a href="https://www.instagram.com/" target='_blank'><FaInstagram className='cursor-pointer text-white' size={35}/></a>
            <a href="https://www.linkedin.com/feed/" target='_blank'><FaLinkedin className='cursor-pointer text-white' size={35}/></a>
            <a href="https://github.com/" target='_blank'><FaGithub className='cursor-pointer text-white' size={35}/></a>
            
          </div>
          <h3 className='text-white m-16 font-normal text-sm sm:text-lg text-left my-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi suscipit debitis expedita harum, aliquam reiciendis quaerat tempore optio nesciunt esse eos explicabo illo dolorum perspiciatis, facere ab ipsum tempora ducimus.</h3>
        </div>
    </div>
    
    </>
  )
}

export default Main;