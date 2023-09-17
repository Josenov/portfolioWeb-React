import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        year: 2010,
        title: 'Work 1',
        duration: '6 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, qui et, asperiores rerum exercitationem excepturi nostrum beatae ex neque cumque dicta ab suscipit id quaerat quod iusto porro eius veritatis!',

    },

    {
        year: 2016,
        title: 'Work 2',
        duration: '2 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, qui et, asperiores rerum exercitationem excepturi nostrum beatae ex neque cumque dicta ab suscipit id quaerat quod iusto porro eius veritatis!',

    },

    {
        year: 2018,
        title: 'Work 3',
        duration: '5 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, qui et, asperiores rerum exercitationem excepturi nostrum beatae ex neque cumque dicta ab suscipit id quaerat quod iusto porro eius veritatis!',

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