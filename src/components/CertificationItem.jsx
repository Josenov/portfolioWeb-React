import React from 'react'

const CertificationItem = ({year, title, duration, details, image }) => {

    

    return (
        <ol className='relative border-l border-stone-200 font-neon'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-stone-200 rounded-full  mt-1.5 -left-1.5 border-white'/>

                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 py-1 font-semibold text-black bg-yellow-300'>{year}</span>
                    <span className='text-xl font-semibold text-white'>{title}</span>
                    <span className='my-1 text-l font-normal leading-none text-stone-400'></span>
                    
                    
                </p>
                <div className='flex flex-wrap justify-center  sm:justify-center sm:flex-row m-4 p-2 text-left '>
                    <img className='h-48 w-auto text-white rounded-xl ' src={image} alt="" />
                    <p className='m-2 p-4 text-base font-normal text-stone-500 xl:text-xl'>{details}</p>
                </div>
                
            </li>
        </ol>
    )
}

export default CertificationItem