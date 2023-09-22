import React from 'react'
import BgImage from '../images/bg-workspace.jpg'
import {TypeAnimation} from 'react-type-animation'
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import {MdLanguage} from 'react-icons/md'
import {useTranslation} from "react-i18next"




export const Main = () => {
  
  const[t, i18n] = useTranslation("global");


  return (
    <>
    <div id='main' >
        <img className='w-full h-screen object-cover object-center scale-x-[-1] opacity-40' src={BgImage} alt="" />
        
        
    </div>
    <div className='w-full h-screen absolute top-0 left-0 font-neon'>
      <div className='flex pb-8'>
        <MdLanguage className='text-white ml-2 my-1' size={35} />
            <button onClick={()=>i18n.changeLanguage("en")} className='text-white text-lg md:block  top-[25%] z-10 ml-1 my-1'>EN</button>
            <button onClick={()=>i18n.changeLanguage("es")} className='text-white text-lg md:block  top-[25%] z-10 ml-1 my-1'>ES</button>
      </div>
          
        <div className='max-w-[700px] m-auto  w-full flex flex-col justify-center items-center lg:items-center'>
            
        <img src="https://images.hola.com/imagenes/actualidad/20211110199327/paul-rudd-hombre-mas-sexy/1-18-201/rudd-getty-m.jpg?tx=w_680" className='rounded-full h-48 w-48 md:h-64 md:w-64' alt="" />
          <h1 className='sm:text-7xl text-4xl  my-2 font-normal text-white'>Jose Maria Novillo</h1>
          <h2 className='flex text-4xl sm:text-5xl font-normal text-yellow-300 p-2 font-handjet'>
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
                    speed={40}
                    style={{ display: 'inline-block', paddingLeft:'5px' }}
                    repeat={Infinity}
              />
          </h2>
          
          <div className='flex justify-between pt-2 gap-3'>
            <a href="https://twitter.com/?lang=es" target='_blank'><FaXTwitter className='cursor-pointer text-white' size={35}/></a>
            <a href="https://www.instagram.com/" target='_blank'><FaInstagram className='cursor-pointer text-white' size={35}/></a>
            <a href="https://www.linkedin.com/feed/" target='_blank'><FaLinkedin className='cursor-pointer text-white' size={35}/></a>
            <a href="https://github.com/" target='_blank'><FaGithub className='cursor-pointer text-white' size={35}/></a>
            
          </div>
          <h3 className='text-white m-16 font-normal text-lg sm:text-lg xl:text-2xl text-center my-8'>{t("main.welcome")}</h3>
        </div>
    </div>
    
    </>
  )
}

export default Main;