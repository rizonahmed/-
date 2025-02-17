import { useLanguage } from "./LanguageContext";
import logo from './assets/flogo.png';
import name from './assets/fname.png';
import btn from './assets/btn.png';
import telegram from './assets/telegram.png';
import xfooter from './assets/xfooter.png';

const Footer = () => {
    const { language, setLanguage, translations } = useLanguage();

    return (
        <div className="bg w">
            <div className="foter py-24">
                <div className='w-11/12 lg:w-9/12 mx-auto'>
                    <div className='flex justify-center items-center gap-3'>
                        <img className='h-16 sm:h-full' src={logo} alt="Logo" />
                        {/* <img className='h-8 lg:h-16' src={name} alt="Brand Name" /> */}
                        <h1 className="footerHead"> {translations[language].footerHead} </h1>
                    </div>

                    <p className='text-center text-[26px] text-lg lg:w-1/2 mx-auto py-10 px-3'>
                        {translations[language].welcome}
                    </p>

                    {/* <img className='mx-auto px-8' src={btn} alt="Button" /> */}

                    <div>
                        <button className='flex items-center rounded-full md:text-3xl font-bold pt-2 pb-2 md:pt-6 md:pb-7 border border-b-4 border-r-4 mx-auto bg-[#FBAC01] px-8'>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5453 7.12873L18.6372 10.0661M29.3043 13.158L33.7876 11.9212M27.913 19.3418L30.8503 22.4337M26.0578 4.19141L24.821 8.67469M23.2179 15.7706C23.2778 15.6294 23.2942 15.4735 23.2649 15.3229C23.2357 15.1723 23.1621 15.0339 23.0536 14.9254C22.9451 14.8169 22.8067 14.7433 22.6561 14.7141C22.5055 14.6848 22.3496 14.7012 22.2084 14.7611L5.20281 21.7179C5.05146 21.78 4.92372 21.8885 4.83796 22.0278C4.75219 22.1672 4.71283 22.3301 4.72555 22.4932C4.73827 22.6563 4.8024 22.8111 4.90872 22.9355C5.01504 23.0598 5.15807 23.1472 5.31722 23.1851L12.0406 24.7944C12.3181 24.8607 12.5719 25.0025 12.7738 25.2042C12.9758 25.4058 13.1179 25.6594 13.1846 25.9369L14.7924 32.6618C14.8299 32.8215 14.9172 32.9651 15.0417 33.0719C15.1661 33.1787 15.3214 33.2431 15.4849 33.2559C15.6484 33.2686 15.8118 33.229 15.9513 33.1428C16.0908 33.0565 16.1993 32.9281 16.2611 32.7762L23.2179 15.7706Z" stroke="black" stroke-width="3.09192" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            {translations[language].footerbtn}
                        </button>
                    </div>

                    <div className='md:flex justify-between items-center pt-16'>
                        <p className='text-base sm:text-xl md:text-[26px] text-center md:text-left'>
                            {translations[language].copyright}
                        </p>

                        <div className='flex items-center justify-center gap-4 mt-5 text-xl'>
                            {/* Language Selector */}
                            <select
                                className='border border-gray-300 rounded-md p-2 cursor-pointer'
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            >
                                <option value="RUS">RUS</option>
                                <option value="EN">ENGLISH</option>
                            </select>

                            <img className='h-14 hover:scale-108 cursor-pointer transition duration-1000' src={telegram} alt="Telegram" />
                            <img className='h-14 hover:scale-108 cursor-pointer transition duration-1000' src={xfooter} alt="X" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
