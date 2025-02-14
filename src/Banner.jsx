import { useState } from 'react';
import Nav from './Nav';
import { AiOutlineCopy } from 'react-icons/ai';

import banner from './assets/bimg.png';
import bannerimg from './assets/xbg.png'
import coins from './assets/Coins.png'
import napkin from './assets/napkin.png'
import show from './assets/show.png'

const Banner = () => {
    const [isCopied, setIsCopied] = useState(false);
    const walletAddress = '0x0bf9cc2ea2af3d2230d25389101bf3a12b8ea544';

    const handleCopy = () => {
        navigator.clipboard.writeText(walletAddress);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="relative min-h-screen">
            <Nav />
            <div className="mx-auto flex flex-col-reverse lg:flex-row items-center justify-between mt-10 lg:mt-0">
                <div className="space-y-4 text-center lg:text-left lg:ml-10">
                    <h1 className="text-5xl lg:text-7xl font-bold text-purple-600">Монета</h1>
                    <h1 className="text-5xl lg:text-7xl font-bold text-purple-600">Василькоин</h1>
                    <p className="text-xl lg:text-2xl text-gray-700">Этот мем-коин приносит добро, стиль и улыбки!</p>
                    <button className="bg-[#FBAC01] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
                        Вступить в коммьюнити
                    </button>
                    <div className="mt-4 flex flex-col lg:flex-row justify-center lg:justify-start items-center space-y-2 lg:space-y-0 lg:space-x-2 border-2 bg-white text-gray-900 py-2 rounded-full">
                        <input
                            type="text"
                            value={walletAddress}
                            readOnly
                            className="px-4 py-2 rounded-lg w-80 lg:w-96 cursor-default"
                        />
                        <button
                            onClick={handleCopy}
                            className="bg-[#FBAC01] border px-4 py-2 mx-2 flex items-center gap-1 font-semibold rounded-full text-black hover:bg-yellow-500 transition"
                        >
                            <AiOutlineCopy className="w-5 h-5" /> {isCopied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                </div>
                <div className="relative w-full lg:w-auto mb-10 lg:mb-0">
                    <img src={bannerimg} alt="banner" className="w-full h-auto lg:-mt-7" />
                </div>
            </div>
            <img className='absolute top-0 right-0' src={coins} alt="" />
            <img className='absolute h-64 lg:h-auto right-0 top-0 lg:top-0 lg:right-0' src={napkin} alt="" />
            <img className='absolute h-28 lg:h-auto top-32 right-1 lg:top-2/5 lg:right-7' src={show} alt="" />
            <img className='absolute top-10 right- lg:bottom-0 lg:right-0' src={banner} alt="" />
        </div>
    );
};

export default Banner;
