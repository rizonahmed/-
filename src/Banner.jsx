import { useState } from 'react';
import banner from './assets/bimg.png';
import Nav from './Nav';
import { AiOutlineCopy } from 'react-icons/ai';

const Banner = () => {
    const [isCopied, setIsCopied] = useState(false);
    const walletAddress = '0x0bf9cc2ea2af3d2230d25389101bf3a12b8ea544';

    const handleCopy = () => {
        navigator.clipboard.writeText(walletAddress);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="min-h-screen  ">
            <Nav></Nav>
            <div className=" mx-auto  py-8 flex items-center justify-between">
                <div className="space-y-4 ml-10">
                    <h1 className="text-7xl font-bold text-purple-600">Монета</h1>
                    <h1 className="text-7xl font-bold text-purple-600">Василькоин</h1>
                    <p className="text-2xl text-gray-700">Этот мем-коин приносит добро, стиль и улыбки!</p>
                    <button className="bg-[#FBAC01] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">Вступить в коммьюнити</button>
                    <div className="mt-4 flex justify-between items-center space-x-2 border-2 bg-white text-gray-900 py-2  rounded-full">
                        <input
                            type="text"
                            value={walletAddress}
                            readOnly
                            className="px-4 py-2  rounded-lg w-96 cursor-default"
                        />
                        <button
                            onClick={handleCopy}
                            className="bg-[#FBAC01] border px-4 py-2 mx-2 flex items-center gap-1 font-semibold rounded-full text-black hover:bg-yellow-500 transition"
                        >
                           <AiOutlineCopy className="w-5 h-5" />   {isCopied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <img src={banner} alt="banner" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
