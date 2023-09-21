import React from 'react'
import { useTranslation } from 'react-i18next';

function LanguageButton() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <button onClick={()=>i18n.changeLanguage("en")} className='text-white text-lg md:block  top-[25%] z-10 ml-1 my-1'>EN</button>
            <button onClick={()=>i18n.changeLanguage("es")} className='text-white text-lg md:block  top-[25%] z-10 ml-1 my-1'>ES</button>
        </div>
    );
}

export default LanguageButton;




