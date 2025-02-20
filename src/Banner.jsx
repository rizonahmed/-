import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './Nav';
import { AiOutlineCopy } from 'react-icons/ai';

import banner from './assets/bimg.png';
import bannerimg from './assets/xbg.png';
import rote from './assets/rote.png'
import mohe from './assets/mohe.png'
import coins from './assets/Coins.png';
import napkin from './assets/napkin.png';
import show from './assets/show.png';
import mohema from './assets/mohema.png';
import dog from './assets/dog.png';
import takla from './assets/takla.png';
import napkin2 from './assets/napkin2.png';
import { useLanguage } from './LanguageContext';

const Banner = () => {
    const [isCopied, setIsCopied] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1850);
    const walletAddress = 'EQAPAM9qo9M6gZLMxknEwvLSjCv1H-QlyKxHRxM6kgXVovlf';

    const handleCopy = () => {
        navigator.clipboard.writeText(walletAddress);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });

        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1850);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { language, translations } = useLanguage();

    return (
        <div className="relative overflow-hidden w-full max-w-[1850px] mx-auto">
            <Nav />
            <div className="mx-auto flex flex-col lg:flex-row items-center justify-between lg:mt-0 px-4 lg:px-0 2xl:-mt-10">

                {/* Left Side Content */}
                <div className="px-8 hidden sm:block text-center lg:text-left space-y-4 lg:ml-10 xl:ml-28 2xl:ml-42 mt-32 lg:mt-10 lg:mb-5 relative" data-aos="zoom-in">
                    <h2 className='z-50 relative bannerHead'>{translations[language].bannerh}</h2>
                    <p className="text-lg px-2 md:text-xl xl:text-[30px] text-gray-700">
                        {translations[language].bannerp}
                    </p>
                    <button className="relative z-50 bg-[#FBAC01] border border-b-4 border-r-4 text-black px-6 py-3 rounded-full xl:text-2xl font-semibold hover:bg-yellow-500 transition">
                        {translations[language].bannerbtn}
                    </button>

                    <div className='block'>
                        <div className="mt-4 inline-flex relative z-50 w-sm md:w-auto items-center border-2 bg-white text-gray-900 py-2 px-4 rounded-full space-x-2">
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

                    <img className='absolute bottom-4 right-6 h-42 lg:-right-0 2xl:right-0 xl:h-56 xl:-bottom-0' src={dog} alt="Dog" />
                </div>

                {/* Right Side Image */}
                {/* Right Side Image */}
                <div className="w-full h-auto relative">
                    {/* Mobile Device (rote image) */}
                    <img
                        src={rote}
                        alt="Mobile Banner"
                        className="w-full -mt-44 sm:-mt-0 h-auto block sm:hidden opacity-100"
                        style={{
                            maskImage: "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%)",
                            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%)"
                        }}
                    />

                    <img className='absolute bottom-16 z-100 -left-5 h-36  sm:hidden' src={dog} alt="Dog" />

                    <img className='absolute top-10  z-100 left-7 h-24  sm:hidden' src={mohe} alt="mohe" />
                    

                    {/* Larger Screens (bannerimg) */}
                    <img
                        src={bannerimg}
                        alt="Desktop Banner"
                        className="w-full h-auto hidden sm:block opacity-100 lg:opacity-70"
                        style={{
                            maskImage: "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%)",
                            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%)"
                        }}
                    />
                </div>


            </div>

            {/* Background Images with Animations */}
            <img className='bottom-3/12 sm:bottom-2/9 absolute md:bottom-2/8 coin-position custom-position lg:top-0 lg:right-0 lg:w-auto' src={coins} alt="Coins" />

            {/* Napkin Image Changes on 1850px */}
            <img
                className='absolute bottom-2/12 right-0 w-52 sm:w-60 sm:bottom-2/10 md:w-72 xl:h-auto xl:w-auto lg:top-0 lg:right-0'
                src={isLargeScreen ? napkin2 : napkin}
                alt="Napkin"
            />

            {/* Show Image Hidden on 1850px */}
            {!isLargeScreen && (
                <img
                    className='absolute hidden sm:block bottom-1/6 right-2 w-16 sm:bottom-2/8 md:w-20 md:bottom-2/8 lg:w-20 lg:top-60 lg:right-7 xl:top-3/8 2xl:top-2/5'
                    src={show}
                    alt="Show"
                />
            )}

            {/* Banner Image Changes on 1850px */}
            <img
                className='absolute bottom-0 lg:h-9/12  lg:top-44 xl:top-52 2xl:top-3/12 right-0'
                src={isLargeScreen ? takla : banner}
                alt="Banner Background"
                data-aos="zoom-in"
            />
        </div>
    );
};

export default Banner;
