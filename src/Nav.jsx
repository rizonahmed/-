import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import logo from './assets/ulogo.png';
import name from './assets/sname.png';
import telegram from './assets/tele (1).png';
import x from './assets/x.png';
import { useLanguage } from './LanguageContext';
import { LuCopy, LuCopyCheck } from 'react-icons/lu';

const Nav = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#about');
    const [copied, setCopied] = useState(false);
    const contractAddress = "EQAPAM9qo9M6gZLMxknEwvLSjCv1H-QlyKxHRxM6kgXVovlf";

    const handleCopy = () => {
        navigator.clipboard.writeText(contractAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000); //  
    };

    const handleClick = (hash) => {
        setActiveLink(hash);
        setIsOpen(false);
    };

    const linkClasses = (hash) =>
        `text-[20px] py-2 rounded-full px-4 transition duration-300 hover:text-orange-00 hover:shadow-lg hover:shadow-orange-500 ${activeLink === hash ? 'font-bold' : ''}`;

    const { language, translations } = useLanguage();

    return (
        <div className="relative z-50 w-11/12 md:w-11/12 xl:w-8/12 mx-auto shadow-md flex justify-between bg-[#FFF3DA] items-center mt-5 rounded-full px-3 py-2">

            {/* Logo */}
            <div className='hidden sm:block'>
                <div className="flex gap-2 items-center">
                    <img src={logo} alt="Logo" />
                    <h2 className='logos text-2xl'>{translations[language].logo}</h2>
                </div>
            </div>

            {/* ✅ Mobile-এ Copy Button, Left Side এ */}
            <div className="sm:hidden">
                <button 
                    onClick={handleCopy}
                    className="cursor-pointer bg-[#FBAC01] flex gap-2 items-center text-[20px] border border-b-4 border-r-4 font-semibold px-6 py-3 rounded-full"
                >
                    {copied ? <LuCopyCheck className="text-2xl" /> : <LuCopy className="text-2xl" />}
                    <span>Контракт</span>
                </button>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex space-x-6">
                <a href="#about" onClick={() => handleClick('#about')} className={linkClasses('#about')}>{translations[language].about}</a>
                <a href="#value" onClick={() => handleClick('#value')} className={linkClasses('#value')}>{translations[language].value}</a>
                <a href="#tokenmics" onClick={() => handleClick('#tokenmics')} className={linkClasses('#tokenmics')}>{translations[language].tokenmics}</a>
            </div>

            {/* Right Side Button (Telegram & X) */}
            <div>
                <button className="border cursor-pointer bg-[#FBAC01] flex gap-1 text-[14px] px-2 py-2 rounded-full">
                    <img className="hover:bg-white hover:scale-104 hover:border-b-4 hover:border-r-2 rounded-full transition h-10 sm:h-auto duration-1000" src={telegram} alt="Telegram" />
                    <img className="hover:scale-105 transition h-10 sm:h-auto duration-500" src={x} alt="X" />
                </button>
            </div>

        </div>
    );
};

export default Nav;
