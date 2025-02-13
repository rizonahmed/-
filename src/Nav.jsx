 
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import logo from './assets/ulogo.png';
import name from './assets/sname.png';
import telegram from './assets/tele (1).png';
import x from './assets/x.png';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="   p-4 ">
            <div className="relative z-50 md:w-11/12 xl:w-8/12 mx-auto flex justify-between bg-[#FFF3DA] items-center    rounded-full px-2 py-1">
                <div className="flex gap-2 items-center">
                    <img className="" src={logo} alt="" />
                    <img  className=" "  src={name} alt="" />
                    
                    
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#about" className= "font-semibold  text-[20px]     py-1   rounded-3xl  ">О проекте</a>
                    <a href="#marketplace" className="   text-[20px]   py-1">Ценности</a>
                    <a href="#features" className="   text-[20px]   py-1">Токеномика</a>
                    
                </div>
                <div className="hidden md:block">
                    <button className="border cursor-pointer bg-[#FBAC01] flex  text-[14px] px-2  py-1  rounded-full  ">
                        <img src={telegram} alt="" />
                        <img src={x} alt="" />
                    </button>
                </div>
                <button className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
                    <a href="#about" className= "font-semibold  text-[20px]     py-1   rounded-3xl  ">О проекте</a>
                    <a href="#marketplace" className="   text-[20px]   py-1">Ценности</a>
                    <a href="#features" className="   text-[20px]   py-1">Токеномика</a>

                    <button className="border cursor-pointer bg-[#FBAC01] flex  text-[14px] px-2  py-1  rounded-full  ">
                        <img src={telegram} alt="" />
                        <img src={x} alt="" />
                    </button>
                </div>
            )}
        </nav>

    );
};

export default Nav;