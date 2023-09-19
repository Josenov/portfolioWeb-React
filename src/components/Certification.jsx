import React from 'react'
import CertificationItem from './CertificationItem'


const data = [
    {
        year: 2022,
        title: '#ArgentinaPrograma',
        duration: '2 years',
        details: 'Programa nacional y federal que tiene como objetivo capacitar a personas en lenguajes y conocimientos sobre programación, testing y habilidades digitales para potenciar la empleabilidad en el sector del software y la tecnología',
        image: 'https://drive.google.com/uc?export=download&id=1jPuW8MOgy3vDQOa0GTHQEwJYulXGzU3h'

    },

    {
        year: 2023,
        title: 'MindHub Frontend Developer',
        duration: '2 years',
        details: 'La persona acreditada es capaz de desarrollar aplicaciones web responsivas utilizando HTML5, CSS3, Javascript, a través de los frameworks más utilizados e integrando API´s de terceros. Asimismo, es capaz de abordar un requerimiento de un cliente, analizarlo, trabajar en equipo y llevar a cabo su desarrollo en tiempo y forma, cumpliendo con las mejores prácticas de mercado y bajo metodologías ágiles.',
        image: 'https://images.credly.com/size/340x340/images/db619416-19a0-4c5b-b4f7-7e44d097f392/image.png'

    },

    {
        year: 2023,
        title: 'Epica SAPEM - Full Stack Developer',
        duration: '2 Years',
        details: 'El Desarrollador de Software Full Stack Jr precisa desarrollar una serie de habilidades y técnicas relevantes a los procesos que se ejecutan durante la etapa de programación de un proyecto de software de sistemas. Estas habilidades incluyen conocimientos teóricos específicos respecto a los entornos en los que dichas actividades se llevan a cabo. Además de esto, resulta evidente que, para afianzar estos conocimientos y métodos, es imperativa la práctica de la programación mediante el desarrollo y resolución de problemas lógicos incorporando los conocimientos y métodos respectivos a cada lenguaje de programación.',
        image: 'https://drive.google.com/uc?export=download&id=1VmHrZ_SFlfM7L4tLXRoksh_UMmlhgHlR'
    },

    {
        year: 2023,
        title: 'MindHub Full Stack Developer MERN Stack',
        duration: '2 Years',
        details: 'La persona acreditada es capaz de desarrollar aplicaciones web responsivas utilizando HTML5, CSS3, Javascript, Vue, Bootstrap, el Stack de MERN (MongoDB, Express, React y Node .js. Asimismo, es capaz de abordar un requerimiento de un cliente, analizarlo, trabajar en equipo y llevar a cabo su desarrollo en tiempo y forma, cumpliendo con las mejores prácticas de mercado y bajo metodologías ágiles.',
        image: 'https://images.credly.com/size/340x340/images/be67019e-9d37-432b-bc29-18cdcb85917b/image.png'
    },

]

const Certification = () => {
    return (
        <div id='certification' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-5xl font-bold text-center text-white pb-8 font-neon'>Certifications</h1>
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