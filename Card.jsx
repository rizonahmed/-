import love from './src/assets/love.png';
import group from './src/assets/group.png';
import smile from './src/assets/smile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useLanguage } from './src/LanguageContext';

const Card = () => {
    const { language, translations } = useLanguage(); // ✅ এখানে আগে কল করতে হবে

    // ✅ এখন ডাটা তৈরি করবো, যাতে error না আসে
    const cardData = [
        {
            img: group,
            title: translations[language]?.marque || "Default Title",
            text: translations[language]?.crd1p || "Default Text",
        },
        {
            img: love,
            title: translations[language]?.crd2t || "Default Title",
            text: translations[language]?.crd2p || "Default Text",
        },
        {
            img: smile,
            title: translations[language]?.crd3t || "Default Title",
            text: translations[language]?.crd3p || "Default Text",
        }
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div id='tokenmics' className="bg border-b-[4px] border-[#442612]">
            <div className='foter py-20'>
                <h2 className='text-3xl pb-6 md:pb-8 font-semibold md:text-[72px] md:font-normal text-[#50430D] text-center'>
                    {translations[language]?.cardsech || "Default Section Header"} <br /> 
                    {translations[language]?.cardsech2 || "Default Section Header 2"}
                </h2>

                <div className="max-w-7xl pt-10 mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#FFF7D5] border border-black rounded-[24px] shadow-[4px_4px_0_0_#000]
                            flex flex-col justify-center items-center gap-4 p-7 text-center"
                            data-aos="fade-up"
                            data-aos-delay={`${index * 200}`}
                        >
                            <img src={card.img} alt="" className="w-24 h-24 object-contain" />
                            <h3 className="text-2xl font-bold">{card.title}</h3>
                            <p className="text-gray-700">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
