import { useState, useEffect } from 'react';
import btnrainbow from './src/assets/btnrainbow.png';
import rainbow from './src/assets/rainbow.png';
import rocket from './src/assets/rocket.png';
import smoke from './src/assets/smoke.png';
import timer from './src/assets/timer.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from './src/LanguageContext';

const Rainbow = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 10);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    const { language, setLanguage, translations } = useLanguage();


    return (
        <div className='bg-[#FFC0CB] border-b-[4px] border-[#442612]'>
            <div className='foter md:pb-20'>
                <div className='relative pb-20'>
                    <img
                        className='absolute top-0 right-0 h-[550px] sm:h-[550px] md:h-[700px] md:w-full lg:h-[800px] xl:w-11/12 xl:h-[1100px]'
                        src={rainbow} alt="Rainbow"
                        data-aos="fade-up"
                    />
                    <div className="relative text-center pt-40">
                        <h1
                            className='text-3xl md:text-[48px] lg:text-[55px] xl:text-[72px] xl:pt-16 xl:pb-8 font-semibold text-[#50430D]'
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {translations[language].rainbowh}
                            
                        </h1>
                        <div className='flex justify-center pt-10 xl:pb-5 gap-4'>
                            {/* Days */}
                            <div className='w-[70px] md:w-[130px] lg:w-[140px] xl:w-auto relative'>
                                <img
                                    className=''
                                    src={timer} alt="Days"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                />
                                <p className='absolute inset-0 flex justify-center items-center text-2xl md:text-4xl xl:text-5xl font-bold text-[#50430D]'>
                                    {timeLeft.days}
                                </p>

                            </div>

                            {/* Hours */}
                            <div className='w-[70px] md:w-[130px] lg:w-[140px] xl:w-auto relative'>
                                <img
                                    className=''
                                    src={timer} alt="Hours"
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                />
                                <p className='absolute inset-0 flex justify-center items-center text-2xl md:text-4xl xl:text-5xl font-bold text-[#50430D]'>
                                    {timeLeft.hours}
                                </p>
                            </div>

                            {/* Minutes */}
                            <div className='w-[70px] md:w-[130px] lg:w-[140px] xl:w-auto relative'>
                                <img
                                    className=''
                                    src={timer} alt="Minutes"
                                    data-aos="fade-up"
                                    data-aos-delay="600"
                                />
                                <p className='absolute inset-0 flex justify-center items-center text-2xl md:text-4xl xl:text-5xl font-bold text-[#50430D]'>
                                    {timeLeft.minutes}
                                </p>
                            </div>

                            {/* Seconds */}
                            <div className='w-[70px] md:w-[130px] lg:w-[140px] xl:w-auto relative'>
                                <img
                                    className=''
                                    src={timer} alt="Seconds"
                                    data-aos="fade-up"
                                    data-aos-delay="700"
                                />
                                <p className='absolute inset-0 flex justify-center items-center text-2xl md:text-4xl xl:text-5xl font-bold text-[#50430D]'>
                                    {timeLeft.seconds}
                                </p>
                            </div>
                        </div>

                        <div className='flex justify-center  xl:pb-5 gap-7 ml-8 xl:ml-28 lg:ml-16 md:gap-14'>
                            <p className='text-[#7A4A53] text-xl md:text-4xl xl:text-[48px]'>   {translations[language].day}</p>
                            <p className='text-[#7A4A53] text-xl md:text-4xl xl:text-[48px]'>   {translations[language].hour}</p>
                            <p className='text-[#7A4A53] text-xl md:text-4xl xl:text-[48px]'>   {translations[language].min}</p>
                            <p className='text-[#7A4A53] text-xl md:text-4xl xl:text-[48px]'>  {translations[language].sec}</p>
                        </div>
                        <p
                            className='text-center text-lg md:text-xl font-semibold w-2/3 2xl:w-1/2 mx-auto lg:text-[30px] xl:text-[42px] text-[#50430D] pt-6 xl:pb-6'
                            data-aos="fade-up"
                            data-aos-delay="800"
                        >
                            {translations[language].rainbowp}
                        </p>
                        {/* <img
                            className='mx-auto h-12 md:h-16 lg:h-20 xl:h-auto mt-8 hover:scale-102 transition-transform'
                            src={btnrainbow} alt="Button"
                            data-aos="zoom-in"
                            data-aos-delay="900"
                        /> */}

                        <div>
                            <button className='flex items-center gap-2 mt-8 mx-auto  text-xl lg:text-3xl font-bold pl-15 pr-16 pt-5 pb-6 border border-b-4 border-r-4 rounded-full bg-[#FBAC01]      hover:scale-105   '><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7384 7.06829L18.7842 9.96178M29.2921 13.0076L33.7085 11.7893M27.9215 19.0991L30.815 22.1449M26.094 4.1748L24.8757 8.59118M23.2965 15.5812C23.3556 15.4421 23.3717 15.2886 23.3429 15.1402C23.314 14.9919 23.2415 14.8555 23.1347 14.7486C23.0278 14.6418 22.8914 14.5693 22.7431 14.5404C22.5947 14.5116 22.4412 14.5277 22.3021 14.5868L5.55027 21.4398C5.40118 21.501 5.27534 21.6079 5.19086 21.7451C5.10637 21.8823 5.0676 22.0428 5.08013 22.2035C5.09266 22.3641 5.15584 22.5167 5.26057 22.6391C5.3653 22.7616 5.5062 22.8477 5.66297 22.885L12.286 24.4704C12.5594 24.5357 12.8094 24.6754 13.0083 24.874C13.2072 25.0726 13.3473 25.3224 13.4129 25.5958L14.9968 32.2203C15.0337 32.3776 15.1197 32.5191 15.2423 32.6243C15.3649 32.7295 15.5178 32.793 15.6789 32.8055C15.84 32.8181 16.0009 32.7791 16.1384 32.6941C16.2758 32.6092 16.3827 32.4827 16.4435 32.333L23.2965 15.5812Z" stroke="black" stroke-width="3.04578" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                                
                                {translations[language].rainbowbtn}
                            </button>
                        </div>
                    </div>

                    <div
                        className='absolute bottom-16 md:top-32 xl:top-1/9'
                        data-aos="fade-up"
                        data-aos-delay="1000"
                    >
                        <img className='w-28 md:w-32 lg:w-40 xl:w-full' src={rocket} alt="" />
                        <img
                            className='-mt-16 w-28 md:w-32 lg:w-40 xl:w-full'
                            src={smoke} alt=""
                            data-aos="fade-up"
                            data-aos-delay="1100"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rainbow;
