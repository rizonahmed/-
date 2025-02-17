import { useRef, useState, useEffect, useMemo } from 'react';
import chart from './assets/chart.png';
import img from './assets/img.png';
import { useLanguage } from './LanguageContext';

const Chart = () => {
    const { language, translations } = useLanguage(); // ✅ Context থেকে Language & Translations আনলাম
    const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 });
    const canvasRef = useRef(null);
    const imageRef = useRef(null);

    // ✅ Chart Data Optimized with useMemo
    const chartData = useMemo(() => [
        { color: '#EA2A7B', text: translations[language]?.lione, additionalText: translations[language]?.lioneextra },
        { color: '#19E54C', text: translations[language]?.litwo, additionalText: translations[language]?.lioneextra },
        { color: '#ED8D18', text: translations[language]?.lithree, additionalText: translations[language]?.lioneextra },
        { color: '#EBC822', text: translations[language]?.lifour, additionalText: translations[language]?.lioneextra },
        { color: '#AEE02C', text: translations[language]?.lifive, additionalText: translations[language]?.lioneextra },
        { color: '#2580D1', text: translations[language]?.lisix, additionalText: translations[language]?.lioneextra }
    ], [language, translations]);

    const colorMap = {
        '#EA2A7B': { percentage: '20%', additionalText: 'Ликвидность' },
        '#19E54C': { percentage: '15%', additionalText: 'Награды' },
        '#ED8D18': { percentage: '10%', additionalText: 'Фонд помощи' },
        '#EBC822': { percentage: '25%', additionalText: 'Наша экосистема' },
        '#AEE02C': { percentage: '20%', additionalText: 'Маркетинг' },
        '#2580D1': { percentage: '10%', additionalText: 'Стабфонд' },
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = imageRef.current;

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
        };
    }, []);

    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.slice(1), 16);
        return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    };

    const colorTolerance = (rgb1, rgb2, tolerance = 30) => (
        Math.abs(rgb1[0] - rgb2[0]) <= tolerance &&
        Math.abs(rgb1[1] - rgb2[1]) <= tolerance &&
        Math.abs(rgb1[2] - rgb2[2]) <= tolerance
    );

    const handleMouseMove = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const pixelData = ctx.getImageData(x, y, 1, 1).data;
        const rgb = [pixelData[0], pixelData[1], pixelData[2]];

        for (const [hex, { percentage, additionalText }] of Object.entries(colorMap)) {
            if (colorTolerance(rgb, hexToRgb(hex))) {
                setTooltip({ show: true, text: `${percentage} - ${additionalText}`, x: e.pageX, y: e.pageY });
                return;
            }
        }

        setTooltip({ ...tooltip, show: false });
    };

    return (
        <div className="bg-[#FEFCE2] border-b-[4px] border-[#442612]">
            <div className='foter py-20'>
                <h2 className='text-3xl pb-6 md:pb-8 font-semibold md:text-[72px] md:font-normal text-[#50430D] text-center'>
                    {translations[language]?.charth} <br /> {translations[language]?.charth2}
                </h2>

                <div className='md:flex justify-center items-center lg:gap-16'>
                    <div className='relative px-10 md:px-2'>
                        <img ref={imageRef} src={chart} alt="Chart" className='hidden' />
                        <canvas ref={canvasRef} onMouseMove={handleMouseMove} className='mx-auto h-80 sm:h-auto cursor-pointer' />
                        <img className='absolute top-20 left-2/8 sm:top-1/3 sm:left-2/6 md:top-1/3 md:left-2/7 lg:top-3/8 lg:left-3/11' src={img} alt="Inner Image" />
                    </div>

                    <div>
                        <ul className='px-10 pt-10 space-y-2'>
                            {chartData.map((item, index) => (
                                <li key={index} className='flex gap-3 items-center text-xl lg:text-[28px]'>
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.5" y="1.5" width="30" height="30" rx="3.5" fill={item.color} stroke="black" strokeWidth="1.5" />
                                    </svg>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Tooltip with Backdrop Blur, Border, and Color */}
                {tooltip.show && (
                    <div
                        className="absolute px-4 py-2 bg-black hidden sm:block text-white text-sm rounded-md shadow-lg backdrop-blur-sm border-2 border-white"
                        style={{
                            top: tooltip.y + 10,
                            left: tooltip.x + 10,
                            transform: 'translate(-50%, 0)',
                            maxWidth: '200px',
                            zIndex: 9999,
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {tooltip.text}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chart;
