import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject} from 'react-icons/ai'
import {GrCertificate, GrTroubleshoot} from 'react-icons/gr'



export const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        console.log('state changed')
    }

    return (
    <div>
        <AiOutlineMenu onClick={handleNav}  className='fixed top-4 right-4 z-[99] md:hidden text-4xl text-white  '/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-black/70 flex flex-col justify-center items-center z-20 font-neon'>
                    <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-m bg-yellow-300 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        < AiOutlineHome size={20}/>
                        <span className='pl-4'>Inicio</span>
                    </a>
                    <a onClick={handleNav} href='#certification' className='w-[75%] flex justify-center items-center rounded-full shadow-m bg-yellow-300 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrCertificate size={20}/>
                        <span className='pl-4'>Certificaciones</span>
                    </a>
                    <a onClick={handleNav} href='#skills' className='w-[75%] flex justify-center items-center rounded-full shadow-m bg-yellow-300 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrTroubleshoot size={20}/>
                        <span className='pl-4'>Habilidades</span>
                    </a>

                    <a onClick={handleNav} href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-m bg-yellow-300 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineProject size={20}/>
                        <span className='pl-4'>Proyectos</span>
                    </a>
                    
                    <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-m  bg-yellow-300 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20}/>
                        <span className='pl-4'>Contacto</span>
                    </a>
                </div>
            )
            : (
                ''
            )}

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href='#main' className='rounded-full shadow-sm bg-yellow-300 shadow-white m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-300' title='Home'>
                        <AiOutlineHome /> 
                    </a>
                    <a href='#certification' className='rounded-full shadow-sm bg-yellow-300 shadow-white m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-300' title='Certificates'>
                        <GrCertificate />
                    </a>
                    <a href='#skills' className='rounded-full shadow-sm bg-yellow-300 shadow-white m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-300'title='Skills'>
                        <GrTroubleshoot />
                    </a>
                    <a href='#projects' className='rounded-full shadow-sm bg-yellow-300 shadow-white m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-300' title='Projects'>
                        <AiOutlineProject />
                    </a>
                    <a href='#contact' className='rounded-full shadow-sm bg-yellow-300 shadow-white m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-300' title='Contact'>
                        <AiOutlineMail />
                    </a>
                    
                </div>
            </div>
    
    </div>
    )
}

export default Sidenav;