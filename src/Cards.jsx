import cloth from './assets/cloth.png';
import coinshow from './assets/coinshow.png';

const Cards = () => {
    return (
        <div className="bg-[#F9C4BD] relative overflow-hidden">
            <div className="foter py-24 relative">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl lg:text-[70px] text-[#41131A]">Партнеры, которые появятся для VasilCoin</h1>
                    <p className="text-lg md:text-[28px] text-[#222221] mt-4">
                        Ваше доверие к Василькоину вдохновляет на создание партнёрств, которые принесут добро, стиль и радость
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto px-4">
                    <div className="flex flex-col justify-center items-center gap-4 p-6 border border-black bg-[#FFF9FA] rounded-[24px] shadow-[4px_4px_0px_0px_#000] text-center">
                        <h3 className="text-[28px] font-bold leading-[130%]">Дом Радости</h3>
                        <p className="text-[22px] text-[#5A5C57] leading-[130%]">Модный дом, создающий искусство стиля.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4 p-6 border border-black bg-[#FFF9FA] rounded-[24px] shadow-[4px_4px_0px_0px_#000] text-center">
                        <h3 className="text-[28px] font-bold leading-[130%]">Шикарные шарфики</h3>
                        <p className="text-[22px] text-[#5A5C57] leading-[130%]">Бренд элегантных аксессуаров и фешенебельностей.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4 p-6 border border-black bg-[#FFF9FA] rounded-[24px] shadow-[4px_4px_0px_0px_#000] text-center">
                        <h3 className="text-[28px] font-bold leading-[130%]">Биржа счастья</h3>
                        <p className="text-[22px] text-[#5A5C57] leading-[130%]">Место для обмена добром и хорошим настроением.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4 p-6 border border-black bg-[#FFF9FA] rounded-[24px] shadow-[4px_4px_0px_0px_#000] text-center">
                        <h3 className="text-[28px] font-bold leading-[130%]">Сияющие сердца</h3>
                        <p className="text-[22px] text-[#5A5C57] leading-[130%]">Фонд помощи нуждающимся в доброте и улыбке.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4 p-6 border border-black bg-[#FFF9FA] rounded-[24px] shadow-[4px_4px_0px_0px_#000] text-center">
                        <h3 className="text-[28px] font-bold leading-[130%]">Фонд богачей</h3>
                        <p className="text-[22px] text-[#5A5C57] leading-[130%]">Вдохновляем богатых людей делать добые дела.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4 p-6 border border-black bg-[#FFF9FA] rounded-[24px] shadow-[4px_4px_0px_0px_#000] text-center">
                        <h3 className="text-[28px] font-bold leading-[130%]">Биржа шарфиков</h3>
                        <p className="text-[22px] text-[#5A5C57] leading-[130%]">Платформа для модных и сияющих покупок.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4 p-6 border border-black bg-[#FFF9FA] rounded-[24px] shadow-[4px_4px_0px_0px_#000] text-center">
                        <h3 className="text-[28px] font-bold leading-[130%]">Магазин щеночков</h3>
                        <p className="text-[22px] text-[#5A5C57] leading-[130%]">Место истинного счастья от объятий с питомцами.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4 p-6 border border-black bg-[#FFF9FA] rounded-[24px] shadow-[4px_4px_0px_0px_#000] text-center">
                        <h3 className="text-[28px] font-bold leading-[130%]">Сияющая студия</h3>
                        <p className="text-[22px] text-[#5A5C57] leading-[130%]">Предоставляет уникальные украшения для радости.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4 p-6 border border-black bg-[#FFF9FA] rounded-[24px] shadow-[4px_4px_0px_0px_#000] text-center">
                        <h3 className="text-[28px] font-bold leading-[130%]">Райский уголок</h3>
                        <p className="text-[22px] text-[#5A5C57] leading-[130%]">Курорт для тех, кто ценит стиль и комфорт.</p>
                    </div>
                </div>

                <img 
                    className='absolute top-0 left-2 w-[100px] md:w-[130px] md:left-0 lg:w-[150px] md:top-0   lg:top-36   xl:w-[200px] 2xl:top-16  2xl:left-24 2xl:w-auto'
                    src={cloth} 
                    alt="" 
                />
                <img 
                    className='absolute bottom- right-0 w-[100px] md:w-[250px] md:bottom-14 lg:w-[200px]  lg:top-36 lg:right-5 xl xl:w-[250px] 2xl:w-auto 2xl:right-26'
                    src={coinshow} 
                    alt="" 
                />
            </div>
        </div>
    );
};

export default Cards;
