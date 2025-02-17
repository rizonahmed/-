import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import logo from './assets/ulogo.png';
import name from './assets/sname.png';
import telegram from './assets/tele (1).png';
import x from './assets/x.png';
import { useLanguage } from './LanguageContext';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#about');

    const handleClick = (hash) => {
        setActiveLink(hash);
        setIsOpen(false);
    };

    const linkClasses = (hash) =>
        `text-[20px] py-2 rounded-full px-4 transition duration-300 hover:text-orange-00 hover:shadow-lg  hover:shadow-orange-500 ${activeLink === hash ? 'font-bold' : ''}`;


        const { language, setLanguage, translations } = useLanguage();
    
    return (
        <nav className="fixed top-0 left-0 w-full z-[999]">
            <div className="relative z-50 md:w-11/12 xl:w-8/12 mx-auto shadow-lg flex justify-between bg-[#FFF3DA] items-center mt-5 rounded-full px-2 py-1">
                <div className="flex gap-2 items-center">
                    <img src={logo} alt="Logo" />
                    {/* <img src={name} alt="Site Name" /> */}
                    <h2 className='logos text-2xl'> {translations[language].logo}</h2>
                </div>
                <div className="hidden lg:flex space-x-6">
                    <a href="#about" onClick={() => handleClick('#about')} className={linkClasses('#about')}> {translations[language].about}</a>
                    <a href="#value" onClick={() => handleClick('#value')} className={linkClasses('#value')}>   {translations[language].value}</a>
                    <a href="#tokenmics" onClick={() => handleClick('#tokenmics')} className={linkClasses('#tokenmics')}>  {translations[language].tokenmics}</a>
                </div>
                <div className="hidden lg:block">
                    <button className="border cursor-pointer bg-[#FBAC01] flex gap-1 text-[14px] px-2 py-2 rounded-full">
                        <img className="hover:bg-white hover:scale-104 hover:border-b-4 hover:border-r-2 rounded-full transition duration-1000" src={telegram} alt="Telegram" />
                        <img className="hover:scale-105 transition duration-500" src={x} alt="X" />
                    </button>
                </div>
                <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
            </div>
            {isOpen && (
                <div className="lg:hidden flex flex-col pb-8 items-center space-y-4 mt-4 bg-amber-50">
                    <a href="#about" onClick={() => handleClick('#about')} className={linkClasses('#about')}>  {translations[language].about}</a>
                    <a href="#value" onClick={() => handleClick('#value')} className={linkClasses('#value')}> {translations[language].value}</a>
                    <a href="#tokenmics" onClick={() => handleClick('#tokenmics')} className={linkClasses('#tokenmics')}>  {translations[language].tokenmics}</a>
                    <button className="border cursor-pointer bg-[#FBAC01] flex gap-1 text-[14px] px-2 py-2 rounded-full">
                        <img className="hover:bg-white hover:scale-104 hover:border-b-4 hover:border-r-2 rounded-full transition duration-1000" src={telegram} alt="Telegram" />
                        <img className="hover:scale-105 transition duration-500" src={x} alt="X" />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Nav;
