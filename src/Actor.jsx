import hero from './assets/hero.png'
import nayokbg from './assets/nayokbg.png'
import love from './assets/love.png'
import group from './assets/group.png'
import smile from './assets/smile.png'

const Actor = () => {
    return (
        <div className='bg '>
            <div className=' nayok-bg  '>
                <div className='lg:flex gap-20 pt-10 w-11/12 mx-auto'>
                    <div className='flex '>
                        <img src={hero} alt="" />
                    </div>

                    <div className='flex flex-col gap-6  '>
                        <h1 className='text-5xl text-center pt-10 xl:text-left xl:text-[72px] pl-2'>  Ценности <br /> Василькоина</h1>

                        <div className='relative'>
                            <img  src={nayokbg} alt="" className='w-full ' />

                            <h1 className='absolute inset-0 flex items-center justify-center text-xl  md:text-3xl lg:text-xl xl:text-3xl  px-8 gap-6'>
                                <img src={love} alt="" />
                                <p>
                                    <span className='font-bold'>Доброта:  </span> Василькоин делает мир добрее.

                                </p>
                            </h1>

                        </div>

                        <div className='relative'>
                            <img src={nayokbg} alt="" className='w-full' />
                            <h1 className='absolute inset-0 flex items-center justify-center  text-xl  md:text-3xl lg:text-xl xl:text-3xl   px-8 gap-6'>
                                <img src={group} alt="" />
                            <p>                                <span className='font-bold'>  Стиль:</span> Василькоин - искусство быть собой.
                            </p>
                            </h1>
                        </div>
                        <div className='relative mb-8 lg:mb-0'>
                            <img src={nayokbg} alt="" className='w-full' />
                            <h1 className='absolute inset-0 flex items-center justify-center  text-xl  md:text-3xl lg:text-xl xl:text-3xl  px-8 gap-6'>
                                <img src={smile} alt="" />
                                <p>
                                    <span className='font-bold'>Улыбки:</span> Это наша главная валюта.
                                </p>                                           </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actor;
