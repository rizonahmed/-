import cloth from './assets/cloth.png';
import coinshow from './assets/coinshow.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const Cards = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Animation plays only once
            easing: 'ease-out', // Easing function for smooth transitions
        });
    }, []);


        const { language, setLanguage, translations } = useLanguage();
    

    return (
        <div className="bg-[#F9C4BD] relative overflow-hidden border-b-[4px] border-[#442612]">
            <div className="foter py-24 relative">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl lg:text-[70px] text-[#41131A]">
                    {translations[language].cardsHeader}

                    </h1>
                    <p className="text-lg md:text-[28px] text-[#222221] mt-4">
                    {translations[language].cardsP}

                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto px-4">
                    {[
                        { title: translations[language].cardoneh , description: translations[language].cardonep  },
                        { title: translations[language].cardtwoh , description: translations[language].cardtwop  },
                        { title: translations[language].cardthreeh , description: translations[language].cardthreep  },
                        { title: translations[language].cardfourh , description: translations[language].cardfourp  },
                        { title: translations[language].cardfiveh , description: translations[language].cardfivep  },
                        { title: translations[language].cardsixh , description: translations[language].cardsixp  },
                        { title: translations[language].cardsevenh , description: translations[language].cardsevenp  },
                        { title: translations[language].cardeighth , description: translations[language].cardeightp  },
                        { title: translations[language].cardnineh , description: translations[language].cardninep  },
                     
                    ].map((card, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col justify-center items-center gap-4 p-6 border border-black bg-[#FFF9FA] rounded-[24px] shadow-[4px_4px_0px_0px_#000] text-center"
                            data-aos="fade-up"
                            data-aos-delay={index * 100} // Delay animation for each card
                        >
                            <h3 className="text-[28px] font-bold leading-[130%]">{card.title}</h3>
                            <p className="text-[22px] text-[#5A5C57] leading-[130%]">{card.description}</p>
                        </div>
                    ))}
                </div>

                {/* The background images don't need scroll animations */}
                <img 
                    className='absolute top-0 left-2 w-[100px] md:w-[130px] md:left-0 lg:w-[150px] md:top-0 lg:top-36 xl:w-[200px] 2xl:top-16 2xl:left-24 2xl:w-auto'
                    src={cloth} 
                    alt="" 
                />
                <img 
                    className='absolute bottom- right-0 w-[100px] md:w-[250px] md:bottom-14 lg:w-[200px] lg:top-36 lg:right-5 xl xl:w-[250px] 2xl:w-auto 2xl:right-26'
                    src={coinshow} 
                    alt="" 
                />
            </div>
        </div>
    );
};

export default Cards;
