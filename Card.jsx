import love from './src/assets/love.png';
import group from './src/assets/group.png';
import smile from './src/assets/smile.png';

const Card = () => {
    const cardData = [
        {
            img: group,
            title: 'Монета приносит стиль',
            text: 'Вы могли бы быть обладателем самых модных аксессуаров, сияющих как ваша улыбка!',
        },
        {
            img: love,
            title: 'Распространяй добро',
            text: 'Ваши монеты могли бы превращаться в добрые дела, которые меняют мир.',
        },
        {
            img: smile,
            title: 'Улыбка имеет ценность',
            text: 'Ваша улыбка становится настоящим богатством, а Василькоин её усиливает!',
        }
    ];

    return (
        <div className="bg">
          <div className='foter   py-20'>
          <h2 className='text-3xl pb-6 md:pb-8 font-semibold md:text-[72px] md:font-normal text-[#50430D] text-center'>
                Как использовать <br /> Василькоин
            </h2>

            <div className="max-w-7xl pt-10  mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardData.map((card, index) => (
                    <div 
                        key={index} 
                        className="bg-[#FFF7D5] border border-black rounded-[24px] shadow-[4px_4px_0_0_#000] 
                        flex flex-col justify-center items-center gap-4 p-7 text-center"
                    >
                        <img src={card.img} alt="" className="w-24 h-24 object-contain" />
                        <h3 className="text-2xl font-bold">{card.title}</h3>
                        <p className="text-gray-700">{card.text}</p>
                    </div>
                ))}
            </div>

          </div>
        </div>
    );
};

export default Card;
