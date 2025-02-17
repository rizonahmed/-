import { useLanguage } from "./LanguageContext";

const Marque = () => {
          const { language, setLanguage, translations } = useLanguage();
  
    return (
      <div className='bg-[#FFBAC0] border-t-[4px] border-b-[4px] border-[#442612] py-5 overflow-hidden'>
        <div className='flex items-center gap-5 animate-marquee whitespace-nowrap'>
          {[...Array(1000)].map((_, index) => (
            <h1 key={index} className="text-[#3C2125] text-[42px] font-semibold flex items-center gap-5">
              {translations[language].marque}
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0542 1.61182C20.0371 1.05127 19.5738 0.607422 19.0132 0.607422C18.4524 0.607422 17.989 1.0514 17.972 1.61182C17.6477 12.2658 12.0901 17.8235 1.43603 18.1478C0.875492 18.1649 0.431641 18.6282 0.431641 19.1888C0.431641 19.7496 0.875615 20.213 1.43603 20.23C12.0901 20.5543 17.6477 26.1119 17.972 36.766C17.9891 37.3265 18.4524 37.7704 19.013 37.7704C19.5738 37.7704 20.0373 37.3264 20.0542 36.766C20.3785 26.1119 25.9361 20.5543 36.5902 20.23C37.1507 20.2129 37.5946 19.7496 37.5946 19.1889C37.5946 18.6282 37.1506 18.1647 36.5902 18.1478C25.9361 17.8235 20.3785 12.2658 20.0542 1.61182Z" fill="#3C2125" />
              </svg>
            </h1>
          ))}
        </div>
      </div>
    );
  };
  
  export default Marque;
  