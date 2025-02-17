import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './Nav';
import { AiOutlineCopy } from 'react-icons/ai';

import banner from './assets/bimg.png';
import bannerimg from './assets/xbg.png';
import coins from './assets/Coins.png';
import napkin from './assets/napkin.png';
import show from './assets/show.png';
import mohema from './assets/mohema.png';
import dog from './assets/dog.png';
import { useLanguage } from './LanguageContext';

const Banner = () => {
    const [isCopied, setIsCopied] = useState(false);
    const walletAddress = 'EQAPAM9qo9M6gZLMxknEwvLSjCv1H-QlyKxHRxM6kgXVovlf';

    const handleCopy = () => {
        navigator.clipboard.writeText(walletAddress);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out',
            once: true, // Only animate once
        });
    }, []);

        const { language, setLanguage, translations } = useLanguage();


    return (
        <div className="relative overflow-hidden">
            <Nav />
            <div className="mx-auto flex flex-col  lg:flex-row items-center justify-between lg:mt-0 px-4 lg:px-0">

                {/* Left Side Content */}
                <div
                    className=" px-8 text-center  lg:text-left space-y-4 lg:ml-10 xl:ml-28 2xl:ml-42 mt-32 lg:mt-36  lg:mb-5 relative"
                    data-aos="zoom-in"
                >
                    {/* <img className='z-50 relative h-32 mx-auto lg:mx-0' src={mohema} alt="Mohema" /> */}
                    <h2 className='z-50 relative bannerHead'> {translations[language].bannerh}</h2>
                    <p className="text-lg px-2 md:text-2xl xl:text-[42px] text-gray-700">
                        {translations[language].bannerp}
                    </p>
                    <button className="relative z-50 bg-[#FBAC01] border border-b-4 border-r-4 text-black px-6 py-3 rounded-full xl:text-2xl font-semibold hover:bg-yellow-500 transition">
                       
                        {translations[language].bannerbtn}

                    </button>

                    <div className='block'>
                        <div className="mt-4 inline-flex relative z-50 w-sm  md:w-auto items-center border-2 bg-white text-gray-900 py-2 px-4 rounded-full space-x-2">
                            <input
                                type="text"
                                value={walletAddress}
                                readOnly
                                className="px-2 py-2 rounded-full w-auto cursor-default text-center sm:text-left"
                                style={{ width: `${walletAddress.length + 1}ch` }}
                            />
                            <button
                                onClick={handleCopy}
                                className="bg-[#FBAC01] border px-4 py-2 flex items-center gap-1 font-semibold rounded-full text-black hover:bg-yellow-500 transition justify-center"
                            >
                                <AiOutlineCopy className="w-5 h-5" /> {isCopied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>

                    </div>

                    <img className='absolute bottom-4 right-6 h-42 lg:-right-32 2xl:right-0 xl:h-auto xl:-bottom-16' src={dog} alt="Dog" />
                </div>

                {/* Right Side Image */}
                <div className="relative mt-6  lg:mt-0" data-aos="zoom-in">
                    <img src={bannerimg} alt="Banner" className="w-full h-auto" />
                    
                </div>
            </div>

            {/* Background Images with Animations */}
            <img
                className=' bottom-1/6 sm:bottom-2/9 absolute md:bottom-2/8 coin-position  custom-position  lg:top-0 lg:right-0 lg:w-auto'
                src={coins}
                alt="Coins"
            />
            <img
                className='absolute bottom-1/12 right-0 w-52 sm:w-60 sm:bottom-2/10 md:w-72 xl:h-auto xl:w-auto lg:top-0 lg:right-0'
                src={napkin}
                alt="Napkin"
            />
            <img
                className='absolute  bottom-1/6 right-2 w-16 sm:bottom-2/8 md:w-20 md:bottom-2/8 lg:w-20 lg:top-60 lg:right-7 xl:top-3/8 2xl:top-2/5'
                src={show}
                alt="Show"
            />
            <img
                className='absolute bottom-0 lg:h-10/12 lg:top-25 xl:top-28 2xl:top-36 right-0'
                src={banner}
                alt="Banner Background"
                data-aos="zoom-in"
            />
        </div>
    );
};

export default Banner;
