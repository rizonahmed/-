import hero from './assets/hero.png';
import nayokbg from './assets/nayokbg.png';
import love from './assets/love.png';
import group from './assets/group.png';
import smile from './assets/smile.png';
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
        <div id='value' className='bg border-b-[4px] border-[#442612]'>
            <div className='nayok-bg'>
                <div className='flex flex-col-reverse lg:flex-row lg:gap-20 pt-10 lg:w-11/12 mx-auto'>
                    <div className='flex nayoks-bg'>
                        <img src={hero} alt="" />
                    </div>

                    <div className='flex flex-col gap-6 px-5'>
                        <h1 
                            className='text-5xl text-center pt-10 xl:text-left xl:text-[72px] pl-2'
                            data-aos="fade-up"
                        >
                      {translations[language].actor}      <br />  {translations[language].actor2}
                        </h1>

                        <div className='relative'>
                            <img src={nayokbg} alt="" className='w-full' />
                            <h1 
                                className='absolute inset-0 flex items-center justify-center text-lg md:text-3xl lg:text-xl xl:text-3xl px-8 gap-6'
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <img src={love} alt="" />
                                <p>
                                    <span className='font-bold'> {translations[language].span1}  </span> {translations[language].card1} 
                                </p>
                            </h1>
                        </div>
  
                        <div className='relative'>
                            <img src={nayokbg} alt="" className='w-full' />
                            <h1 
                                className='absolute inset-0 flex items-center justify-center text-lg md:text-3xl lg:text-xl xl:text-3xl px-8 gap-6'
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <img src={group} alt="" />
                                <p>
                                    <span className='font-bold'> {translations[language].span2} </span> {translations[language].card2}  
                                </p>
                            </h1>
                        </div>

                        <div className='relative mb-8 lg:mb-0'>
                            <img src={nayokbg} alt="" className='w-full' />
                            <h1 
                                className='absolute inset-0 flex items-center justify-center text-lg md:text-3xl lg:text-xl xl:text-3xl px-8 gap-6'
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                <img src={smile} alt="" />
                                <p>
                                    <span className='font-bold'> {translations[language].span3} </span>  {translations[language].card3}
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
