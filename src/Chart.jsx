import chart from './assets/chart.png';
import img from './assets/img.png'

const Chart = () => {
    return (
        <div className="bg-[#FEFCE2]  ">
            <div className='py-20 foter'>

                <h2 className='text-3xl pb-6 md:pb-8 font-semibold md:text-[72px] md:font-normal text-[#50430D] text-center'>
                Как распределяются  <br /> улыбки и добро
                </h2>

                <div className='md:flex justify-center items-center  lg:gap-16 '>
                    <div className='relative px-10 md:px-2 '>
                        <img
                        className='mx-auto'
                        src={chart} alt="" />
                        <img
                        className='    absolute top-16 left-2/9  sm:top-1/3 sm:left-1/4 md:top-1/3 md:left-1/5 lg:top-3/9  lg:left-2/8  custom-position-430-520 custom-position-520-600'
                        src={img} alt="" />

                    </div>

                    <div>
                        <ul className='px-10 pt-10 '>
                            <li className='flex gap-3 items-center text-xl lg:text-[28px] pb-2'><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.50847" y="1.38445" width="29.9432" height="29.9432" rx="3.43905" fill="#EA2A7B" stroke="black" stroke-width="1.58726" />
                            </svg>
                                Пул счастья (Ликвидность): 20%</li>

                            <li className='flex gap-3 items-center text-xl lg:text-[28px]  pb-2'> <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.50847" y="1.78044" width="29.9432" height="29.9432" rx="3.43905" fill="#19E54C" stroke="black" stroke-width="1.58726" />
                            </svg>
                                Пул улыбки (Награды): 15%</li>

                            <li className='flex gap-3 items-center text-xl lg:text-[28px]  pb-2'> <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.50847" y="1.17644" width="29.9432" height="29.9432" rx="3.43905" fill="#ED8D18" stroke="black" stroke-width="1.58726" />
                            </svg>
                                Пул доброты (Фонд помощи): 10%</li>
                            <li className='flex gap-3 items-center text-xl lg:text-[28px]  pb-2'><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.50847" y="1.57292" width="29.9432" height="29.9432" rx="3.43905" fill="#EBC822" stroke="black" stroke-width="1.58726" />
                            </svg>
                                Пул стиля (Наша экосистема): 25%</li>
                            <li className='flex gap-3 items-center text-xl lg:text-[28px]  pb-2'><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.50847" y="0.968921" width="29.9432" height="29.9432" rx="3.43905" fill="#AEE02C" stroke="black" stroke-width="1.58726" />
                            </svg>
                                Пул света (Маркетинг): 20%</li>
                            <li className='flex gap-3 items-center text-xl lg:text-[28px]  pb-2'><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.50847" y="1.36492" width="29.9432" height="29.9432" rx="3.43905" fill="#2580D1" stroke="black" stroke-width="1.58726" />
                            </svg>
                                Резерв лучей (Стабфонд): 10%</li>
                        </ul>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Chart;