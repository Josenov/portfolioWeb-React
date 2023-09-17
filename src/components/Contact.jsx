import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='  text-5xl font-bold text-center text-white pb-8'>Contact</h1>
            <form action="" method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-1 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 font-bold text-white'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 font-bold text-white'>Phone</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 font-bold text-white'>Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 font-bold text-white'>Subject</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 font-bold'>Message</label>
                        <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows={10} type="text" name='message' />
                    </div>
                    <button className='bg-yellow-300 text-black rounded-full font-bold mt-4 w-full p-4' >Send Message</button>
                </div>
                
            </form>
        </div>
    )
}

export default Contact