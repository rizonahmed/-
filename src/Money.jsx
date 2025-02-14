import coin from './assets/coin.png';
import single from './assets/single.png';
import money from './assets/money.png';
import money2 from './assets/money2.png';


const Money = () => {
    return (
        <div className='bg-[#FEFCE2] relative'>
            <div className='py-20 money-bg relative px-5 lg:px-0'>
                <div className='rect-bg py-20 px-4 md:px-8 lg:px-12 text-center'>
                    <h1 className="text-[36px] md:text-[56px] lg:text-[72px] font-bold">
                        О Василькоине
                    </h1>
                    <p className="text-[18px] md:text-[24px] lg:text-[28px] text-center w-full md:w-3/4 lg:w-1/2 mx-auto">
                        Это не просто мем-коин, а символ радости, доброты и стиля. Он создан, чтобы вдохновлять, объединять людей и делать мир ярче и счастливее.
                    </p>
                    
                    <div className='flex justify-center items-center flex-wrap  gap-4'>
                        <img className='w-28 md:w-48 lg:w-52' src={coin} alt="" />
                        <div className='flex gap-4 relative mt-12'>
                            <img className='h-10 md:h-12 lg:h-14' src={single} alt="" />
                            <img className='absolute -top-2 md:-top-4 left-10 md:left-11 h-10 md:h-12 lg:h-14' src={single} alt="" />
                            <img className='h-10 md:h-12 lg:h-14' src={single} alt="" />
                        </div>
                        <img className='w-28 md:w-48 lg:w-52' src={coin} alt="" />
                    </div>
                </div>
    
            <img 
            className='absolute h-36 top-8 left-1 lg:h-auto lg:top-16 lg:left-0 xl:left-20 2xl:left-36'
            src={money} alt="" />
            <img 
            className='absolute h-36  bottom-8 right-0 lg:h-auto lg:bottom-16 lg:right-0 xl:right-20 2xl:right-36'
            src={money2} alt="" />

            </div>
        </div>
    );
};

export default Money;