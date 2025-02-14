// import money from './assets/money.png';
// import money2 from './assets/money2.png';
// import rectangle from './assets/rect.png';
import coin from './assets/coin.png';
import single from './assets/single.png'

const Money = () => {
    return (
        <div className='bg-[#FEFCE2] '>
            <div className='money-bg py-20  relative'>
                
            <div className=' rect-bg py-20 px-8'>
                <h1 className="text-[72px] text-center">
                О Василькоине
                </h1>
                <p className="text-[28px] text-center">
                Это не просто мем-коин, а символ радости, доброты и стиля. Он создан, чтобы вдохновлять, объединять людей и делать мир ярче и счастливее.
                </p>
                
                <div className='flex justify-center'>
                    <div>
                    <img src={coin} alt="" />
                    </div>

                    <div className='flex gap-4 relative mt-28'>
                    <img className=' h-14' src={single} alt="" />
                    <img className='absolute -top-4 left-11' src={single} alt="" />
                    <img className='h-14' src={single} alt="" />
                    </div>

                    <div>
                    <img src={coin} alt="" />
                    </div>
                </div>
            </div>
                 
            </div>
        </div>
    );
};

export default Money;
