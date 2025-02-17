import coin from './assets/coin.png';
import single from './assets/single.png';
import money from './assets/money.png';
import money2 from './assets/money2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const Money = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration
            once: true, // Animation plays only once
        });
    }, []);
    
          const { language, setLanguage, translations } = useLanguage();


    return (
        <div id='about'  className='bg-[#FEFCE2] relative border-b-[4px] border-[#442612]'>
            <div className='py-20 money-bg relative px-5 lg:px-0'>
                <div className='rect-bg py-20 px-4 md:px-8 lg:px-12 text-center'>

                    {/* Animated Heading */}
                    <h1 
                        data-aos="fade-up"
                        className="text-[36px] md:text-[56px] lg:text-[72px] font-bold"
                    >
                     {translations[language].moneyh}

                      
                    </h1>

                    {/* Animated Paragraph */}
                    <p 
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-[18px] md:text-[24px] lg:text-[28px] text-center w-full md:w-3/4 lg:w-1/2 mx-auto"
                    >
                                      {translations[language].moneyp}
                    </p>
                    
                    {/* Animated Coins */}
                    <div 
                        data-aos="zoom-in"
                        data-aos-delay="400"
                        className='flex justify-center items-center flex-wrap gap-4'
                    >
                        <img className='w-28 md:w-48 lg:w-52' src={coin} alt="" />
                        <div className='flex gap-4 relative mt-12'>
                            <img className='h-10 md:h-12 lg:h-14' src={single} alt="" />
                            <img className='absolute -top-2 md:-top-4 left-10 md:left-11 h-10 md:h-12 lg:h-14' src={single} alt="" />
                            <img className='h-10 md:h-12 lg:h-14' src={single} alt="" />
                        </div>
                        <img className='w-28 md:w-48 lg:w-52' src={coin} alt="" />
                    </div>
                </div>
    
                {/* Animated Side Images */}
                <img 
                    data-aos="fade-right"
                    className='absolute h-36 top-8 left-1 lg:h-auto lg:top-16 lg:left-0 xl:left-20 2xl:left-36'
                    src={money} alt="" 
                />
                <img 
                    data-aos="fade-left"
                    className='absolute h-36 bottom-8 right-0 lg:h-auto lg:bottom-16 lg:right-0 xl:right-20 2xl:right-36'
                    src={money2} alt="" 
                />
            </div>
        </div>
    );
};

export default Money;
