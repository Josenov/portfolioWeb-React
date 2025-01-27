import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import {useTranslation} from "react-i18next"


const CertificationItem = ({year, title, duration, details, image }) => {

    const{t} = useTranslation("global")


    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDetails = () => {
        setIsExpanded(!isExpanded)
    }

    

    return (
        <ol className='relative border-l border-stone-200 font-neon'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-200 rounded-full  mt-1.5 -left-1.5 border-white' />

            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 font-semibold text-black bg-yellow-300'>{year}</span>
                <span className='text-xl font-semibold text-white'>{title}</span>
            </p>

            <div className='flex flex-wrap justify-center sm:justify-center sm:flex-row m-4 p-2 text-left'>
                <img className='h-48 w-auto text-white rounded-xl' src={image} alt="" />
            </div>

            {/* Botón para alternar detalles */}
            <div className='text-center'>
                <button
                    onClick={toggleDetails}
                    className='mt-2 text-sm text-white hover:text-stone-200 flex items-center justify-center'
                >
                    {isExpanded ? (
                        <>
                            <FaChevronUp className='mr-2' /> {/* Ícono para "Leer menos" */}
                            <p>{t("toggleBtn.text-2")}</p>
                        </>
                    ) : (
                        <>
                            <FaChevronDown className='mr-2' /> {/* Ícono para "Leer más" */}
                            <p>{t("toggleBtn.text-1")}</p>
                        </>
                    )}
                </button>
            </div>

            {/* Detalles desplegables */}
            {isExpanded && (
                <p className='m-4 p-4 text-base font-normal text-stone-500 xl:text-l'>
                    {details}
                </p>
            )}
        </li>
    </ol>
    )
}

export default CertificationItem