import eight from './src/assets/eight.png';
import nine from './src/assets/nine.png';
import twofour from './src/assets/twofour.png';
import threetwo from './src/assets/threetwo.png';
import btnrainbow from './src/assets/btnrainbow.png';
import rainbow from './src/assets/rainbow.png';
import rocket from './src/assets/rocket.png';
import smoke from './src/assets/smoke.png';

const Rainbow = () => {
    return (
    <div className=' bg-[#FFC0CB] '>
          <div className='foter md:pb-20'>
          <div className='relative  pb-20 '>
            <img
                className='absolute top-0 right-0   h-[550px] sm:h-[550px] md:h-[700px] md:w-full lg:h-[800px] xl:w-11/12 xl:h-[1100px] '
                src={rainbow} alt="Rainbow" />
            <div className="relative text-center pt-40">
                <h1 className='text-3xl md:text-[48px] lg:text-[55px] xl:text-[72px] xl:pt-16 xl:pb-8 font-semibold text-[#50430D]'>
                    До следующей стадии!
                </h1>
                <div className='flex justify-center pt-10 xl:pb-5 gap-4'>
                    <img className='w-[70px] md:w-[130px] lg:w-[140px] xl:w-auto' src={eight} alt="8" />
                    <img className='w-[70px] md:w-[130px] lg:w-[140px] xl:w-auto' src={nine} alt="9" />
                    <img className='w-[70px] md:w-[130px] lg:w-[140px] xl:w-auto' src={threetwo} alt="32" />
                    <img className='w-[70px] md:w-[130px] lg:w-[140px] xl:w-auto' src={twofour} alt="24" />
                </div>
              
                <p className='text-center text-lg md:text-xl  font-semibold w-2/3 2xl:w-1/2 mx-auto lg:text-[30px] xl:text-[42px] text-[#50430D] pt-6 xl:pb-6'>
                    Не пропустите возможность стать частью движения Василькоин!
                </p>
                <img className='mx-auto h-12 md:h-16 lg:h-20 xl:h-auto mt-8 hover:scale-102 transition-transform' src={btnrainbow} alt="Button" />
            </div>

            <div className='absolute bottom-16 md:top-32 xl:top-1/9 '>
                <img className='w-28 md:w-32 lg:w-40 xl:w-full' src={rocket} alt="" />
                <img className='-mt-16 w-28 md:w-32  lg:w-40 xl:w-full' src={smoke} alt="" />
            </div>
        </div>
      </div>
    </div>
    );
};

export default Rainbow;
