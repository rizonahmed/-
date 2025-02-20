import hero from './assets/hero.png';
import ac from './assets/ac.png';
import ac2 from './assets/ac2.png';
import ac3 from './assets/ac3.png';
import love from './assets/love.png';
import group from './assets/group.png';
import smile from './assets/smile.png';
import coins from './assets/Coins.png';
import rotatebg from './assets/rote.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const Actor = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration
            once: true, // Animation plays only once
        });
    }, []);

    const { language, setLanguage, translations } = useLanguage();

    return (
        <div id='value' className='bg border-b-[4px] border-[#442612] '>
            <div className='nayok-bg'>
                <div className='  w-full max-w-[1800px] mx-auto flex flex-col-reverse justify-center lg:flex-row lg:gap-20 sm:pt-10 px-5 lg:px-0 relative 3xl:justify-center'>


                    {/* Hero Image */}
                    <div className='relative'>
                        <div className='flex nayoks-bg  '>
                            <img src={hero} alt="Hero" className="relative z-10 hidden sm:block" />

                            {/* Coins Image (Only visible for 1850px and above) */}
                            <img
                                src={coins}
                                alt="Coins"
                                className="absolute hidden sm:block lg:top-[-50px] left-1/2 transform -translate-x-1/2  "
                            />
                        </div>
                    </div>

                    {/* Text and Background */}
                    <div className='relative flex flex-col gap-6 px-5'>
                        {/* Rotating Background */}
                        <div className="absolute inset-0 sm:hidden   flex justify-center items-center">
                            <img
                                src={rotatebg}
                                alt="Rotating Background"
                                className="w-full h-full animate-spin"
                                style={{ animationDuration: '130s' }}
                            />
                        </div>
                        <div className="absolute inset-0   flex justify-center items-center">
                        <img
                            src={coins}
                            alt="Coins"
                            className="absolute top-0 sm:hidden left-1/2 transform -translate-x-1/2 z-10"
                        />
                        </div>

                        <h1
                            className='text-5xl text-center pt-10 xl:text-left xl:text-[72px] pl-2 relative z-10'
                            data-aos="fade-up"
                        >
                            {translations[language].actor} <br /> {translations[language].actor2}
                        </h1>

                        <div className='relative z-10 '>
                            <img src={ac} alt="Background" className='w-full' />
                            <h1
                                className='absolute inset-0 flex items-center justify-center text-md md:text-3xl lg:text-xl xl:text-3xl px-8 gap-2 sm:gap-6'
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <img src={love}  className='w-10 sm:w-auto' alt="Love Icon" />
                                <p>
                                    <span className='font-bold'>{translations[language].span1}</span> {translations[language].card1}
                                </p>
                            </h1>
                        </div>

                        <div className='relative z-10'>
                            <img src={ac2} alt="Background" className='w-full' />
                            <h1
                                className='absolute inset-0 flex items-center justify-center text-md md:text-3xl lg:text-xl xl:text-3xl px-8 gap-2 sm:gap-6'
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <img src={group}  className='w-10 sm:w-auto' alt="Group Icon" />
                                <p>
                                    <span className='font-bold md:pr-10'>{translations[language].span2}</span> {translations[language].card2}
                                </p>
                            </h1>
                        </div>

                        <div className='relative mb-8 lg:mb-0 z-10'>
                            <img src={ac3} alt="Background" className='w-full' />
                            <h1
                                className='absolute inset-0 flex items-center justify-center text-md md:text-3xl lg:text-xl xl:text-3xl px-8 gap-2 sm:gap-6'
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                <img src={smile} className='w-10 sm:w-auto' alt="Smile Icon" />
                                <p>
                                    <span className='font-bold'>{translations[language].span3}</span> {translations[language].card3}
                                </p>
                            </h1>
                        </div>

                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Actor;
