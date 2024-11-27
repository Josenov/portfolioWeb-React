import {useTranslation} from "react-i18next"

const ProjectItem = ({ img, title, link, description }) => {

    const{t} = useTranslation("global")
    return (
        <>
        <div className='relative flex items-center justify-center text-center h-auto w-full  m-2 lg:w-1/2 shadow-xl shadow-gray-800 rounded-xl group hover:bg-gradient-to-r from-gray-700 to-[#000000]'>
            <img className='rounded-xl group-hover:opacity-10' src={img} alt="/" />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-xl font-bold pb-3 text-center text-white'>{title}</h3>
                <div className="flex flex-col justify-center items-center">
                    <p className='text-white text-center text-sm xl:text-lg pb-2'>{description}</p>
                    <a href={link} target='_blank' className='text-center w-64 p-3 rounded-full bg-yellow-300 text-gray-700  cursor-pointer text-lg'>{t("projectItem.button")}</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProjectItem