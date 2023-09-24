import React, {  useState } from 'react'
import BgImage from '../images/bg-workspace.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdLanguage } from 'react-icons/md'
import { useTranslation } from "react-i18next"





export const Main = () => {

  const [t, i18n] = useTranslation("global");

  const [switchButton, setswitchButton] = useState(false);

  

  const handleButtonSwitch = () => {
    
    if (!switchButton) {
      
      i18n.changeLanguage("en")
      console.log('Switch On')
    } else {
      
      i18n.changeLanguage("es")
      console.log('Switch Off')
    }
    setswitchButton(!switchButton)
  };

    


  return (
    <>
      <div id='main' >
        <img className='w-full h-screen object-cover object-center scale-x-[-1] opacity-40' src={BgImage} alt="" />


      </div>
      <div className='w-full h-screen absolute top-0 left-0 font-neon'>
        <div className='flex pb-8 xl:ml-4'>

          <MdLanguage className='text-white ml-2 mt-3' size={30} />
          <label className="inline-block pl-[0.15rem] hover:cursor-pointer text-white mt-4" htmlFor="flexSwitchCheckDefault">ES/EN</label>
          <input onClick={handleButtonSwitch}
            className="ml-1 mt-5 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-yellow-300 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" title='Language Selector'/>
          
        </div>

        <div className='max-w-[700px] m-auto  w-full flex flex-col justify-center items-center lg:items-center'>

          <img src="http://drive.google.com/uc?export=view&id=165jQT9bpmnnrquNyi6zK_z-YHBGLoBfp" className='rounded-full object-cover object-center h-48 w-48 md:h-64 md:w-64' alt="" />
          <h1 className='sm:text-7xl text-4xl  my-2 font-bold text-white'>Jose Maria Novillo</h1>
          <h2 className='flex text-4xl sm:text-5xl font-normal text-yellow-300 mb-4 font-handjet'>
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
              style={{ display: 'inline-block', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>

          <div className='flex justify-between pt-2 gap-3'>
            <a href="https://twitter.com/?lang=es" target='_blank'><FaXTwitter className='cursor-pointer text-white' size={35} /></a>
            <a href="https://www.instagram.com/" target='_blank'><FaInstagram className='cursor-pointer text-white' size={35} /></a>
            <a href="https://www.linkedin.com/feed/" target='_blank'><FaLinkedin className='cursor-pointer text-white' size={35} /></a>
            <a href="https://github.com/" target='_blank'><FaGithub className='cursor-pointer text-white' size={35} /></a>

          </div>
          <h3 className='text-white m-8 font-normal text-xl sm:text-lg xl:text-2xl text-center'>{t("main.welcome")}</h3>
        </div>
      </div>

    </>
  )
}

export default Main;