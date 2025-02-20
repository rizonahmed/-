import { useState, useEffect } from 'react';
import btnrainbow from './src/assets/btnrainbow.png';
import rainbow from './src/assets/rainbow.png';
import desktop3 from './src/assets/desktop3.png';
import desktop2 from './src/assets/desktop2.png';
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

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 31);

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

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 1800);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const { language, translations } = useLanguage();

    return (
        <div className='bg-[#FFC0CB] border-b-[4px] border-[#442612]'>
            <div className='foter md:pb-20 w-full max-w-[1800px] mx-auto'>

                <div className='relative pb-20'>
                    {/* Rainbow Image Change */}
                    <img
                        className='absolute top-0 right-0 h-[550px] sm:h-[550px] md:h-[700px] md:w-full lg:h-[800px] xl:w-11/12 xl:h-[1100px]'
                        src={isLargeScreen ? desktop3 : rainbow}
                        alt="Rainbow"
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
                            {/* Countdown Timer */}
                            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
                                <div key={unit} className='w-[70px] md:w-[130px] lg:w-[140px] xl:w-auto relative'>
                                    <img src={timer} alt={unit} data-aos="fade-up" data-aos-delay={400 + index * 100} />
                                    <p className='absolute inset-0 flex justify-center items-center text-2xl md:text-4xl xl:text-5xl font-bold text-[#50430D]'>
                                        {timeLeft[unit]}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className='flex justify-center xl:pb-5 gap-7 ml-8 xl:ml-28 lg:ml-16 md:gap-14'>
                            <p className='text-[#7A4A53] text-xl md:text-4xl xl:text-[48px]'> {translations[language].day}</p>
                            <p className='text-[#7A4A53] text-xl md:text-4xl xl:text-[48px]'> {translations[language].hour}</p>
                            <p className='text-[#7A4A53] text-xl md:text-4xl xl:text-[48px]'> {translations[language].min}</p>
                            <p className='text-[#7A4A53] text-xl md:text-4xl xl:text-[48px]'> {translations[language].sec}</p>
                        </div>

                        <p
                            className='hidden sm:block text-center text-lg md:text-xl font-semibold w-2/3 2xl:w-1/2 mx-auto lg:text-[30px] xl:text-[42px] text-[#50430D] pt-6 xl:pb-6'
                            data-aos="fade-up"
                            data-aos-delay="800"
                        >
                            {translations[language].rainbowp}
                        </p>

                        <button className='flex items-center gap-2 mt-8 mx-auto text-xl lg:text-3xl font-bold pl-15 pr-16 sm:pt-5 sm:pb-6 border border-b-4 border-r-4 rounded-full bg-[#FBAC01] hover:scale-105'>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7384 7.06829L18.7842 9.96178M29.2921 13.0076L33.7085 11.7893M27.9215 19.0991L30.815 22.1449M26.094 4.1748L24.8757 8.59118M23.2965 15.5812C23.3556 15.4421 23.3717 15.2886 23.3429 15.1402..." stroke="black" strokeWidth="3.04578" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {translations[language].rainbowbtn}
                        </button>
                    </div>

                    {/* Rocket Image Change */}
                    <div className='absolute bottom-0 md:top-32 xl:top-1/9' data-aos="fade-up" data-aos-delay="1000">
                        <img className='w-28 md:w-32 lg:w-40 xl:w-full' src={isLargeScreen ? desktop2 : rocket} alt="Rocket" />
                        {!isLargeScreen && (
                            <img className='-mt-16 w-28 md:w-32 lg:w-40 xl:w-full' src={smoke} alt="Smoke" data-aos="fade-up" data-aos-delay="500" />
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Rainbow;
