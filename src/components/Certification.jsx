import React from 'react'
import CertificationItem from './CertificationItem'
import {useTranslation} from "react-i18next"





const Certification = () => {

const{t} = useTranslation("global")

const data = [

    

    {
        year: 2022,
        title: '#ArgentinaPrograma',
        duration: '2 years',
        details: `${t("certification.description_1")}`,
        image: 'https://drive.google.com/uc?export=download&id=1jPuW8MOgy3vDQOa0GTHQEwJYulXGzU3h'

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
        image: 'https://drive.google.com/uc?export=download&id=1VmHrZ_SFlfM7L4tLXRoksh_UMmlhgHlR'
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