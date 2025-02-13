import logo from './assets/flogo.png';
import name from './assets/fname.png';
import btn from './assets/btn.png';
import telegram from './assets/telegram.png';
import xfooter from './assets/xfooter.png'

const Footer = () => {
    return (
        <div className="bg  w">
            <div className="foter py-24">
                <div className=' w-11/12 lg:w-9/12 mx-auto'>
                <div className='flex justify-center items-center gap-3'>
                    <img className='h-16 sm:h-full' src={logo} alt="" />
                    <img className='h-8 lg:h-16' src={name} alt="" />
                </div>
                <p className='text-center text-[26px] text-lg lg:w-1/2 mx-auto py-10 px-3'>Присоединяйтесь к движению Василькоина и помогите миру стать ярче, добрее и стильнее!</p>
                <img
                className='mx-auto px-8'
                src={btn} alt="" />

                <div className='md:flex justify-between items-center pt-16'>
                    <p className='text-base sm:text-xl  md:text-[26px] text-center md:text-left'> Copyright © 2025 $VASIL. All rights reserved</p>
                    <div className='flex items-center justify-center gap-2 mt-5'>
                        <img className='h-14' src={telegram} alt="" />
                        <img className='h-14' src={xfooter} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;