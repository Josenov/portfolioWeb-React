import React from 'react'
import CertificationItem from './CertificationItem'
import {useTranslation} from "react-i18next"
import certEpica from '../images/cert_epica.jpg'
import certAp from '../images/cert-ap.jpg'




const Certification = () => {

const{t} = useTranslation("global")

const data = [

    

    {
        year: 2022,
        title: 'Argentina Programa 4.0',
        duration: '2 years',
        details: `${t("certification.description_1")}`,
        image: `${certAp}`

    },

    {
        year: 2023,
        title: 'MindHub Frontend Developer',
        duration: '2 years',
        details: `${t("certification.description_2")}`,
        image: 'https://images.credly.com/size/340x340/images/db619416-19a0-4c5b-b4f7-7e44d097f392/image.png'

    },

    {
        year: 2023,
        title: 'Epica SAPEM - Full Stack Developer',
        duration: '2 Years',
        details: `${t("certification.description_3")}`,
        image: `${certEpica}`
    },

    {
        year: 2023,
        title: 'MindHub Full Stack Developer MERN Stack',
        duration: '2 Years',
        details: `${t("certification.description_4")}`,
        image: 'https://images.credly.com/size/340x340/images/be67019e-9d37-432b-bc29-18cdcb85917b/image.png'
    },

]

    

    return (
        <div id='certification' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-5xl font-bold text-center text-white pb-8 font-neon'>{t("certification.h1")}</h1>
            {
                data.map((item, id)=>(
                    <CertificationItem key={id} year={item.year} title={item.title} duration={item.duration} details={item.details} image={item.image} />
                )

                )
            }
        </div>
    )   
}

export default Certification