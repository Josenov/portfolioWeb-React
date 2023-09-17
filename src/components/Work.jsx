import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        year: 2010,
        title: 'HORMYMAN S.A.',
        duration: '6 años',
        details: 'Tareas Administrativas, Servicio Tecnico, Administracion de Personal',

    },

    {
        year: 2016,
        title: 'SUABOND S.A.',
        duration: '2 años',
        details: 'Tareas Administrativas, Servicio Tecnico, Administracion de Personal',

    },

    {
        year: 2018,
        title: 'CONSTRUTEMPO S.A.S',
        duration: 'Actualidad',
        details: 'Tareas Administrativas',

    },

]

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-5xl font-bold text-center text-white pb-8'>Work</h1>
            {
                data.map((item, id)=>(
                    <WorkItem key={id} year={item.year} title={item.title} duration={item.duration} details={item.details} />
                )

                )
            }
        </div>
    )   
}

export default Work