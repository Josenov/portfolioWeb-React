import React, { useRef } from 'react'
import { useTranslation } from "react-i18next"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import '../index.css'
import sentImg from '../images/check-icon.png'







const Contact = () => {

    const { t } = useTranslation("global")

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                title: `${t("popup.title")}`,
                text: `${t("popup.text")}`,
                imageUrl: `${(sentImg)}`,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
                confirmButtonColor: '#FDE047',
                animation: true,
            }).then(() => {

                form.current.reset();

                setTimeout(() => {
                    location.hash = "#main"
                    location.reload(); // Recargamos la página para que inicie en la parte superior
                }, 500);
                

                
            });

            
    
            
        }, (error) => {
            console.log(error.text);
            console.log('Message Failed');
        });
    };




    return (
        <div id='contact' className='max-w-[400px] m-auto md:pl-20 md:max-w-[700px] p-4 py-16 font-neon'>
            <h1 className='  text-5xl font-bold text-center text-white pb-8'>{t("contact.h1")}</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className='grid md:grid-cols-1 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 font-bold text-white'>{t("contact.name")}</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' required type="text" name='name' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 font-bold text-white'>{t("contact.phone")}</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' required type="text" name='phone' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 font-bold text-white'>{t("contact.email")}</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' required type="email" name='email' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 font-bold text-white'>{t("contact.subject")}</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' required type="text" name='subject' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 font-bold text-white'>{t("contact.message")}</label>
                        <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows={10} required type="text" name='message' />
                    </div>
                    <button type='submit' value="Send"  className='bg-yellow-300 text-black rounded-full font-bold mt-4 w-full p-4' >{t("contact.button")}</button>
                </div>

            </form>
        </div>
    )
}

export default Contact