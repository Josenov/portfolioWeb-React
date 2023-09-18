import React from 'react'
import CertificationItem from './CertificationItem'


const data = [
    {
        year: 2010,
        title: 'Certification 1',
        duration: '2 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, qui et, asperiores rerum exercitationem excepturi nostrum beatae ex neque cumque dicta ab suscipit id quaerat quod iusto porro eius veritatis!',
        image: 'https://www.downloadyouthministry.com/dw/image/v2/BFBF_PRD/on/demandware.static/-/Sites-dym-master-catalog/default/dw797a3bbd/images/hi-res/a/w/awesomeness_web_1.jpg?sw=1200&sh=675&sm=fit'

    },

    {
        year: 2016,
        title: 'Certification 2',
        duration: '2 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, qui et, asperiores rerum exercitationem excepturi nostrum beatae ex neque cumque dicta ab suscipit id quaerat quod iusto porro eius veritatis!',
        image: 'https://www.downloadyouthministry.com/dw/image/v2/BFBF_PRD/on/demandware.static/-/Sites-dym-master-catalog/default/dw797a3bbd/images/hi-res/a/w/awesomeness_web_1.jpg?sw=1200&sh=675&sm=fit'

    },

    {
        year: 2018,
        title: 'Certification 3',
        duration: '2 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, qui et, asperiores rerum exercitationem excepturi nostrum beatae ex neque cumque dicta ab suscipit id quaerat quod iusto porro eius veritatis!',
        image: 'https://www.downloadyouthministry.com/dw/image/v2/BFBF_PRD/on/demandware.static/-/Sites-dym-master-catalog/default/dw797a3bbd/images/hi-res/a/w/awesomeness_web_1.jpg?sw=1200&sh=675&sm=fit'
    },

]

const Certification = () => {
    return (
        <div id='certification' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-5xl font-bold text-center text-white pb-8'>Certifications</h1>
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